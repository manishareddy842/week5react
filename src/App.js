import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import weather from "./weather";
export default function App(){
  return(
    <div>
    <div className="weather">
    <div class="conatiner">
      <form>
        <div class="row">
        <div class="col-8">
        <input type="text" placeholder="Enter a city.."></input>
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-primary">Search</button>
       </div>
       </div>
      </form>
    </div>
    </div>
    </div>
  )
}