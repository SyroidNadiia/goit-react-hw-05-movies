import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBox.styled';

const SearchBox = ({ value, onChange, onClean }) => {
  const handelSubmit = event => {
    event.preventDefault();
  };
  
  return (
    <SearchContainer>
      <SearchForm onSubmit={handelSubmit}>
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
