import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input
        type='search'
        placeholder='Search (e.g. "Fight Club")'
        className="search-bar"
        value={props.query}
        onChange={props.handleInputChange}
      />
    </div>
  );
};

export { SearchBar };
