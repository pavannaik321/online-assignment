
import "./Login.css"
/* import signin from "../../Images/draw2.svg" */
import React ,{useState} from "react";

import Logo from "../../Images/TestMe_logo.svg"
import {NavLink,useNavigate } from "react-router-dom";





export default function Login(){

  const navigate = useNavigate();

  const  [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();

   const res = await fetch('/signin',{
    method : 'POST',
    headers : {
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      email,
      password
    })
   })

   const data = res.json();

   if (res.status===400 || !data) {
    window.alert("Invalid Credentials")
   } else {
    window.alert("login successfull")
    navigate('/');
   }
  }




    return(
        <div className="sigin-main">
        <div className="sigin">
        <section className="vh-100" style={{backgroundColor: '#9A616D'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: '1rem'}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                  </div>
                  <div className="bg-light col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form method="POST">
                        <div className="d-flex align-items-center mb-3 pb-1">
                         {/*  <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} /> */}
                          <img src={Logo} alt="no img" />
                          
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
                        <div className="form-outline mb-4">
                          <input type="email" name="email" id="form2Example17" className="form-control form-control-lg"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          placeholder="Your Email" 
                          />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" name="password" id="form2Example27" className="form-control form-control-lg" 
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          placeholder="Your Password" 
                          />
                          
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" value="log In" onClick={loginUser} type="button">Login</button>
                        </div>
                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <NavLink to="/signup" style={{color: '#393f81'}}>Register here</NavLink></p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        </div>
    )
}