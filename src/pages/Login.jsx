import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import show from "../imgs/icons8-show-100.png"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login(){
    const [isPassShowed, setPassShowed] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword]=useState("")
    const navigate = useNavigate();
    const HandleSubmit = (event)=>{
        event.preventDefault();
        axios
            .post("https://localhost:7017/api/Authorization/login", {
            login: username, password: password})
            .then((response) => {
                localStorage.setItem("isAuth", 1)
                localStorage.setItem("login", username)
                console.log(response)
                navigate('/Profile')
                    }).catch((error)=>{ 
                        const placeholders = document.querySelectorAll(".outlined-placeholder")
                        placeholders.forEach((elem)=>{
                            elem.classList.add("input-placeholder-error")
                            elem.innerHTML = "error"
                        })
                        const inputs = document.querySelectorAll(".outlined")
                        inputs.forEach((elem)=>{
                            elem.classList.add("outlined-error")
                            elem.value="";
                        })
                        console.log(error)})
                }

    return(
        <div className="Login">
            <Nav/>
            <div className="login-main">MEMESHOP</div>

            <div className="login-container">
                <div className="text-field login-username">
                    <input onChange={(ev)=>{setUsername(ev.target.value)}} type="text" name="username" id="username" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="Username">Username</label>
                </div>
                <div className="text-field login-password">
                    <input onChange={(e)=>{setPassword(e.target.value)}} type={isPassShowed?"text":"password"} name="password" id="password" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="password">Password</label>
                    {isPassShowed? <VisibilityIcon sx={{fontSize: '2.5rem'}} className="show-pass" onClick={()=>{setPassShowed(!isPassShowed)}}/> : <VisibilityOffIcon sx={{fontSize: '2.5rem'}} className="show-pass" onClick={()=>{setPassShowed(!isPassShowed)}}/>}
                </div>
            </div>

            <Link to={"/registration"}><div className="donthaveacc">Don't have an account?</div></Link>
            <div className="button-submit button-login" onClick={HandleSubmit}>
                <div className="button-submit-text">Log in</div>
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

export default Login;