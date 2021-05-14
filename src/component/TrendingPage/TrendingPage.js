import { Link } from 'react-router-dom';

const TrendingPage = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <li key={movie.id}>
            <img
              src={movie.backdrop_path || movie.poster_path}
              alt={movie.title}
            ></img>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default TrendingPage;
