import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

export const BackLink = styled(Link)`
  margin-bottom: 10px;
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
  margin: 0 20px 0 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ReleaseDate = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const Score = styled.p`
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Genres = styled.ul`
  margin-bottom: 10px;
  list-style: none;
`;
export const Label = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const GenresList = styled.div`
  display: flex;
  gap: 10px;
`;

export const GenreItem = styled.li`
  margin-bottom: 10px;
`;

export const AdditionalInfo = styled.div`
  margin: 20px 0 10px 0;
`;

export const SubMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 10px 0 10px 0;
`;

export const SubMenuItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;
