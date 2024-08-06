import React from "react";
import "../App.css";

function certificationsCard(props) {
  return (
    <div className="card">
      <div className="card-countent">
        <div className="logo-box">
          <img className="img-crte" src={props.icon} alt="" />
        </div>
        <div className="title-count-card">
          <div className="titleCer">{props.title}</div>
          <div className="pragraph">
            {props.p}
            
          </div>
        </div>

        <div className="date-crte">{props.date}</div>
        <a href={props.cer} download={"amr.pdf"} class="card-button">download</a>
      </div>
    </div>
  );
}

export default certificationsCard;
