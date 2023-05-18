import React from "react";
import { useState } from "react";
import ModalPortal from "./ModalPortal";
import { isContentEditable } from "@testing-library/user-event/dist/utils";


function Modal({isActive, setActive, price, img, name}){
    if(!isActive)
        return null;
    return(
        <ModalPortal children={
                <div className={"modal-frame"} >
                    <div className="modal-content">
                        <div className="modal-item">
                            <div className="modal-item-rect"></div>
                            <img src={img} alt="" className="modal-item-img"/>
                            <div className="modal-item-text">{name}</div>
                        </div>
                        <div className="modal-price">Price: {price}$</div>
                        <div className="to-card">To card</div>
                    </div>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                    <div className="line line4"></div>
                    <div className="line line5"></div>
                    <div className="line line6"></div>
                </div>        
        } isActive={isActive}/>
    )
}

export default Modal;