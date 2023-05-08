import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <main>
      <List>
        {movies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </MovieLink>
            </ListItem>
          );
        })}
      </List>
    </main>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
