import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5742f4de3a7b600a36c23a592b6dd172';

export const fetchAsync = async () => {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

  const { data } = await axios.get(url);
  return data;
};

export const fetchMovieById = async id => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

  const { data } = await axios.get(url);
  return data;
};

export const fetchByQuery = async (guery) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${guery}&page=1&include_adult=false`;
  
  const {data} = await axios.get(url);
  return data;
}

export const fetchCast = async id => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;

  const { data } = await axios.get(url);
  return data;
};

export const fetchReviews = async id => {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;

  const { data } = await axios.get(url);
  return data;
};
