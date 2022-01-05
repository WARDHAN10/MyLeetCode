const axios = require('axios');
const express = require('express')
const AWS = require('aws-sdk');
var region = "us-east-2";
var accessKeyId = "AKIAVBXZN6AGMQVMHMQ2";
var secretAccessKey = "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";
const tableName = 'covid3';
const app = express()

var dynamoDB = new AWS.DynamoDB({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
});

// Make a request for a user with a given ID
const data = {
    "records": [{
            "dateRep": "14/12/2020",
            "day": "14",
            "month": "12",
            "year": "2020",
            "cases": "746",
            "deaths": "6",
            "countriesAndTerritories": "Afghanistan",
            "geoId": "AF",
            "countryterritoryCode": "AFG",
            "popData2019": "38041757",
            "continentExp": "Asia",
            "Cumulative_number": "9.01377925"
        },
        {
            "dateRep": "13/12/2020",
            "day": "13",
            "month": "12",
            "year": "2020",
            "cases": '298',
            "deaths": "9",
            "countriesAndTerritories": "Afghanistan",
            "geoId": "AF",
            "countryterritoryCode": "AFG",
            "popData2019": "38041757",
            "continentExp": "Asia",
            "Cumulative_number": "7.05277624"
        },
        {
            "dateRep": "12/12/2020",
            "day": "12",
            "month": "12",
            "year": "2020",
            "cases": "113",
            "deaths": "11",
            "countriesAndTerritories": "Afghanistan",
            "geoId": "AF",
            "countryterritoryCode": "AFG",
            "popData2019": "38041757",
            "continentExp": "Asia",
            "Cumulative_number": "6.86876792"
        },
    ]
}

app.get("/rows/all", (req, res) => {

    //creating the schema for dynamoDB table
    const Schema = {}
    let DynamoDbObject = []
    for (let i = 0; i < data['records'].length; i++) {
        Schema['dataRep'] = {
            S: data['records'][i].dateRep
        }

        Schema['day'] = {
            S: data['records'][i].day
        }

        Schema['month'] = {
            S: data['records'][i].month
        }

        Schema['year'] = {
            S: data['records'][i].year
        }

        Schema['cases'] = {
            S: data['records'][i].cases
        }

        Schema['deaths'] = {
            S: data['records'][i].deaths
        }

        Schema['countriesAndTerritories'] = {
            S: data['records'][i].countriesAndTerritories
        }

        Schema['geoId'] = {
            S: data['records'][i].geoId
        }
        Schema['popData2019'] = {
            S: data['records'][i].popData2019
        }

        Schema['continentExp'] = {
            S: data['records'][i].continentExp
        }

        Schema['Cumulative_number'] = {
            S: data['records'][i].Cumulative_number
        }

        DynamoDbObject.push(Schema)
    }
    console.log(DynamoDbObject)
    for (let i = 0; i < DynamoDbObject.length; i++) {
        console.log("object", DynamoDbObject[i])
        var params = {
            TableName: tableName,
            Item: DynamoDbObject[i]
        };
        dynamoDB.putItem(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
            } else {
                console.log(data);
            }
        });

    }


});



app.listen(3000, () => {
    console.log('port is working on 3000')


    // axios({
    //     method: "GET",
    //     url: `https://opendata.ecdc.europa.eu/covid19/casedistribution/json/`,
    // }).then((data) => {















    // }).catch((err) => {
    //     console.log(err)
    // })
})