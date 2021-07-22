import React from "react";
import "../css/Card.css";

//We get the default prop children which we are displaying in the card component.
//Everything inside the card component is its children.
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
