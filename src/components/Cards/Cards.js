import React, { Component } from "react";
import CardUI from "./CardUI";
import "./card-style.css";

import img1 from "../../assets/svg-1.svg";
import img2 from "../../assets/svg-2.svg";
import img3 from "../../assets/svg-3.svg";
import img4 from "../../assets/svg-4.svg";

class Cards extends Component {
  render() {
    return (
      <div className="serv">
        <CardUI
          imgsrc={img1}
          title="Title 1"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita eligendi, sit debitis numquam quod nisi? Inventore culpa ullam quasi?
"
        />
        <CardUI
          imgsrc={img2}
          title="Title 2"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita eligendi, sit debitis numquam quod nisi? Inventore culpa ullam quasi?
"
        />
        <CardUI
          imgsrc={img3}
          title="Title 3"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita eligendi, sit debitis numquam quod nisi? Inventore culpa ullam quasi?
"
        />
        <CardUI
          imgsrc={img4}
          title="Title 4"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita eligendi, sit debitis numquam quod nisi? Inventore culpa ullam quasi?
"
        />
      </div>
    );
  }
}
export default Cards;
