package main

import (
	// "encoding/json"
    "os"
	"fmt"
	"io/ioutil"

	// "log"
	"math/rand"
	"time"
	// "github.com/aws/aws-sdk-go/aws"
	// "github.com/aws/aws-sdk-go/aws/session"
	// "github.com/aws/aws-sdk-go/service/dynamodb"
)

//genreate random ID
// func getRandomInt() {
// 	rand.Seed(time.Now().Unix())
// 	min := 1
// 	max := 61900
// 	no := rand.Intn(max-min) + min
// 	fmt.Println(rand.Intn(max-min) + min)
// 	return no
// }

type CatlogNodes struct {
	CatlogNodes []Catlog `json:"catlog_nodes"`
}

type Catlog struct {
	id                                     int    `json:id`
	dateRep                                string `json:"dateRep"`
	day                                    string `json:"day"`
	month                                  string `json:"month"`
	year                                   string `json:"year"`
	cases                                  int    `json:"cases"`
	deaths                                 int    `json:"deaths"`
	countriesAndTerritories                string `json:"countriesAndTerritories"`
	countryterritoryCode                   string `json:"countryterritoryCode"`
	popData2019                            int    `json:"popData2019"`
	continentExp                           string `json:"continentExp"`
	Cumulative_number_for_14_days_of_COVID string `json:"Cumulative_number_for_14_days_of_COVID"`
}

func ReadFile() {

	jsonFile, err := os.Open("output.json")
	
	if err != nil {
		fmt.Println(err)
	}

	// fmt.Println(file)
	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)

	fmt.Println("Successfully Opened users.json",byteValue,jsonFile)


	// 	for i := 0; i < len(data.CatlogNodes); i++ {
	// 		// fmt.Println("Product Id: ", data.CatlogNodes[i].Product_id)
	// 		// fmt.Println("Quantity: ", data.CatlogNodes[i].Quantity)

	// 		fmt.Println("the product", i)
	// 	}
}

// genrate random number
func randomDate() time.Time {
	min := time.Date(1970, 1, 0, 0, 0, 0, 0, time.UTC).Unix()
	max := time.Date(2070, 1, 0, 0, 0, 0, 0, time.UTC).Unix()
	delta := max - min

	sec := rand.Int63n(delta) + min
	fmt.Println(time.Unix(sec, 0))

	return time.Unix(sec, 0)
}
func main() {
	// getRandomInt()
	// randomDate()

	ReadFile()

	//create a connection
	// sess := session.Must(session.NewSessionWithOptions(session.Options{
	// 	SharedConfigState: session.SharedConfigEnable,
	// }))
						
	// // Create DynamoDB client
	// svc := dynamodb.New(sess)

	// -----------------------------------------------------update
	// Update item in table Movies
	// tableName := "covid-19-json-table"
	// dateRep := "dateRep"
	// RandomDate := randomDate((time.Date(1970, 1, 0, 0, 0, 0, 0, time.UTC).Local()), (time.Date(1970, 1, 0, 0, 0, 0, 0, time.UTC).Local()))
	// input := &dynamodb.UpdateItemInput{
	// 	ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
	// 		":attrValue": {
	// 			N: aws.String(RandomDate),
	// 		},
	// 	},
	// 	ExpressionAttributeNames: map[string]*dynamodb.AttributeValue{
	// 		"#attrName": {S: aws.String(dateRep)},
	// 	},
	// 	TableName: aws.String(tableName),
	// 	Key: map[string]*dynamodb.AttributeValue{
	// 		"id": {
	// 			N: getRandomInt(),
	// 		},
	// 	},

	// 	ReturnValues:     aws.String("UPDATED_NEW"),
	// 	UpdateExpression: aws.String("SET #attrName =:attrValue"),
	// }

	// _, err := svc.UpdateItem(input)
	// if err != nil {
	// 	log.Fatalf("Got error calling UpdateItem: %s", err)
	// }

	// fmt.Println("Successfully updated '")
}
