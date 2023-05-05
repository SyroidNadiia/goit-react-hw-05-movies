import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { NavLink, Link, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
              <Link to="/">Go to Home Page</Link>
            </div>
          }
        >
          NotFound this page
        </Route>
      </Routes>
    </div>
  );
};

export default App;
