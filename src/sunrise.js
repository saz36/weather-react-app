import React from "react";

export default function sunrise(props) {
  
  let hours = props.sun.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.sun.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <ul className="sun mt-1 px-0">
      <li className="sunrise">
        Sunrise:{" "}{hours}:{minutes}
      </li>
    </ul>
  );
}
