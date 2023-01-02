import React, { useState } from "react";
import Logo from "./Logo";
import { useGlobalContext } from "../context/weather_context";
const SearchBar = () => {
const { searchValue, handleChange, handleSearch, clearValues } =
  useGlobalContext();
  return (
    <nav className="navbar navbar-light bg-transparent pt-3 pb-4 search-city">
      <Logo />
      <form className="d-flex" onSubmit={handleSearch}>
        <div className="input-group mb-0">
          <span className="input-group-text">
            <i className="icon small white">
              <svg
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7Zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414Z"></path>
              </svg>
            </i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for city"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-search mx-4" type="submit">
          Search
        </button>
        <button className="btn btn-clear" type="button" onClick={clearValues}>
          Clear
        </button>
      </form>
    </nav>
  );
};

export default SearchBar;
