import React from "react";

export default function ForecastNextHours(props){
    return(

          <div className="col">
                 {new Date(props.forecast.dt * 1000).getHours()}:00
                 <img src={props.image} alt="weather icon"/>
                 {Math.round(props.forecast.main.temp)}ºC/ {Math.round(props.forecast.main.temp_min)}ºC
             </div>
    )
}