import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  
`;

export const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;