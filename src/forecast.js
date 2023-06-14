import React from "react";
import WeatherIcon from "./weatherIcon";
import "./forecast.css";
export default function forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Fri</div>

          <div className="forecast-temps">
            <span className="max-temp">20°c</span>
            <span className="min-temp">3°c</span>
          </div>

          <div className="forecast-icon">
            <WeatherIcon code="10d" size={36} />
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Fri</div>

          <div className="forecast-temps">
            <span className="max-temp">20°c</span>
            <span className="min-temp">3°c</span>
          </div>

          <div className="forecast-icon">
            <WeatherIcon code="10d" size={36} />
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Fri</div>

          <div className="forecast-temps">
            <span className="max-temp">20°c</span>
            <span className="min-temp">3°c</span>
          </div>

          <div className="forecast-icon">
            <WeatherIcon code="10d" size={36} />
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Fri</div>

          <div className="forecast-temps">
            <span className="max-temp">20°c</span>
            <span className="min-temp">3°c</span>
          </div>

          <div className="forecast-icon">
            <WeatherIcon code="10d" size={36} />
          </div>
        </div>
      </div>
    </div>
  );
}
