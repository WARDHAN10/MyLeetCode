package main

import (
	"fmt"
	"log"
	"math/rand"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

func getRandomDate() string {
	min := time.Date(1970, 1, 0, 0, 0, 0, 0, time.UTC).Unix()
	max := time.Date(2070, 1, 0, 0, 0, 0, 0, time.UTC).Unix()
	delta := max - min

	sec := rand.Int63n(delta) + min
	date := time.Unix(sec, 0)
	// res1 := strings.Split(date.String(), " ")
	res := date.Format("2006/01/02")
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
	DynamoDB_Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}
	DynamoDbSession := session.New(DynamoDB_Config)
	DB := dynamodb.New(DynamoDbSession)
	table := "covid-19-2"
	dateRep := getRandomDate()
	id := getRandomInt()

	input := &dynamodb.UpdateItemInput{
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":r": {
				S: aws.String(dateRep),
			},
		},
		TableName: aws.String(table),
		Key: map[string]*dynamodb.AttributeValue{
			"id": {
				N: aws.String("1"),
			},
		},
		ReturnValues:     aws.String("UPDATED_NEW"),
		UpdateExpression: aws.String("set dateRep = :r"),
	}
	_, err := DB.UpdateItem(input)

	if err != nil {
		log.Fatalf("Got error calling updateItem: %s", err)

		if err != nil {
			panic(fmt.Sprintf("Failed to unmarshal Record, %v", err))
		}

	}
	fmt.Printf("updated Records are with id : %v\n  updated dateRep : %v\n", id, dateRep)
}
