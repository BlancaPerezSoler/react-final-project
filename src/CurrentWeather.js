import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import CurrentDate from "./CurrentDate";


export default function CurrentWeather(props){
    
    return (
        <div className="CurrentWeather">

               <h1>{props.data.city}</h1>
         
        <h5> <small>Last Updated:</small>{" "}<CurrentDate date={props.data.date}/></h5>
        <h5 className="text-capitalize">{props.data.description}</h5>
 
 <div className="row">
     <div className="col-6 col-md-4 col-lg-3 col-xs-2">
         
         <img src={props.data.icon} alt="icon weather"/>

 </div>    
 <div className="col-6 col-md-4 col-lg-3 col-xs-2">
         <WeatherTemperature celsius={props.data.temperature}/>
</div>
     
<div className="col-6 col-md-4 col-lg-3 col-xs-2">
    <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
    </ul>
</div>
 </div>
 
    </div>

    
    );
    
        
}