import React from "react";
import Nav from "../components/nav";
import Footer from "../components/Footer";

function Login(){
    return(
        <div className="Login">
            <Nav/>
            <div className="login-main">MEMESHOP</div>

            <div className="login-container">
                <div className="text-field login-username">
                    <input type="text" name="username" id="username" className="outlined"/>
                    <label className="outlined-placeholder" htmlFor="Username">Username</label>
                </div>
                <div className="text-field login-password">
                    <input type="text" name="password" id="password" className="outlined"/>
                    <label className="outlined-placeholder" htmlFor="password">Password</label>
                </div>
                
                
                
            </div>

            <div className="donthaveacc">Don't have an account?</div>
            <div className="button-submit button-login">Log in</div>
            <div className="memeshop">MEMESHOP</div>
            <Footer/>
        </div>
    )
}

export default Login;