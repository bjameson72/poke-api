import React from "react";
import axios from "axios";
import PokeCard from "./PokeCard";

export default class PokeSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      listPoke: {},
      sprites: "",
      types: [],
      id: ""
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
        console.log(response.data);
        this.setState({
          listPoke: response.data,
          sprites: response.data.sprites,
          types: response.data.types,
          id: response.data.id
        });
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
            <PokeCard
              sprites={this.state.sprites}
              name={this.state.listPoke.name}
              types={this.state.types}
              id={this.state.id}
            />
          </form>
        </nav>
      </div>
    );
  }
}
