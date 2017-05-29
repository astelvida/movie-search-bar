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
    const q = e.target.value.toLowerCase();
    this.setState({ query: q });
    q === ''? this.setState({ movies: [] }):
      axios.get(`${URL}${API_KEY}&language=en-US&query=${q}&page=1`)
      .then((resp) => {
        // only update state if response indicates the most recent query
        if (this.state.query === q) {
          // sort by index of match, movies that start with query string
          // would generally be a better match
          resp.data.results.sort((movie1, movie2) => {
            const movie1Index =  movie1.title.toLowerCase().indexOf(q);
            const movie2Index =  movie2.title.toLowerCase().indexOf(q);
            if (movie1Index === -1 && movie2Index === -1) return 0;
            if (movie1Index === -1) return 1;
            if (movie2Index === -1) return -1;
            return movie1Index < movie2Index? -1: movie1Index > movie2Index? 1: 0;
          });
          this.setState({ movies: resp.data.results });
        }
      })
      .catch((err) => this.setState({ movies: [] }));
  }

  render() {
    return (
      <div className="app">
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
