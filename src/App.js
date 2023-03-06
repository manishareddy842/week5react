import react from "react";
import Weather from "./Weather.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Paris"/>
      <footer class="do">
    This project was coded by <a href= "mailto:manishareddy842@gmail.com" class="text-decoration-none">ManishaReddy</a> and is open-sourced on <a href="https://github.com/manishareddy842/week5react" class="text-decoration-none">Github</a>
  </footer>
      </div>
  );
}

export default App;
