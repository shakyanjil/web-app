import React from "react";
import "./card-style.css";

const CardUI = (props) => {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="icon">
          <img src={props.imgsrc} alt="img" />
        </div>
        <h2 className="service-head">{props.title}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default CardUI;
