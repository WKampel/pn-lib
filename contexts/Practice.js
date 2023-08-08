import { gql } from '@apollo/client'
import { createContext, useContext } from 'react'
import useQuery from '../hooks/useQuery'
import useState from '../hooks/useState'

const GET_PRACTICE = gql`
  query {
    currentPractice {
      id
      email
      slogan
      url
      name
      website
      phone
      logo {
        id
        url
      }
      branding {
        primaryColor
      }
      sikkaOfficeId
      stripePaymentLink
    }
  }
`

const Context = createContext()

export const usePractice = () => useContext(Context)

export const PracticeProvider = props => {
  const practice = useState({})
  const { exec, error } = useQuery(
    GET_PRACTICE,
    {},
    {
      onSuccess: ({ currentPractice }) => {
        practice.set(currentPractice)
      },
    }
  )

  return (
    <Context.Provider
      value={{
        ...practice.val,
        refetch: exec,
        setPrimaryColor: color => practice.set(old => ({ ...old, branding: { ...old.branding, primaryColor: color } })),
        invalid: error ? true : false,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
