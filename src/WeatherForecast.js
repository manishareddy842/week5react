import React from "react";
import Weather from "./Weather.js";
export default function WeatherForecast(props){
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