import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
    const { container, titleStyle, other, image, imageErr, content, description } = style;

    const handleImage= (poster) =>
    poster? <img
      style={image} src={`https://image.tmdb.org/t/p/w45/${poster_path}`} alt=''/>:
    <img style={imageErr} src={`http://pngimages.net/sites/default/files/movie-png-image-45074.png`} alt=''/>

    return (
      <div
        className="movie-item"
        style={container}
        onMouseOver={(e) => this.handleMouseOver(e)}
        onMouseLeave={(e) => this.handleMouseLeave(e)}
      >
        <div>
          {handleImage(poster_path)}
        </div>
        <div style={content}>
          <div style={titleStyle}>{title}</div>
          <div style={other}>{release_date.slice(0,4)}</div>
          <div style={other}>Rating: {vote_average}</div>
          <div style={description}> {this.state.hovered? overview: ''}</div>
        </div>
      </div>
    );
  }
}

const style={
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: 'solid #d3d3d3 1px',
    padding: '10px',
    width: '480px'
  },
  content: {
    flex: 1,
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  titleStyle: {
    fontWeight: '700'
  },
  image: {
    width: '100%'
  },
  imageErr: {
    width: 45
  },
  other: {
    paddingTop: '5px'
  },
  description: {
    paddingTop: '10px',
    fontSize: '12px',
  }
}

export { MovieItem };
