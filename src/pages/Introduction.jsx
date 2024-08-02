import React from 'react'
import Hello from '../assets/Digital Assets/Programming-pana.png';

function Introduction  () {
  return (
    <div className='greeting-page'>
      <h1>Hi! I am Jose Luis, an aspiring Full Stack Dev.</h1>
      <img src={Hello} alt="Greeting_image" className='greeting-image'/>
    </div>
  )
}

export default Introduction
