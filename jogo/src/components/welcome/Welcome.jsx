import React from 'react'
import quiz from '../../Img/quiz.svg'
import './Welcome.css'
const Welcome = () => {
    return (
        <div id='welcome'>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para
                 começar:</p>
            <button> Iniciar</button>
           <img src={quiz} alt="" />
        </div>

    )
}

export default Welcome