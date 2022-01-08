package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println(time.Date(1970, 1, 0, 0, 0, 0, 0, time.UTC).Local())
}

// var AWS = require('aws-sdk');
// AWS.config.update({ accessKeyId: 'AKIAVBXZN6AGMQVMHMQ2', secretAccessKey: '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', region: 'us-east-2' });
// var s3 = new AWS.S3();

// exports.handler = async (event, ctx, cb) => {
//  let AllContent = ""
//  // Create the parameters for calling listObjects
//  var params = {
//   Bucket: 'covid-19-json',
//   Delimiter: '/',
//  }
//  try {

//   let response = await s3.listObjectsV2({ Bucket: 'covid-19-json' }).promise()
//   console.log(response)
//   response = JSON.parse(JSON.stringify((response)))
//   for (let i of response['Contents']) {
//     const fileName = i['Key'].split('/')
//     console.log("filename",fileName,i['Key'])
//     if (fileName[0] == 'input' && fileName[1] != '') {
//     //now you are in the input folder
//     console.log("inside", fileName, i['Key'])
//     const params = {
//      Bucket: 'covid-19-json',
//      Key: i['Key'],
//     };
//     const data = await s3.getObject(params).promise()
//     console.log(data.Body.toString('utf-8'))
//     AllContent+=data.Body.toString('utf-8')
//  //add logic to add the file into s3 bucket
//    }

//    console.log('this is all the data',AllContent)
//   }
//  }
//  catch (err) {
//   console.log(err)
//  }

// };
