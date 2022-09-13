import React from "react"
import {NavLink} from "react-router-dom";
import "./Header.css"
import Logo from "../../Images/TestMe_logo.svg"
/* import { MdDehaze } from "react-icons/md"; */
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from 'react-router-dom';


export default function Header(props){
  const location = useLocation();
  console.log(location.pathname)
  
  if(location.pathname === '/quiz'){
    return null;
  }
  else{
          return( 
            <>
        <div className="header-body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img className="navbar-brand" src={Logo} alt="no img"></img>
  {/* <NavLink className="navbar-brand" to="#">Navbar</NavLink> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/about">About </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Register </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/game">Game </NavLink>
      </li>
    </ul>
  </div>
</nav>
        </div>
        </>
    )
}
     
  }

