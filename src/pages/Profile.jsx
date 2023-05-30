import React from "react";
import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import Nav from "../components/nav";
import Footer from "../components/Footer.jsx"
import profileimg from "../imgs/image 1.png"
import axios from "axios";

function Profile(){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [adress, setAdress] = useState("")
    const [phone, setPhone]=useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate();
    const user = localStorage.getItem("login")
    useEffect(()=>{
        axios.get(`https://localhost:7017/api/Authorization/${user}`, {login: user}).then((response)=>{
            console.log(response)
            setName(response.data.name)
            setAge(response.data.age)
            setAdress(response.data.adress)
            setPhone(response.data.phone)
            setEmail(response.data.email)
        })
    })

    const HandleLogOut = (event)=>{
        event.preventDefault();
        localStorage.setItem("isAuth", 0)
        localStorage.setItem("login", "")
        navigate('/');
    }
    return(
        <div className="Profile">
            <Nav/>
            <img src={profileimg} alt="" className="profile-img" />
            <div className="profile-info">
                <div className="profile-name">Name: {name}</div>
                <div className="profile-age">Age: {age}</div>
                <div className="profile-address">Address: {adress}</div>
                <div className="profile-phone">Phone: {phone}</div>
                <div className="profile-email">Email: {email}</div>
            </div>


            <div className="button-log-out button-submit" onClick={HandleLogOut}>
                <div className="button-log-out-text">Log out</div>
            </div>
            <Footer/>
        </div>
    )
}
export default Profile