import axios from 'axios';
const API_KEY = 'f530f3a1ba7a2ce8b8185ab97973a95f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMoviee = async () => {
  console.log(getTrendingMoviee);
  return await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
};

export const getMovieName = async query => {
  return await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
};

export const getMovieId = async id => {
  return await axios.get(`/movie/${id}?api_key=${API_KEY}`);
};

export const getCast = async id => {
  return await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
};

export const getReviews = async id => {
  return await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
};
