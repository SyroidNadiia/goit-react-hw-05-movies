import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'components/api/fetch';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const handelFetchMoviesById = async () => {
      try {
        const response = await fetchMovieById(movieId);
        setDataMovie(response);
      } catch (error) {
        console.log(error);
      }
    };
    handelFetchMoviesById(movieId);
  }, [movieId]);

  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = dataMovie;
  console.log(dataMovie);
  return (
    <main>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width="200"
        height="300"
        alt={original_title}
      />
      <div>
        <h2>{title}</h2>
        <p>{release_date}</p>
        <p>User Score: {vote_average}</p>
        <p>Overview: {overview}</p>
        {genres && (
          <ul>
            Genres:
            {genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        )}
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetails;
