import { createContext } from 'react'

export type Me = {
  email: string
  firstName: string
  lastName: string
  patientId?: string
  patientFirstName?: string
  patientLastName?: string
}

export const MeContext = createContext<Me | null>(null)
