import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from './api/fetch';

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
    <ul>
          {dataCast.map(({id, name, character, profile_path}) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              width="70"
              height="100"
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
