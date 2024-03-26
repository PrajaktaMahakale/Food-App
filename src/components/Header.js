import {LOGO_URL} from  "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
 const [btnNameReact, setBtnNameReact ] = useState("Login");
 
 const onlineStatus = useOnlineStatus();  

console.log(btnNameReact);
return (
 <div className="header"> 
 <div className = "logo-container">
    <img className="logo" src = {LOGO_URL}></img>
    </div>
 <div className="nav-items">
        <ul>
          <li>
            Online status : {onlineStatus ? "✅" : "🔴"} 
          </li>
            <li><Link to = "/" >Home</Link></li>
            {/* <li> <a href = "/About">About Us</a></li> */}
            <li><Link to = "/about">About Us</Link></li>
            <li><Link to = "/contact" >Contact Us</Link></li>
            <li><Link to ="/grocery">Grocery</Link></li>
            <li>Cart</li>
            
            <button 
            className=
            "login"onClick={() => {
                btnNameReact ==="Login"
              ?  setBtnNameReact("Logout")
              :  setBtnNameReact("Login");
            }}>
            
            {btnNameReact}
            </button>
        </ul>
    </div>
    </div>

  );
};
export default Header;