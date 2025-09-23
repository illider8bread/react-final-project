import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import Landing from './Pages/Landing';
import Search from './Pages/Search';
import Movie from './Pages/Movie';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
let currentDate = new Date().toJSON().slice(0, 10);

function App() {
  const [isLoading, setIsLoading] = useState(false); //sets loading state which is attached to the skeleton movie cards in search.jsx
  const [movieList, setMovieList] = useState([]); //sets array from API
  const [query, setQuery] = useState("") //sets value of query and gets updated by a function in the search.jsx called searchTerms


  const fetchMovies = async (query = '') => {
    setIsLoading(true); //turns 'on' the loading state, while this is true the search component will display skeleton movie cards

    try {
      const endpoint = query ? //does query exist?
        `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}` // if yes set endpoint value to this
        : `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&primary_release_date.lte=${currentDate}&language=en&sort_by=primary_release_date.desc`; //if no set endpoint value to this 

      const response = await axios.get(endpoint); //fetch api based on whether there is not a search query. if no query, it renders all movies released most recently
      setMovieList(response.data.results); // sets movieList to the results from the API
    }

    catch (error) {
      console.error(`Error fetching movies: ${error}`); //if the try section fails, console log the error you encountered that caused it to fail
    }

    finally {
      setIsLoading(false);//turns 'off' the loading state. search component will no longer display skeleton cards
    }

  };



  useEffect(() => {//renders the fetchMovies funtion on page load and when the value of query changes.
    fetchMovies(query);
  }, [query])

  return (
    <BrowserRouter> {/* Enables routing*/}
      <Nav /> {/* renders the nav component */}
      <Routes>  {/* says that this section will be subject to routing */}
        <Route path='/' element={<Landing />} /> 
        {/* Sets the route '/' and says that what displays in it will be the landing.jsx component */}

        <Route path='/search' element={<Search click={fetchMovies} movieArray={movieList} loadingState={isLoading} />} /> 
        {/* ^^ sets the route '/search' and says that what it displays is the search.jsx component. It also passes in three properties to the search component 
        Property 1: click = the function fetchMovies. This is so that the search function can exist in the search component.
        Property 2: movieArray=movieList. This passes the movie API results array on to the search component.
        Property 3: loadingState=isLoading. this passes the value of the isLoading useState to the component so that it knows when to render the skeleton cards*/}


        {/* <Route path='/movie' element={<Movie />} /> */}
      </Routes>


    </BrowserRouter>
  )
}

export default App