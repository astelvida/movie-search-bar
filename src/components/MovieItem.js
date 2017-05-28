import React from 'react';

const MovieItem = (props) => {
  const { overview, title, poster_path, release_date } = props.movie;
  return (
    <div>
      {title}
      {overview}
      {release_date}
    </div>
  );
};

export { MovieItem };
