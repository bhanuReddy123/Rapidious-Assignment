
import React from 'react';

const SearchResults = ({ results, totalPages, totalResults }) => {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <h3>{result.title}</h3>
            <p><strong>Calories:</strong> {result.calories}</p>
            <p><strong>Protein:</strong> {result.protein}g</p>
            <p><strong>Fat:</strong> {result.fat}g</p>
            <p><strong>Rating:</strong> {result.rating}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {result.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Directions:</strong></p>
            <ol>
              {result.directions.map((direction, idx) => (
                <li key={idx}>{direction}</li>
              ))}
            </ol>
            <p><strong>Categories:</strong> {result.categories.join(', ')}</p>
            <p><strong>Date:</strong> {new Date(result.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
    
    
  );
};

export default SearchResults;
