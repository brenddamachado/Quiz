import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/Quiz'
import './Question.css'
export const Question = () => {
    const [quizStart, dispatch]  = useContext(QuizContext)
const pergunta = quizStart.questions[quizStart.currentQuestion ]
  return (
    <div id='question'>
        <p>
            Pegunta {quizStart.currentQuestion +1} de {quizStart.questions.length}
        </p>
        <h2>{pergunta.question}</h2>
        <div id="options-container">
            <p>Opções</p>
        </div>
       <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button> 
    </div>
  )
}
