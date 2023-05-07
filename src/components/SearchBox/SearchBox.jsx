import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBox.styled';

const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <SearchContainer>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          value={value}
          onChange={onChange}
          type="text"
          autoComplete="off"
          autoFocus
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBox;
