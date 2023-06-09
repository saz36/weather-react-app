import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import FormatDate from "./formatDate";
export default function Weather(props) {
  const [display, setDisplay] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });

    setDisplay(true);
  }
  if (display) {
    return (
      <div className="weather">
        <h1>Weather App</h1>
        <form>
          <div className="row my-4">
            <div className="col-7 ">
              <input
                type="search"
                placeholder="Enter your location"
                autoComplete="off"
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="search"
                className="btn btn-primary "
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary ">location</button>
            </div>
          </div>
        </form>
        <div className="row my-3 ">
          <div className="col-5 ">
            <h3 className="result">{weatherData.city}</h3>
          </div>
          <div className="col-5 ">
            <div className="date">
              <FormatDate date={weatherData.date} />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <ul className="info">
              <li className="wind">
                Wind:{""}
                {Math.round(weatherData.wind)} Km/h
              </li>
              <li className="Humidity">
                {" "}
                Humidity: {""}
                {Math.round(weatherData.humidity)} <strong>%</strong>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png "
                alt="icon"
                className="float-left"
              />
              <div className="float-left">
                <span className="temp">
                  {" "}
                  {Math.round(weatherData.temp)}
                  <span className="unit">°C </span>
                </span>
              </div>
            </div>
            <div className="description"></div>
          </div>
          <div className="col-4">
            <ul className="sun">
              <li className="sunrise">Sunrise: 06:30</li>
              <li className="sunset">Sunset: 20.00</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b95f179627c8dd37f41e1be6e3250e19";
    let units = "metric";
    let city = "jamaica";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
