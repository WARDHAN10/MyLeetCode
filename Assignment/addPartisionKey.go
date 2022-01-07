package main
import (
	"fmt"
"encoding/json"
 "io/ioutil"
//  "net/http"
)
// client := &http.Client{}
// req, err := http.NewRequest("GET", "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/", nil)
// if err != nil {
// 	fmt.Print(err.Error())
//    }


//  req.Header.Add("Accept", "application/json")
//  req.Header.Add("Content-Type", "application/json")
//  resp, err := client.Do(req)


//  if err != nil {
// 	fmt.Print(err.Error())
//    }
  
// var arr := []

func main () {
	var jsonBlob = []byte(`
	{"keyword":"hipaa compliance form", "get_count":157, "engine":"google", "locale":"en-us", "mobile":false}
`)

type Rankings struct {
    Keyword  string 
    GetCount uint32 
    Engine   string 
    Locale   string 
    Mobile   bool   
}
rankings := Rankings{}
err := json.Unmarshal(jsonBlob, &rankings)
if err != nil {
	fmt.Print(err.Error())
}

rankingsJson, _ := json.Marshal(rankings)
err = ioutil.WriteFile("output.json", rankingsJson, 0644)
fmt.Printf("%+v", rankings)
}