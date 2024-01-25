import { createContext } from 'react'

export type Me = {
  email: string
  firstName: string
  lastName: string
}

export const MeContext = createContext<Me | undefined>(undefined)
