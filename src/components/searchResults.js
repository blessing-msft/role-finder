import React from 'react';

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div className="search-results">
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
