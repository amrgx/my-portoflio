import React from "react";
import "../App.css";
function tec(props) {
  return (
    <div className="tec">
      <img src={props.img} alt="" />
      <span className="tec-name">{props.name}</span>
    </div>
  );
}

export default tec;
