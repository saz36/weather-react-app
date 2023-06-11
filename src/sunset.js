import React from "react";

export default function solar(props) {
  console.log(props.sun1);
  return (
    <ul className="set px-0 mb-3">
      <li className="sunset">sunset:{props.set}</li>
    </ul>
  );
}
