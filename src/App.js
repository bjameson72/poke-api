import React, { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import PokemonDetails from "./components/PokemonDetails";
import PokemonTeam from "./components/PokemonTeam";
import PokeSearch from "./components/PokeSearch";
import PokeCard from "../src/components/PokeCard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={PokeSearch} />
            <Route path="/detail/:id" exact component={PokemonDetails} />
            <Route path="/team" exact component={PokemonTeam} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
