import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`;

 export const LoaderTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
`;

export const LoaderSvg = styled.svg`
  width: 64px;
  height: 64px;
  animation: ${rotate} 1s linear infinite;
`;

export const LoaderPath = styled.path`
  clip-rule: evenodd;
  fill: currentColor;
  fill-rule: evenodd;
`;