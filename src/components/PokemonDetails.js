import React from 'react';
import axios from 'axios';
import '../css/PokemonDetails.css';
import AttackDetails from './AttackDetails';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      types: [],
      picture: '',
      stats: [],
      moves: [],
      toggle: '',
    };
  }

  componentDidMount = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(Response => {
        console.log(Response);
        console.log(Response.data.moves);
        this.setState({
          name: Response.data.species.name,
          types: Response.data.types,
          picture: Response.data.sprites.front_default,
          stats: Response.data.stats,
          moves: Response.data.moves,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>Pokemon Details</h1>
        <p>Name : {this.state.name}</p>
        <ol>
          {' '}
          Types:
          {this.state.types.map((type, index) => {
            return <li key={index}>{type.type.name}</li>;
          })}
        </ol>
        <img src={this.state.picture} alt="pokemon-sprite" />
        <ul>
          {' '}
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
            Moves : {''}
            {this.state.moves.map((move, index) => {
              return (
                <li
                  key={index}
                  className="moreInfo"
                  onClick={() => {
                    this.setState({ toggle: index });
                  }}
                >
                  {move.move.name}
                  {this.state.toggle === index ? (
                    <AttackDetails attackUrl={move.move.url} />
                  ) : (
                    ''
                  )}
                </li>
              );
            })}
          </ol>
        }
      </div>
    );
  }
}
export default PokemonDetails;
