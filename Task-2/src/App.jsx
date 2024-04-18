import { useState } from 'react'
import Task2 from './components/Task2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Task2/>
    </>
  )
}

export default App
