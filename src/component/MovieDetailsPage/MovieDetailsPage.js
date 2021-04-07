import { NavLink } from 'react-router-dom';
const MovieDetailsPage = () => (
  <nav>
    <NavLink to="/movies/:movieId">About</NavLink>
    <NavLink to="/movies/:movieId/cast">Cast</NavLink>
    <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
  </nav>
);
export default MovieDetailsPage;
