// import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesItem = ({
  backdrop_path,
  poster_path,
  original_title,
  vote_average,
  overview,
}) => {
  // const params = useParams();
  // console.log(params);
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img src={{ backdrop_path } || { poster_path }} alt={original_title} />
        <ul>
          <li>
            <p>{original_title}</p>
            <span>{vote_average}</span>
          </li>
          <li>
            <p>Overview</p>
            <span>{overview}</span>
          </li>
          <li>
            <p>Cenres</p>
            <span>about</span>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};
export default MoviesItem;

MoviesItem.propTypes = {
  backdrop_path: PropTypes.string,
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
};
