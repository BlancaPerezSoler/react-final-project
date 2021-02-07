import React, {useState} from "react";
import axios from "axios";

export default function WeatherIcon(props){
     const[loaded, setLoaded]= useState(false);
    const [weather, setWeather]= useState({});
    const [city, setCity]= useState(props.defaultCity);

    function handleResponse(response){

        setWeather({
            date: new Date (response.data.dt * 1000), 
            icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
        setCity(props.defaultCity);
        setLoaded(true);
    }

   if(loaded){
       return<div>{weather.icon}</div>
        

   } else{
      const apiKey= "bf3b0a962c0f2c5a4bea4daa33ad2c1d";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse);
 
   }
     
}

