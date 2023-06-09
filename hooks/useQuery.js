import { useQuery as useQueryGraphQL } from '@apollo/client'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const useQuery = (query, variables, config) => {
  const nav = useNavigation()
  const isFocused = useIsFocused()

  const { loading, error, data, refetch } = useQueryGraphQL(query, {
    variables,
    notifyOnNetworkStatusChange: true,
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
      }
    },
  })

  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused])

  return {
    loading,
    error,
    data: data,
    exec: refetch,
  }
}

export default useQuery
