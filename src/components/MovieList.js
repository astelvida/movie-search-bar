import React from 'react';

const MovieList = (props) => {
  console.log('movies props', props)
  return (
    <div>
      {props.movies.map((movie) =>
        <div key={movie.id}>{movie.title}</div>
      )}
    </div>
  );
};

export { MovieList };
