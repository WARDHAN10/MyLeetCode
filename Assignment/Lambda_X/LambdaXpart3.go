// var AWS = require('aws-sdk');
// // AWS.config.update({region: 'REGION'});

// AWS.config.update({ accessKeyId: 'AKIAVBXZN6AGMQVMHMQ2', secretAccessKey: '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', region: 'us-east-2' });
// var s3 = new AWS.S3();
package main

import (
	"fmt"
	"log"
	"math/rand"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"

	// "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
	// "github.com/aws/aws-sdk-go/aws"

	"github.com/aws/aws-sdk-go/service/dynamodb"
	// "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
)

type Records struct {
	Records []record `json:"records"`
}

type record struct {
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

// make connection
func MakeConnection() dynamodbiface.DynamoDBAPI {
	s3Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}
	s3Session := session.New(s3Config)

	if err != nil {
		fmt.Println("error", err)
	}
	svc := dynamodb.New(s3Session)
	return svc
}

//update row

func UpdateTable(svc dynamodbiface.DynamoDBAPI, table, id, dateRep *string) {
	// record := record{}

	input := &dynamodb.UpdateItemInput{
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":r": {
				N: dateRep,
			},
		},
		TableName: table,
		Key: map[string]*dynamodb.AttributeValue{
			"id": {
				N: id,
			},
		},
		ReturnValues:     aws.String("UPDATED_NEW"),
		UpdateExpression: aws.String("set dateRep = :r"),
	}
	_, err := svc.UpdateItem(input)

	if err != nil {
		log.Fatalf("Got error calling updateItem: %s", err)

		if err != nil {
			panic(fmt.Sprintf("Failed to unmarshal Record, %v", err))
		}

	}
	fmt.Printf("updated Records are with id : %v\n  updated dateRep : %v\n", id, dateRep)
}

//genreate random date return string value

func getRandomDate() string {
	min := time.Date(1970, 1, 0, 0, 0, 0, 0, time.UTC).Unix()
	max := time.Date(2070, 1, 0, 0, 0, 0, 0, time.UTC).Unix()
	delta := max - min

	sec := rand.Int63n(delta) + min
	date := time.Unix(sec, 0)
	// res1 := strings.Split(date.String(), " ")
	res := date.Format("2006-01-02")
	return res
}

//genreate random date return int value
func getRandomInt() int {
	rand.Seed(time.Now().Unix())
	min := 1
	max := 61900
	no := rand.Intn(max-min) + min
	return no
}
func main() {
	TABLE_NAME := "covid-19-json"
	// //logic to genrate uuid
	// uuidWithHyphen := uuid.New()
	// fmt.Println(uuidWithHyphen)
	svc := MakeConnection()
	// fmt.Println(getRandomDate())
	UpdateTable(svc, TABLE_NAME, getRandomInt(), getRandomDate())
}
