const axios = require("axios");
var fs = require("fs");
let count = 1;

let RandomData = [];
axios({
  method: "GET",
  url: `https://opendata.ecdc.europa.eu/covid19/casedistribution/json/`,
})
  .then((data) => {
    RandomData = data.data;
  })
  .then(() => {
    console.log(RandomData);
    RandomData['records'].forEach((data)=>{
        data['id'] = count
        count++
    })
    fs.writeFile("raw.json", JSON.stringify(RandomData), function (err) {
      if (err) throw err;
      console.log("complete");
    });
  });

