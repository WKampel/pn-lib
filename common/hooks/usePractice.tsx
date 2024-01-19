import { useContext } from 'react'
import { PracticeContext } from '../contexts/PracticeContext'

export const usePractice = () => {
  const practice = useContext(PracticeContext)
  return practice
}
