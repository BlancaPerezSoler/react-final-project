import React from "react";

import CurrentDate from "./CurrentDate";

export default function CurrentWeather(props){
    
    return (
        <div className="CurrentWeather">

               <h1>{props.data.city}</h1>
        <h5> {" "}<CurrentDate date={props.data.date}/></h5>
        <h5 class="text-capitalize">{props.data.description}</h5>
 
 <div className="row">
     <div className="col-3">
         
         <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="cloudy"/>
         
     <span className="temperature">{Math.round(props.data.temperature)}</span> <span className="units" >C</span>
     </div>
<div className="col-6">
    <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
    </ul>
</div>
 </div>
    </div>
    );
    
        
}