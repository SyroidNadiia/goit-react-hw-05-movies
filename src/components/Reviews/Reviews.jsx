import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../api/fetch';
import dateFormat from 'dateformat';
import {
  ReviewsContainer,
  ReviewItem,
  NoReviews,
  ReviewAuthor,
} from './Reviews.styled';

const Reviews = () => {
  const [dataReviews, setDataReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const handelFetchReviews = async () => {
      try {
        const { results } = await fetchReviews(movieId);
        setDataReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    handelFetchReviews(movieId);
  }, [movieId]);

  return (
    <ReviewsContainer>
      {dataReviews.length > 0 ? (
        <ul>
          {dataReviews.map(review => {
            return (
              <ReviewItem key={review.id}>
                <ReviewAuthor>{review.author}</ReviewAuthor>
                <p>{review.content}</p>
                <p>
                  {dateFormat(review.created_at, 'paddedShortDate', true)}
                </p>
              </ReviewItem>
            );
          })}
        </ul>
      ) : (
        <NoReviews>We dont have any reviews for this movie.</NoReviews>
      )}
    </ReviewsContainer>
  );
};
export default Reviews;
