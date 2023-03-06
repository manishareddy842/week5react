import React from "react";
import To from "./To"
import Units from "./Units"
export default function  WeatherSearch(props){
    return(
    <div>
        <h1>{props.thing.city}</h1>
      <ul>
        <li> <To date={props.thing.date}/></li>
        <li>{props.thing.description}</li>
      </ul>
      <div class="row">
        <div class="col-6">
<img src={`http://openweathermap.org/img/wn/${props.thing.icon}.png`} alt="weather description"></img>
 <Units celsius={props.thing.temperature}/>
        </div>
        <div class="col-6">
          <ul>
            <li>precipitation:15%</li>
            <li>Humidity:{props.thing.humidity}%</li>
            <li>Wind:{props.thing.Wind}Km/hr</li>
          </ul>
        </div>
      </div>
    </div>
    )
}