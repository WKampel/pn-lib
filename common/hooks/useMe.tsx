import { useContext } from 'react'
import { MeContext } from '../contexts/MeContext'

export const useMe = () => {
  const context = useContext(MeContext)

  if (!context) {
    throw new Error('useMe must be used within a MeContext.Provider')
  }

  return context
}
