import React, {useState} from "react";

import "./forecast.css";
import ForecastWeek from "./forecastWeek";

import axios from "axios";
export default function Forecast(props) {
  let [display, setDisplay]= useState(false);
  let [forecastDay, setForecastDay] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
  setForecastDay(response.data.daily);
  setDisplay(true);
  }
  
if(display){
  console.log(forecastDay);
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <ForecastWeek data={forecastDay[0]} />
        </div>
      </div>
    </div>
  );
}else{
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

return null;
}
}
