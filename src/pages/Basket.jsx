import React from "react";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import BasketItem from "../components/BasketItem";
import sreda from "../imgs/sreda.png"
import MyMap from "../components/MyMap";

function Basket(){
    function BasketLoaded(){
        let a = document.querySelectorAll(".nav-button")
        a.forEach(element => {
                element.classList.remove("checked");
        })
    }

    return(

    <div className="Basket" onLoad={BasketLoaded}>
        <Nav/>
        <div className="basket-main">BASKET</div>
        <div className="basket-container">
            <BasketItem  name={"sreda"} Basketimage={sreda} price ="50"/>
            <BasketItem  name={"sreda"} Basketimage={sreda} price ="50"/>
            <BasketItem  name={"sreda"} Basketimage={sreda} price ="50"/>
            <BasketItem  name={"sreda"} Basketimage={sreda} price ="50"/>
        </div>

        <div className="total">TOTAL: 5000$</div>

        <div className="adress">
            <div className="adress-text1 adress-text">ADRESS</div>
            <div className="adress-text2 adress-text">Vadkovsky pereulok 18 building 1</div>
        </div>

        <MyMap/>

        <Footer/>

        <div className="payment-text">PAYMENT METHODS:</div>
        <div className="payment-methods">
            <div className="card pay">&#9679; card</div>
            <div className="cash pay">&#9679; cash</div>
            <div className="cashtocourier pay">&#9679; by cash to the courier</div>
            <div className="cardtocourier pay">&#9679; by card to the courier</div>
            <div className="bypoints pay">&#9679; by points</div>
        </div>

        <div className="basket-order">
            <div className="basket-order-text">Order</div>
        </div>

    </div>
    )
}

export default Basket;