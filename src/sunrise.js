import React from "react";

export default function sunrise(props) {
  console.log(props.sun1);
  return (
    <ul className="sun px-0">
      <li className="sunrise">sunrise:{props.sun}</li>
    </ul>
  );
}
