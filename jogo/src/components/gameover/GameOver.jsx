import React from 'react'
import {useContext} from 'react';
import { QuizContext } from '../../context/Quiz';
import WellDone from '../../Img/welldone.svg';
import './GameOver.css'

const GameOver = () => {
  const [quizStart, dispatch]  = useContext(QuizContext)
  return (
    <div id='gameover'>
<h2>Fim de jogo</h2>
<p>Pontuação: {quizStart.score}</p>
<p>Você acertou {quizStart.score} de {quizStart.questions.length} 
{''} perguntas.</p>
<img src={WellDone} alt="fim do jogo" />
<button> Reiniciar</button>
    </div>
  )
}

export default GameOver
