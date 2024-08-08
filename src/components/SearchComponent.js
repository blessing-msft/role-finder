import React, { useState } from 'react';
import './SearchComponent.css';
import send from '../assets/send.svg';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Who can I talk to about azure studio" 
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <img src={send} alt="Send" className="send-icon"/>
      </button>
    </div>
  );
};

export default SearchComponent;
