package main

// part1 call the api and making json out of it to make it upload it to s3
import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Response struct {
	id                                     int    `json:id`
	dateRep                                string `json:"dateRep"`
	day                                    string `json:"day"`
	month                                  string `json:"month"`
	year                                   string `json:"year"`
	cases                                  int    `json:"cases"`
	deaths                                 int    `json:"deaths"`
	countriesAndTerritories                string `json:"countriesAndTerritories"`
	countryterritoryCode                   string `json:"countryterritoryCode"`
	popData2019                            int    `json:"popData2019"`
	continentExp                           string `json:"continentExp"`
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
	var responseObject Response
	json.Unmarshal(bodyBytes, &responseObject)
	fmt.Printf("API Response as struct %+v\n", responseObject)
}
