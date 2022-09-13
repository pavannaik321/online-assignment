import React from "react"
import { MovingComponent } from "react-moving-text"
import "./Game.css"


export default function Game() {

    function moveHover() {
        console.log("hover")



        var top = document.getElementsByClassName("btn2")[0].style.top;
        top = top === '300px' ? 0 : '300px';
        document.getElementsByClassName("btn2")[0].style.top = top;



    }

    return (
        <div className="game">

            <h1 className="txt">
                <MovingComponent
                type="shakeMix"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="infinite"
                fillMode="forwards">
                    <h1 className="color">
                Do you like this Quiz App
                </h1>
            </MovingComponent></h1>
            <button className="btn1"><a className="yes" href="/">Yes</a></button>
            <button className="btn2" id="b2" onClick={moveHover}>No</button>
        </div>

    )
}
