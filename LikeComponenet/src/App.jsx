import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Like from "./Like.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Like></Like>
    </>
  )
}

export default App
