import { ReactElement, createContext } from 'react'

type OverlayContextType = {
  setOverlay: (overlay: ReactElement | undefined) => void
}

export const OverlayContext = createContext<OverlayContextType | undefined>(undefined)
