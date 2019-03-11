import React, { Component } from "react";
import PokeSearch from "./components/PokeSearch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokemon!</h1>
        <PokeSearch />
      </div>
    );
  }
}

export default App;
