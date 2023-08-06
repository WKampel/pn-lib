import { gql } from '@apollo/client'
import { createContext, useContext } from 'react'
import useQuery from '../hooks/useQuery'

const GET_ME = gql`
  query {
    me {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`

const Context = createContext()

export const useMe = () => useContext(Context)

export const MeProvider = props => {
  const { data, exec } = useQuery(GET_ME)
  const me = data?.me || {}

  return <Context.Provider value={{ ...me, refetch: exec }}>{props.children}</Context.Provider>
}
