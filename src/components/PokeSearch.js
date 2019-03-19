import React from "react";
import axios from "axios";

export default class PokeSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      listPoke: []
    };
  }

  handleSearchInput = event => {
    this.setState({ searchText: event.target.value });
  };

  handleSearchPokemon = event => {
    event.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchText}`)
      .then(response => {
        this.setState({ listPoke: response.data });
      });
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
            <button type="submit" onClick={this.handleSearchPokemon}>
              Search
            </button>
            <div>{this.state.listPoke.name}</div>
          </form>
        </nav>
      </div>
    );
  }
}
