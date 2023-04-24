import React from "react";

function Item({name, itemImage}){
    return(
        <div className="Item">
            <div className="item-rect"></div>
            <img src={itemImage} alt="" className="item-img" />
            <div className="item-text">{name}</div>
        </div>
    )
}

export default Item;