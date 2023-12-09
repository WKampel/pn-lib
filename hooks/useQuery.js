import { useQuery as apolloUseQuery } from '@apollo/client'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import useNotification from './useNotification'

const useQuery = (query, config = {}) => {
  const nav = useNavigation()
  const isFocused = useIsFocused()
  const { notify } = useNotification()
  const { variables, skip, redirectOnSuccess, onSuccess, onError, displayError } = config

  const { loading, error, data, refetch } = apolloUseQuery(query, {
    notifyOnNetworkStatusChange: true,
    variables,
    fetchPolicy: 'cache-and-network',
    skip,
    onCompleted: data => {
      try {
        // on success
        if (onSuccess) onSuccess(data)

        // redirect on success
        if (redirectOnSuccess) nav.navigate(redirectOnSuccess)
      } catch (e) {
        console.log('Error:', e)
      }
    },
    onError: err => {
      // on error
      if (onError) onError()

      // display error
      if (displayError) {
        for (const e of err?.graphQLErrors) {
          notify({ title: e.extensions?.code, body: e.message, type: 'error' })
        }
      }
    },
  })

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

export default useQuery
