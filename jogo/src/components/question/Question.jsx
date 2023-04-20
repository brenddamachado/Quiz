import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/Quiz'

export const Question = () => {
    const [quizStart, dispatch]  = useContext(QuizContext)
console.log(quizStart)
  return (
    <div id='question'>
        <p>
            Pegunta {quizStart.currentQuestion} de {quizStart.questions.length}
        </p>
        <h2>Pergunta atual</h2>
        <div id="options-container">
            <p>Opções</p>
        </div>
       <button>Continuar</button> 
    </div>
  )
}
