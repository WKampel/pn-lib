import { useMemo, useState } from 'react'
import PracticeContext from '../contexts/PracticeContext'
import useQuery from '../hooks/useQuery'
import GET_CURRENT_PRACTICE from '../queries/GET_CURRENT_PRACTICE'
import ThemeProvider from './ThemeProvider'

const PracticeProvider = ({ onError, children }) => {
  const [practice, setPractice] = useState({})

  const { error, loading } = useQuery(GET_CURRENT_PRACTICE, {
    onSuccess: ({ currentPractice }) => {
      setPractice(currentPractice)
    },
    onError: () => {
      if (onError) onError()
    },
  })

  const theme = {
    '$color-ui-primary': practice.branding?.primaryColor,
  }

  const value = useMemo(
    () => ({
      ...practice,
      invalid: error ? true : false,
      loading,
    }),
    [practice, error, loading]
  )

  return (
    <PracticeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PracticeContext.Provider>
  )
}

export default PracticeProvider
