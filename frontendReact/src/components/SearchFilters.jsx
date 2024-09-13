
import React from 'react';

const SearchFilters = ({ caloriesMin, setCaloriesMin, caloriesMax, setCaloriesMax, proteinMin, setProteinMin, ratingMin, setRatingMin, fatMin, setFatMin }) => {
  return (
    <>
      <div className="input-group">
        <input
          type="number"
          placeholder="Min Calories"
          value={caloriesMin}
          onChange={(e) => setCaloriesMin(e.target.value)}
        />
      
        <input
          type="number"
          placeholder="Max Calories"
          value={caloriesMax}
          onChange={(e) => setCaloriesMax(e.target.value)}
        />
      
        <input
          type="number"
          placeholder="Min Protein"
          value={proteinMin}
          onChange={(e) => setProteinMin(e.target.value)}
        />
      
        <input
          type="number"
          placeholder="Min Rating"
          value={ratingMin}
          onChange={(e) => setRatingMin(e.target.value)}
        />
      
        <input
          type="number"
          placeholder="Min Fat"
          value={fatMin}
          onChange={(e) => setFatMin(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchFilters;
