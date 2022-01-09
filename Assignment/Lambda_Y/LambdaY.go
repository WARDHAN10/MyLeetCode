package main

import (
	"github.com/google/uuid"
)

func main() {
	//make connection
	// uploader := MakeConnection()
	//genrate new uuid
	uuidWithHyphen := uuid.New()

	//TODO: pass the dateRep and uuid
	// saveFileS3(uploader,)

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
