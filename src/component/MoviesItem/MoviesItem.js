import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesPage({ movie }) {
  const params = useParams();
  console.log(params);
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img src="" alt="" />
        <ul>
          <li>
            <p>name</p>
            <span>about</span>
          </li>
          <li>
            <p>Overview</p>
            <p>about</p>
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
}

MoviesPage.proPtype = {
  name: PropTypes.string.isRequired,
};
