import React from "react";
import { useState } from "react";
import ModalPortal from "./ModalPortal";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import FavoriteIcon from '@mui/icons-material/Favorite';


function Modal({isActive, setActive, price, img, name}){
    const [isLiked, setIsLiked] = useState(false);
    const  handleFavClick = ()=>{
        setIsLiked(!isLiked)
    }
    if(!isActive)
        return null;
    return(
        <ModalPortal children={
                <div className={"modal-frame"} onClick={(e)=>e.stopPropagation()}>
                    <FavoriteIcon sx={{marginLeft: '630px', marginTop: '100px', alignSelf: 'flex-end', zIndex:'999999', position:'absolute', fontSize:'3rem' }} className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleFavClick}/>
                    <div className="modal-content">
                        <div className="modal-item">
                            <div className="modal-item-rect"></div>
                            <img src={img} alt="" className="modal-item-img"/>
                            <div className="modal-item-text">{name}</div>
                        </div>
                        
                        <div className="modal-price">Price: {price}$</div>
                        <div className="to-card">To card</div>
                    </div>
                    <div className="line line1-1"></div>
                    <div className="line line2-2"></div>
                    <div className="line line3"></div>
                    <div className="line line4"></div>
                    <div className="line line5"></div>
                    <div className="line line6"></div>
                </div>        
        } isActive={isActive}/>
    )
}

export default Modal;