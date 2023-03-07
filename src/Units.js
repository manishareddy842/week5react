import React ,{useState} from "react";
export default function Units(props){
    const[temp,setTemp] = useState("celsius");
    function changeCelsius(event){
        event.preventDefault()
setTemp("celsius")
  }
  function showFahrenheit(event){
     event.preventDefault()
setTemp("fahrenheit");
  }
  if (temp==="celsius"){
  return(
    <div>
    <span className="temp">{props.celsius}</span><span className="units">

   C | <a href="/" onClick={showFahrenheit}>F</a></span>
  </div>
    )
  }
  else{
    let fahrenheit = (Math.round(props.celsius*9/5)+32);
    return(
        <div>
    <span className="temp">{fahrenheit}</span><span className="units">

  <a href="/" onClick={changeCelsius}> C</a> |F </span>
  </div>);
  }
}