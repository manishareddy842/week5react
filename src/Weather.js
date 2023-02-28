import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./weather.css";
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
  temperature:response.data.main.temp,
description:response.data.weather[0].description,
Wind:Math.round(response.data.wind.speed),
icon: response.data.weather[0].icon,
date: new Date(response.data.dt*1000),
city:response.data.name,
 })  
      console.log(response)
    }
    function search(){
      let  apiKey ="c809b1aac8890b5b8d6ecb54769e0f7f";
   
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)
 
    }
    function handleSubmit(event){
event.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city.." onChange={updateCity}></input>
        <button type="button" class="btn btn-primary">Search</button>
      </form>
      </div>
      </div>
      <WeatherSearch info={weatherData}/>
  <footer class="do">
    This project was coded by <a href= "mailto:manishareddy842@gmail.com" class="text-decoration-none">ManishaReddy</a> and is open-sourced on <a href="https://github.com/manishareddy842/week5react" class="text-decoration-none">Github</a>
  </footer>
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