import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import { MovieItem } from './MovieItem';

const MovieList = (props) => {
  console.log('movies props', props)
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="movies"
        transitionEnterTimeout={100}
        transitionLeaveTimeout={50}>
        {props.movies.map((movie) =>
          <MovieItem key={movie.id} movie={movie} />
        )}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export { MovieList };
