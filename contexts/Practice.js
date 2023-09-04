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
      subscribed
    }
  }
`

const Context = createContext()

export const usePractice = () => useContext(Context)

export const PracticeProvider = props => {
  const practice = useState({})
  const { exec, error, loading } = useQuery(
    GET_PRACTICE,
    {},
    {
      onSuccess: ({ currentPractice }) => {
        practice.set(currentPractice)
      },
      onError: () => {
        if (props.onError) props.onError()
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
        loading: loading,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
