// src/index.js

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends Component {
  render() {
    // Change code below this line
    const world = "World";
    // Change code above this line
    return (
      <div className="App">
        <h1>Hello, {world}!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
