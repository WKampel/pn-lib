import { createContext } from 'react'
import { Practice } from '../../../gql/graphql'

type PracticeContextType = {
  invalid: boolean
  loading: boolean
  refetch: () => void
  data?: Practice | null
}

export const PracticeContext = createContext<PracticeContextType>({
  invalid: false,
  loading: true,
  refetch: () => {},
  data: null,
})
