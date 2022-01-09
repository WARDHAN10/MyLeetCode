package main

import (
	"fmt"
	"strings"

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

	//svc := s3.New(session.New(),&aws.Config{Region: aws.String("us-east-1")})

	params := &session.ListObjectsInput{
		Bucket: aws.String("covid-19-json"), // Required
		//Delimiter:    aws.String("Delimiter"),
		//EncodingType: aws.String("EncodingType"),
		//Marker:       aws.String("Marker"),
		//MaxKeys:      aws.Int64(1),
		//Prefix:       aws.String("Prefix"),
	}
	resp, err := s3Session.ListObjects(params)

	if err != nil {
		// Print the error, cast err to awserr.Error to get the Code and
		// Message from an error.

		fmt.Printf("%s, %s \n", err.(awserr.Error).Code(), err.(awserr.Error).Error())
		return
	}

	// Pretty-print the response data.
	//fmt.Println(resp)
	for _, obj := range resp.Contents {
		if strings.HasPrefix(*obj.Key, "recommendations/output.txt/part-") {
			fmt.Println(*obj.Key)
		}
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
