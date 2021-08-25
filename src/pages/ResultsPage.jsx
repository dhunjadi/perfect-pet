import React, { useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { QuestionContext } from "../context/QuestionContext";
import { Link } from 'react-router-dom'


export default function ResultsPage() {
  const { answers, setAnswers } = useContext(AnswersContext);
  const { setDisplayQuestion } = useContext(QuestionContext)

  const handleRetry = () => {
    setAnswers([]) // Brisanje odabranih odgovora
    setDisplayQuestion(0) // Vraćanje prvog pitanja (zajedno sa "/quiz" iz Linka)
  }

  console.log(answers)
  return (
    <div>
      <main>
        <h1>Results Page</h1>
        <h1>My pet is {answers[0]}, and although he likes to {answers[1]}, he really hates {answers[2]}</h1>
        <Link to="/quiz"><button onClick={handleRetry}>Retry test</button></Link>
      </main>
    </div>
  );
}
