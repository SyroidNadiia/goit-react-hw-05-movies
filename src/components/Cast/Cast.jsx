import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../api/fetch';
import {
  CastWrapper,
  CastItem,
  CastImage,
  CastName,
  CastCharacter,
} from './Cast.styled';
const Cast = () => {
  const [dataCast, setDataCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const handelFetchCast = async () => {
      try {
        const { cast } = await fetchCast(movieId);
        setDataCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    handelFetchCast(movieId);
  }, [movieId]);

  const defaultImage = 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <CastWrapper>
      {dataCast.map(({ id, name, character, profile_path }) => {
        return (
          <CastItem key={id}>
            <CastImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : defaultImage
              }
              width="70"
              height="100"
              alt={name}
            />
            <CastName>{name}</CastName>
            <CastCharacter>Character: {character}</CastCharacter>
          </CastItem>
        );
      })}
    </CastWrapper>
  );
};

export default Cast;
