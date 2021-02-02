import axios from "axios";
import Loader from "react-loader-spinner";
import React, {useState} from "react";
import CurrentWeather from "./CurrentWeather";
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
            description: response.data.weather[0].description, 
            date: new Date (response.data.dt * 1000)
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

        <CurrentWeather data={weather} />

        )} else{

        const apiKey= "bf3b0a962c0f2c5a4bea4daa33ad2c1d";
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