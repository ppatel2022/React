import React, {useState, useEffect, useCallback} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);
  const  fetchMoviesHandler = useCallback(async ()  => {
    setIsLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (response.status !== 200) {
        throw new Error(' Serve Error....')
      }
      const data = await response.json(); // Built-in Method in Reponse to Translate JOSN response in JavaScript Body.
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
          
        };
      }); // End of transformedMovies
      setMovies(transformedMovies);
    } catch (error) {
        setError(error.message);
    }
  setIsLoading(false);
  }, []);
  
useEffect( () => {    // Load List when browser Render Page...
  fetchMoviesHandler();
}, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (movies.length === 0 && !error) {
    content = <p>Found No Movies</p>
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
