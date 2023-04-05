import React, { useState } from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import './UploudFiles.css'

import IconDownLoads from './images/downloads.svg'

const UploadFiles = () => {
  const [openDragAndDrop, setOpenDragAndDrop] = useState(false);


  const onFileChange = (files) => {
    console.log(files);
  }

  const openDragAndDropFunc = () => {
    setOpenDragAndDrop(!openDragAndDrop);
  }

return (
  <div>
     <button className="header__downloads" onClick={openDragAndDropFunc}> 
      <img className="downloads__icon" src={IconDownLoads} alt='downloads'/>
      Загрузить файл
      </button>
    {openDragAndDrop && (
      <div>
       <div className="open_window" onClick={openDragAndDropFunc}></div> 
      <DragAndDrop onFileChange={(files) => onFileChange(files)}/>
      </div>)}
  </div>
);
};
export default UploadFiles;

