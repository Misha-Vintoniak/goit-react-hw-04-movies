import { Link } from 'react-router-dom';
import { paths } from '../routers';

import PropTypes from 'prop-types';
import s from './TrendingPage.module.css';

const TrendingPage = ({ movies }) => {
  return (
    <ul className={s.moviesList}>
      {movies.map(movie => (
        <li className={s.movieItem} key={movie.id}>
          <img
            className={s.poster}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/555px-Noimage.svg.png'
            }
            alt={movie.title || movie.name}
          ></img>
          <Link to={paths.moviesId} className={s.link}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

TrendingPage.propTypes = {
  id: PropTypes.number,
  backdrop_path: PropTypes.string,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};

export default TrendingPage;
