import { useState, useEffect } from 'react';

// import { NavLink } from 'react-router-dom';
import API from '../../services/fetchAPI';
import TrendingPage from '../TrendingPage/TrendingPage';

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    // if (setMovies === {}) {
    //   return;
    // }
    console.log('homepage');
    API.getTrending().then(data => setMovies(data.results));
  }, [page]);

  return (
    <>
      <nav>
        <h2>Trending today</h2>
        {movies && <TrendingPage movies={movies} />}
      </nav>
    </>
  );
}
