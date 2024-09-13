
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ query, setQuery }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim() === '') {
        setSuggestions([]);
        return;
      }

      setLoadingSuggestions(true);
      try {
        const response = await axios.get('http://localhost:8000/api/suggestion/', {
          params: { q: query },
        });
        setSuggestions(response.data.suggestion);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setLoadingSuggestions(false);
      }
    };
    //delay api calls to avoid too many requests
    const debounceTimeout = setTimeout(() => {
      fetchSuggestions();
    }, 10); // Debounce delay

    return () => clearTimeout(debounceTimeout); // Cleanup on unmount
  }, [query]);

  return (
    <div className="">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input className='search-style'
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {suggestions.length > 0 && (
            <ul className="suggestions-list">
            {loadingSuggestions ? (
                <> </>
            ) : (
                <div className="results-list">
                {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => setQuery(suggestion)}>
                    {suggestion}
                </li>
                ))}
                </div>
            )}
            </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
