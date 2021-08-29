import React, { useContext } from "react";
import { QuestionList } from "../QuestionList";
import { useHistory } from "react-router-dom";
import { AnswersContext } from "../context/AnswersContext";
import { QuestionContext } from "../context/QuestionContext";
import { v4 as uuidv4 } from 'uuid';

export default function QuizPage() {

  const {displayQuestion, setDisplayQuestion} = useContext(QuestionContext)
  const { answers, setAnswers } = useContext(AnswersContext);
  const history = useHistory();

  // Funckija prikazuje sljedeće pitanje i provjerava jesmo li na zadnjem pitanju. Ako jesmo, nakon odabira odgovora preusmjerava nas na ResultsPage

  const handleClickedAnswer = (e) => {
    if (displayQuestion === QuestionList.length - 1) { 
      setDisplayQuestion((prevSetDisplayQuestion) => prevSetDisplayQuestion + 1); 
      setAnswers([...answers, e.target.innerText]); 
      history.push(`/results`); 
    } else {
      setDisplayQuestion(
        (prevSetDisplayQuestion) => prevSetDisplayQuestion + 1);
      setAnswers([...answers, e.target.innerText]);
    }
  };

  // Funkcija za prikaz odgovora
  const abc = (ans) => {
    return(
      <button key={uuidv4()} onClick={handleClickedAnswer}>{ans.answer}</button> 
    )
  }


  return (
    <div id="quiz-page">
      <main>
        <div className="quiz-container">
          <h1>{QuestionList[displayQuestion].text}</h1> {/* Tekst pitanja */}
          <div className="btn-container">
              {QuestionList[displayQuestion].answers.map(abc)} {/* Prikaz odgovora */}
          </div>
        </div>
      </main>
    </div>
  );
}
