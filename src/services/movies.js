import PropTypes from "prop-types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "438b186954a1d443dab5b74e8c351dfa";

const fetchMovies = async (url) => {
  try {
    const response = await fetch(url).then((response) => response.json());

    return response;
  } catch (error) {
    return Promise.reject(new Error("Not found!"));
  }
};

// список самых популярных фильмов на сегодня
export const fetchTrendingMovies = () => {
  return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

// поиск кинофильма по ключевому слову
export const fetchSearchMovies = (query) => {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
};

// запрос полной информации о фильме
export const fetchFullInfoMovies = (id) => {
  return fetchMovies(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};

// запрос информации о актёрском составе
export const fetchInfoAboutCast = (id) => {
  return fetchMovies(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

// запрос обзоров
export const fetchReviews = (id) => {
  return fetchMovies(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
};

fetchSearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  id: PropTypes.number,
};
