import React from "react";
export default function WeatherForecast(props){
return(
    <div>
      <div className="row">
        <div className="col-1">
            <div>mon</div>
            <div>{props.thing.icon}</div>
            <div><span>20</span><span>15</span>
            </div>
        </div>
        </div>  
    </div>
)
}