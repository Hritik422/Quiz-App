
import React, { useState } from 'react';
import Question from './Questions';
import { questions } from '../data';

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onComplete(score + 1);
    }
  };

  return (
    <div  className='Main-box'>
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
