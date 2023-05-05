const SearchBox = ({ value, onChange }) => {
    const handelSubmit = event => {
        event.preventDefault();
    }
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
}

export default SearchBox;