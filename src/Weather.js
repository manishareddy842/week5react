import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./weather.css";
import WeatherForecast from "./WeatherForecast";
import WeatherSearch from "./WeatherSearch";
import axios from "axios"
export default function Weather(props){
  const[city,setCity]=useState(props.defaultCity)
  const[ready,setReady]=useState("")
  const[weatherData,setWeatherData]=useState("")
    function handleResponse(response){
    
setReady(true)
      setWeatherData({
        humidity:response.data.main.humidity,
  temperature:Math.round(response.data.main.temp),
description:response.data.weather[0].description,
Wind:Math.round(response.data.wind.speed),
icon: response.data.weather[0].icon,
date: new Date(response.data.dt*1000),
city:response.data.name,
coordinates:response.data.coord,
 })  
    }
    function search(){
      let  apiKey ="c809b1aac8890b5b8d6ecb54769e0f7f";
   
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)
 
    }
    function handleSubmit(event){
event.preventDefault();
search()
    }
    function updateCity(event){
setCity(event.target.value)
    }
  if (ready){
  return(
   <div>
    <div className="weather">
    <div class="conatiner">
      <div class="row">
      <form>
        <input type="text" placeholder="Enter a city.." onChange={updateCity}></input>
        <button type="button" class="btn btn-primary"onSubmit={handleSubmit}>Search</button>
      </form>
      </div>
      </div>
      <WeatherSearch thing={weatherData}/>
      <WeatherForecast icon={weatherData.icon} coordinates={weatherData.coordinates}/>
  
    </div>
    </div>
  )
  }

  else{
    return(
search()
    );
  }
}