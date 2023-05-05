import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const BackLink = styled(Link)`
  margin-bottom: 1rem;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const ReleaseDate = styled.p`
  margin-bottom: 0.5rem;
`;

export const Score = styled.p`
  margin-bottom: 1rem;
`;

export const Overview = styled.p`
  margin-bottom: 1rem;
`;

export const Genres = styled.ul`
  margin-bottom: 1rem;
  list-style: none;
`;

export const GenreItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const AdditionalInfo = styled.div`
  margin-top: 2rem;
`;

export const SubMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const SubMenuItem = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;