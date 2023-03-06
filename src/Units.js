import React ,{useState} from "react";
export default function Units(props){
    const[temp,setTemp] = useState("celsius");
    function changeCelsius(event){
        event.preventDefault()
setTemp("celsius")
  }
  function showFarenheit(event){
     event.preventDefault()
setTemp("Farenheit");
  }
  if (temp==="celsius"){
  return(
    <div>
    <span class="temp">{props.celsius}</span><span class="units">

   C | <a href="/" onClick={showFarenheit}n>F</a></span>
  </div>
    )
  }
  else{
    let farenheit = (Math.round(props.celsius*9/5)+32);
    return(
        <div>
    <span class="temp">{farenheit}</span><span class="units">

  <a href="#" onClick={changeCelsius}> C</a> |F </span>
  </div>);
  }
}