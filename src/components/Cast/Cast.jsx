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

  return (
    <CastWrapper>
      {dataCast.map(({ id, name, character, profile_path }) => {
        return (
          <CastItem key={id}>
            <CastImage
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
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
