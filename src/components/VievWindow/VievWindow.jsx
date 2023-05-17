import React, { useEffect, useState, Children, cloneElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconClose from "./images/close.svg";
import actionCloseCarousel from "../../actions/carousel/actionCloseCarousel";
import { UPDATE_VIEV_WINDOW_OPEN } from "../../reducers/openVievWindow";
import { useSimilarPhotoMutation } from "../../store/searchApi";
import "./VievWindow.css";

const VievWindow = ({ children, value }) => {
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([])
  const [data, {isLoading: laoding}] = useSimilarPhotoMutation();
  const similarity = async () => {
    console.log(localStorage.getItem("selectedPhoto"))
    const res = await fetch("http://localhost:8000/similarity", {
      headers: { "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`, },
      method: "POST",
      body: JSON.stringify({ image: value}),
    }).then((response) => response.json()).then((res)=>setPhotos(res))
  };

  const closeViev = () => {
    dispatch(UPDATE_VIEV_WINDOW_OPEN(false));
  };

  // const get = async () => {
  //   const t = await data(value).unwrap();
  //   setPhotos(t);
  // }
  useEffect(()=>{
    similarity()
  })

  return (
    <div className="viev__container">
      <button onClick={closeViev} className="viev__close">
        <img src={IconClose} alt="close" className="viev__close-botton" />
      </button>
      <div className="viev__main">
        <div className="viev__window">{children}</div>
        <div>
        <div className="viev__simular-img">
        {photos && photos.map((result, index) => ( 
          <img
          key={index}
          style={{ width: "125px", height: "125px" }} 
          src={result.url}
          alt={""}
        />))}
          </div>
        </div> 
      </div>

     
    </div>
  );
};

export default VievWindow;
