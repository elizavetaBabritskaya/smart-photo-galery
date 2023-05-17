import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import MyPhoto from "./pages/MyPhoto/MyPhoto";
import Regestration from "./pages/Registration/Registartion";
import Search from "./pages/Search/Search";
import SignIn from "./pages/SignIn/SignIn";
import PublicLayout from "./Layouts/PublicLayout/PublicLayout";
import PrivateLayout from "./Layouts/PrivateLayout/PrivateLayout";

function Router() {
  return (
   <BrowserRouter> 
      <Routes>
        <Route path='/' element={<PrivateLayout><MyPhoto/></PrivateLayout>}/> 
        <Route path='/search' element={<PrivateLayout> <Search/></PrivateLayout>}/>
        <Route path='/registration' element={<PublicLayout><Regestration/></PublicLayout>}/>
        <Route path="/sign" element={<PublicLayout> <SignIn/></PublicLayout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
