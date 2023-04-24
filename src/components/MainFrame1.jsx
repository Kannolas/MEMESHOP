import React from "react";
import { Link, NavLink } from "react-router-dom";

function MainFrame1(){
    return(
        <div className="MainFrame1">
            <div className="Main-Frame-container">
                <div className="mainFrame-scroll">
                    <div className="mainFrame-Scroll-text">Scroll</div>
                    <img className="mainFrame-Scroll-image" src="images/Scroll.png" alt="" />
                </div>
                <div className="mainFrame-data">
                    <div className="mainFrame-logo">
                        MEMESHOP
                    </div>
                    <div className="mainFrame-underlogo">
                    An international brand of Asian clothing with its production in Moscow. Comfort, aesthetics, the best materials, time-tested cut and custom prints.
                    </div>
                    <Link className="mainFrame-order-link" to={"/"}><div className="order-button-container mainFrame-order-button-container">
                        <div className="order-button mainFrame-order-button">
                            Order now
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default MainFrame1;