import React, { Component } from "react";
import "./App.css";
import PokemonDetails from "./components/PokemonDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonDetails />
      </div>
    );
  }
}

export default App;
