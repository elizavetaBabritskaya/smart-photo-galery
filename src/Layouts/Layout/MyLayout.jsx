import React from "react";
import { Layout} from 'antd';


import MyMenu from "../../components/Menu/MyMenu";
import MyHeader from "../../components/Header/Header";

const { Sider, Content } = Layout;
const MyLayout = () => {
  return (
    <Layout className="layout">
      <MyHeader/>
      <Layout className="site-layout" style={{background:"white"}}>
      
      <Sider style={{
        background: "white",
        padding: 0,
      }}>
        <div className="logo" />
        <MyMenu />
      </Sider>
      <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "white",
            display:"flex",
            flexDirection: "row",
          }}
        >
               
        </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;
