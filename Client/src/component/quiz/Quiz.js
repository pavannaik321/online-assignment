import "./Quiz.sass"
import React from "react";
import QuizInstructions from "./QuizInstructions";
import Quizheader from "./Quizheader";





export default function Quiz(){
    return(
        <>
        <Quizheader />
        <QuizInstructions />
        </>
    )
}