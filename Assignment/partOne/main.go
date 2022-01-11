package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"reflect"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

//making struct
type Records struct {
	Records []Record `json:"records"`
}

type Record struct {
	Id                                     int    `json:"id"`
	DateRep                                string `json:"dateRep"`
	Day                                    string `json:"day"`
	Month                                  string `json:"month"`
	Year                                   string `json:"year"`
	Cases                                  int    `json:"cases"`
	Deaths                                 int    `json:"deaths"`
	GeoId								   string `json:"geoid"`
	CountriesAndTerritories                string `json:"countriesAndTerritories"`
	CountryterritoryCode                   string `json:"countryterritoryCode"`
	PopData2019                            int    `json:"popData2019"`
	ContinentExp                           string `json:"continentExp"`
	Cumulative_number_for_14_days_of_COVID string `json:"Cumulative_number_for_14_days_of_COVID"`
}

func ReadFile() {
	//importin the data from json
	data, err := ioutil.ReadFile("./input.json")
	if err != nil {
		fmt.Println(err)
	}
	var obj Records
	//convert the data into the struct
	err = json.Unmarshal(data, &obj)
	if err != nil {
		fmt.Println("error:", err)
	}

	fmt.Println(reflect.TypeOf(obj))
	//connect the database
	DynamoDB_Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}
	DynamoDbSession := session.New(DynamoDB_Config)
	DB := dynamodb.New(DynamoDbSession)
	//connect adding the data into table
	for _, element := range obj.Records {

		fmt.Println(element)

		//convert go attribute into dynamodb
		av, err := dynamodbattribute.MarshalMap(element)
		if err != nil {
			fmt.Println("error:", err)
		}

		//insert attribute in the table
		input := &dynamodb.PutItemInput{
			Item:      av,
			TableName: aws.String("covid-19-2"),
		}

		_, err = DB.PutItem(input)
		if err != nil {
			fmt.Println("Got error calling PutItem: ", err)
		}

	}
}

func main() {
	ReadFile()
}
