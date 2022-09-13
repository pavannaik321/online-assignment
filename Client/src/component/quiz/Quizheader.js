
import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import "./Quizheader.css"
import Profile from "../../Images/profile.JPG"


export default function Quizheader(){
    return(
        <>
        <div className="header-body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             
              <h1 className="navbar-brand">Test 1</h1>
  {/* <NavLink className="navbar-brand" to="#">Navbar</NavLink> */}
  


  <img className="profile navbar-nav ms-auto" src={Profile} alt="no img"></img>

</nav>
        </div>
        </>
    )
}