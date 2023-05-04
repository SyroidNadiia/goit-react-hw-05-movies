import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from './api/fetch';

const Reviews = () => {
  const [dataReviews, setDataReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const handelFetchReviews = async () => {
      try {
        const { results } = await fetchReviews(movieId);
        setDataReviews(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    handelFetchReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {dataReviews.map(review => {
        return (
          <li key={review.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`}
              width="70"
              height="100"
              alt={review.author}
            />
            <p>{review.author}</p>
            <p>{review.content}</p>
            <p>{review.created_at}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;
