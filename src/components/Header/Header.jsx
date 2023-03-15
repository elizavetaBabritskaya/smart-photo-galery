import React from "react";
import {Layout} from 'antd';

import './Header.css';
import logo from './images/logo.png';
import serch from './images/serch.png';

const { Header} = Layout;




const MyHeader = () => {
  return (
    <Header className="header"
    style={{
      background: "white",
    }}
  >
    <a className="header__logo">
      <img src={logo}/>
    </a>

    <div className="header__serch"></div>

    <div className="header__buttonsDownloads"></div>

    <div className="avatar"></div>
  </Header>
  );
};
export default MyHeader;