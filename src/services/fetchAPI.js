// import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=8d0b0cb8d92c96253c161619a6311da5

const BASE_URL = 'https://api.themoviedb.org/3/';
const api_key = '8d0b0cb8d92c96253c161619a6311da5';

const fetchRequest = async (path, config = '') => {
  const response = await fetch(
    `${BASE_URL}${path}?api_key=${api_key}${config}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
};

const getTrending = () => {
  return fetchRequest('trending/movie/week');
};

const searchMovies = (searchQuery, page) => {
  return fetchRequest(`search/movie&query=${searchQuery}&page=${page}`);
};

const getMovieDetails = id => {
  return fetchRequest(`movie/${id}`);
};

const getMovieCredits = id => {
  return fetchRequest(`movie/${id}/credits`);
};

const getMovieReviews = id => {
  return fetchRequest(`movie/${id}/reviews`);
};

/*
const Axios = axios.create({
  BASE_URL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '8d0b0cb8d92c96253c161619a6311da5',
  },
});

async function searchMovies(searchQuery, page) {
  await Axios.get(`search/movie?query=${searchQuery}page=${page}`);
  const { data } = response;
  return data;
}

async function getMovieDetails(id) {
  await Axios.get(`movie/${id}`);
  const { data } = response;
  return data;
}
async function getMovieCredits(id) {
  await Axios.get(`movie/${id}/credits`);
  const { data } = response;
  return data;
}
async function getMovieReviews(id) {
  await Axios.get(`movie/${id}/reviews`);
  const { data } = response;
  return data;
}
*/
const API = {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
export default API;

/*
    trending/get-trending - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
    search/search-movies - пошук фільму по ключовому слову на сторінці фільмів.
    movies/get-movie-details - запит повної інформації про фільм для сторінки кінофільму.
    movies/get-movie-credits - запит інформації про акторський склад для сторінки кінофільму.
    movies/get-movie-reviews - запит оглядів для сторінки кінофільму.
*/
// https://developers.themoviedb.org/3/trending/get-trending - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
