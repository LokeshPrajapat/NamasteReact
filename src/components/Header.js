import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [loginButton,setLoginButton]=useState("Login")
    const onlineStatus=useOnlineStatus();


    return(
        <div className="header-container">
            <div className="logo-container">
                <Link to={"/"}><img className="logo" src={LOGO_URL}/></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus? "✅" :"🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
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