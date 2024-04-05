import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'

function App() {
  const [count, setCount] = useState(0)

 function winnigCondition(target){
    return sum(target) === 15;
  }

  return (
    <>
    <Lottery n={3} winningCond={winnigCondition}></Lottery>
      
    </>
  )
}

export default App
