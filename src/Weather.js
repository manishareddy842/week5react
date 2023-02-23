import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import weather from "./weather.css";
import axios from "axios"
export default function Weather(props){
  const[temp,setTemp]=useState("")
  const[ready,setReady]=useState("")
  const[weatherData,setWeatherData]=useState("")
    function handleResponse(response){
    setTemp(response.data.main.temp)
setReady(true)
      setWeatherData({
        humidity:response.data.main.humidity,
  temperature:response.data.main.temp,
description:response.data.weather[0].description,
Wind:Math.round(response.data.wind.speed),
icon: response.data.weather[0].icon,

 })  
      console.log(response)
    }
    
  if (ready){
  return(
    <div>
    <div className="weather">
    <div class="conatiner">
      <div class="row">
      <form>
        <input type="text" placeholder="Enter a city.."></input>
        <button type="button" class="btn btn-primary">Search</button>
      </form>
      </div>
      </div>
      <h1>{props.defaultCity}</h1>
      <ul>
        <li>Tuesday 07:00</li>
        <li>{weatherData.description}</li>
      </ul>
      <div class="row">
        <div class="col-6">
<img src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="weather description"></img>
 <span class="temp">{Math.round(temp)}</span><span class="units"> C | F</span>
        </div>
        <div class="col-6">
          <ul>
            <li>precipitation:15%</li>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.Wind}Km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  <footer class="do">
    This project was coded by <a href= "mailto:manishareddy842@gmail.com" class="text-decoration-none">ManishaReddy</a> and is open-sourced on <a href="https://github.com/manishareddy842/week5react" class="text-decoration-none">Github</a>
  </footer>
    </div>
  )
  }
  else{
let  apiKey ="c809b1aac8890b5b8d6ecb54769e0f7f";
   
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)
  return"loading...."
  }
}