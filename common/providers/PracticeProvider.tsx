import { ReactNode, useMemo, useState } from 'react'
import { GetPracticeQuery, GetPracticeQueryVariables, Practice } from '../../../gql/graphql'
import { GetPractice } from '../../queries/GetPracticeQuery'
import { PracticeContext } from '../contexts/PracticeContext'
import { useQuery } from '../hooks/useQuery'
import { ThemeProvider } from './ThemeProvider'

export const PracticeProvider = ({ onError, children, practiceUrl }: { onError: () => void; children: ReactNode; practiceUrl: string }) => {
  const [practice, setPractice] = useState<Practice>()

  const { error, loading, exec } = useQuery<GetPracticeQuery, GetPracticeQueryVariables>(GetPractice, {
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

  const value = useMemo(() => {
    if (!practice) return undefined
    return { ...practice, invalid: error ? true : false, loading, refetch: exec }
  }, [practice, error, loading])

  return (
    <PracticeContext.Provider value={value}>
      <ThemeProvider
        override={{
          color_ui_primary: value?.primaryColor || undefined,
        }}
      >
        {children}
      </ThemeProvider>
    </PracticeContext.Provider>
  )
}
