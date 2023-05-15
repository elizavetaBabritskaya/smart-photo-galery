import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import MyPhoto from "./pages/MyPhoto/MyPhoto";
import Search from "./pages/Search/Search";

function Router() {
  return (
   <BrowserRouter> 
      <Routes>
        <Route path='/' element={<MyPhoto/>}/> 
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
