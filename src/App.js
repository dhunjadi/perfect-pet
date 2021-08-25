import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuizPage from "./pages/QuizPage.jsx";
import ResultsPage from "./pages/ResultsPage";



export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/quiz' component={QuizPage} />
        <Route path='/results' component={ResultsPage} />
        <div className="App">
          <main>
            <div className="container">
              <h1>A Perfect Pet</h1>
               <Link to='/quiz'> <button>Start the Quiz</button> </Link>
            </div>
          </main>
        </div>
      </Switch>
    </Router>
  );
}
