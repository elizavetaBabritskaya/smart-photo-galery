import React, {ReactNode} from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {RootState} from "../../store/store";


function NotAuthorizedLayout({children}) {
    const isAuth = useSelector((store) => store.authReducer.authorized);

    if (isAuth) {
        return <Navigate to="/"/>
    }
    return <>{children}</>
}

export default NotAuthorizedLayout;
