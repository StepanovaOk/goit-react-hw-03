const SearchBox = ({ filterValue, handleFilterChange }) => {
  return (
    <div>
      <p> Find contacts by name</p>
      <input
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};

export default SearchBox;
