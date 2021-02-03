import React, {useState} from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props){
  const[units, setUnits]= useState("celsius");

  function showFahrenheit(event){
      event.preventDefault();
      setUnits("fahrenheit")
  }

  function showCelsius(event){
      event.preventDefault()
      setUnits("celsius")
  }

  if (units === "celsius"){
    return(
    <span className="WeatherTemperature">

    <span className="temperature">{Math.round(props.celsius)}</span> 
    
    <span className="units" >C / <a href="/" onClick={showFahrenheit} >F</a> </span>
    
    </span>
    );  
  } else{
      let fahrenheit= (props.celsius*9/5)+32;
      return (
      
      <span className="WeatherTemperature">

    <span className="temperature">{Math.round(fahrenheit)}</span> 
    
    <span className="units" > <a href="/" onClick={showCelsius} >C</a> / F </span>
    
    </span>)
  }

    
}