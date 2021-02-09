import axios from "axios";
import React , {useState }from "react";
import ForecastNextHours from "./ForecastNextHours";
import "./Forecast.css";


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
                <ForecastNextHours forecast={forecast.list[0]} image={props.weatherIcon}/>
               <ForecastNextHours forecast={forecast.list[1]} image={props.weatherIcon}/>
               <ForecastNextHours forecast={forecast.list[2]} image={props.weatherIcon}/>
               <ForecastNextHours forecast={forecast.list[3]} image={props.weatherIcon}/>               
               
            </div>
        )
    } else{
           let apiKey="bf3b0a962c0f2c5a4bea4daa33ad2c1d";
           let apiUrl=`https:/api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
           axios.get(apiUrl).then(showForecast);

        return(  null  );

    }
    
}