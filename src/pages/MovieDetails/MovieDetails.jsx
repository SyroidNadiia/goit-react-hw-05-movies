import { useLocation, useParams, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieById } from 'components/api/fetch';
import {
  Main,
  ContainerTitle,
  Image,
  Info,
  Container,
  Title,
  ReleaseDate,
  Score,
  Overview,
  Genres,
  GenreItem,
  AdditionalInfo,
  SubMenu,
  SubMenuItem,
  Label,
  GenresList,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';
import GoBackBtn from 'components/GoBackButton/GoBackButton';

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
  const path = location?.state?.from ?? "/";
  const defaultImage = 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <Main>
      <GoBackBtn path={path} />
      <Container>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : defaultImage
          }
          width="200"
          height="300"
          alt={original_title}
        />

        <Info>
          <ContainerTitle>
            <Title>{title}</Title>
            <ReleaseDate>
              {release_date && `(${release_date.substring(0, 4)})`}
            </ReleaseDate>
          </ContainerTitle>
          <Score>User Score: {Math.round(vote_average * 10)}%</Score>
          <Overview>
            <Label>Overview</Label> {overview}
          </Overview>
          {genres && (
            <Genres>
              <Label>Genres:</Label>
              <GenresList>
                {genres.map(genre => {
                  return <GenreItem key={genre.id}>{genre.name}</GenreItem>;
                })}
              </GenresList>
            </Genres>
          )}
        </Info>
      </Container>
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </Main>
  );}

export default MovieDetails;
