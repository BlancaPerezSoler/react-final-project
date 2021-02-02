import axios from "axios";
import React, {useState} from "react";
import Loader from "react-loader-spinner";
import "./Weather.css";


export default function Weather(props){
    const[loaded, setLoaded]= useState(false);
    const [weather, setWeather]= useState({});

    function handleResponse(response){
        
        setWeather({
            
            temperature:response.data.main.temp,
            city:response.data.name, 
            humidity: response.data.main.humidity, 
            wind:response.data.wind.speed,
            description: response.data.weather[0].description
        });

        setLoaded(true);
    }

        if(loaded){
 return(
        <div className= "Weather">
       <form>
           <div className="row">
               <div className="col-9">
        <input type="search"  placeholder="Type a city..." autoFocus="on" className="form-control"/>
               </div>
            <div className="col-3">
        <input type="submit" className="btn btn-primary w-100" value="Search"/>
            </div>
           </div>
        </form>

        <h1>{props.defaultCity}</h1>
        <h5>Saturday 10.30</h5>
        <h5 class="text-capitalize">{weather.description}</h5>
 
 <div className="row">
     <div className="col-3">
         
         <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="cloudy"/>
         
     <span className="temperature">{Math.round(weather.temperature)}</span> <span className="units" >C</span>
     </div>
<div className="col-6">
    <ul>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {Math.round(weather.wind)} km/h</li>
    </ul>
</div>
 </div>
    </div>

    )} else{
    const apiKey= "bf3b0a962c0f2c5a4bea4daa33ad2c1d";
    let city= "Amsterdam";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        
          <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 
      />
    )
        }   
    }


