import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <div className='no-result'>No results found.</div>;
  }

  const parseContent = (content) => {
    const details = {};
    const parts = content.split('. ');
    parts.forEach((part) => {
      const [key, value] = part.split(': ');
      if (key && value) {
        details[key.trim()] = value.trim();
      }
    });
    return details;
  };

  return (
    <div className="search-results">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Product</th>
            <th>Primary Assignment</th>
            <th>Job Function</th>
            <th>Location</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            const details = parseContent(result.content);
            return (
              <tr key={index}>
                <td>{details['Name']}</td>
                <td>{details['Products']}</td>
                <td>{details['Primary Assignment']}</td>
                <td>{details['Function']}</td>
                <td>{details['Country']}</td>
                <td>{details['Contact']}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;

