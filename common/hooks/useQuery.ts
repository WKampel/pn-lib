import { ApolloError, DocumentNode, QueryHookOptions, useQuery as apolloUseQuery } from '@apollo/client'
import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'
import useNotification from '../../hooks/useNotification'
import { useNav } from './useNav'

export type UseQueryConfig<TData, TVariables> = {
  variables: TVariables
  skip?: boolean
  redirectOnSuccess?: string
  onSuccess?: (data: TData) => void
  onError?: () => void
  displayError?: boolean
}

export const useQuery = <TData = any, TVariables = any>(query: DocumentNode, config: UseQueryConfig<TData, TVariables> = { variables: {} as TVariables }) => {
  const nav = useNav()
  const isFocused = useIsFocused()
  const { notify } = useNotification()
  const { variables, skip, redirectOnSuccess, onSuccess, onError, displayError } = config

  const { loading, error, data, refetch } = apolloUseQuery<TData>(query, {
    notifyOnNetworkStatusChange: true,
    variables,
    fetchPolicy: 'cache-and-network',
    skip,
    onCompleted: (data: TData) => {
      try {
        // on success
        if (onSuccess) onSuccess(data)

        // redirect on success
        if (redirectOnSuccess) nav.navigate(redirectOnSuccess)
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
          notify({ title: e.extensions?.code, body: e.message, type: 'error' })
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
