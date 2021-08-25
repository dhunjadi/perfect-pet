import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage.jsx";
import ResultsPage from "./pages/ResultsPage";
import { AnswersContextProvider } from "./context/AnswersContext";
import { QuestionContextProvider } from "./context/QuestionContext";
import HomePage from "./pages/HomePage";

//Koristim Context jer ResultsPage nije child QuizPage-a, a na ResultPage-u  se prikazuju odabrani odgovori

export default function App() {
  return (
    <div className="App">
      <QuestionContextProvider> 
        <AnswersContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/quiz" component={QuizPage} />
              <Route path="/results" component={ResultsPage} />
            </Switch>
          </Router>
        </AnswersContextProvider>
      </QuestionContextProvider>
    </div>
  );
}
