import React from "react";
import { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/Footer"
import show from "../imgs/icons8-show-100.png"
import PhoneInput from "../components/PhoneInput";
import DateInput from "../components/DateInput";

function Registration(){
    const [isPassShowed, setPassShowed] = useState(false)

    return(
        <div className="Registration">
            <Nav/>
            <div className="login-main">MEMESHOP</div>

            <div className="reg-container">
                <div className="text-field reg-username">
                    <input type="text" name="reg-username" id="reg-username" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-username">Username</label>
                </div>
                <div className="text-field reg-password">
                    <input type={isPassShowed?"text":"password"} name="reg-password" id="reg-password" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-password">Password</label>
                    <img src={show} alt="Show password" className="show-pass" onClick={()=>{setPassShowed(!isPassShowed)}}/>
                </div>
                <div className="text-field reg-repeat-password">
                    <input type={isPassShowed?"text":"password"} name="reg-repeat-password" id="reg-repeat-password" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-repeat-password">Repeat password</label>
                </div>
                <div className="text-field reg-name">
                    <input type="text" name="reg-name" id="reg-name" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="name">Name</label>
                </div>
                <DateInput/>
                <div className="text-field reg-adress">
                    <input type="text" name="reg-adress" id="reg-adress" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-adress">Adress</label>
                </div>
                <div className="text-field reg-phone">
                    <PhoneInput/>
                    <label className="outlined-placeholder" htmlFor="reg-phone">Phone nubmer</label>
                </div>

            </div>

            <div className="button-submit button-reg">
                <div className="button-submit-text">Submit</div>
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


export default Registration;