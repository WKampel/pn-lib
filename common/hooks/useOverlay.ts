import { useContext } from 'react'
import { OverlayContext } from '../contexts/OverlayContext'

export const useOverlay = () => {
  const context = useContext(OverlayContext)
  if (!context) throw new Error('useOverlay must be used within a OverlayProvider')
  return context
}
