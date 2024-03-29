import styles from "./SearchBox.module.css";

const SearchBox = ({ filterValue, handleFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <p> Find contacts by name</p>
      <input
        className={styles.inputField}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};

export default SearchBox;
