import { ReactNode } from 'react'
import { Me, MeContext } from '../contexts/MeContext'

export const MeProvider = ({ children, value }: { children: ReactNode; value: Me | null }) => {
  return <MeContext.Provider value={value}>{children}</MeContext.Provider>
}
