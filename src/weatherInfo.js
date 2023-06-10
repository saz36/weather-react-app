import React from "react";
import FormatDate from "./formatDate";
import WeatherTemp from "./weatherTemp";
import WeatherIcon from "./weatherIcon";
export default function weatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row my-3 ">
        <div className="col-5 ">
          <h3 className="result">{props.data.city}</h3>
        </div>
        <div className="col-5 ">
          <div className="date">
            <FormatDate date={props.data.date} />
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-4">
          <ul className="info">
            <li className="wind">
              Wind:{""}
              {Math.round(props.data.wind)} Km/h
            </li>
            <li className="Humidity">
              {" "}
              Humidity: {""}
              {Math.round(props.data.humidity)} <strong>%</strong>
            </li>
          </ul>
        </div>
        <div className="col-4 px-0">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <WeatherTemp celcius={props.data.temp} />
          </div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="col-4">
          <ul className="sun">
            <li className="sunrise">Sunrise:</li>
            <li className="sunset">Sunset: 20.00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
