import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import openDropWindow from "../../actions/dropWindow/actionOpenDropWindow";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import './UploudFiles.css'

import IconDownLoads from './images/downloads.svg'



const UploadFiles = () => {


  const dispatch = useDispatch();
  const showingDropWindow = () => {
    console.log("click");
    dispatch(openDropWindow());
  };

  const isShow = useSelector((state)=>state.dropReducer.isDropOpen)
  const onFileChange = (files) => {
    console.log(files);
  }


return (
  <div>
     <button className="header__downloads" onClick={showingDropWindow}> 
      <img className="downloads__icon" src={IconDownLoads} alt='downloads'/>
      Загрузить файл
      </button>
      {isShow && <div>
        <div className="open_window" onClick={showingDropWindow}></div> 
      <DragAndDrop onFileChange={(files) => onFileChange(files)}/>
      </div>}
  </div>
);
};
export default UploadFiles;

