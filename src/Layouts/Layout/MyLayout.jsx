import React from "react";
import { Layout} from 'antd';


import MyMenu from "../../components/Menu/MyMenu";
import MyHeader from "../../components/Header/Header";

const { Sider, Content } = Layout;
const MyLayout = ({children}) => {
  return (
    <Layout className="layout">
      <MyHeader/>
      <Layout className="site-layout" style={{background:"white", flexDirection:"row"}}>
      
      <aside className="side__sider" style={{width:"250px"}}>
        <div className="logo" />
        <MyMenu />
      </aside>
      <Content className="site__content" style={{marginLeft:"60px"}}>
        {children}    
      </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;
