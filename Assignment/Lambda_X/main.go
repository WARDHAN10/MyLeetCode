package main

import (
	"fmt"
	"log"
	"math/rand"
	"strconv"
	"time"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

func getRandomDate() string {
	rand.Seed(time.Now().UnixNano())
	min := 2004
	max := 2021

	year := rand.Intn(max-min+1) + 2004
	month := rand.Intn(12) + 1
	day := 1

	str := fmt.Sprintf("%d-%02d-%d", year, month, day)
	return str
}

//genreate random date return int value
func getRandomInt() int {
	rand.Seed(time.Now().UnixNano())
	min := 1
	max := 100
	no := rand.Intn(max-min) + min
	return no
}

func main() {
	lambda.Start(handleRequest)

}

func handleRequest() {
	DynamoDB_Config := &aws.Config{
		Region:      aws.String("us-east-2"),
		Credentials: credentials.NewStaticCredentials("AKIAVBXZN6AGMQVMHMQ2", "J4q0yzSVwNMAsrayKiYZUTmUydYS8ua4miAiG30J", ""),
	}
	DynamoDbSession := session.New(DynamoDB_Config)
	DB := dynamodb.New(DynamoDbSession)
	table := "covid-19-2"
	//need to run till 100
	for i := 0; i < 100; i++ {

		dateRep := getRandomDate()
		// id := getRandomInt()
		id1 := strconv.Itoa(getRandomInt())

		input := &dynamodb.UpdateItemInput{
			ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
				":r": {
					S: aws.String(dateRep),
				},
			},
			TableName: aws.String(table),
			Key: map[string]*dynamodb.AttributeValue{
				"id": {
					N: aws.String(id1),
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
		fmt.Printf("updated Records are with id : %v\n  updated dateRep : %v\n", id1, dateRep)
	}
}
