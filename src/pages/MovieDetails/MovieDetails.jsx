import { useLocation, useParams, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'components/api/fetch';
import {
  Main,
  BackLink,
  Image,
  Info,
  Title,
  ReleaseDate,
  Score,
  Overview,
  Genres,
  GenreItem,
  AdditionalInfo,
  SubMenu,
  SubMenuItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState({});

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
    handelFetchMoviesById();
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

  const location = useLocation();
  const backLinkHref = location.state?.from || '/';
  return (
    <Main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width="200"
        height="300"
        alt={original_title}
      />
      <Info>
        <Title>{title}</Title>
        <ReleaseDate>{release_date}</ReleaseDate>
        <Score>User Score: {vote_average}</Score>
        <Overview>Overview: {overview}</Overview>
        {genres && (
          <Genres>
            Genres:
            {genres.map(genre => {
              return <GenreItem key={genre.id}>{genre.name}</GenreItem>;
            })}
          </Genres>
        )}
      </Info>
      <AdditionalInfo>
        <h3>Additional information</h3>
        <SubMenu>
          <SubMenuItem>
            <NavLink to="cast">Cast</NavLink>
          </SubMenuItem>
          <SubMenuItem>
            <NavLink to="reviews">Reviews</NavLink>
          </SubMenuItem>
        </SubMenu>
        <Outlet />
      </AdditionalInfo>
    </Main>
  );
};

export default MovieDetails;
