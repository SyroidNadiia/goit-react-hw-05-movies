import { useState, useEffect } from 'react';
import { fetchAsync } from 'components/api/fetch';
import { Container, Title, List, ListItem, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handelFetchMovies = async () => {
      try {
        const { results } = await fetchAsync();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    handelFetchMovies();
  }, []);

  return (
    <Container>
      <Title>Trendind today</Title>
      <List>
        {movies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <StyledLink to={`movies/${movie.id}`}>{movie.title}</StyledLink>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;
