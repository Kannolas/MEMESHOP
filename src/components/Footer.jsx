import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer(){
    return(
        <div className="Footer">
            <div className="footer-rect1"></div>
            <div className="footer-rect2"></div>
            <div className="since">Since 2023</div>
            <div className="footer1">
                <img src="footerLogo" alt="" className="logo" />
                {/* <Link to={"/"}><div className="supp">Support</div></Link> */}
                <Link to={"/TermsOfService"}><div className="term">Term of service</div></Link>
                <Link to={"/License"}><div className="licence">License</div></Link>
            </div>
            <div className="footer2">
                <div className="divider divider1"></div>
                <Link to={"/"}><div className="firstLink">First link</div></Link>
                <Link to={"/"}><div className="secondLink">Second link</div></Link>
                <a href="https://ru-ru.facebook.com" target="_blank"><img src="images/footerFacebook.svg" alt="" className="footerfacebook" /></a>
                <a href="https://www.instagram.com" target="_blank"><img src="images/footerInstagram.svg" alt="" className="footerInstagram" /></a>
                <a href="https://twitter.com" target="_blank"><img src="images/footerTwitter.svg" alt="" className="footerTwitter" /></a>   
                <div className="divider divider2"></div>
            </div>
            <div className="footer3">
                <div className="impression">Give yourself a vivid impression.</div>
                <div className="idb">IDB-21-01</div>
                <a href="https://t.me/Kannolas" target="_blank"><img src="images/FooterForm.png" alt="" className="footer-form3" /></a>
            </div>
            
        </div>
    )
}

export default Footer;