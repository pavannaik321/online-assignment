import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import  "./QuizInstruction.css";
import { useNavigate } from "react-router-dom";



const QuizInstructions = () =>{ 
    const navigate = useNavigate();

    return (
    
        <div className="instructions-container">
            <h2>General instructions</h2>
            <p>Guide for newbies</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 2 minutes and ends as soon as time expired</li>
                <li>Each game consist of 15 questions</li>
                <li>
                    Every question have 4 options
                </li>
                <li>
                    Select the option which best answers the question by selecting it
                </li>
                <li>
                    Each game has 2 lifelines namely:
                    <ul id="sublist">
                        <li>Two 50-50 chances</li>
                        <li>Five hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the instructions
                    will remove 2 wrong answers, leaving the one correct answer and one wrong answer
                </li>
                <li>
                    Using a hint by clicking the icon
                    will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many...
                </li>
                <li>
                    Feel free to quit or give up anytime
                </li>
            </ul>
            <div className="confirm-button">
            <button type="button" onClick={() => navigate('/game') } class="btn btn-outline-success">Next</button>
                

                <br></br>

                <button type="button" onClick={() => navigate('/') } class=" my-2 btn btn-outline-primary">Back</button>
            </div>
        </div>
    
);
}
export default QuizInstructions;