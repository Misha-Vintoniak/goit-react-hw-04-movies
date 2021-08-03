import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import MoviesItem from '../MoviesItem';

// import Cast from './Cast';
// import Reviews from './Reviews';
import API from '../../services/fetchAPI';
import MovieDetailsPage from '../MovieDetailsPage';

const MoviesId = id => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieDetails(id).then(movie => setMovie(movie), console.log(movie));
  }, [id, movie]);

  // try {
  //   console.log('Movies Page');
  //   // const { location } = this.props;
  //   // const { id } = this.props;

  //   const id = this.props;
  //   // this.props(() => ({ id }));
  //   // work  link "https://api.themoviedb.org/3/movie/581726?api_key=8d0b0cb8d92c96253c161619a6311da5&language=en-US"
  //   const getMovie = await API.getMovieDetails(id).then(console.log());

  //   console.log(getMovie);
  // } catch (error) {
  //   console.log(error);
  // }

  // const { id } = this.props;
  // const { movie } = this.state;
  return <MovieDetailsPage movie={MoviesItem} />;
};

export default MoviesId;
