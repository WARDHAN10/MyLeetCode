package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/redshiftdataapiservice"
	"github.com/aws/aws-sdk-go/service/redshiftdataapiservice/redshiftdataapiserviceiface"
)

var redshiftclient redshiftdataapiserviceiface.RedshiftDataAPIServiceAPI

// type Records struct {
// 	Records []Record `json:"records"`
// }

type Record struct {
	Id                                     int64  `json:"id"`
	DateRep                                string `json:"dateRep"`
	Day                                    string `json:"day"`
	Month                                  string `json:"month"`
	Year                                   string `json:"year"`
	Cases                                  int64  `json:"cases"`
	Deaths                                 int64  `json:"deaths"`
	GeoId                                  string `json:"geoid"`
	CountriesAndTerritories                string `json:"countriesAndTerritories"`
	CountryterritoryCode                   string `json:"countryterritoryCode"`
	PopData2019                            int64  `json:"popData2019"`
	ContinentExp                           string `json:"continentExp"`
	Cumulative_number_for_14_days_of_COVID string `json:"Cumulative_number_for_14_days_of_COVID"`
}

func handleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
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
	var data1 []interface{}

	for i := 0; i < len(responseData); i++ {
		var data Record
		data.Id = *responseData[i][0].LongValue
		data.DateRep = *responseData[i][1].StringValue
		data.Day = *responseData[i][2].StringValue
		data.Month = *responseData[i][3].StringValue
		data.Year = *responseData[i][4].StringValue
		data.Cases = *responseData[i][5].LongValue
		data.Deaths = *responseData[i][6].LongValue
		data.GeoId = *responseData[i][7].StringValue
		data.CountriesAndTerritories = *responseData[i][8].StringValue
		data.CountryterritoryCode = *responseData[i][9].StringValue
		data.PopData2019 = *responseData[i][10].LongValue
		data.ContinentExp = *responseData[i][11].StringValue
		data.Cumulative_number_for_14_days_of_COVID = *responseData[i][12].StringValue
		data1 = append(data1, data)
		fmt.Println("data", data)
	}
	// res := responseData[0][0]
	// fmt.Println("res", res)
	output, err := json.Marshal(data1)
	if err != nil {
		// logs error and exists
		log.Fatal(err)
	}

	fmt.Println("response", string(output))
	return events.APIGatewayProxyResponse{Body: string(output), StatusCode: 200}, nil

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
				fmt.Println(getresult_req.Records)
				FinalResult := getresult_req.Records

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
	lambda.Start(handleRequest)

}
