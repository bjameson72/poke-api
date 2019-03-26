import React from "react";
import base from "../base";
import PokeCard from "./PokeCard";
import NavBar from "./Nav";

class PokemonTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [{}]
    };
  }

  componentDidMount() {
    this.ref = base.syncState("team", {
      context: this,
      state: "team"
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>My Pokemon Team</h1>
        <ol>
          {this.state.team.map((pokemon, index) => {
            return <li key={index}>{pokemon.name}</li>;
            // <PokeCard
            //   key={index}
            //   attacks={pokemon.attacks}
            //   name={pokemon.name}
            //   types={pokemon.types}
            //   id={1}
            // />
          })}
        </ol>
      </div>
    );
  }
}

export default PokemonTeam;
