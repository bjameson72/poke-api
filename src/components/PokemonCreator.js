import React from 'react';
import base from '../base';
import '../css/PokemonCreator.css';

/*Accepts Props:
name = string
types = string array[]
attacks = string array[]
*/

class PokemonCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      types: this.props.types,
      attacks: this.props.attacks,
      team: [{}],
    };
  }

  componentDidMount() {
    this.ref = base.syncState('team', {
      context: this,
      state: 'team',
    });
  }

  addNewPokemon = (name, types, attacks) => {
    let pokemon = {
      name,
      types,
      attacks,
    };
    let team = this.state.team;
    team.push(pokemon);
    this.setState({ team });
  };

  render() {
    return (
      <div>
        <h1>Name : {this.props.name}</h1> Types:
        {this.props.types.map((type, index) => {
          return <span key={index}> {type.type.name} </span>;
        })}
        <ol>
          <h2>Move set :</h2>
          {this.props.attacks[0] ? (
            <li>Attack 1: {this.props.attacks[0].name}</li>
          ) : (
            ''
          )}
          {this.props.attacks[1] ? (
            <li>Attack 2: {this.props.attacks[1].name}</li>
          ) : (
            ''
          )}
          {this.props.attacks[2] ? (
            <li>Attack 3: {this.props.attacks[2].name}</li>
          ) : (
            ''
          )}
          {this.props.attacks[3] ? (
            <li>Attack 4: {this.props.attacks[3].name}</li>
          ) : (
            ''
          )}
        </ol>
        <button
          onClick={() =>
            this.addNewPokemon(
              this.props.name,
              this.props.types,
              this.props.attacks,
            )
          }
        >
          Add Pokemon to my team!
        </button>
      </div>
    );
  }
}
export default PokemonCreator;
