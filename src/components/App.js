import React from 'react';
import axios from 'axios';
import { URL, API_KEY } from '../../config.js';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }
  componentWillMount() {

  }

  handleInputChange(e) {
    e.preventDefault();
    const q = e.target.value;
    console.log('Q', q);
    this.setState({ query: q });
    axios.get(`${URL+API_KEY}&language=en-US&query=${q}&page=1`)
    .then((resp) => {
      console.log("RESP", resp)
    })
  }

  render() {



    return (
      <div>
        <h1>Search Movie</h1>
        <form>
          <input
            type="serach"
            value={this.state.query}
            onChange={(e) => this.handleInputChange(e)}
          />
        </form>
      </div>
    );
  }
}
