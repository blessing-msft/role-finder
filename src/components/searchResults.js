// src/components/SearchResults.js
import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
    console.log(results);
  return (
    <div className="results-container">
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
           {results.map((result, index) => (
        <div key={index} className="result-item">
          <p>{result.Name}</p>
          <p>{result.Role}</p>
          <p>{result.Email}</p>
        </div>
      ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
