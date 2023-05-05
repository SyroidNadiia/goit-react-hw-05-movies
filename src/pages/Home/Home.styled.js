import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  padding: 10px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;