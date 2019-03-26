import React from 'react';
import base from '../base';
import PokeCard from './PokeCard';

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
        <h1>Your Pokemon Team</h1>
        <PokeCard />
      </div>
    );
  }
}
export default PokemonTeam;
