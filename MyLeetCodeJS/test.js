const axios = require("axios");
const express = require("express");
const AWS = require("aws-sdk");
//should be written in env file
var region = "us-east-2";
var accessKeyId = "AKIAVBXZN6AGMQVMHMQ2";
var secretAccessKey = "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";
const app = express();
AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: region,
});
const docClient = new AWS.DynamoDB.DocumentClient();

// const data = {
//   records: [
//     {
//       id: 1,
//       dateRep: "14/12/2020",
//       day: "14",
//       month: "12",
//       year: "2020",
//       cases: "746",
//       deaths: "6",
//       countriesAndTerritories: "Afghanistan",
//       geoId: "AF",
//       countryterritoryCode: "AFG",
//       popData2019: "38041757",
//       continentExp: "Asia",
//       Cumulative_number: "9.01377925",
//     },
//     {
//       id: 2,

//       dateRep: "13/12/2020",
//       day: "13",
//       month: "12",
//       year: "2020",
//       cases: "298",
//       deaths: "9",
//       countriesAndTerritories: "Afghanistan",
//       geoId: "AF",
//       countryterritoryCode: "AFG",
//       popData2019: "38041757",
//       continentExp: "Asia",
//       Cumulative_number: "7.05277624",
//     },
//     {
//       id: 3,

//       dateRep: "12/12/2020",
//       day: "12",
//       month: "12",
//       year: "2020",
//       cases: "113",
//       deaths: "11",
//       countriesAndTerritories: "Afghanistan",
//       geoId: "AF",
//       countryterritoryCode: "AFG",
//       popData2019: "38041757",
//       continentExp: "Asia",
//       Cumulative_number: "6.86876792",
//     },
//   ],
// };

app.get("/rows/all", (req, res) => {
  console.log("API hitted");
  //     try//creating the schema for dynamoDB table
  //    {
  data["records"].forEach((data) => {
    let params = {
      TableName: "covid3",
      Item: {
        dateRep: data.dateRep,
        day: data.day,
        month: data.month,
        year: data.year,
        cases: data.cases,
        deaths: data.deaths,
        countriesAndTerritories: data.deaths,
        geoId: data.geoId,
        countryterritoryCode: data.countryterritoryCode,
        popData2019: data.popData2019,
        continentExp: data.continentExp,
        Cumulative_number: data.Cumulative_number,
      },
    };
    docClient.put(params, function (err, data) {
      if (err) {
        console.error(
          "Unable to add data. Error JSON:",
          JSON.stringify(err, null, 2)
        );
      } else {
        console.log("succesfully uploaded");
      }
    });
  });
});

app.listen(3000, () => {
  console.log("port is working on 3000");
});
