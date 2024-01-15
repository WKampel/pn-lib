import { useContext } from 'react'
import { PracticeContext } from '../contexts/PracticeContext'

export const usePractice = () => useContext(PracticeContext)
