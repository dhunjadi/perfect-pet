import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuizPage from "./pages/QuizPage.jsx";
import ResultsPage from "./pages/ResultsPage";
import { AnswersContextProvider } from "./context/AnswersContext";
import { QuestionContextProvider } from "./context/QuestionContext";

//Koristim Context jer ResultsPage nije child QuizPage-a, a na ResultPage-u  se prikazuju odabrani odgovori

export default function App() {
  return (
    <div className="App">
      <QuestionContextProvider> 
        <AnswersContextProvider>
          <Router>
            <Switch>
              <Route path="/quiz" component={QuizPage} />
              <Route path="/results" component={ResultsPage} />
              <main>
                <div className="container">
                  <h1>A Perfect Pet</h1>
                  <Link to="/quiz"><button>Start the Quiz</button></Link>
                </div>
              </main>
            </Switch>
          </Router>
        </AnswersContextProvider>
      </QuestionContextProvider>
    </div>
  );
}
