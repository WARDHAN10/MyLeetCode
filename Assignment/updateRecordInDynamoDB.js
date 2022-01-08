var aws = require('aws-sdk');
var db = new aws.DynamoDB({
  region: 'us-east-2',
  maxRetries: 1
});
var docClient = new aws.DynamoDB.DocumentClient();

exports.handler = event => {
  queryMyThings().then((data) => {
    console.log(data)
  })

}

function getRandomInt() {
  return String(Math.floor(Math.random() * 61899) + 1);
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('en-US');
}

const queryMyThings = async (event) => {
  for (let i = 0; i < 3; i++) {

    //   var getParams = {
    //     Key: {
    //       "id": {
    //         N: getRandomInt()
    //       }
    //     },
    //     TableName: "covid-19-json-table"
    //   };
    // await db.getItem(getParams).promise().then((data) => {
    //   console.log(data)
    //     console.log(data['dateRep'])
    //   });


    var putParams = {
      Key: {
        // "id":getRandomInt() 
        "id":{
          N: getRandomInt()
        }
      },
      TableName: "covid-19-json-table",
      "UpdateExpression" : "SET #attrName =:attrValue",
      "ExpressionAttributeNames" : {
        "#attrName" : "dateRep"
      },
     "ExpressionAttributeValues" : {
        ":attrValue" : {
            "S" : randomDate(new Date(2021,2,2),new Date())
        }
    }
    };
    console.log(putParams)
    await db.updateItem(putParams).promise().then((data) => {
      console.log('update successfull')
    });


  }

}
