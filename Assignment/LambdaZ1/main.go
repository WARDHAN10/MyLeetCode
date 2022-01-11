package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/redshiftdataapiservice"
	"github.com/aws/aws-sdk-go/service/redshiftdataapiservice/redshiftdataapiserviceiface"
	"github.com/gorilla/mux"
)

var redshiftclient redshiftdataapiserviceiface.RedshiftDataAPIServiceAPI

type Response struct {
	QueryResult string `json:"query"`
	Status      int    `json:"status"`
}
type Record struct {
	data []Field
}
type Field struct {
	_ struct{} `type:"structure"`

	// A value of the BLOB data type.
	// BlobValue is automatically base64 encoded/decoded by the SDK.
	BlobValue []byte `locationName:"blobValue" type:"blob"`

	// A value of the Boolean data type.
	BooleanValue *bool `locationName:"booleanValue" type:"boolean"`

	// A value of the double data type.
	DoubleValue *float64 `locationName:"doubleValue" type:"double"`

	// A value that indicates whether the data is NULL.
	IsNull *bool `locationName:"isNull" type:"boolean"`

	// A value of the long data type.
	LongValue *int64 `locationName:"longValue" type:"long"`

	// A value of the string data type.
	StringValue *string `locationName:"stringValue" type:"string"`
}

func homeLink(w http.ResponseWriter, r *http.Request) {
	s3Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGHRMZKDM3", "MOYSuuVieKmDf/NqV1RR+WfICKjL2PZjLua1uBl3", ""),
	}
	// Create session
	var sess = session.Must(session.NewSession(s3Config))
	// Initialize the redshift client
	redshiftclient = redshiftdataapiservice.New(sess)
	// responses := ordered_map.NewOrderedMap()
	command := "SELECT"
	query := "SELECT * FROM dev.public.newr"
	redshift_database := "dev"
	redshift_user := "harshwardhan"
	redshift_cluster_id := "redshift-cluster-1"

	isSynchronous := true

	responseData := execute_sql_data_api(redshift_database, command, query, redshift_user, redshift_cluster_id, isSynchronous)
	res := responseData[0][0]
	fmt.Println("response", res)
	// fmt.Fprintf(w, res)
}
func execute_sql_data_api(redshift_database string, command string, query string, redshift_user string, redshift_cluster_id string, isSynchronous bool) [][]*redshiftdataapiservice.Field {
	var max_wait_cycles = 20
	var attempts = 0
	var query_status = ""
	var FinalResult [][]*redshiftdataapiservice.Field
	done := false

	// Calling Redshift Data API with executeStatement()
	execstmt_req, execstmt_err := redshiftclient.ExecuteStatement(&redshiftdataapiservice.ExecuteStatementInput{
		ClusterIdentifier: aws.String(redshift_cluster_id),
		DbUser:            aws.String(redshift_user),
		Database:          aws.String(redshift_database),
		Sql:               aws.String(query),
	})
	fmt.Println(execstmt_req)
	if execstmt_err != nil {
		// logs error and exists
		log.Fatal(execstmt_err)
	}

	descstmt_req, descstmt_err := redshiftclient.DescribeStatement(&redshiftdataapiservice.DescribeStatementInput{
		Id: execstmt_req.Id,
	})
	query_status = aws.StringValue(descstmt_req.Status)

	if descstmt_err != nil {
		// logs error and exists
		log.Fatal(descstmt_err)
	}

	//Wait until query is finished or max cycles limit has been reached.
	for done == false && isSynchronous && attempts < max_wait_cycles {
		attempts += 1
		time.Sleep(1 * time.Second)
		descstmt_req, descstmt_err := redshiftclient.DescribeStatement(&redshiftdataapiservice.DescribeStatementInput{
			Id: execstmt_req.Id,
		})
		if descstmt_err != nil {
			// logs error and exists
			log.Fatal(descstmt_err)
		}
		fmt.Println(descstmt_req)
		query_status = aws.StringValue(descstmt_req.Status)

		if query_status == "FAILED" {
			// Fatal functions call os.Exit(1) after writing the log message
			log.Fatal("Query status: ", query_status, " .... for query--> ", query)
		} else if query_status == "FINISHED" {
			log.Print("Query status: ", query_status, " .... for query--> ", query)
			done = true

			if *descstmt_req.HasResultSet {
				getresult_req, getresult_err := redshiftclient.GetStatementResult(&redshiftdataapiservice.GetStatementResultInput{
					Id: execstmt_req.Id,
				})

				if getresult_err != nil {
					// logs error and exists
					log.Fatal(getresult_err)
				}
				FinalResult := getresult_req.Records
				output, err := json.Marshal(FinalResult[0])
				var data Record
				if err != nil {
					fmt.Println(output)
				}

				json.Unmarshal(output, &data)
				fmt.Println(output, , FinalResult, FinalResult[0][0].GoString())

				return FinalResult
			}
		} else {
			log.Print("Currently working... query status: ", query_status, " .... for query--> ", query)
		}

		if descstmt_err != nil {
			// logs error and exists
			log.Fatal(descstmt_err)
		}
	}

	//Timeout Precaution
	if done == false && attempts >= max_wait_cycles && isSynchronous {
		log.Print("Query status: ", query_status, " .... for query--> ", query)
		// Fatal functions call os.Exit(1) after writing the log message
		log.Fatal("Limit for max_wait_cycles has been reached before the query was able to finish. We have exited out of the while-loop. You may increase the limit accordingly.")
	}

	return FinalResult
}

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homeLink)
	log.Fatal(http.ListenAndServe(":8080", router))
}
