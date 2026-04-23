import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('huvosco-theme') || 'day'
    document.documentElement.setAttribute('data-theme', saved)
    return saved
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('huvosco-theme', theme)
  }, [theme])

  const toggle = () => setTheme(prev => (prev === 'day' ? 'night' : 'day'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
