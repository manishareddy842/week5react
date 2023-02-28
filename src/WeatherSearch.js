import React from "react";
import To from "./To"
export default function  WeatherSearch(props){
    return(
    <div>
        <h1>{props.data.city}</h1>
      <ul>
        <li> <To date={props.weatherData.date}/></li>
        <li>{props.weatherData.description}</li>
      </ul>
      <div class="row">
        <div class="col-6">
<img src={`http://openweathermap.org/img/wn/${props.weatherData.icon}.png`} alt="weather description"></img>
 <span class="temp">{Math.round(props.weatherData.temperature)}</span><span class="units"> C | F</span>
        </div>
        <div class="col-6">
          <ul>
            <li>precipitation:15%</li>
            <li>Humidity:{props.weatherData.humidity}%</li>
            <li>Wind:{props.weatherData.Wind}Km/hr</li>
          </ul>
        </div>
      </div>
    </div>
    )
}