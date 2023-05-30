import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../components/nav";
import Footer from "../components/Footer"
import show from "../imgs/icons8-show-100.png"
import PhoneInput from "../components/PhoneInput";
import DateInput from "../components/DateInput";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Registration(){
    const [isPassShowed, setPassShowed] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword]=useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone]= useState("")
    const [adress, setAdress] = useState("")
    const [name, setName]=useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate();
    const HandleSubmit = (event)=>{
        event.preventDefault();
        axios
            .post("https://localhost:7017/api/Authorization/register", {
            email: email, login: username, password: password, phone: phone, adress: adress, name: name, age: age})
            .then((response) => {
                localStorage.setItem("isAuth", 1)
                localStorage.setItem("login", username)
                console.log(response)
                navigate('/Profile')
                    }).catch((error)=>console.log(error))
                };
       

    return(
        <div className="Registration">
            <Nav/>
            <div className="login-main">MEMESHOP</div>

            <div className="reg-container">
                <div className="text-field reg-username">
                    <input onChange={(e)=>setUsername(e.target.value)} type="text" name="reg-username" id="reg-username" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-username">Username</label>
                </div>
                <div className="text-field reg-password">
                    <input onChange={(e)=>setPassword(e.target.value)} type={isPassShowed?"text":"password"} name="reg-password" id="reg-password" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-password">Password</label>
                    {isPassShowed? <VisibilityIcon sx={{fontSize: '2.5rem'}} className="show-pass" onClick={()=>{setPassShowed(!isPassShowed)}}/> : <VisibilityOffIcon sx={{fontSize: '2.5rem'}} className="show-pass" onClick={()=>{setPassShowed(!isPassShowed)}}/>}
                </div>
                <div className="text-field reg-repeat-password">
                    <input type={isPassShowed?"text":"password"} name="reg-repeat-password" id="reg-repeat-password" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-repeat-password">Repeat password</label>
                </div>
                <div className="text-field reg-email">
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" name="reg-email" id="reg-email" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-email">Email</label>
                </div>
                <div className="text-field reg-name">
                    <input onChange={(e)=>setName(e.target.value)} type="text" name="reg-name" id="reg-name" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="name">Name</label>
                </div>
                <div className="text-field reg-adress">
                    <input onChange={(e)=>setAdress(e.target.value)} type="text" name="reg-adress" id="reg-adress" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-adress">Adress</label>
                </div>
                {/* <DateInput value={age} onChange={(e)=>{setAge(2023-parseInt(e.target.value.split('.')[-1])); console.log(2023-parseInt(e.target.value.split('.')[-1]))}}/> */}
                <div className="text-field reg-age">
                    <input onChange={(e)=>setAge(e.target.value)} type="text" name="reg-age" id="reg-age" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-Age">Age</label>
                </div>
                <div className="text-field reg-adress">
                    <input onChange={(e)=>setAdress(e.target.value)} type="text" name="reg-adress" id="reg-adress" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-adress">Adress</label>
                </div>
                {/* <div className="text-field reg-phone">
                    <PhoneInput value={phone} onChange={handlePhoneChange}/>
                    <label className="outlined-placeholder" htmlFor="reg-phone">Phone nubmer</label>
                </div> */}
                <div className="text-field reg-phone">
                    <input onChange={(e)=>setPhone(e.target.value)} type="text" name="reg-phone" id="reg-phone" className="outlined" required/>
                    <label className="outlined-placeholder" htmlFor="reg-phone">Phone Number</label>
                </div>

            </div>

            <div className="button-submit button-reg" onClick={HandleSubmit}>
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