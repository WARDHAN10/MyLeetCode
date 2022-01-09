package main

import (
	"fmt"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
)

func main() {
	s3Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}

	s3Session := session.New(s3Config)

	// uploader := s3manager.NewUploader(s3Session)
	params := &session.ListObjectsInput{
		Bucket: aws.String("covid-19-json"),
		Prefix: aws.String("input/"),
	}
	resp, _ := s3Session.ListObjects(params)
	for _, key := range resp.Contents {
		fmt.Println(*key.Key)
	}

}

// func MakeConnection() dynamodbiface.DynamoDBAPI {
// 	s3Config := &aws.Config{
// 		Region:      aws.String("us-east-2"),
// 		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
// 	}
// 	s3Session := session.New(s3Config)

// 	uploader := s3manager.NewUploader(s3Session)
// 	return uploader
// }

// func getContent(fileName string) byte {
// 	return
// }

// func Merge(svc dynamodbiface.DynamoDBAPI) {
// 	params := &svc.ListObjectsInput{
// 		Bucket: aws.String("covid-19-json"),
// 		Prefix: aws.String("input/"),
// 	}
// 	resp, _ := svc.ListObjects(params)
// 	for _, key := range resp.Contents {
// 		fmt.Println(*key.Key)
// 	}
// }
