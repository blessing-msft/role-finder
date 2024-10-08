// src/App.js
import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import SearchResults from './components/searchResults';
import search from './services/searchService.js';

import finderImage from './assets/finder-image.png';

import './App.css';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await search(query);
      setResults(data || []);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]); 
    }
  };

  return (
    <div className="app-container">
    <header className="app-header">
      <img src={finderImage} alt="Role Finder" className="app-logo" />
      <h1>Role Finder</h1>
    </header>
    <main className="app-main">
      <h1>Find people, find what they do</h1>
      <SearchComponent onSearch={handleSearch} />
      <SearchResults results={results} />
    </main>
    {/* <footer className="app-footer">
      <a href="/about">About</a>
    </footer> */}
  </div>
  );
};

export default App;
