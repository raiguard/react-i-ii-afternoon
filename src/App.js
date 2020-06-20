import React from "react";
import EmployeeCards from "./Components/EmployeeCards";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <p>Home</p>
      </header>
      <section className="main-container">
        <EmployeeCards />
      </section>
    </div>
  );
}

export default App;
