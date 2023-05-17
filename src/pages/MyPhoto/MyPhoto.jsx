import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom/client";

import MyLayout from "../../Layouts/Layout/MyLayout";
import Carousel from "../../components/Carousel/Carousel";
import "./MyPhoto.css";

import {useGetPhotosQuery} from '../../store/api'
import { UPDATE_SETTING } from "../../reducers/openSetting";
import { UPDATE_VIEV_WINDOW_OPEN } from "../../reducers/openVievWindow";
import VievWindow from "../../components/VievWindow/VievWindow"

const MyPhoto = () => {
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [vievPhoto, setVievPhoto] = useState();
  const [chooses, setChooses] = useState(false);
  const dispatch = useDispatch();
  const isShowSetting = useSelector((store) => store.isSettingOpen.isSettingOpen);
  const isVievWindowOpen = useSelector((store)=> store.isVievWindowOpen.isVievWindowOpen)
  //localStorage.setItem("checked-radio", false)
  const {data = [], isLoading} = useGetPhotosQuery("",!JSON.parse(localStorage.getItem("checked-radio")) ? {pollingInterval: 3000}:"" );

//
  const addClassSelected = (value) => {
    if (selectedPhoto === value && isShowSetting) {
      return "selected";
    }
    return "";
  };

  const choose = (value) => {
    localStorage.setItem("checked-radio", true)
    setSelectedPhoto(value);
    dispatch(UPDATE_SETTING(true));
    const set = localStorage.setItem("selectedPhoto", value);
    setChooses(!chooses);
    console.log(chooses)
  };

  const showViev = (value) => {
    setVievPhoto(value)
    dispatch(UPDATE_VIEV_WINDOW_OPEN(true));
  };

  return (
    <MyLayout className="layout__myPhoto">    
      <h2 className="myPhoto__title">Мои фотографии</h2>
      <div className="myPhoto__all-albom">
        {!isLoading && data.map((result) => (          
              <div className="radioButton">
                <label for={`radio${result.url}`} >
                <input
                  id={`radio${result.url}`}
                  type="radio"
                  name={`radio${result.url}`}
                  value={`radio${result.url}`}
                  onChange={() => {choose(result.url)}}
                  checked={JSON.parse(localStorage.getItem("checked-radio")) ? result.checked: ""}
                />
                <span className="state"></span>
                </label>
                <button style={{ width: "150px", height: "150px" }} className="img__button" onClick={()=>showViev(result.url)} >
                  <img
                    style={{ width: "150px", height: "150px" }} 
                    className="album__photo"
                    src={result.url}
                    alt={""}
                  />
                </button>
              </div>
            
            
        ))}
      </div>
      {isVievWindowOpen && (
          <VievWindow value={vievPhoto}>
            <img src={vievPhoto} alt=""/>
          </VievWindow>
        )} 
    </MyLayout>
  );
};
export default MyPhoto;
