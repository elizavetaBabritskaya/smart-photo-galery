import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import MyLayout from "./Layouts/Layout/MyLayout";

function Router() {
  return (
   <BrowserRouter> 
      <Routes>
        <Route path='/' element={<MyLayout/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
