import { useEffect } from 'react'
import { Platform } from 'react-native'

export const useOutlineColor = (color: string) => {
  useEffect(() => {
    let style: HTMLStyleElement | null = null

    if (Platform.OS === 'web') {
      style = document.createElement('style')
      style.type = 'text/css'

      style.innerHTML = `* { outline-color: ${color}; }`
      document.head.appendChild(style)
    }

    return () => {
      if (style) {
        document.head.removeChild(style)
      }
    }
  }, [color])
}
