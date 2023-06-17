import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");
  function convertToFahren(event) {
    event.preventDefault();
    setUnit("fahren");
  }
  function convertTocelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function fahren() {
    return (props.celcius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <div className="weatherTemp">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{"  "}
          <a href="/" onClick={convertToFahren}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemp">
        <span className="temp"> {Math.round(fahren())}</span>
        <span className="unit">
          {""}
          <a href="/" onClick={convertTocelcius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
