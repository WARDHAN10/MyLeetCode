package main

//working code can using in uploading the data input folder and merged folder

import (
	// ...
	"bytes"
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

func main() {
	s3Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}
	s3Session := session.New(s3Config)

	uploader := s3manager.NewUploader(s3Session)

	file := "{'Keyword':'hipaa compliance form','GetCount':0,'Engine':'google','Locale':'en-us','Mobile':false}"
	data := []byte(file)

	input := &s3manager.UploadInput{
		Bucket:      aws.String("covid-19-json"),       // bucket's name
		Key:         aws.String("myfiles/output.json"), // files destination location
		Body:        bytes.NewReader(data),             // content of the file
		ContentType: aws.String("application/json"),    // content type
	}
	output, err := uploader.UploadWithContext(context.Background(), input)
	if err != nil {
		panic(err)
	}
	fmt.Println((output))
}
