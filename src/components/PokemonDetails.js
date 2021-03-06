import React from "react";
import axios from "axios";
import "../css/PokemonDetails.css";
import AttackDetails from "./AttackDetails";
import PokemonCreator from "./PokemonCreator";
import base from "../base";
import NavBar from "./Nav";

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      types: [],
      picture: "",
      stats: [],
      moves: [],
      toggle: "",
      attacks: [{ name: "Choose an attack above", type: "" }],
      attackUrl: "",
      team: [{}]
    };
  }

  componentDidMount = () => {
    this.ref = base.syncState("team", {
      context: this,
      state: "team"
    });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
      .then(Response => {
        console.log(Response);
        this.setState({
          name: Response.data.species.name,
          types: Response.data.types,
          picture: Response.data.sprites.front_default,
          stats: Response.data.stats,
          moves: Response.data.moves
        });
      })
      .catch(error => console.log(error));
  };

  selectAttack = (attackName, attackType) => {
    let attack = {
      name: attackName,
      type: attackType
    };
    let attacks = [...this.state.attacks];
    if (attacks[0].type === "") {
      attacks[0].name = attackName;
      attacks[0].type = attackType;
    } else {
      attacks.push(attack);
    }
    this.setState({
      attacks
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <h1>Pokemon Details</h1>
        <p>Name : {this.state.name}</p>
        <ol>
          {" "}
          Types:
          {this.state.types.map((type, index) => {
            return <li key={index}>{type.type.name}</li>;
          })}
        </ol>
        <img src={this.state.picture} alt="pokemon-sprite" />
        <ul>
          {" "}
          Stats :
          {this.state.stats.map((stats, index) => {
            return (
              <li key={index}>
                {stats.stat.name} : {stats.base_stat}
              </li>
            );
          })}
        </ul>
        {
          <ol>
            Moves : {""}
            {this.state.moves.map((move, index) => {
              return (
                <li
                  key={index}
                  className="moreInfo"
                  onClick={() => {
                    if (this.state.toggle === index) {
                      this.setState({ toggle: "" });
                    } else {
                      this.setState({ toggle: index });
                    }
                  }}
                >
                  {move.move.name}
                  {this.state.toggle === index ? (
                    <AttackDetails
                      attackUrl={move.move.url}
                      selectAttack={this.selectAttack}
                    />
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ol>
        }
        <PokemonCreator
          name={this.state.name}
          types={this.state.types}
          attacks={this.state.attacks}
        />
      </div>
    );
  }
}
export default PokemonDetails;
