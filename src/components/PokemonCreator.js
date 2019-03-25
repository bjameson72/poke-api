import React from 'react';
import '../css/PokemonCreator.css';

/*Accepts Props:
name = string
types = string array[]
attacks = string array[]
*/

class PokemonCreator extends React.Component {
  render() {
    return (
      <div>
        <h1>Name : {this.props.name}</h1> Types:
        {this.props.types.map((type, index) => {
          return <span key={index}> {type.type.name} </span>;
        })}
        <ol>
          <h2>Move set :</h2>
          <li>Attack 1: {this.props.attacks[0]}</li>
          <li>Attack 2: {this.props.attacks[1]}</li>
          <li>Attack 3: {this.props.attacks[2]}</li>
          <li>Attack 4: {this.props.attacks[3]}</li>
        </ol>
        <button>Add Pokemon to my team!</button>
      </div>
    );
  }
}
export default PokemonCreator;
