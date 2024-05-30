import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/card.jsx'
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"chai",
    cookie:"parle g"
  }

  return (
    <>
     <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Testing Tailwind</h1>
     <Card username={"chai aur code"} />
     <Card username={"Vinay"}/>
     
    </>
  )
}

export default App
