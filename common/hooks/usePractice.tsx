import { useContext } from 'react'
import { PracticeContext } from '../contexts/PracticeContext'

export const usePractice = () => {
  const practice = useContext(PracticeContext)

  if (!practice) throw new Error('usePractice must be used within a PracticeProvider')

  return practice
}
