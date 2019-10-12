import React from 'react'
import '../App.css'

export default function DarkModeButton({ toggleDarkMode }) {
  return (
    <div className="dm-button">
      <button onClick={e => toggleDarkMode(e)}>Toggle Dark Mode</button>
    </div>
  )
}
