import React, { useState } from "react";
import "./SearchBar.css";

import searchIcon from "../../assets/dashboard_icons/search.png";

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <img className="search-button" src={searchIcon} alt="" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyUp={handleSearch}
        className="search-input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
