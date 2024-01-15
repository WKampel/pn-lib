import { ReactNode, createContext } from 'react'

type OverlayContextType = {
  setOverlay: (overlay: ReactNode) => void
}

export const OverlayContext = createContext<OverlayContextType | undefined>(undefined)
