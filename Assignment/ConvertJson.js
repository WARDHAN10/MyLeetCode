var fs = require("fs");

fs.readFile("raw.json", 'utf8' ,function (err, data) {
  if (err) {
    throw err;
  }
  let obj = JSON.parse(data);
  RandomData =obj;
  console.log(obj)
  obj["records"].forEach((data) => {
    (data.dateRep = { S: data.dateRep }),
      (data.day = { S: data.day }),
      (data.month = { S: data.month }),
      (data.year = { S: data.dateRep }),
      (data.cases = { N: data.dateRep }),
      (data.deaths = { S: data.dateRep }),
      (data.deaths = { N: data.dateRep }),
      (data.geoId = { S: data.dateRep }),
      (data.countryterritoryCode = { S: data.dateRep }),
      (data.popData2019 = { N: data.dateRep }),
      (data.continentExp = { S: data.dateRep }),
      (data['Cumulative_number_for_14_days_of_COVID-19_cases_per_100000'] = { S: data['Cumulative_number_for_14_days_of_COVID-19_cases_per_100000'] }),
      (data.id = { N: data.id });
  });
  console.log(obj)
  fs.writeFile("formatted.txt", JSON.stringify(obj), function (err) {
    if (err) throw err;
    console.log("complete");
  });
  
});


