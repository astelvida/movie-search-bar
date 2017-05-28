import React from 'react';
import { MovieItem } from './MovieItem';

const MovieList = (props) => {
  console.log('movies props', props)
  return (
    <div>
      {props.movies.map((movie) =>
        <MovieItem key={movie.id} movie={movie} />
      )}
    </div>
  );
};

export { MovieList };
