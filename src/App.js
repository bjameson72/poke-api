import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import PokemonDetails from './components/PokemonDetails';
import PokemonTeam from './components/PokemonTeam';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={PokemonDetails} />
            <Route path="/team" exact component={PokemonTeam} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
