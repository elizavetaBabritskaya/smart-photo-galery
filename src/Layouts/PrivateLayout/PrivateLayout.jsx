import React, {ReactNode} from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import {RootState} from "../../store/store";

//localStorage.getItem("token") === "" || localStorage.getItem("token") === undefined
function PrivateLayout({children}) {
  const isAuth = useSelector((store) => store.authReducer.authorized);
  // console.log(localStorage.getItem("token"))
  // if (localStorage.getItem("token") === "" || localStorage.getItem("token") === undefined) {
  //   console.log(isAuth)
  //   return <Navigate to="/sign"/>
  // }
//   console.log(isAuth)
//   return <>{children}</>


  if (!isAuth) {
    return <Navigate to="/sign"/>
  }
  return <>{children}</>
}

export default PrivateLayout;
