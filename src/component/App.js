import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';

import API from '../services/fetchAPI';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './MoviesPage/MoviesPage';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName : Homepage*/),
);
const Navigation = lazy(() =>
  import('./Navigation/Navigation' /*webpackChunkName : Navigation*/),
);
const NotFound = lazy(() =>
  import('./views/NotFound' /*/*webpackChunkName : NotFound*/),
);

export default function App() {
  const [page, setPage] = useState(1);
  // const [movies, setMovies] = useState([]);

  /*const API = {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};*/

  useEffect(() => {
    API.getTrending()
      .then(console.log())
      .catch(error => {
        console.log(error);
      });
    /*fetch(
      'https://api.themoviedb.org/3/movie/550?api_key=8d0b0cb8d92c96253c161619a6311da5',
    ).then(console.log(JSON.parse));
    // API.getTrending(page).then(console.log());*/
  }, [page]);

  return (
    <>
      <p>Проект</p>
      <Suspense fallback={<p>Загружаємо ... </p>}>
        <Navigation />
        <HomePage />
        <Switch>
          <Route exact to="/"></Route>
          <Route exact to="/movies"></Route>
          <NotFound />
        </Switch>
      </Suspense>
    </>
  );
}
