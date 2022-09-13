import React from "react"
import "./Home.css"
import Mashed from "../../Images/masthead_image.svg"
import Pic from "../../Images/people_img.png"
import Rectangle from "../../Images/Telecommuting-rafiki.svg"
import Missed from "../../Images/Missed chances-bro.svg"
import Group from "../../Images/Group.svg"
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-body">
            <div className="home-info">
                
                <img className="masthed" src={Mashed} alt="no img" />
                <div className="home-call">
                <h2 className="text">Differentiate yourself &</h2>
                <h2 className="text2">stand out from the crowd.</h2>
                <p className="text3">Evaluate yourself & Improve, Take test now</p>

                <div className="btn-bdy">
                    <button onClick={() => navigate('/quiz') } className="home-btn"> Take Test</button>
                </div>
                </div>
            </div>

            {/* Central image */}

            <div className="home-mid">
                <img className="masthed2" src={Pic} alt="no img" />
                <div className="home-call2">
                <h2 className="home-mid-text">Lorem ipsum dolor sit amet, consetetur</h2>
                <p className="home-mid-p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</p>
                </div>
            </div>


            {/* card */}
            <div className="card-body">
                <h2 className="card-h2">Trending Assesment Test</h2>
                <div className="home-call3">
                <div className="card-1">
                    <h4 className="card-txt">Full stack </h4>
                    <img className="card-img" src={Rectangle} alt="no img"></img>

                    <div className="card-btn-bdy">
                        <button className="card-btn"> Take Test</button>
                    </div>
                </div>

                <div className="card-1">
                <h4 className="card-txt">Product Based </h4>
                    <img className="card-img" src={Missed} alt="no img"></img>
                    <div className="card-btn-bdy">
                        <button className="card-btn"> Take Test</button>
                    </div>
                </div>

                <div className="card-1">
                <h4 className="card-txt">Service Based </h4>
                    <img className="card-img" src={Group} alt="no img"></img>
                    <div className="card-btn-bdy">
                        <button className="card-btn"> Take Test</button>
                    </div>
                </div>

                <div className="card-1">
                <h4 className="card-txt">General Awarness </h4>
                    <img className="card-img" src={Rectangle} alt="no img"></img>
                    <div className="card-btn-bdy">
                        <button className="card-btn"> Take Test</button>
                    </div>
                </div>

                </div>
              
            </div>
        </div>
    )
}