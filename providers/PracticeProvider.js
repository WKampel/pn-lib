import { useMemo, useState } from 'react'
import PracticeContext from '../contexts/PracticeContext'
import useQuery from '../hooks/useQuery'
import GET_PRACTICE from '../queries/GetPracticeQuery'
import ThemeProvider from './ThemeProvider'

const PracticeProvider = ({ onError, children, practiceUrl }) => {
  const [practice, setPractice] = useState({})

  const { error, loading, exec } = useQuery(GET_PRACTICE, {
    variables: {
      url: practiceUrl,
    },
    onSuccess: ({ practice }) => {
      setPractice(practice)
    },
    onError: () => {
      if (onError) onError()
    },
  })

  const theme = {
    '$color-ui-primary': practice.primaryColor,
  }

  const value = useMemo(
    () => ({
      ...practice,
      invalid: error ? true : false,
      loading,
      refetch: exec,
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
