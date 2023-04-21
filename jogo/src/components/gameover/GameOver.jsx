import React from 'react'
import {useContext} from 'react';
import { QuizContext } from '../../context/Quiz';
import WellDone from '../../Img/welldone.svg';
import './GameOver.css'

const GameOver = () => {
  return (
    <div id='gameover'>
<h2>Fim de jogo</h2>
<p>Pontuação; x</p>
<p>Você acertou y de z perguntas</p>
<img src={WellDone} alt="fim do jogo" />
<button> Reiniciar</button>
    </div>
  )
}

export default GameOver
