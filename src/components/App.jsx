import { lazy } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
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
  );
};

// const Trending = lazy(() => import('../pages/trending/Trending'));
// const Movies = lazy(() => import('../pages/movies/Movies'));
// const MovieInfo = lazy(() => import('../pages/movieInfo/MovieInfo'));
// const Cast = lazy(() => import('../pages/cast/Cast'));
// const Reviews = lazy(() => import('../pages/reviews/Reviews'));
export default App;
