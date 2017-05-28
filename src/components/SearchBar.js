import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form>
        <input
          type='search'
          value={props.query}
          onChange={props.handleInputChange}
        />
      </form>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

export { SearchBar };
