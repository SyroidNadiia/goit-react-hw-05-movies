import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'components/api/fetch';
import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';
import { Wrapper } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get('name') || '');
  const [responseMovies, setResponseMovies] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    const handleFetchMoviesByQuery = async () => {
      try {
        const { results } = await fetchByQuery(movieName);
        setResponseMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    if (searchClicked) {
      handleFetchMoviesByQuery();
      setSearchClicked(false);
    }
  }, [movieName, searchClicked]);

  const updateQueryString = event => {
    const value = event.target.value.trim();
    setMovieName(value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    setSearchClicked(true);
    const nextParams = movieName !== '' ? { name: movieName } : {};
    setSearchParams(nextParams);
  };

  return (
    <Wrapper>
      <SearchBox
        value={movieName}
        onChange={updateQueryString}
        onSubmit={handleSearchSubmit}
      />
      <MoviesList movies={responseMovies} />
    </Wrapper>
  );
};

export default Movies;
