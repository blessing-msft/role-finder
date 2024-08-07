// src/components/SearchResults.js
import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="results-container">
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.name} - {result.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
