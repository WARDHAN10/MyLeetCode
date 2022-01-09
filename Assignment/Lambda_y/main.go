package main

import (
	"bytes"
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	"github.com/google/uuid"
)

func main() {
	//just need to handle the input data

	//make connection
	s3Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}
	s3Session := session.New(s3Config)

	uploader := s3manager.NewUploader(s3Session)
	//genrate new uuid
	uuidWithHyphen := uuid.New().String()
	dateRep := "2021-20-1"

	data := "this is test data"
	Bytedata := []byte(data)
	UploadFileName := "input/" + string(dateRep) + "/" + uuidWithHyphen + ".json"
	input := &s3manager.UploadInput{
		Bucket:      aws.String("covid-19-json"),    // bucket's name
		Key:         aws.String(UploadFileName),     // files destination location
		Body:        bytes.NewReader(Bytedata),      // content of the file
		ContentType: aws.String("application/json"), // content type
	}
	output, err := uploader.UploadWithContext(context.Background(), input)
	if err != nil {
		panic(err)
	}
	fmt.Println((output))

}

// func MakeConnection() dynamodbiface.DynamoDBAPI {

// 	return uploader
// }

// func saveFileS3(uploader dynamodbiface.DynamoDBAPI, dateRep string, data string, uuid string) {
// 	Bytedata := []byte(data)
// 	UploadFileName := "input" + "/" + dateRep + "/" + uuid + ".json"
// 	fmt.Println("FileName", UploadFileName)
// 	input := &s3manager.UploadInput{
// 		Bucket:      aws.String("covid-19-json"),       // bucket's name
// 		Key:         aws.String("myfiles/output.json"), // files destination location
// 		Body:        bytes.NewReader(Bytedata),         // content of the file
// 		ContentType: aws.String("application/json"),    // content type
// 	}
// 	output, err := uploader.UploadWithContext(context.Background(), input)
// 	if err != nil {
// 		panic(err)
// 	}
// 	fmt.Println((output))
// }
