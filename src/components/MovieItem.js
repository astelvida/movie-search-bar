import React from 'react';

const MovieItem = (props) => {
  const { overview, title, poster_path, release_date } = props.movie;
  const { movieContainer, movieTitle, releaseDate, image } = style;
  const handleImage= (poster) =>
    poster? `https://image.tmdb.org/t/p/w45/${poster_path}`: 'http://pngimages.net/sites/default/files/movie-png-image-45074.png'

  return (
    <div style={movieContainer}>
      <img style={image} src={handleImage(poster_path)} alt=''/>
      <div style={movieTitle}>{title}</div>
      <div style={releaseDate}>{release_date}</div>
    </div>
  );
};

const style={
  movieContainer: {
    display: 'flexbox'
  },
  movieTitle: {
    fontWeight: '500'
  },
  releaseDate: {
    color: 'white'
  },
  image: {
    width: 45
  }
}

export { MovieItem };
