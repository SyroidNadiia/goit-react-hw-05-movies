import { Link } from 'react-router-dom';


 const MoviesList = ({ movies }) => {
   return (
    <main>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
 };

export default MoviesList;