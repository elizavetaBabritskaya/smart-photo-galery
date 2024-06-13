import React, {ReactNode} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate, Navigate} from "react-router-dom";


function NotAuthorizedLayout({children}) {
    const isAuth = useSelector((store) => store.authReducer.authorized);
    // const navigate = useNavigate()
    // if (isAuth) {
    //     return navigate("/")
    // }
    // return <>{children}</>
    if (isAuth) {
        return <Navigate to="/"/>
    }
    return <>{children}</>
}

export default NotAuthorizedLayout;
