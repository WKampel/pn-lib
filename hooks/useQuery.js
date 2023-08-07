import { useQuery as useQueryGraphQL } from '@apollo/client'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { useNotification } from '../contexts/Notification'

const useQuery = (query, variables, config) => {
  const nav = useNavigation()
  const isFocused = useIsFocused()

  const { notify } = useNotification()

  const { loading, error, data, refetch } = useQueryGraphQL(query, {
    variables,
    notifyOnNetworkStatusChange: true,
    skip: config?.skip,
    onCompleted: data => {
      if (isFocused) {
        if (config?.onSuccess) config.onSuccess(data)
        if (config?.redirectOnSuccess) nav.navigate(options.redirectOnSuccess)
      }
    },
    onError: e => {
      if (isFocused) {
        if (config?.alertError) alert(e?.message)
        if (config?.onError) config.onError()

        for (const _error of e?.graphQLErrors) {
          if (config?.displayError) {
            notify({ title: _error.extensions?.code, body: _error.message, type: 'error' })
          }
        }
      }
    },
  })

  useEffect(() => {
    if (isFocused && !config?.skip) {
      refetch()
    }
  }, [isFocused, config?.skip])

  return {
    loading,
    error,
    data: data,
    exec: refetch,
  }
}

export default useQuery
