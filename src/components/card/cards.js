import React from "react";
import "./card.css";

const Cards = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Cards;

// className={`click-item ${props.shake} ? "shake" : ""`} 
// onClick={() => props.clickCount(props.id)}
