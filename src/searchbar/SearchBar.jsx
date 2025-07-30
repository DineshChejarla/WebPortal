import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search posts...",
  className = "",
}) => {
  return (
    <div className={`${styles.searchContainer} ${className}`}>
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span className={styles.searchIcon}>🔍</span>
    </div>
  );
};

export default SearchBar;
