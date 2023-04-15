import React from "react";



const Nav = function(){

const ButtonClicked = function(e){
    let a = [document.querySelector(".about-button"), document.querySelector(".roadmap"), document.querySelector(".minting"), document.querySelector(".catalog")]
    a.forEach(element => {
        if(e.target!= element)
            element.classList.remove("checked");
    })
    
    
    e.target.classList.add("checked");
}

return(
<div className="Nav">
    <div className="nav-links">
        <div className="nav-buttons">
            <a href="#" onClick={ButtonClicked} className="nav-button about-button ">About</a>
            <a href="#" onClick={ButtonClicked} className="nav-button roadmap checked">Roadmap</a>
            <a href="#" onClick={ButtonClicked} className="nav-button minting">Minting</a>
            <a href="#" onClick={ButtonClicked} className="nav-button catalog">Catalog</a>
        </div>

        <div className="nav-buttons2">
            <a href="#"><img className="nav-button1" src="images/PA.png" alt="" /></a>
            <a href="#"><img className="nav-button1" src="images/bracket.png" alt="" /></a>
            <a href="#"><img className="nav-button1" src="images/insta.svg" alt="" /></a>
            <a href="#"><img className="nav-button1" src="images/telegram.svg" alt="" /></a>

        </div>
    </div>
    <div className="nav-line"></div>
</div>

)
}

export default Nav;