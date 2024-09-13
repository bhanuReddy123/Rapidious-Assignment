

import React, { useState } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';
import './SearchForm.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [caloriesMin, setCaloriesMin] = useState('');
  const [caloriesMax, setCaloriesMax] = useState('');
  const [proteinMin, setProteinMin] = useState('');
  const [ratingMin, setRatingMin] = useState('');
  const [fatMin, setFatMin] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/search/', {
        params: {
          q: query,
          calories_min: caloriesMin,
          calories_max: caloriesMax,
          protein_min: proteinMin,
          rating_min: ratingMin,
          fat_min: fatMin,
          page: page,
        },
      });

      const results = response.data.results.map(result => result._source);
      setResults(results);
      setTotalPages(response.data.total_pages);
      setTotalResults(response.data.total_results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  const pageNext = async () => {
    setPage(page + 1);
    handleSearch();
  }
  const pagePrev = async () => {
    setPage(page - 1);
    handleSearch();
  }
  return (
    <div>
      <div className="search-header">
        <div className="search-container">
          <SearchInput query={query} setQuery={setQuery} />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
        <SearchFilters
          caloriesMin={caloriesMin} setCaloriesMin={setCaloriesMin}
          caloriesMax={caloriesMax} setCaloriesMax={setCaloriesMax}
          proteinMin={proteinMin} setProteinMin={setProteinMin}
          ratingMin={ratingMin} setRatingMin={setRatingMin}
          fatMin={fatMin} setFatMin={setFatMin}
        />
      </div>
      {results.length > 0 && (
      <>
        <SearchResults results={results} />
        <p>Total Results: {totalResults}</p>
        <p>Page: {page} of {totalPages}</p>
        <div>
          <button
            onClick={pagePrev}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            onClick={pageNext}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </>
      )}
    </div>
  );
};

export default SearchForm;






// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchForm = () => {
//   const [query, setQuery] = useState('');
//   const [caloriesMin, setCaloriesMin] = useState('');
//   const [caloriesMax, setCaloriesMax] = useState('');
//   const [proteinMin, setProteinMin] = useState('');
//   const [ratingMin, setRatingMin] = useState('');
//   const [fatMin, setFatMin] = useState('');
//   const [page, setPage] = useState(1);
//   const [results, setResults] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [totalResults, setTotalResults] = useState(0);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/search/', {
//         params: {
//           q: query,
//           calories_min: caloriesMin,
//           calories_max: caloriesMax,
//           protein_min: proteinMin,
//           rating_min: ratingMin,
//           fat_min: fatMin,
//           page: page,
//         },
//       });

//       // Adjusted to use response.results
//       const results = response.data.results.map(result => result._source);
//       setResults(results);
//       setTotalPages(response.data.total_pages);
//       setTotalResults(response.data.total_results);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };
  // const pageNext = async () => {
  //   setPage(page + 1);
  //   handleSearch();
  // }
  // const pagePrev = async () => {
  //   setPage(page - 1);
  //   handleSearch();
  // }
//   return (
//     <div>
//       <div className="input-group">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div className="input-group">
//         <input
//           type="number"
//           placeholder="Min Calories"
//           value={caloriesMin}
//           onChange={(e) => setCaloriesMin(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Max Calories"
//           value={caloriesMax}
//           onChange={(e) => setCaloriesMax(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Min Protein"
//           value={proteinMin}
//           onChange={(e) => setProteinMin(e.target.value)}
//         />
      
//         <input
//           type="number"
//           placeholder="Min Rating"
//           value={ratingMin}
//           onChange={(e) => setRatingMin(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Min Fat"
//           value={fatMin}
//           onChange={(e) => setFatMin(e.target.value)}
//         />
//       </div>

//       <div>
//         <h2>Results</h2>
//         <ul>
//           {results.map((result, index) => (
//             <li key={index}>
//               <h3>{result.title}</h3>
//               <p><strong>Calories:</strong> {result.calories}</p>
//               <p><strong>Protein:</strong> {result.protein}g</p>
//               <p><strong>Fat:</strong> {result.fat}g</p>
//               <p><strong>Rating:</strong> {result.rating}</p>
//               <p><strong>Ingredients:</strong></p>
//               <ul>
//                 {result.ingredients.map((ingredient, idx) => (
//                   <li key={idx}>{ingredient}</li>
//                 ))}
//               </ul>
//               <p><strong>Directions:</strong></p>
//               <ol>
//                 {result.directions.map((direction, idx) => (
//                   <li key={idx}>{direction}</li>
//                 ))}
//               </ol>
//               <p><strong>Categories:</strong> {result.categories.join(', ')}</p>
//               <p><strong>Date:</strong> {new Date(result.date).toLocaleDateString()}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
      // {results.length > 0 && (
      // <>
      // <p>Total Results: {totalResults}</p>
      // <p>Page: {page} of {totalPages}</p>
      // <div>
      //     <button
      //       onClick={pagePrev}
      //       disabled={page === 1}
      //     >
      //       Previous
      //     </button>
      //     <button
      //       onClick={pageNext}
      //       disabled={page === totalPages}
      //     >
      //       Next
      //     </button>
      //   </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SearchForm;

