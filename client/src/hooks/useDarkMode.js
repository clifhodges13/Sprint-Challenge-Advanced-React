import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [value, setValue] = useState('')

  useEffect(() => {
    value ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  }, [value])

  return [value, setValue]
}