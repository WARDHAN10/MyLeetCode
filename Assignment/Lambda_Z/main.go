package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"reflect"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

type S3Event struct {
	Records []S3EventRecord `json:"Records"`
}

// S3EventRecord which wrap record data
type S3EventRecord struct {
	EventVersion      string              `json:"eventVersion"`
	EventSource       string              `json:"eventSource"`
	AWSRegion         string              `json:"awsRegion"`
	EventTime         time.Time           `json:"eventTime"`
	EventName         string              `json:"eventName"`
	PrincipalID       S3UserIdentity      `json:"userIdentity"`
	RequestParameters S3RequestParameters `json:"requestParameters"`
	ResponseElements  map[string]string   `json:"responseElements"`
	S3                S3Entity            `json:"s3"`
}
type S3UserIdentity struct {
	PrincipalID string `json:"principalId"`
}

type S3RequestParameters struct {
	SourceIPAddress string `json:"sourceIPAddress"`
}
type S3Entity struct {
	SchemaVersion   string   `json:"s3SchemaVersion"`
	ConfigurationID string   `json:"configurationId"`
	Bucket          S3Bucket `json:"bucket"`
	Object          S3Object `json:"object"`
}

type S3Bucket struct {
	Name          string         `json:"name"`
	OwnerIdentity S3UserIdentity `json:"ownerIdentity"`
	Arn           string         `json:"arn"` //nolint: stylecheck
}

type S3Object struct {
	Key           string `json:"key"`
	Size          int64  `json:"size,omitempty"`
	URLDecodedKey string `json:"urlDecodedKey"`
	VersionID     string `json:"versionId"`
	ETag          string `json:"eTag"`
	Sequencer     string `json:"sequencer"`
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

func main() {
	//just need to handle the input data
	lambda.Start(handleRequest)

}

func handleRequest(ctx context.Context, e events.S3Event) {
	fmt.Println("records", e, e.Records[0], "type:", reflect.TypeOf(e.Records[0]))
	var response S3Event
	s3Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}
	MergedFileName := "merged/2015-03-25-12-00-00-06-30/1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed.json"
	BucketName := "covid-19-json"
	ContentType := "application/json"
	s3Session := session.New(s3Config)
	svc := s3.New(s3Session)
	uploader := s3manager.NewUploader(s3Session)

	outputJSON, err := json.Marshal(e)
	if err != nil {
		fmt.Println(err)
	}
	json.Unmarshal(outputJSON, &response)

	// outputJSON, err := json.Marshal(e)
	uploadedfilename := response.Records[0].S3.Object.Key
	fmt.Println(string(uploadedfilename))

	//open the main file
	MainFileOutput := &s3.GetObjectInput{
		Bucket: aws.String(BucketName),
		Key:    aws.String(MergedFileName),
	}

	MergedResult, err := svc.GetObject(MainFileOutput)
	if err != nil {
		fmt.Println(err)
	}
	//convert the *s3ObjectInput into bytes to merge it
	BodyBytesMerged, err := ioutil.ReadAll(MergedResult.Body)

	// fmt.Println(bodyBytes)

	if err != nil {
		log.Print(err)
	}

	if err != nil {
		log.Print(err)
	}
	// uploadedfilename := "input/test3.json"
	// ---------------------------get the Just uploaded File content

	UploadedFileOutput := &s3.GetObjectInput{
		Bucket: aws.String(BucketName),
		Key:    aws.String(uploadedfilename),
	}

	UploadedResult, err := svc.GetObject(UploadedFileOutput)
	if err != nil {
		panic(err)
	}
	BodyBytesUploaded, err := ioutil.ReadAll(UploadedResult.Body)
	if err != nil {
		panic(err)
	}
	// merge the buffer
	FinalResult := append(BodyBytesMerged, BodyBytesUploaded...)
	// upload the merged file
	input := &s3manager.UploadInput{
		Bucket:      aws.String(BucketName),       // bucket's name
		Key:         aws.String(MergedFileName),   // files destination location
		Body:        bytes.NewReader(FinalResult), // content of the file
		ContentType: aws.String(ContentType),      // content type
	}
	output, err := uploader.UploadWithContext(context.Background(), input)
	if err != nil {
		panic(err)
	}
	fmt.Println((output))
}
