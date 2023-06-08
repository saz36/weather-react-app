import React from "react";
import "./weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <h1 className="my-2">Weather App</h1>
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
            <input type="submit" value="search" className="btn btn-primary " />
          </div>
          <div className="col-2">
            <button className="btn btn-primary ">location</button>
          </div>
        </div>
      </form>
      <div className="row my-3 ">
        <div className="col-5 ">
          <h3 className="result">Bristol</h3>
        </div>
        <div className="col-5 ">
          <h3 className="date">Date:</h3>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-4">
          <ul className="info">
            <li className="wind">Wind: </li>
            <li className="Humidity"> Humidity:</li>
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
              <span className="temp"> 3</span>
              <span className="unit"> °C</span>
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
}
