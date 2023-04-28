import React from "react";
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div className="Not-Found">
            <div className="notFound-404">404 :&#41;</div>
            <div className="notFound-text">This page is not found :&#41;</div>
            <Link to={"/"} ><div className="nav-button button-404">return to home :&#41;</div></Link>
        </div>
    )
}

export default NotFound