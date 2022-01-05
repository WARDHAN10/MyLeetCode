const axios = require('axios');
const express = require('express')
const request = require('request')
const app = express()
// Make a request for a user with a given ID

app.get('/', (req, res) => {

    axios({
        method: "GET",
        url: `https://opendata.ecdc.europa.eu/covid19/casedistribution/json/`,
    }).then((res) => {
        console.log('called')
        console.log(res)
    })
    res.send('working')
})


app.listen(3000, () => {
    console.log('port is working on 3000')

})