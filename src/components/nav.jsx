import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Nav = function(){

const ButtonClicked = function(e){
    let a = [document.querySelector(".about"), document.querySelector(".roadmap"), document.querySelector(".minting"), document.querySelector(".catalog")]
    a.forEach(element => {
        if(e.target != element)
            element.classList.remove("checked");
    })
    
    
    e.target.classList.add("checked");
}
const WhiteIconButton = styled(IconButton)({
    color: '#fff', // Установка цвета на белый
    fontSize: '2.5rem', // Установка размера на 3rem
  '& svg': {
    fontSize: '3rem', // Установка размера иконки на 3rem
    marginTop: '-6px'
  }
  });


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

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
            <NavLink to={"/login"}><AccountBoxIcon sx={{fontSize:'3.5rem', color: '#fff', marginTop: '-5px'}}/></NavLink>
            <NavLink to={"/basket"}>
                <WhiteIconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon/>
                    </StyledBadge>
                </WhiteIconButton>
            </NavLink>
            {/* <img className="nav-button1" src="images/bracket.png" alt="" /> */}
            <a href="https://www.instagram.com" target="_blank"><img className="nav-button1" src="images/insta.svg" alt="" /></a>
            <a href="https://t.me/Kannolas" target="_blank"><img className="nav-button1" src="images/telegram.svg" alt="" /></a>

        </div>
        
    </div>
    <div className="nav-line"></div>
</div>

)
}

export default Nav;