import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./weatherInfo";
export default function Weather(props) {
  const [display, setDisplay] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });

    setDisplay(true);
  }
  function search() {
    const apiKey = "b95f179627c8dd37f41e1be6e3250e19";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleSearch(event) {
    setCity(event.target.value);
  }
  if (display) {
    return (
      <div className="weather">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <div className="row my-4">
            <div className="col-7 ">
              <input
                type="search"
                placeholder="Enter your location"
                autoComplete="off"
                autoFocus="on"
                className="form-control"
                onChange={handleSearch}
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
              <input type ="button" value="location"className="btn btn-primary "
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
