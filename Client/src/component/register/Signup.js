import React from "react"
import "./Signup.css"
import { useNavigate } from 'react-router-dom';

import Registerpic from "../../Images/applying_for_your_dream_based_leaderboard@2x.png"
import { useState } from "react"


export default function Signup() {
  const navigate = useNavigate();

  const [User, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...User, [name]: value });//usestate with object
  }


  const PostData = async(e)=>{
    console.log("part 1");
      e.preventDefault();

      const {name, email, phone, work, password, cpassword} = User;
      console.log("part 2");
      

      const res = await fetch("/register",{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body :JSON.stringify({
          
          name, 
          email,
          phone,
          work, 
          password, 
          cpassword
        
      })
      });
      console.log(res.body);

      console.log("part 3");

      const data = await res.json();

      console.log("part 4");

      if(data.status === 422 || !data)
      {
        window.alert("invalid registration")
        console.log("invalid registration")
      }
      else{
        window.alert("registration Successfull")
        console.log("registration Successfull")

        navigate('/login');
      }

      console.log("part 5");
     
  } 


  return (
    <div className="sign">
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">

              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form method="POST" className="mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-user fa-lg me-3 fa-fw" /> */}
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name="name" id="form3Example1c" className="form-control"
                            value={User.name}
                            onChange={handleInputs}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-envelope fa-lg me-3 fa-fw" /> */}
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" name="email" id="form3Example3c" className="form-control"
                            value={User.email}
                            onChange={handleInputs}
                          />
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-user fa-lg me-3 fa-fw" /> */}
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name="phone" id="form3Example1c" className="form-control"
                            value={User.phone}
                            onChange={handleInputs}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Phone no</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-user fa-lg me-3 fa-fw" /> */}
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" name="work" className="form-control"
                            value={User.work}
                            onChange={handleInputs}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Work</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-lock fa-lg me-3 fa-fw" /> */}
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name="password" id="form3Example4c" className="form-control"
                            value={User.password}
                            onChange={handleInputs}
                          />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-key fa-lg me-3 fa-fw" /> */}
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name="cpassword" id="form3Example4cd" className="form-control"
                            value={User.cpassword}
                            onChange={handleInputs}
                          />
                          <label className="form-label" htmlFor="form3Example4cd">Conform password</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" onClick={PostData} className="btn btn-primary btn-lg">Register</button>
                      </div>
                    </form>
                  </div>
                  <div className="  col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={Registerpic} className="img-fluid" alt="no img" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>

  )
}
/* 
    const PostData = async(e)=>{
      console.log("part 1");
        e.preventDefault();
  
        const {name, email, phone, work, password, cpassword} = User;
        console.log("part 2");
        
  
        const res= await fetch("http://localhost:5000/register",{
          method : 'POST',
          headers : {
            Accept: 'application/json',
            "Content-Type" : "application/json"
          },
          body :JSON.stringify({
            name, 
            email,
            phone,
            work, 
            password, 
            cpassword
        })
        });
  
        console.log("part 3");
  
        const data = await res.json();
  
        console.log("part 4");
  
        if(data.status === 422 || !data)
        {
          window.alert("invalid registration")
          console.log("invalid registration")
        }
        else{
          window.alert("registration Successfull")
          console.log("registration Successfull")
  
          navigate('/login');
        }
  
        console.log("part 5");
       
    } */