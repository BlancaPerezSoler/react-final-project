import axios from "axios";
import React , {useState }from "react";
import WeatherIcon from "./WeatherIcon";


export default function Forecast(props){

    const  [loaded, setLoaded]= useState (false);
    const [forecast, setForecast]= useState (null);

    function showForecast(response){
     
           setForecast(response.data)
           setLoaded(true)
           
    }

    if (loaded){
        console.log(forecast)
        return(
            
            <div className="Forecast row">
             <div className="col">
                 {new Date(forecast.list[0].dt * 1000).getHours()}:00
                 {forecast.list[0].weather[0].icon}
                 {Math.round(forecast.list[0].main.temp)}/ {Math.round(forecast.list[0].main.temp_min)}
             </div>
            </div>
        )
    } else{
           let apiKey="bf3b0a962c0f2c5a4bea4daa33ad2c1d";
           let apiUrl=`https:/api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
           axios.get(apiUrl).then(showForecast);

        return(  null  );

    }
    
}