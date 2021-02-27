import React from 'react';

export default function SearchBar(props) {
  const handleInput = (ev) => {
    props.handleSearchInput(ev.target.value);
  };

  return (
    <div>
      <label htmlFor="search"></label>
      <input
        onChange={handleInput}
        name="search"
        type="text"
        value={props.searchInput}
        style={{ width: '100%' }}
      />
    </div>
  );
}
