import { useState } from 'react';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const formSubmit = e => {
  e.preventDefault();
  onSubmit(searchText);
  setSearchText('');
};

  return (
    <SearchContainer>
      <SearchForm onSubmit={formSubmit}>
        <SearchInput
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
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
