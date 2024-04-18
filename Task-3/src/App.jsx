import { useState } from 'react'
import './App.css'
import Task3 from './components/Task3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Task3/>
    </>
  )
}

export default App
