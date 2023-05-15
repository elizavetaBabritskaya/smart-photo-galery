import React, { useEffect, useState, Children, cloneElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import IconClose from "./images/close.svg";
import actionCloseCarousel from "../../actions/carousel/actionCloseCarousel";
import { UPDATE_VIEV_WINDOW_OPEN } from "../../reducers/openVievWindow";
import "./VievWindow.css";

const VievWindow = ({ children }) => {
  const dispatch = useDispatch();

  const closeViev = () => {
    dispatch(UPDATE_VIEV_WINDOW_OPEN(false));
  };

  return (
    <div className="viev__container">
      <button onClick={closeViev} className="viev__close">
        <img src={IconClose} alt="close" className="viev__close-botton" />
      </button>
      <div className="viev__main">
        <div className="viev__window">{children}</div>
        <div>
        <div className="viev__simular-img">
          <div style={{width: "125px", height:"125px", background:"coral"}}></div>
          <div style={{width: "125px", height:"125px", background:"coral"}}></div>
          <div style={{width: "125px", height:"125px", background:"coral"}}></div>
          <div style={{width: "125px", height:"125px", background:"coral"}}></div>
          <div style={{width: "125px", height:"125px", background:"coral"}}></div>
          <div style={{width: "125px", height:"125px", background:"coral"}}></div>
          <div style={{width: "125px", height:"125px", background:"coral"}}></div>
          <div style={{width: "125px", height:"125px", background:"coral"}}></div>
          </div>
        </div> 
      </div>

     
    </div>
  );
};

export default VievWindow;
