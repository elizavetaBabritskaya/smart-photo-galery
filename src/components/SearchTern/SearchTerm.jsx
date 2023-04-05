import React from "react";
import SearchIcon from './images/search.svg'

import './SearchTern.css'

const SearchTern = () => { 
return (
  <div className="header__search"> 
    <button type="submit" className="search__button"> <img src={SearchIcon} alt='search'/> </button>
    <input type="text" className="search__input" placeholder="Поиск фото"/>
  </div>
);
};


export default SearchTern;