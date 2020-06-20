import React from "react";

export default (props) => (
  <div className="employee-detail">
    <span className="employee-detail-title">{props.title}: </span>
    <span className="employee-detail-value">{props.value}</span>
  </div>
);
