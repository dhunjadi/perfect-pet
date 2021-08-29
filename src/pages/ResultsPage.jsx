import React, { useContext, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { QuestionContext } from "../context/QuestionContext";
import { Link } from "react-router-dom";

export default function ResultsPage() {
  const { answers, setAnswers, petName } = useContext(AnswersContext);
  const [reset] = useState(answers) // Spremanje redoslijeda slova prije promjene

  const { setDisplayQuestion } = useContext(QuestionContext);


  const handleRetry = () => {
    setAnswers([]); // Brisanje odabranih odgovora
    setDisplayQuestion(0); // Vraćanje prvog pitanja (zajedno sa "/quiz" iz Linka)
  };

// Našao sam tutorial na internetu u kojem je objašnjeno kako se promijeni redoslijed slova u jednom stringu
// pa sam na temelju toga prilagodio funkciju da promijeni redoslijed u cijelom arrayu (cca sat vremena)

  const handleScramble = (answers) => {
    let scrambled =[] // Novi array kojim će se promijeniti state
    for (let i = 0; i < answers.length; i++) {  // Loop kroz odgovore
      const answer = answers[i].split("");  // Pretvaranje svakog odgovora u array slova
      const length = answers[i].length; // Dužina svakog odgovora

      for (let x = length - 1; x > 0; x--) { // Loop kroz svaki odgovor pojedinačno
        const y = Math.floor(Math.random() * (x + 1)); // Nasumični broj između 0 i dužine odgovora
        const tmp = answer[x]; // Spremanje slova u tmp varijablu
        answer[x] = answer[y]; // Zamjena slova sa indexom x i indexom y
        answer[y] = tmp; // Zamjena slova sa indexom y i slova iz tmp varijable
      }
      scrambled=[...scrambled, answer.join("")] // Spremanje odgovora sa promijenjenim redoslijedom u array
      setAnswers(scrambled) // Promjena state-a u novi state
    }
  };

  const handleReset = () => { // Vraća originalni redoslijed slova
    setAnswers(reset)
  }

  return (
    <div id='results-page'>
      <main>
        {petName ? <h1> {/* Provjera postoji li petName. Ako postoji, prikazuje se rezultat sa petName a ako ne postoji, prikazuje se rezultat bez petName  */}
          My pet {petName} is {answers[0]}, and although he likes to {answers[1]}, he
          really hates {answers[2]}
        </h1> : <h1>
          My pet is {answers[0]}, and although he likes to {answers[1]}, he
          really hates {answers[2]} </h1>}
        <button onClick={() => handleScramble(answers)}>Scramble</button>
        <button onClick={handleReset}>Reset</button>
        <Link to="/quiz">
          <button onClick={handleRetry}>Retry test</button>
        </Link>
      </main>
    </div>
  );
}
