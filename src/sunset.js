import React from "react";

export default function sunset(props) {
  let hours = props.set.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.set.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <ul className="set px-0 mb-3">
      <li className="sunset">
        Sunset:{"   "}
        {hours}:{minutes}
      </li>
    </ul>
  );
}
