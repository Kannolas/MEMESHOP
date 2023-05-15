import React from "react";
import StarRating from "./StarRating";

function ReviewItem({name, img, review, rating}){
    return(
        <div className="ReviewItem">
            <div className="review-frame BasketItem-frame">
                <div className="BasketItem-rect"></div>    
                <img src={img} alt="" className="BasketItem-img" />
                <div className="BasketItem-name">{name}</div>
            </div>

            <div className="reviewItem-container">
                <div className="reviewItem-rect"></div>
                <div className="reviewItem-text">{review}</div>
                <StarRating stars = {rating}/>
            </div>
        </div>
    )
}

export default ReviewItem;