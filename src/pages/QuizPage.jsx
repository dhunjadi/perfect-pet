import React, { useContext } from "react";
import { QuestionList } from "../QuestionList";
import { useHistory } from "react-router-dom";
import { AnswersContext } from "../context/AnswersContext";
import { QuestionContext } from "../context/QuestionContext";

export default function QuizPage() {
  const {displayQuestion, setDisplayQuestion} = useContext(QuestionContext)
  const { answers, setAnswers } = useContext(AnswersContext);
  const history = useHistory();

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


  return (
    <div id="quiz-page">
      <main>
        <h1>Quiz Page</h1>
        <div className="quiz-container">
          <h1>{QuestionList[displayQuestion].text}</h1>
          <div className="btn-container">
            <button onClick={handleClickedAnswer}>{QuestionList[displayQuestion].answer1}</button>
            <button onClick={handleClickedAnswer}>{QuestionList[displayQuestion].answer2}</button>
          </div>
        </div>
      </main>
    </div>
  );
}
