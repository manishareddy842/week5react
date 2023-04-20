import React from "react";
import Weather from "./Weather.js";
export default function WeatherForecast(props){
let  apiKey ="c809b1aac8890b5b8d6ecb54769e0f7f";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
return(
    <div>
      <div className="row">
        <div className="col-1">
            <div>mon</div>
            <img src={`http://openweathermap.org/img/wn/${props.thing.icon}.png`} alt="weatherIcon"></img>
            <div><span>20</span>
            <span>15</span>
            </div>
        </div>
        </div>  
    </div>
)
}