import React from 'react';

const MovieItem = (props) => {
  const { overview, title, poster_path, release_date } = props.movie;
  const { movieContainer, movieTitle, releaseDate, image, content, imageErr } = style;

  const handleImage= (poster) =>
    poster? <img style={image} src={`https://image.tmdb.org/t/p/w45/${poster_path}`} alt=''/>:
    <img style={imageErr} src={`http://pngimages.net/sites/default/files/movie-png-image-45074.png`} alt=''/>

  return (
    <div style={movieContainer}>
      <div>
        {handleImage(poster_path)}
      </div>
      <div style={content}>
        <div style={movieTitle}>{title}</div>
        <div style={releaseDate}>{release_date}</div>
      </div>
    </div>
  );
};

const style={
  movieContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    flex: 2,
  },
  movieTitle: {
    fontWeight: '500'
  },
  releaseDate: {
    color: 'white'
  },
  image: {
    width: '100%'
  },
  imageErr: {
    width: 45
  }
}

export { MovieItem };
