import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'components/api/fetch';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';
import { Wrapper } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get('name') || '');
  const [responseMovies, setResponseMovies] = useState([]);

  useEffect(() => {
    const handelFetchMoviesByQuery = async () => {
      try {
        const { results } = await fetchByQuery(movieName);
        setResponseMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    handelFetchMoviesByQuery();
  }, [movieName]);

  const updateQueryString = event => {
    const value = event.target.value.trim();
  
    setMovieName(value);
    const nextParams = value !== '' ? { name: value } : {};
    setSearchParams(nextParams);
  };



  return (
    <Wrapper>
      <SearchBox
        value={movieName}
        onChange={updateQueryString}
      />
      <MoviesList movies={responseMovies} />
    </Wrapper>
  );
};

export default Movies;
