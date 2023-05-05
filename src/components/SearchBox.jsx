const SearchBox = ({ value, onChange, onClean }) => {
  const handelSubmit = event => {
    event.preventDefault();
    onClean();
  };
  return (
    <main>
      <form onSubmit={handelSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default SearchBox;