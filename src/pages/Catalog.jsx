import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import Item from "../components/Item";
import sreda from"../imgs/sreda.png";
import { useState, useEffect} from "react";
function catalogLoaded(){
    let a = document.querySelectorAll(".nav-button")
    a.forEach(element => {
            element.classList.remove("checked");
    })
    a[1].classList.add('checked')
}



function SizeInLettersClicked(e){
    e.target.classList.toggle("size-in-letters-checked")
}

function SizeInNumbersClicked(e){
    e.target.classList.toggle("size-in-letters-checked")
}


function TishsChange(e){
    const elems = document.querySelectorAll(".cat-container");
    
}
function PantsChange(e){
    
}
function SkirtsChange(e){
    
}
function JacketsChange(e){
    
}
function TyagiChange(e){
    
}




function Catalog(){
    const [isTishsChecked, setIsTishsChecked]=useState("true");
    const [currentHeight, setCurrentHeight] = useState(5568);
    const handleTishsBoxChange = ()=>{
        if(isTishsChecked)
            setCurrentHeight(currentHeight - 1100);
        else
            setCurrentHeight(currentHeight + 1100);
        setIsTishsChecked(!isTishsChecked);
        const elem = document.querySelector(".tishs")
        
        elem.classList.toggle("hidden")
    }
    useEffect(() => {
        const catalog = document.querySelector(".Catalog")
        catalog.style.height =`${currentHeight+950}px`

        const gallery = document.querySelector(".cat-gallery");
        gallery.style.height = `${currentHeight}px`;
      }, [currentHeight]);

    const [isPantsChecked, setIsPantsChecked]=useState("true");
    const handlePantsBoxChange = ()=>{
        if(isPantsChecked)
            setCurrentHeight(currentHeight - 1100);
        else
            setCurrentHeight(currentHeight + 1100);
        setIsPantsChecked(!isPantsChecked);
        const elem = document.querySelector(".pants")
        elem.classList.toggle("hidden")
        
    }

    const [isSkirtsChecked, setIsSkirtsChecked]=useState("true");
    const handleSkirtsBoxChange = ()=>{
        if(isSkirtsChecked)
            setCurrentHeight(currentHeight - 1100);
        else
            setCurrentHeight(currentHeight + 1100);
        setIsSkirtsChecked(!isSkirtsChecked);
        const elem = document.querySelector(".skirts")
        elem.classList.toggle("hidden")
    }

    const [isJacketsChecked, setIsJacketsChecked]=useState("true");
    const handleJacketsBoxChange = ()=>{
        if(isJacketsChecked)
            setCurrentHeight(currentHeight - 1100);
        else
            setCurrentHeight(currentHeight + 1100);
        setIsJacketsChecked(!isJacketsChecked);
        const elem = document.querySelector(".jackets")
        elem.classList.toggle("hidden")
    }

    const [isTyagiChecked, setIsTyagiChecked]=useState("true");
    const handleTyagiBoxChange = ()=>{
        if(isTyagiChecked)
            setCurrentHeight(currentHeight - 1100);
        else
            setCurrentHeight(currentHeight + 1100);
        setIsTyagiChecked(!isTyagiChecked);
        const elem = document.querySelector(".barhatnie-tyagi")
        elem.classList.toggle("hidden")
    }

    return(
        <div className="Catalog"  onLoad={catalogLoaded}>
            <Nav/>
            <div className="search-form">
                <input type="text"
                placeholder="Search..."
                className="search-input"
                />
            </div>
            

            <div className="filters"><span className="filters-text">FILTERS</span></div>

            <div className="filter">
                <div className="size">Size:</div>
                <div className="sizes-in-letters sizes">
                    <div   onClick={SizeInLettersClicked}  className="S s-name">S</div>
                    <div  onClick={SizeInLettersClicked} className="M s-name">M</div>
                    <div onClick={SizeInLettersClicked} className="L s-name">L</div>
                    <div onClick={SizeInLettersClicked} className="XL s-name">XL</div>

                </div>
                <div className="sizes-in-numbers sizes">
                    <div onClick={SizeInNumbersClicked} className="size-39 s-name">39</div>
                    <div onClick={SizeInNumbersClicked} className="size-40 s-name">40</div>
                    <div onClick={SizeInNumbersClicked} className="size-41 s-name">41</div>
                    <div onClick={SizeInNumbersClicked} className="size-42 s-name">42</div>
                </div>
                <div className="size">Categories:</div>
                <div className="checkboxes">
                    <div className="check-tishs checkbox-cont">
                        <input onChange={handleTishsBoxChange} type="checkbox" className="checkbox-tish checkbox" id="check-1" name="check-1" value={"T-SHIRTS"} checked={isTishsChecked}/>
                        <label htmlFor="check-1" className="label-tish checkbox-label">T-SHIRTS</label>
                    </div>
                    <div className="check-pants checkbox-cont">
                        <input onChange={handlePantsBoxChange} type="checkbox" className="checkbox-pants checkbox" id="check-2" name="check-1" value={"PANTS"} checked={isPantsChecked}/>
                        <label htmlFor="check-2" className="label-pants checkbox-label">PANTS</label>
                    </div>
                    <div className="check-skirts checkbox-cont">
                        <input onChange={handleSkirtsBoxChange} type="checkbox" className="checkbox-skirts checkbox" id="check-3" name="check-1" value={"SKIRTS"} checked={isSkirtsChecked}/>
                        <label htmlFor="check-3" className="label-skirts checkbox-label">SKIRTS</label>
                    </div>
                    <div className="check-jackets checkbox-cont">
                        <input onChange={handleJacketsBoxChange} type="checkbox" className="checkbox-jackets checkbox" id="check-4" name="check-1" value={"JACKETS"} checked={isJacketsChecked}/>
                        <label htmlFor="check-4" className="label-jackets checkbox-label">JACKETS</label>
                    </div>
                    <div className="check-tyagi checkbox-cont">
                        <input onChange={handleTyagiBoxChange} type="checkbox" className="checkbox-tyagi checkbox" id="check-5" name="check-1" value={"TYAGI"} checked={isTyagiChecked}/>
                        <label htmlFor="check-5" className="label-tyagi checkbox-label">BARHATNIE TYAGI</label>
                    </div>
                </div>

            </div>
            <div className="cat-gallery" >
                <div className="tishs cat-container">
                    <div className="tishs-main cat-main-">
                        <div className="tishs-main-text cat-main-text">
                            T-SHIRTS
                        </div>
                        <div className="tishs-main-bot-text cat-main-bottom-text">
                            T-shirts are made of cotton with love for your mom
                        </div>
                    </div>
                    <div className="tishs-container cat-main-container">
                        <div className="tishs-container1 cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                        <div className="tishs-container2 cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                    </div>
                </div>
                <div className="pants  cat-container">
                    <div className="pants-main  cat-main">
                        <div className="pants-main-text cat-main-text">PANTS</div>
                        <div className="pants-main-bottom-text cat-main-bottom-text">Pants are made of cotton with love for your mom</div>
                    </div>
                    
                    <div className="pants-container cat-main-container">
                        <div className="pants-item-container cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                        <div className="pants-item-container cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                    </div>
                </div>

                <div className="skirts cat-container">
                    <div className="cat-main">
                        <div className="cat-main-text">SKIRTS</div>
                        <div className="cat-main-bottom-text">Pants are made of cotton with love for your dad</div>
                    </div>
                    <div className="cat-main-container">
                        <div className="cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                        <div className="cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                    </div>
                </div>

                <div className="jackets cat-container">
                    <div className="cat-main">
                        <div className="cat-main-text">JACKETS</div>
                        <div className="cat-main-bottom-text">Pants are made of cotton with love for your family</div>
                    </div>
                    <div className="cat-main-container">
                        <div className="cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                        <div className="cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                    </div>
                </div>

                <div className="barhatnie-tyagi cat-container">
                    <div className="cat-main">
                        <div className="cat-main-text">BARHATNIE TYAGI</div>
                        <div className="cat-main-bottom-text">Pants are made of cotton with love for your family</div>
                    </div>
                    <div className="cat-main-container">
                        <div className="cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                        <div className="cat-main-container1">
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                            <Item name={"Sreda"} itemImage={sreda} ></Item>
                        </div>
                    </div>
                </div>

            </div>

            {/* <Item name={"Sreda"} itemImage={sreda} ></Item> */}
            <Footer/>
        </div>
    )
}

export default Catalog;