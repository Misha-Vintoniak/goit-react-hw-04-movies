import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MoviesItem from '../MoviesItem/MoviesItem';

// import Cast from './Cast';
// import Reviews from './Reviews';
import API from '../../services/fetchAPI';

export default function MoviesPage() {
  // const [movies, setMovies] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    console.log('Movies page');
    if (id === null) {
      return;
    }
    API.getMovieDetails().then(console.log());
  }, [id]);
  return (
    <>
      <p>Movies</p>
      <MoviesItem />
      <section>
        <NavLink exact to="/">
          {/* <Cast /> */}
        </NavLink>

        <NavLink exact to="/movies">
          {/* <Reviews /> */}
        </NavLink>
      </section>
      <hr />
    </>
  );
}
