import React from "react";
import Nav from "../components/nav"
import Footer from "../components/Footer";

function InfoSample({main, info}){
    return(
    <div className="InfoSample">
        <Nav/>
        <div className="main-info"><div className="main-info-text">{main}</div></div>
        <div className="text-info"><div className="text-info-text">{info}</div></div>
        <Footer/>
    </div>
    )
}


export default InfoSample;