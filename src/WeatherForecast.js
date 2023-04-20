import React from "react";
import axios from"./axios";
import Weather from "./Weather.js";
export default function WeatherForecast(props){

    function handleResponse(response){
console.log(response.data)
    }
    let  apiKey ="c809b1aac8890b5b8d6ecb54769e0f7f";
    let lat= props.coordinates.lat;
    let lon=props.coordinates.lon;
   let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`

   axios.get(apiUrl).then(handleResponse)
return(
    <div>
      <div className="row">
        <div className="col-1">
            <div>mon</div>
            <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt="weatherIcon"></img>
            <div><span className="temperature-Max">20</span>
            <span className="temperature-Min">15</span>
            </div>
        </div>
        </div>  
    </div>
)
}