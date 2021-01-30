import React from "react";
import "./Weather.css";
export default function Weather(){
    return(
        <div className= "Weather">
       <form>
           <div className="row">
               <div className="col-9">
        <input type="search"  placeholder="Type a city..." autoFocus="on" className="form-control"/>
               </div>
            <div className="col-3">
        <input type="submit" className="btn btn-primary"/>
            </div>
           </div>
        </form>

        <h1>Amsterdam</h1>
        <h5>Saturday 10.30</h5>
        <h5>Cloudy</h5>
 
 <div className="row">
     <div className="col-3">
         
         <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="cloudy"/>
         
     <span className="temperature">6</span> <span className="units" >C</span>
     </div>
<div className="col-6">
    <ul>
        <li>Humidity: 20%</li>
        <li>Wind: 5 km/h</li>
    </ul>
</div>
 </div>


    </div>

    );
}