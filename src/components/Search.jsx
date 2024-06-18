import React from 'react';

const Search = ({ city, setCity, handleSearch }) => {
  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
