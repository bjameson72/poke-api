import React from "react";
import axios from "axios";

export default class PokeSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSearchInput = event => {
    this.setState({ searchText: event.target.value });
  };

  handleSearchPokemon = event => {
    event.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchText}`)
      .then(res => console.log(res));
  };

  render() {
    return (
      <div className="poke-search">
        <nav>
          <form>
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={this.state.searchText}
              onChange={this.handleSearchInput}
            />
            <button type="submit" onSubmit={this.handleSearchPokemon}>
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
