
const request = require("request")

const geocode = (adress , callback ) =>{
    const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + adress +".json?proximity=ip&access_token=pk.eyJ1IjoiZWx0YXllYjkwIiwiYSI6ImNtMzh2ZzdhYjByYWcybnIxdzVncTljN3IifQ.tEIxoM31RLsnmQYOR4776A"

request({url:geocodeurl, json:true}, (error, Response)=>{
    //low level error
    if(error){
        callback("unable to connect geoservice", undefined)
        
        //token error
    }else if(Response.body.message){
        callback("Response.body.message", undefined)

        //location error
    } else if(Response.body.features.length == 0){
        callback("unable to find location", undefined)
    //if everything is ok
    }else {
        callback(undefined, {
            longtitude : Response.body.features[0].center[0],
            latitude : Response.body.features[0].center[1]
        })
    }

})
}

// geocode("china", (error, data) => {
//     console.log("ERROR : " , error)
//     console.log("DATA : ", data )
// })

module.exports = geocode