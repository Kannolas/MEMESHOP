import React from "react";
import { useState } from "react";
import Modal from "./Modal";

function Item({name, itemImage}){
    const [isModalActive, setModalActive] = useState(false);
    return(
        <div className="Item" onClick={()=>setModalActive(!isModalActive)}>
            <div className="item-rect"></div>
            <img src={itemImage} alt="" className="item-img" />
            <div className="item-text">{name}</div>
            <Modal isActive = {isModalActive} setActive ={setModalActive} price ={50} img = {itemImage} name={name}/>
        </div>
    )
}

export default Item;