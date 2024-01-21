import { ApolloError, DocumentNode, QueryHookOptions, useQuery as apolloUseQuery } from '@apollo/client'
import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'
import { useNotification } from './useNotification'

export type UseQueryConfig<TData, TVariables> = {
  variables: TVariables
  skip?: boolean
  onSuccess?: (data: TData) => void
  onError?: () => void
  displayError?: boolean
}

export const useQuery = <TData, TVariables>(query: DocumentNode, config: UseQueryConfig<TData, TVariables>) => {
  const isFocused = useIsFocused()
  const { notify } = useNotification()
  const { variables, skip, onSuccess, onError, displayError } = config || {}

  const { loading, error, data, refetch } = apolloUseQuery<TData>(query, {
    notifyOnNetworkStatusChange: true,
    variables,
    fetchPolicy: 'cache-and-network',
    skip,
    onCompleted: (data: TData) => {
      try {
        // on success
        if (onSuccess) onSuccess(data)
      } catch (e) {
        console.log('Error:', e)
      }
    },
    onError: (err: ApolloError) => {
      // on error
      if (onError) onError()

      // display error
      if (displayError) {
        for (const e of err.graphQLErrors) {
          notify({ title: e.extensions?.code, body: e.message, type: 'ERROR' })
        }
      }
    },
  } as QueryHookOptions)

  useEffect(() => {
    if (isFocused && !skip && !loading) {
      refetch()
    }
  }, [isFocused, skip])

  return {
    loading,
    error,
    data,
    exec: refetch,
  }
}
