// src/App.js
import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import SearchResults from './components/searchResults';
import search from './services/searchService';

import './App.css';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const data = await search(query);
    setResults(data.results); 
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="logo.png" alt="Role Finder" className="app-logo" /> {/* Assuming you have a logo */}
        <h1>Role Finder</h1>
      </header>
      <main className="app-main">
        <p>Find people, find what they do</p>
        <SearchComponent onSearch={handleSearch} />
        <SearchResults results={results} />
      </main>
      <footer className="app-footer">
        <a href="/about">About</a>
      </footer>
    </div>
  );
};

export default App;
