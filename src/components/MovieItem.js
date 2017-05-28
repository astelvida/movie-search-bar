import React from 'react';

class MovieItem extends React.Component {
  constructor() {
    super()
    this.state = {
      hovered: false
    }
  }
  handleMouseOver(e) {
    e.preventDefault();
    this.setState({ hovered: true });
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({ hovered: false });
  }

  render() {
    const { overview, title, poster_path, release_date, vote_average } = this.props.movie;

    const handleImage= (poster) =>
    poster? <img style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w45/${poster_path}`} alt=''/>:
    <img style={{ width: 45 }} src={`http://pngimages.net/sites/default/files/movie-png-image-45074.png`} alt=''/>

    return (
      <div
        className="movie-item"
        onMouseOver={(e) => this.handleMouseOver(e)}
        onMouseLeave={(e) => this.handleMouseLeave(e)}
      >
        <div>
          {handleImage(poster_path)}
        </div>
        <div className="movie-info">
          <div><strong>{title}</strong>({release_date.slice(0,4)})</div>
          <div className="detail">Rating: {vote_average? vote_average: 'N/A'}</div>
          <div className="overview"> {this.state.hovered? overview: ''}</div>
        </div>
      </div>
    );
  }
}


export { MovieItem };
