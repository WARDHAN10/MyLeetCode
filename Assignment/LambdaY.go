// var AWS = require('aws-sdk');
// // AWS.config.update({region: 'REGION'});

// AWS.config.update({ accessKeyId: 'AKIAVBXZN6AGMQVMHMQ2', secretAccessKey: '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', region: 'us-east-2' });
// var s3 = new AWS.S3();
package main

import (
	"fmt"

	"github.com/google/uuid"
)

func main() {
	//logic to genrate uuid
	uuidWithHyphen := uuid.New()
	fmt.Println(uuidWithHyphen)

}

// exports.handler = async (event) => {

//   // const testObj = await event['Records'][0]['dynamodb']
//   // console.log(testObj)
//   const testObj =	{
//   ApproximateCreationDateTime: 1641497007,
//   Keys: { id: { N: '8832' } },
//   NewImage: {
//     popData2019: { N: '433296' },
//     cases: { N: '0' },
//     countryterritoryCode: { S: 'BRN' },
//     month: { S: '05' },
//     year: { S: '2020' },
//     geoId: { S: 'BN' },
//     dateRep: { S: '7/28/2021' },
//     continentExp: { S: 'Asia' },
//     id: { N: '8832' },
//     countriesAndTerritories: { N: '0' },
//     day: { S: '01' },
//     deaths: { N: '0' }
//   },
//   SequenceNumber: '16899200000000012027260040',
//   SizeBytes: 144,
//   StreamViewType: 'NEW_IMAGE'
// }
// console.log("dataREP",testObj['NewImage']['dateRep']['S'])
//     // TODO implement
//   // console.log(event['Records'][0]['dynamodb']['NewImage'])
//   const fileNameObject = testObj['NewImage']['dateRep']['S'].split('/')
//   const fileName = fileNameObject[0] + '-' + fileNameObject[1] + '-' + fileNameObject[2]
//   console.log(fileName)
//    await saveFunction(testObj['NewImage'],fileName)
// }

// function uuid() {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }
// async function saveFunction(data,name){
//   console.log("data",data,name)

//   var s3bucket = new AWS.S3({params: {Bucket: 'covid-19-json'}});
//   const dataRep = data['dataRep']
//   const UUID = uuid()
//   //make name from the dataRep Object
//   var params = {
//       // Key: `input/${name}/${UUID}.json`,
//       Key:'input/test.json',
//       Body: Buffer.from(JSON.stringify(data)),
//       Bucket:'covid-19-json'
//     };

// }
