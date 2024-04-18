import { useState } from 'react'
import './App.css'
import Task4 from './components/Task4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Task4/>
    </>
  )
}

export default App
