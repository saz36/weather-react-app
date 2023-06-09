import React from "react";
import FormatDate from "./formatDate";
export default function weatherInfo(props){
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
                {Math.round(props.data.temp)}
                <span className="unit">°C </span>
              </span>
            </div>
          </div>
          <div className="description"></div>
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