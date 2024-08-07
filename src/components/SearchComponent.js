import React, { useState } from 'react';
import './SearchComponent.css';
import { SendRegular} from '@fluentui/react-icons'
const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Who can I talk to about azure studio" 
        className="search-input"
      />
      </div>

      <button onClick={handleSearch} className="search-button">
        <img src={SendRegular} alt="Send" className="send-icon"/>
      </button>
    </div>
  );
};

export default SearchComponent;
