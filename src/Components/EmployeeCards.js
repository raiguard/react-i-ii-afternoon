import React, { Component } from "react";

import EmployeeDetail from "./EmployeeDetail";
import ActionButton from "./ActionButton";
import NavButton from "./NavButton";

import EmployeeData from "../data";
const numEmployees = EmployeeData.length;

class EmployeeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 0
    };
  }

  updatePosition = (offset) => {
    const offsetPos = this.state.pos + offset;
    this.setState({ pos: (offsetPos < 0 ? offsetPos + numEmployees : offsetPos) % numEmployees });
  };

  render() {
    const employee = EmployeeData[this.state.pos];

    const favoriteMovies = employee.favoriteMovies.map((movie, i) => (
      <p key={i} className="employee-movie">
        {i + 1}. {movie}
      </p>
    ));

    return (
      <div>
        <div className="card">
          <div className="card-position-indicator">
            {this.state.pos + 1}/{numEmployees}
          </div>
          <div className="card-name">
            {employee.name.first} {employee.name.last}
          </div>
          <div className="card-details-container">
            <EmployeeDetail title="From" value={`${employee.city}, ${employee.country}`} />
            <EmployeeDetail title="Job Title" value={employee.title} />
            <EmployeeDetail title="Employer" value={employee.employer} />
          </div>
          <p className="employee-detail-title">Favorite Movies:</p>
          <div className="employee-movies-container">{favoriteMovies}</div>
        </div>
        <div className="button-row">
          <NavButton text="< Previous" onClick={this.updatePosition} navOffset={-1} />
          <div>
            <ActionButton text="Edit" />
            <ActionButton text="Delete" />
            <ActionButton text="New" />
          </div>
          <NavButton text="Next >" onClick={this.updatePosition} navOffset={1} />
        </div>
      </div>
    );
  }
}

export default EmployeeCards;
