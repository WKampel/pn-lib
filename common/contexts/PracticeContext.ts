import { createContext } from 'react'
import { Practice } from '../../../gql/graphql'

type PracticeContextType = Practice & {
  invalid: boolean
  loading: boolean
  refetch: () => void
}

export const PracticeContext = createContext<PracticeContextType | undefined>(undefined)
