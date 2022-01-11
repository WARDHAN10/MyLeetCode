const parse = require('csv-parse/lib/sync');
const fs = require('fs');

function parseCsv( data, header ) {
   // remove spaces in front of data
   data = data.replace(/\s*,\s*/g, ",");
   //console.log(data)
   // add new line between header & data
   data = `${header}\n${data}`;

   return parse(data, {columns: true});
   //return parse(data)
}

const csv = fs.readFileSync('multiTimeline.csv')
const csv1 = csv.toString()
const header = "Month,Cupcake";


// #TEST
const ddbArray = parseCsv(csv1, header);
// for(let i=0;i<ddbArray.length;i++){
//     let d = new Date()
//     ddbArray[i].updated_time = d.getTime()
//     //console.log(ddbArray[i])
// }
//var obj = JSON.stringify(ddbArray,0,2)
//console.log(ddbArray)
// for(let i=0;i<ddbArray.length;i++){
//     console.log(ddbArray[i].Month)
// }


/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1',
  });

const parse = require('csv-parse/lib/sync');
const fs = require('fs');

function parseCsv( data, header ) {
   // remove spaces in front of data
   data = data.replace(/\s*,\s*/g, ",");
   //console.log(data)
   // add new line between header & data
   data = `${header}\n${data}`;

   return parse(data, {columns: true});
   //return parse(data)
}

const csv = fs.readFileSync('multiTimeline.csv')
const csv1 = csv.toString()
const header = "Month,Cupcake";


// #TEST
const ddbArray = parseCsv(csv1, header);
// for(let i=0;i<ddbArray.length;i++){
//     let d = new Date()
//     ddbArray[i].updated_time = d.getTime()
//     //console.log(ddbArray[i])
// }
//var obj = JSON.stringify(ddbArray,0,2)
//console.log(ddbArray)
// for(let i=0;i<ddbArray.length;i++){
//     console.log(ddbArray[i].Month)
// }


/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1',
  });

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

ddbArray.forEach(function(data) {
    let d = new Date().getTime()
    d = d.toString()
    let params = {
        TableName: "Data",
        Item: {
            "Month": data.Month,
            "Cupcake": data.Cupcake,
            "updated_time": d
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add data. Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded");
       }
    });
});
console.log("Importing movies into DynamoDB. Please wait.");

ddbArray.forEach(function(data) {
    let d = new Date().getTime()
    d = d.toString()
    let params = {
        TableName: "Data",
        Item: {
            "Month": data.Month,
            "Cupcake": data.Cupcake,
            "updated_time": d
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add data. Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded");
       }
    });
});