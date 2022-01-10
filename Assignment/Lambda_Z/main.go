package main

import (
	"bytes"
	"context"
	"fmt"
	"io/ioutil"
	"log"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

func main() {
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

	//open the main file
	MainFileOutput := &s3.GetObjectInput{
		Bucket: aws.String(BucketName),
		Key:    aws.String(MergedFileName),
	}

	MergedResult, err := svc.GetObject(MainFileOutput)
	//convert the *s3ObjectInput into bytes to merge it
	BodyBytesMerged, err := ioutil.ReadAll(MergedResult.Body)

	// fmt.Println(bodyBytes)

	if err != nil {
		log.Print(err)
	}

	if err != nil {
		log.Print(err)
	}
	uploadedfilename := "input/test3.json"
	// ---------------------------get the Just uploaded File content

	UploadedFileOutput := &s3.GetObjectInput{
		Bucket: aws.String(BucketName),
		Key:    aws.String(uploadedfilename),
	}

	UploadedResult, err := svc.GetObject(UploadedFileOutput)
	BodyBytesUploaded, err := ioutil.ReadAll(UploadedResult.Body)

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
