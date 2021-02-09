import React from "react";

export default function ForecastNextHours(props){
    return(

          <div className="col">
                 {new Date(props.forecast.dt * 1000).getHours()}:00
                 <img src={props.image} />
                 {Math.round(props.forecast.main.temp)}/ {Math.round(props.forecast.main.temp_min)}
             </div>
    )
}