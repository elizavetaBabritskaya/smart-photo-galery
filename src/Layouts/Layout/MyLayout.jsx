import React from "react";
import { Layout} from 'antd';


import MyMenu from "../../components/Menu/MyMenu";
import MyHeader from "../../components/Header/Header";
import { useSelector } from "react-redux";
import DragAndDrop from "../../components/DragAndDrop/DragAndDrop";

const {Content } = Layout;
const MyLayout = ({children}) => {
  const isDropOpen = useSelector((store)=> store.isDropOpen.isDropOpen)
  return (
    <Layout className="layout" style={{maxWidth:"1920px", width:"100%"}}>
      {isDropOpen && <div>
        <div className="open_window"></div> 
      <DragAndDrop/>
      </div>} 
      <MyHeader/>
      <Layout className="site-layout" style={{background:"white", flexDirection:"row"}}>
      
      <aside className="side__sider" style={{maxWidth:"288px", width:"100%", marginTop:"44px"}}>
        <div className="logo" />
        <MyMenu />
      </aside>
      <Content className="site__content" style={{marginLeft:"71px", marginTop:"44px"}}>
        {children}    
      </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;
