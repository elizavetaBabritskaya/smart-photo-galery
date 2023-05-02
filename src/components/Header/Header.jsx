import React from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import UploadFiles from "../UploadFiles/UploudFiles";

import "./Header.css";

import deleteImage from "./images/delete.svg";
import addImage from "./images/add.svg";
import menuImage from "./images/menu.svg"
import closeImage from "./images/close.svg"
import logo from "./images/logo.svg";
import Link from "antd/es/typography/Link";
import SearchTern from "../SearchTern/SearchTerm";
import closeSetting from "../../actions/settings/actionCloseSetting";

const { Header } = Layout;

const hostForDelete = "http://localhost:8080/deleteImage";

const MyHeader = () => {
  const dispatch = useDispatch();
  const isSetting = useSelector((state) => state.settingReducer.isOpen);

  const closeSet = () => {
    dispatch(closeSetting())
  }

  const deletePhoto = async () => {
    const res = await fetch(hostForDelete, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify({ files: localStorage.getItem("selectedPhoto") }),
    }).then(dispatch(closeSetting()));
  };

  return (
    <>
      {!isSetting && (
        <Header
          className="header"
          style={{
            background: "white",
          }}
        >
          <Link href="#" className="header__logo">
            <img alt="" src={logo} />
          </Link>

          <SearchTern />
          <UploadFiles />
          <div className="avatar"></div>
        </Header>
      )}

      {isSetting && (
        <Header
          className="header__setting"
          style={{
            background: "#DADCEA",
          }}
        >
          <div className="group-button">
            <img src={addImage} alt="add" style={{marginRight: "25px"}} />
            <button onClick={deletePhoto} style={{marginRight: "34px"}} className="button-delete">
              <img src={deleteImage} alt="delete" />
            </button>
            <img src={menuImage} style={{width: "15px", height:"15px" ,backgroundRepeat:"no-repeat", marginTop: "5px", marginRight: "34px"}} alt="menu"/>
            <button onClick={closeSet} style={{marginRight: "34px", marginTop: "5px"}} className="button-delete">
              <img src={closeImage} alt="delete" />
            </button>
          </div>
        </Header>
      )}
    </>
  );
};
export default MyHeader;
