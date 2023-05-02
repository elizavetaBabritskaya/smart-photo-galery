import React from "react";
import SearchIcon from './images/search.svg'

import './SearchTern.css'


const SearchTern = () => { 
  const handleSearch = async () => {

    const input = document.getElementsByClassName("search__input")[0];
    
    if(input) {
      const text = input.value
      const res = await fetch(`http://localhost:8080/search=${text}`, {
      method: "GET",    
    });
    }
  };

return (
  <div className="header__search"> 
    <button type="submit" className="search__button" onClick={handleSearch}> <img src={SearchIcon} alt='search'/> </button>
    <input type="text" className="search__input" placeholder="Поиск фото"/>
  </div>
);
};


export default SearchTern;