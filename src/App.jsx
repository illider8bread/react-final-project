import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import './App.css';
import Landing from './Pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router';
import Search from './Pages/Search';
import Movie from './Pages/Movie';
import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
let currentDate = new Date().toJSON().slice(0, 10);

// const API_OPTIONS = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`
//   }
// }

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
 console.log(currentDate);
  const fetchMovies = async (query = '') => {
    setIsLoading(true);


  try {
    const endpoint = query ?
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
      : `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&primary_release_date.lte=${currentDate}&language=en-US&sort_by=primary_release_date.desc`;

    const response = await axios.get(endpoint);
    setMovieList(response.data.results);
  } 
    catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [])
  useEffect(() => {
    console.log(movieList);
}, [movieList]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/search' element={<Search movieArray={movieList} loadingState={isLoading} />} />
        {/* <Route path='/movie' element={<Movie />} /> */}
      </Routes>


    </BrowserRouter>
  )
}

export default App