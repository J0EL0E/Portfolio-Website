import React from 'react';
import "../assets/App.css"

function Switch (props) {
  return (
    <div className='switch-container'>
      <input type="checkbox"/>
      <span className='slider'></span>
    </div>
  )
}

export default Switch
