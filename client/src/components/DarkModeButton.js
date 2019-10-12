import React from 'react'

export default function DarkModeButton({ toggleDarkMode }) {
  return (
    <div>
      <button onClick={e => toggleDarkMode(e)}>Toggle Dark Mode</button>
    </div>
  )
}
