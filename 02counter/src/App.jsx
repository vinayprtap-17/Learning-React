import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(0)
  const maxval=20;
  const minval=0;
 
  const addchai=()=>{
    
    if(counter<maxval){
    setCounter(counter+1)}}

  const removechai=()=>{
    
    if(counter>0){
    
    setCounter(counter-1)}
  }
  return (
    <>
      <h1>Chai Counter</h1>
      <h2>Total number of chai: {counter}</h2>
      <button
      onClick={addchai}>Add chai</button>
      <br/>
      <button
     onClick={removechai}>Remove chai</button>
    </>
  )
}

export default App
