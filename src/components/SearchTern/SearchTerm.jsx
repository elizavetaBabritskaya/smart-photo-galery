import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./images/search.svg";

import "./SearchTern.css";

const SearchTern = () => {
  const navigate = useNavigate();
  const handleSearch = async () => {
    const input = document.getElementsByClassName("search__input")[0];

    if (input) {
      const text = input.value;
      localStorage.setItem("input_text", text);
      navigate("/search")
    }
  };

  return (
    <form className="header__search">
        <button type="submit" onClick={handleSearch} className="search__button">
          {" "}
          <img src={SearchIcon} alt="search" />{" "}
        </button>
      <input type="text" className="search__input" placeholder="Поиск фото" />
    </form>
  );
};

export default SearchTern;
