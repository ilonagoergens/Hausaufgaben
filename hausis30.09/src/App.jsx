import React, { useState } from 'react'
import Greeting from './components/Greeting'


function App() {
  return (
  <div style={{margin:"0 auto", width:"350px"}}>
    <h1> Aufgabe 1: Testen einer Komponente mit Props</h1>
    <Greeting name="Ilona"/>
  </div>
  )
}

export default App
