import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  display: block;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: #333;

  &:hover {
    background-color: #f9f9f9;
  }
`;