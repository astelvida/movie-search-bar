import React from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar.js'
import { MovieList } from './MovieList.js'
import { URL, API_KEY } from '../../config.js';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      query: '',
      movies: [],
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    const q = e.target.value;
    this.setState({ query: q });
    q === ''? this.setState({ movies: [] }):
      axios.get(`${URL}${API_KEY}&language=en-US&query=${q}&page=1`)
      .then((resp) => this.setState({ movies: resp.data.results }))
      .catch((err) => this.setState({ movies: [] }));
  }

  render() {
    return (
      <div>
        <h1>Search Movie</h1>
        <SearchBar
          handleInputChange={(e) => this.handleInputChange(e)}
          query={this.state.query}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
