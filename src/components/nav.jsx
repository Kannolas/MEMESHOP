import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = function(){

const ButtonClicked = function(e){
    let a = [document.querySelector(".about"), document.querySelector(".roadmap"), document.querySelector(".minting"), document.querySelector(".catalog")]
    a.forEach(element => {
        if(e.target != element)
            element.classList.remove("checked");
    })
    
    
    e.target.classList.add("checked");
}


return(
<div className="Nav">
    <div className="nav-links">
        <div className="nav-buttons">
            <NavLink to="/" activeClassName="checked"><div onClick={ButtonClicked} className="nav-button about checked">About</div></NavLink>
            <NavLink to={"/catalog"}><div onClick={ButtonClicked}  className="nav-button catalog">Catalog</div></NavLink>
            <NavLink to={"/"}><div onClick={ButtonClicked} className="nav-button roadmap ">Favorites</div></NavLink>
            <NavLink to={"/reviews"}><div onClick={ButtonClicked} className="nav-button minting ">Reviews</div></NavLink>
            
        </div>
        

        <div className="nav-buttons2">
            <NavLink to={"/login"}><img className="nav-button1" src="images/PA.png" alt="" /></NavLink>
            <NavLink to={"/basket"}><img className="nav-button1" src="images/bracket.png" alt="" /></NavLink>
            <a href="https://www.instagram.com" target="_blank"><img className="nav-button1" src="images/insta.svg" alt="" /></a>
            <a href="https://t.me/Kannolas" target="_blank"><img className="nav-button1" src="images/telegram.svg" alt="" /></a>

        </div>
        
    </div>
    <div className="nav-line"></div>
</div>

)
}

export default Nav;