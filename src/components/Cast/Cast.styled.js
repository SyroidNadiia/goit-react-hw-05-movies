import styled from "styled-components";

export const CastWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 12rem;
`;

export const CastImage = styled.img`
  width: 70px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

export const CastName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const CastCharacter = styled.p`
  margin: 0;
`;