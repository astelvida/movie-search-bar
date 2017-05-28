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
    </div>
  );
};

export { SearchBar };
