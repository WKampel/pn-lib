import { createContext } from 'react'
import { Gender } from '../../../gql/graphql'

type Patient = {
  id: string
  firstName?: string | null
  lastName?: string | null
  birthDay?: string | null
  gender?: Gender | null
}
export type Me = {
  email: string
  firstName: string
  lastName: string
  patient?: Patient | null
  patientError?: boolean
  patientLoading?: boolean
  refetchPatient?: () => void
}

export const MeContext = createContext<Me | null>(null)
