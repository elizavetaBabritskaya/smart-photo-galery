import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DragAndDrop from "../DragAndDrop/DragAndDrop";
import './UploudFiles.css'

import IconDownLoads from './images/downloads.svg'
import { UPDATE_DROP } from "../../reducers/openDrop";



const UploadFiles = () => {


  const dispatch = useDispatch();
  const showingDropWindow = () => {
    dispatch(UPDATE_DROP(true));
    console.log("showing drag and drop open " + isShow);
  };

  const isShow = useSelector((store)=>store.isDropOpen.isDropOpen)
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

