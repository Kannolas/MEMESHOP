import React from "react";


function BasketItem({name, Basketimage, price}){
   return( 
   <div className="BasketItem">
        <div className="BasketItem-frame">
            <div className="BasketItem-rect"></div>    
            <img src={Basketimage} alt="" className="BasketItem-img" />
            <div className="BasketItem-name">{name}</div>
        </div>
        <div className="BasketItem-info">
            <div className="BasketItem-price">Price: {price} $</div>
        </div>
        
    </div>
   )
}

export default BasketItem;