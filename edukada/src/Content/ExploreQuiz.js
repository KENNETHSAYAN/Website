import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ExploreQuiz = () => {
  const quizData = [
    {
      question: 'What is the value of π (pi)?',
      options: ['3.14', '3.1415', '3.14159', '3.142'],
      answer: '3.14159'
    },
    {
      question: 'What is the square root of 144?',
      options: ['10', '12', '14', '16'],
      answer: '12'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl', 'O2'],
      answer: 'H2O'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
      answer: 'Jupiter'
    },
    {
      question: 'Who was the first President of the United States?',
      options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'],
      answer: 'George Washington'
    },
    {
      question: 'In which year did World War II end?',
      options: ['1945', '1939', '1918', '1950'],
      answer: '1945'
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
      answer: 'William Shakespeare'
    },
    {
      question: 'What is the plural of "child"?',
      options: ['childs', 'children', 'childes', 'childer'],
      answer: 'children'
    }
  ];

  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]); // Store results of each question

  const handleNextQuestion = () => {
    if (count + 1 >= quizData.length) {
      setQuizCompleted(true);
    } else {
      setCount(count + 1);
      setSelectedOption(null);
      setAnswered(false);
      setTimeLeft(15);
      setIsCorrect(null);
    }
  };

  const handleOptionSelect = (option) => {
    if (!answered) {
      setSelectedOption(option);
      setAnswered(true);
      const currentQuestion = quizData[count];
      const correct = option === currentQuestion.answer;
      setIsCorrect(correct);
      setResults([...results, { question: currentQuestion.question, correct }]);
      if (correct) {
        setScore(score + 1);
      }
    }
  };

  useEffect(() => {
    if (timeLeft === 0 || quizCompleted) {
      setSelectedOption(null);
      setAnswered(true);
      if (!quizCompleted) {
        handleNextQuestion();
      }
    } else {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, quizCompleted]);

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px' }}>Explore Quiz</h2>
      {!quizCompleted && <p style={{ marginBottom: '20px' }}>Time Left: {timeLeft} seconds</p>}
      <div>
        <h3>{quizCompleted ? 'Results:' : quizData[count].question}</h3>
        {quizCompleted ? (
          <div>
            <p>Congratulations! You have completed the quiz.</p>
            <p>Your Score: {score} / {quizData.length}</p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {results.map((result, index) => (
                <li key={index} style={{ marginBottom: '20px', color: result.correct ? 'green' : 'red' }}>
                  {index + 1}. {result.question} - {result.correct ? 'Correct' : 'Incorrect'}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {quizData[count].options.map((option, optionIndex) => (
              <li key={optionIndex} style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', cursor: 'pointer', backgroundColor: selectedOption === option ? (isCorrect ? 'green' : 'red') : 'inherit' }}>
                  <input
                    type="radio"
                    name={`question_${count}`}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                    disabled={answered}
                    style={{ display: 'none' }}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        )}
        {!quizCompleted && <button onClick={handleNextQuestion} disabled={!answered}>Next</button>}
        {quizCompleted && <Link to="/profile">Go back to the Dashboard</Link>} {/* View Profile button */}
      </div>
    </div>
  );
};

export default ExploreQuiz;
