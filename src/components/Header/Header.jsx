import React from "react";
import {Layout} from 'antd';

import UploadFiles from "../UploadFiles/UploudFiles";

import './Header.css';
import logo from './images/logo.svg';
import Link from "antd/es/typography/Link";
import SearchTern from "../SearchTern/SearchTerm";

const { Header} = Layout;




const MyHeader = () => {  
  return (
    <Header className="header"
    style={{
      background: "white",
    }}
  >
    <Link href="#" className="header__logo">
      <img alt="" src={logo}/>
    </Link>

    <SearchTern/>
    <UploadFiles/>
    <div className="avatar"></div>
  </Header>
  );
};
export default MyHeader;