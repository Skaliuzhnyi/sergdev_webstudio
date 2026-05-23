import { useState, useEffect } from 'react'
export function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem('sk_theme') !== 'light')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('sk_theme', dark ? 'dark' : 'light')
  }, [dark])
  return [dark, () => setDark(d => !d)]
}
