import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom/client";

import MyLayout from "../../Layouts/Layout/MyLayout";
import Carousel from "../../components/Carousel/Carousel";
import "./Search.css";
// import getSearchPhoto from "../../actions/getSearchPhoto/actionGetSearchPhoto";
import openCarousel from "../../actions/carousel/actionOpenCarousel";
import { UPDATE_SETTING } from "../../reducers/openSetting";
import { useSearchPhotoQuery } from "../../store/searchApi";
import { UPDATE_VIEV_WINDOW_OPEN } from "../../reducers/openVievWindow";
import VievWindow from "../../components/VievWindow/VievWindow";

const Search = () => {
  const isVievWindowOpen = useSelector((store)=> store.isVievWindowOpen.isVievWindowOpen)
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [vievPhoto, setVievPhoto] = useState();
  const [chooses, setChooses] = useState(false);
  const dispatch = useDispatch();
  const isShowSetting = useSelector((store) => store.isSettingOpen.isSettingOpen);
  const {data= [], isLoading} = useSearchPhotoQuery(localStorage.getItem("input_text"), !JSON.parse(localStorage.getItem("checked-radio")) ? {pollingInterval: 2000} :"")


  const addClassSelected = (value) => {
    if (selectedPhoto === value && isShowSetting) {
      return "selected";
    }
    return "";
  };

  const choose = (value) => {
    setSelectedPhoto(value);
    dispatch(UPDATE_SETTING(true));
    const set = localStorage.setItem("selectedPhoto", value);
    localStorage.setItem("checked-radio", true)
    setChooses(!chooses);
    console.log(chooses)
  };

  const showViev = (value) => {
    setVievPhoto(value)
    dispatch(UPDATE_VIEV_WINDOW_OPEN(true));
  };

  return (
    <MyLayout className="layout__myPhoto">
      <h2 className="myPhoto__title">{localStorage.getItem("input_text")}</h2>
      <div className="myPhoto__all-albom">
        {!isLoading && data.map((result) => (
          <>
          
            {(
              <div className="radioButton">
              <label for={`radio${result.url}`} >
              <input
                id={`radio${result.url}`}
                type="radio"
                name="radio"
                value={`radio${result.url}`}
                onChange={() => {choose(result.url)}}
                checked={JSON.parse(localStorage.getItem("checked-radio"))}
              />
              <span className="state"></span>
              </label>
                <button className="img__button" onClick={()=>showViev(result.url)}>
                  <img
                    style={{ width: "150px", height: "150px" }}
                    className="album__photo"
                    src={result.url}
                    alt={""}
                  />
                </button>
              </div>
            )}
          </>
        ))}
      </div>
      {isVievWindowOpen && (
          <VievWindow>
            <img src={vievPhoto} alt=""/>
          </VievWindow>
        )} 
    </MyLayout>
  );
};
export default Search;
