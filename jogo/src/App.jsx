
import './App.css'
import Welcome from './components/welcome/Welcome'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/Quiz'
import { Question } from './components/question/Question'






function App() {

  const [quizStart, dispatch] = useContext(QuizContext)
  
  useEffect(()=>{
    dispatch({type: "REORDER_QUESTIONS"});
  },[]);
  
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizStart.gameStage === 'Start' && <Welcome />}
      {quizStart.gameStage === 'Playing' && <Question />}
    </div>
  )
}

export default App
