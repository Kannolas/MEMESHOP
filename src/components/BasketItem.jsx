import React from "react";
import cancel from "../imgs/pngwing.com.png"

function BasketItem({name, Basketimage, price}){
   return( 
   <div className="BasketItem">
        <div className="BasketItem-frame">
            <div className="BasketItem-rect"></div>    
            <img src={Basketimage} alt="" className="BasketItem-img" />
            <div className="BasketItem-name">{name}</div>
        </div>
        <div className="BasketItem-info">
            <img className="delete-button" src={cancel} alt="delete" />
            <div className="BasketItem-price">Price: {price} $</div>
        </div>
        
    </div>
   )
}

export default BasketItem;