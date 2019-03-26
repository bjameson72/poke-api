import React from 'react';
import base from '../base';
import PokeCard from './PokeCard';
import NavBar from './Nav';

class PokemonTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {},
    };
  }

  componentDidMount() {
    this.ref = base.syncState('team', {
      context: this,
      state: 'team',
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>My Pokemon Team</h1>
      </div>
    );
  }
}
export default PokemonTeam;
