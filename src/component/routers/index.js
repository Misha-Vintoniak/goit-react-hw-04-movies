import { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomePage = lazy(() =>
  import('../views/HomePage' /*webpackChunkName : Homepage*/),
);
const Movie = lazy(() =>
  import('../views/MoviesId' /*webpackChunkName : MoviesId*/),
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /*webpackChunkName : MoviesPage*/),
);

const Cast = lazy(() => import('../views/Cast' /*/*webpackChunkName : Cast*/));
const Reviews = lazy(() =>
  import('../views/Reviews' /*/*webpackChunkName : Reviews*/),
);

const Error = lazy(() =>
  import('../views/Error' /*/*webpackChunkName : Error*/),
);

export const paths = {
  homepage: '/',
  moviesPage: '/movies',
  moviesId: id => `/movie/${id}`,
  cast: id => `/movie/${id}/credits`,
  reviews: id => `/movie/${id}/reviews`,
  error: '/error',
};

const routes = [
  {
    path: paths.homepage,
    component: HomePage,
    exact: true,
  },
  {
    path: paths.moviesPage,
    component: MoviesPage,
    exact: true,
  },
  {
    path: paths.moviesId(':id'),
    component: Movie,
    exact: true,
  },
  {
    path: paths.cast(':id'),
    component: Cast,
    exact: true,
  },
  {
    path: paths.reviews(':id'),
    component: Reviews,
    exact: true,
  },

  {
    path: paths.error,
    component: Error,
  },
];

const Routers = () => {
  return (
    <>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Redirect to={paths.error} />
      </Switch>
    </>
  );
};

export default Routers;
