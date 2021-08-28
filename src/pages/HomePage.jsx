import React, { useContext } from "react";
import { QuestionList } from "../QuestionList";
import { Link } from "react-router-dom";
import { AnswersContext } from "../context/AnswersContext";

export default function HomePage() {

const { answers, setAnswers, petName, setPetName } = useContext(AnswersContext)

// Ovo mi je uzelo dobrih sat vremena ali uspio sam prokužit

 const handleRandomize = () => {
    const randomArr = [...answers] // Radi se novi array u koji će se spremat random rezultati
    QuestionList.forEach(ans => randomArr.push(ans.answers[Math.round(Math.random() * QuestionList.length)].answer )) //Loop kroz QuestionList i s .push ubacujemo u novi array rezultat generiran sam Math.round i Math.random
    setAnswers(randomArr) //Stavljamo randomArr kao novi answers state 
}

  return (
    <main>
      <div className="container">
        <h1>A Perfect Pet</h1>
        <h3>Enter Pet's Name</h3>
        <input type="text" placeholder={petName} onChange={(e)=> (setPetName(e.target.value))}/> {/* SetPetName sprema input u AnswersContext */}
        <Link to="/quiz"><button>Start the Quiz</button></Link>
        <Link to="/results"><button onClick={handleRandomize}>Randomize</button></Link>
      </div>
    </main>
  );
}
