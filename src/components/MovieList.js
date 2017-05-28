import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { MovieItem } from './MovieItem';

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) =>
        <MovieItem key={movie.id} movie={movie} />
      )}
    </div>
  );
};

export { MovieList };
