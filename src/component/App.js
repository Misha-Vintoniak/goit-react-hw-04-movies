import { Suspense } from 'react';
import Routers from './routers';
import Navigation from './Navigation';

// import API from '../services/fetchAPI';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './MoviesPage/MoviesPage';

export default function App() {
  // const [page, setPage] = useState(1);
  // const [movies, setMovies] = useState([]);

  /*const API = {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};*/

  // useEffect(() => {
  //   console.log('app console');
  //   API.getTrending({ page })
  //     .then(console.log())
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   /*fetch(
  //     'https://api.themoviedb.org/3/movie/550?api_key=8d0b0cb8d92c96253c161619a6311da5',
  //   ).then(console.log(JSON.parse));
  //   // API.getTrending(page).then(console.log());*/
  // }, [page]);
  // useEffect(() => {
  //   console.log('app console');
  //   API.getTrending().then(console.log());
  // }, []);
  /*
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=8d0b0cb8d92c96253c161619a6311da5',
    );
  }, []);
*/
  return (
    <>
      <Suspense fallback={<p>Загружаємо ... </p>}>
        <Navigation />
        <Routers />
      </Suspense>
    </>
  );
}
