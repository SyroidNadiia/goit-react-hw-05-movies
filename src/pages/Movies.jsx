import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'components/api/fetch';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get('name') || '');
  const [responseMovies, setResponseMovies] = useState([]);

  useEffect(() => {
    const handelFetchMoviesByQuery = async () => {
      try {
        const { results } = await fetchByQuery(movieName);
        console.log(results);
        setResponseMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    handelFetchMoviesByQuery();
  }, [movieName]);

  const updateQueryString = event => {
    const value = event.target.value.trim();
    console.log(value);
    setMovieName(value);
    const nextParams = value !== '' ? { name: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MoviesList movies={responseMovies} />
    </>
  );
};

export default Movies;
