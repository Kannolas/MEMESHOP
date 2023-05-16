import React from "react";

function Modal({isActive, setActive, price}){
    if(!isActive)
        return null;
    return(
     <div className="Modal"></div>
    )
}

export default Modal;