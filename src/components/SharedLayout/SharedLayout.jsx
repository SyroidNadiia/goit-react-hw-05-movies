import { Outlet } from 'react-router-dom';
import { Container, Header, HeaderNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/movies">Movies</HeaderNavLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
