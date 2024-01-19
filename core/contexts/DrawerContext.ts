import { createContext } from 'react'

type DrawerContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const DrawerContext = createContext<DrawerContextType | undefined>(undefined)
