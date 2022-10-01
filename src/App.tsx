import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomeContent from "./content/HomeContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{HomeContent.lname}</p>
      </header>
    </div>
  );
}

export default App;
