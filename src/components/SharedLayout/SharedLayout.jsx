import { Outlet } from 'react-router-dom';
import { Container, Header, HeaderNavLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/movies">Movies</HeaderNavLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
