package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"reflect"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	"github.com/google/uuid"
)

type DynamoDBEvent struct {
	Records []DynamoDBEventRecord `json:"Records"`
}

type DynamoDBEventRecord struct {
	AWSRegion      string                       `json:"awsRegion"`
	Change         DynamoDBStreamRecord         `json:"dynamodb"`
	EventID        string                       `json:"eventID"`
	EventName      string                       `json:"eventName"`
	EventSource    string                       `json:"eventSource"`
	EventVersion   string                       `json:"eventVersion"`
	EventSourceArn string                       `json:"eventSourceARN"`
	UserIdentity   *events.DynamoDBUserIdentity `json:"userIdentity,omitempty"`
}

type DynamoDBStreamRecord struct {
	ApproximateCreationDateTime events.SecondsEpochTime             `json:"ApproximateCreationDateTime,omitempty"`
	Keys                        map[string]*dynamodb.AttributeValue `json:"Keys,omitempty"`
	NewImage                    map[string]*dynamodb.AttributeValue `json:"NewImage,omitempty"`
	OldImage                    map[string]*dynamodb.AttributeValue `json:"OldImage,omitempty"`
	SequenceNumber              string                              `json:"SequenceNumber"`
	SizeBytes                   int64                               `json:"SizeBytes"`
	StreamViewType              string                              `json:"StreamViewType"`
}

// type Record struct {
// 	Id                                     int    `json:"id"`
// 	DateRep                                string `json:"dateRep"`
// 	Day                                    string `json:"day"`
// 	Month                                  string `json:"month"`
// 	Year                                   string `json:"year"`
// 	Cases                                  int    `json:"cases"`
// 	Deaths                                 int    `json:"deaths"`
// 	CountriesAndTerritories                string `json:"countriesAndTerritories"`
// 	CountryterritoryCode                   string `json:"countryterritoryCode"`
// 	PopData2019                            int    `json:"popData2019"`
// 	ContinentExp                           string `json:"continentExp"`
// 	Cumulative_number_for_14_days_of_COVID string `json:"Cumulative_number_for_14_days_of_COVID"`
// }

func main() {
	//just need to handle the input data
	lambda.Start(handleRequest)

}

func handleRequest(ctx context.Context, e events.DynamoDBEvent) {
	fmt.Println("records", e.Records[0], "type:", reflect.TypeOf(e.Records[0]))
	var response DynamoDBEvent
	outputJSON, err := json.Marshal(e)
	if err != nil {
		fmt.Println(err)
	}
	json.Unmarshal(outputJSON, &response)

	// outputJSON, err := json.Marshal(e)
	DateRep := *response.Records[0].Change.NewImage["dateRep"].S
	fmt.Println(string(DateRep))
	// make connection
	s3Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}
	s3Session := session.New(s3Config)

	uploader := s3manager.NewUploader(s3Session)
	//genrate new uuid
	uuidWithHyphen := uuid.New().String()
	// dateRep := "2021-20-2"

	// data := "this is test data"
	// Bytedata := []byte(data)
	UploadFileName := "input/" + string(DateRep) + "/" + uuidWithHyphen + ".json"
	input := &s3manager.UploadInput{
		Bucket:      aws.String("covid-19-json"),    // bucket's name
		Key:         aws.String(UploadFileName),     // files destination location
		Body:        bytes.NewReader(outputJSON),    // content of the file
		ContentType: aws.String("application/json"), // content type
	}
	output, err := uploader.UploadWithContext(context.Background(), input)
	if err != nil {
		panic(err)
	}
	fmt.Println((output))

}
