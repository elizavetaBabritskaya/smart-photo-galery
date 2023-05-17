import React, {ReactNode} from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import {RootState} from "../../store/store";


function PrivateLayout({children}) {
  const isAuth = useSelector((store) => store.authReducer.authorized);

  if (!isAuth) {
    return <Navigate to="/sign"/>
  }
  return <>{children}</>
}

export default PrivateLayout;
