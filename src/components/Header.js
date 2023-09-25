import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    const [loginButton,setLoginButton]=useState("Login")
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button onClick={()=>{
                        if(loginButton==="Login") setLoginButton("Logout")
                        else setLoginButton("Login");
                    }}>{loginButton}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;