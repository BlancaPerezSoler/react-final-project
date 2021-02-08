import axios from "axios";
import Loader from "react-loader-spinner";
import React, {useState} from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./Weather.css";


export default function Weather(props){
    const[loaded, setLoaded]= useState(false);
    const [weather, setWeather]= useState({});
    const [city, setCity]= useState(props.defaultCity);

    function handleResponse(response){

        setWeather({
            
            temperature:response.data.main.temp,
            city:response.data.name, 
            humidity: response.data.main.humidity, 
            wind:response.data.wind.speed,
            description: response.data.weather[0].description, 
            date: new Date (response.data.dt * 1000), 
            icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });

        setLoaded(true);
    }

    function search(){
     const apiKey= "bf3b0a962c0f2c5a4bea4daa33ad2c1d";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleChange(event){
      setCity(event.target.value)
    }

        if(loaded){
 return(
        <div className= "Weather">
       <form onSubmit={handleSubmit}>
           <div className="row">
               <div className="col-9">
        <input type="search"  placeholder="Type a city..." autoFocus="on" className="form-control" onChange={handleChange} />
               </div>
            <div className="col-3">
        <input type="submit" className="btn btn-primary w-100" value="Search"/>
            </div>
           </div>
        </form>

        <CurrentWeather data={weather} />
        <Forecast city={weather.city} weatherIcon={weather.icon}/>
</div>
        );
    } else{

       search()
        return (
        
          <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 
      />
    );
 }

 }  