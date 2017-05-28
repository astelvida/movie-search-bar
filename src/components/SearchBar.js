import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input
        type='search'
        value={props.query}
        onChange={props.handleInputChange}
      />
      <button className="btn">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

export { SearchBar };
