import React from "react";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import sreda from "../imgs/sreda.png"
import ReviewItem from "../components/ReviewItem";

function Reviews(){
    function ReviewsLoaded(){
        let a = document.querySelectorAll(".nav-button")
        a.forEach(element => {
                element.classList.remove("checked");
        })
        a[3].classList.add('checked')
    }

    return(
        <div className="Reviews" onLoad={ReviewsLoaded}>
            <Nav/>
            <div className="reviews-main">REVIEWS</div>
            <div className="reviews-container">
                <ReviewItem name ="sreda" img ={sreda} review = "norm" rating={3} />
                <ReviewItem name ="sreda" img ={sreda} review = "prikolno" rating={5} />
                <ReviewItem name ="sreda" img ={sreda} review = "bomba" rating={5} />
                
            </div>


            <div className="bottom-logo">
                <div className="memeshop">MEMESHOP</div>
                <img src="../imgs/dot.svg" alt="" className="bottom-logo-dot" />
                <div className="memeshop">MEMESHOP</div>
                <img src="../imgs/dot.svg" alt="" className="bottom-logo-dot" />
                <div className="memeshop">MEMESHOP</div>
                <img src="../imgs/dot.svg" alt="" className="bottom-logo-dot" />
                <div className="memeshop">MEMESHOP</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Reviews;