import React from "react";

export default (props) => (
  <button className="nav-button" onClick={() => props.onClick(props.navOffset)}>
    {props.text}
  </button>
);
