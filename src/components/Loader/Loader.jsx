import {
  LoaderContainer,
  LoaderContent,
  LoaderTitle,
  LoaderSvg,
  LoaderPath,
} from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderContent>
        <LoaderTitle>Loading</LoaderTitle>
        <LoaderSvg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <LoaderPath
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
          />
        </LoaderSvg>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default Loader;
