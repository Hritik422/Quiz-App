import React, { useState } from 'react';
import Quiz from './components/Quiz.js';
import Result from './components/Results.js';
import { questions } from './data.js';
import './App.css';


const App = () => {
  
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleComplete = (finalScore) => {
    setScore(finalScore);
    setIsCompleted(true);
  };

  const handleRestart = () => {
    setScore(0);
    setIsCompleted(false);
  };

  return (
      <div>
      <h1>MCQ Quiz Game</h1>
      {isCompleted ? (
        <Result score={score} totalQuestions={questions.length} onRestart={handleRestart} />
      ) : (
        <Quiz onComplete={handleComplete} />
      )}
      </div>
  );
};

export default App;
