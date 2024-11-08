const request = require("request")


const forcast = (latitude, longtitude, callback) => {

    const url = "https://api.weatherapi.com/v1/current.json?key=ee6499514fe64785b2d43611240811&q=" + latitude +"," + longtitude



request({url, json:true}, (error, Response)=>{
    if(error){
        callback("unable to cennect weather api", undefined)
    }else if(Response.body.error){
        callback(Response.body.error.message, undefined)
    }else{
        callback(undefined, "the country is : "+Response.body.location.name + " and the weather is: " + Response.body.current.condition.text + " and the temperature is : " + Response.body.current.temp_c )

        }
})
}

module.exports = forcast