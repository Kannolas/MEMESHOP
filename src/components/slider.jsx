import React from "react"; 
import Item from "./Item";
import sreda from "../imgs/sreda.png"
import { useState, useEffect } from "react";
import axios from "axios";

function Slider() {
  const [production, setProduction] = useState([]);
  useEffect(()=>{
    axios.get("https://localhost:7017/api/Products/4").then(response =>{
      setProduction(production)
      console.log(production)
    }).catch(error =>{
      console.log(error)
    })
  }, [])
  function MoveSlider() {
    const elems = document.querySelectorAll('.slider-item');
    const elems1 = document.querySelectorAll('.slider-item1');
    const orders1 = Array.from(elems).map((elem) => Number(getComputedStyle(elem).order));
    const margins1 = Array.from(elems).map((elem) => getComputedStyle(elem).marginTop);
    const orders = Array.from(elems).map((elem) => Number(getComputedStyle(elem).order));
    const margins = Array.from(elems).map((elem) => getComputedStyle(elem).marginTop);
  
    for (let i = 0; i < elems.length; i++) {
      const newOrder = (orders[i] + 1) % elems.length;
      const newMargin = margins[(i + 1) % elems.length];
      elems[i].style.marginTop = newMargin 
      elems[i].style.order = newOrder;
      elems1[i].style.marginTop = newMargin;
      elems1[i].style.order = newOrder;


      elems[i].style.opacity = 0;
      elems1[i].style.opacity = 0;
      setInterval(()=>{
        elems1[i].style.opacity = Number(getComputedStyle(elems1[i]).opacity) + 0.1;
        if(Number(getComputedStyle(elems1[i]).opacity) + 0.1 == 1)
          clearInterval()
      

        elems[i].style.opacity = Number(getComputedStyle(elems[i]).opacity) + 0.1;
        if(Number(getComputedStyle(elems[i]).opacity) + 0.1 == 1)
          clearInterval()
      }, 70 )




    }
    

  }
  return (  
    <div className="Slider">
        <div className="slider-cont">
          <div className="item1 slider-item"><Item  name={"sreda"} itemImage={sreda} /></div>
          <div className="item2 slider-item"><Item  name={"sreda"} itemImage={sreda} /></div>
          <div className="item3 slider-item"><Item  name={"sreda"} itemImage={sreda} /></div>
          <div className="item4 slider-item"><Item  name={"sreda"} itemImage={sreda} /></div>
          <div className="item5 slider-item"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item6 slider-item"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item7 slider-item"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item8 slider-item"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item9 slider-item"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item10 slider-item"><Item  name={"sreda"} itemImage={sreda}/></div>
        </div>
        <div className="butt" onClick={MoveSlider}><img src="/images/arrow.png" className="arrow" alt="" /></div>
        <div className="slider-cont1 slider-cont">
          <div className="item-1-1 slider-item1"><Item  name={"sreda"} itemImage={sreda} style="transition: rotate(-7.03deg)"/></div>
          <div className="item-1-2 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item-1-3 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item-1-4 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item-1-5 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item-1-6 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item-1-7 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item-1-8 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item-1-9 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
          <div className="item-1-10 slider-item1"><Item  name={"sreda"} itemImage={sreda}/></div>
        </div>
    </div>

  );
}

export default Slider;