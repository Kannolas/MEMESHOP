import React from "react";

function Footer(){
    return(
        <div className="Footer">
            <div className="footer-rect1"></div>
            <div className="footer-rect2"></div>
            <div className="since">Since 2023</div>
            <div className="footer1">
                <img src="footerLogo" alt="" className="logo" />
                <div className="supp">Support</div>
                <div className="term">Term of service</div>
                <div className="licence">License</div>
            </div>
            <div className="footer2">
                <div className="divider divider1"></div>
                <div className="firstLink">First link</div>
                <div className="secondLink">Second link</div>
                <img src="images/footerFacebook.svg" alt="" className="footerfacebook" />
                <img src="images/footerInstagram.svg" alt="" className="footerInstagram" />
                <img src="images/footerTwitter.svg" alt="" className="footerTwitter" />
                <div className="divider divider2"></div>
            </div>
            <div className="footer3">
                <div className="impression">Give yourself a vivid impression.</div>
                <div className="idb">IDB-21-01</div>
                <a href="#"><img src="images/FooterForm.png" alt="" className="footer-form3" /></a>
            </div>
            
        </div>
    )
}

export default Footer;