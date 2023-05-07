import styled from "styled-components";

export const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;

  img {
    width: 70px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    text-align: center;
  }
`;

export const NoReviews = styled.p`
  text-align: center;
`;
