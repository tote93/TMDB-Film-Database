import React from "react";
import requests from "../requests";
import Row from "../components/Row";
import "./styles/Search.css";
import { useState } from "react";

function Search() {
  // The query inserted by the user and the status variable to display the row
  const [querySearch, setQuerySearch] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);

  // Control the main events (click, and press Enter Key) to search
  const handleClick = () => {
    if (querySearch) setSearchStatus(true);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && querySearch) setSearchStatus(true);
  };
  const handleChange = (e) => {
    setQuerySearch(e.target.value.replace(/[^\w\s]/gi, ""));
    if (searchStatus) setSearchStatus(false);
  };
  return (
    <div className="search">
      <div className="search__controls">
        <h1 className="search__title">Search</h1>
        <div className="search__searchContainer">
          <input
            placeholder="Type the movie to search..."
            autoFocus
            type="text"
            required
            value={querySearch}
            onChange={handleChange}
            className="search__input"
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleClick} className="search__btn">
            Search
          </button>
        </div>
      </div>
      <div className="search__results">
        {searchStatus && (
          <Row
            title="Search"
            fetchUrl={requests.fetchSearchMovie + querySearch}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
