import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import API from '../../services/fetchAPI';
import TrendingPage from '../TrendingPage/TrendingPage';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    // if (setMovies === {}) {
    //   return;
    // }
    console.log('Home page');
    API.getTrending().then(data => {
      setMovies(data.results);
      console.log(data.results);
    });
  }, [page]);

  return (
    <>
      <nav>
        <h2>Trending today</h2>
        {movies && <TrendingPage movies={movies} />}
      </nav>
    </>
  );
};

export default HomePage;
