import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '438b186954a1d443dab5b74e8c351dfa';

const fetchMovies = async url => {
  try {
    const response = await fetch(url).then(response => response.json());

    return response;
  } catch (error) {
    return Promise.reject(new Error('Not found!'));
  }
};

//trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export const fetchTrendingMovies = () => {
  return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

//search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export const fetchSearchMovies = query => {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
};

//movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const fetchFullInfoMovies = id => {
  return fetchMovies(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};

//movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export const fetchInfoAboutCast = id => {
  return fetchMovies(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

//movies/get-movie-reviews запит оглядів для сторінки кінофільму.
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export const fetchReviews = id => {
  return fetchMovies(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
};

fetchSearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  id: PropTypes.number,
};
