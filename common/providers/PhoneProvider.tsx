import { ReactNode } from 'react'
import { PhoneContext } from '../contexts/PhoneContext'

export const PhoneProvider = ({ children }: { children: ReactNode }) => {
  return <PhoneContext.Provider value={true}>{children}</PhoneContext.Provider>
}
