import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'components/api/fetch';
import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';
import { Wrapper } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [responseMovies, setResponseMovies] = useState([]);

  const query = searchParams.get('name');

  useEffect(() => {
    const handleFetchMoviesByQuery = async () => {
      try {
        const { results } = await fetchByQuery(query);
        setResponseMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      handleFetchMoviesByQuery(query);
    }
  }, [query]);

  const handleSearchSubmit = value => {
    const nextParams = value !== '' ? { name: value.trim() } : {};
    setSearchParams(nextParams);
  };

  return (
    <Wrapper>
      <SearchBox onSubmit={handleSearchSubmit} />
      <MoviesList movies={responseMovies} />
    </Wrapper>
  );
};

export default Movies;
