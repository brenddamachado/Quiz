import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/Quiz'
import './Question.css'
import Option from '../option/Option'



export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];


  return (
    <div id='question'>
      <p>
        Pegunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
   
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
      {currentQuestion.options.map((option) => (
          <Option
            option={option}  key={option}
          />
        ))}
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
    </div>
  )
}
