
const request = require("request");


const forcast = require("./data1/forecast")

const geocode = require("./data1/geooocode")

//to pass value throw the terminal
const country = process.argv[2]

geocode(country, (error, data) => {
    console.log("ERROR : " , error)
    console.log("DATA : ", data )

    forcast(data.latitude, data.longtitude, (error, data) =>{
        console.log("ERROR: ", error)
        console.log("DATA: ", data)
    } )
})

