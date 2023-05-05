import { Link, useLocation } from 'react-router-dom';


const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
   return (
    <main>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
 };

export default MoviesList;