import { useState, useEffect } from 'react';
import { fetchAsync } from 'components/api/fetch';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handelFetchMovies = async () => {
      try {
        const { results } = await fetchAsync();
        console.log(results);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    handelFetchMovies();
  }, []);

  return (
    <main>
      <h1>Trendind today</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
