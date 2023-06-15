import React from "react";
import WeatherIcon from "./weatherIcon";
import "./forecastWeek.css";
export default function ForecastWeek(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°c`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°c`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return week[day];
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>

      <div className="forecast-temps">
        <span className="max-temp">{maxTemp()}</span>
        <span className="min-temp">{minTemp()}</span>
      </div>

      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
    </div>
  );
}
