import React from "react";
function About(){
    return(
        <div className="About">
        <div className="about-main">
            <div className="about-text-area">
                <div className="about-uppertext">
                    About
                </div>
                <div className="about-bottom-text">
                    Creative designers' clothing made from the best and durable materials specially for MEMESHOP.
                </div>
                <a className="about-link" href="">
                    <div className="order-button-container about-order-button-container">
                        <div className="order-button about-order-button">Order now</div>
                    </div>
                </a>
            </div>
            <img src="images/stone-island.png" className="about-img" alt="" />
        </div>
        <div className="about-rect"></div>
        </div>
    )
}

export default About;