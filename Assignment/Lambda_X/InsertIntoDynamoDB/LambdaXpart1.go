package main

// part 1 call the api and making json out of it and saving in the local
// part 2 make the JSON ready to upload to s3 and upload to s3
// part 3 read rows from s3 and update the data in s3

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Records struct {
	Records []record `json:"records"`
}

type record struct {
	Id                                     int    `json:"id"`
	DateRep                                string `json:"dateRep"`
	Day                                    string `json:"day"`
	Month                                  string `json:"month"`
	Year                                   string `json:"year"`
	Cases                                  int    `json:"cases"`
	Deaths                                 int    `json:"deaths"`
	CountriesAndTerritories                string `json:"countriesAndTerritories"`
	CountryterritoryCode                   string `json:"countryterritoryCode"`
	PopData2019                            int    `json:"popData2019"`
	ContinentExp                           string `json:"continentExp"`
	Cumulative_number_for_14_days_of_COVID string `json:"Cumulative_number_for_14_days_of_COVID"`
}

func main() {
	fmt.Println("Calling API...")
	client := &http.Client{}
	req, err := http.NewRequest("GET", "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/", nil)
	if err != nil {
		fmt.Print(err.Error())
	}
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/json")
	resp, err := client.Do(req)
	if err != nil {
		fmt.Print(err.Error())
	}
	defer resp.Body.Close()
	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Print(err.Error())
	}
	var responseObject Records
	json.Unmarshal(bodyBytes, &responseObject)
	fmt.Printf("API Response as struct %+v\n", responseObject)

	// // writing the content in the file
	// f, err := os.Create("filename")

	// if err != nil {
	// 	log.Fatal(err)
	// }

	// defer f.Close()

	// _, err2 := f.WriteString("enter your data")

	// if err2 != nil {
	// 	log.Fatal(err2)
	// }

	// fmt.Println("done")
}
