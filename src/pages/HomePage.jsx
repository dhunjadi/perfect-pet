import React, { useContext } from "react";
import { QuestionList } from "../QuestionList";
import { Link } from "react-router-dom";
import { AnswersContext } from "../context/AnswersContext";
import { QuestionContext } from "../context/QuestionContext";

export default function HomePage() {

const { displayQuestion, setDisplayQuestion } = useContext(QuestionContext)
const { answers, setAnswers } = useContext(AnswersContext)

// Ovo mi je uzelo dobrih sat vremena ali uspio sam prokužit

 const handleRandomize = () => {
    const randomArr = [...answers] // Radi se novi array u koji će se spremat random rezultati
    QuestionList.forEach(ans => randomArr.push(ans.answers[Math.round(Math.random())].answer)) //Loop kroz QuestionList i .push ubacujemo u novi array rezultat generiran sam Math.round i Math.random
    setAnswers(randomArr) //Stavljamo randomArr kao novi answers state 
    
}

  return (
    <main>
      <div className="container">
        <h1>A Perfect Pet</h1>
        <Link to="/quiz"><button>Start the Quiz</button></Link>
        <Link to="/results"><button onClick={handleRandomize}>Randomize</button></Link>
      </div>
    </main>
  );
}
