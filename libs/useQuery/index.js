import { useEffect } from 'react'
import useState from '../useState'

const { useNavigation, useIsFocused } = require('@react-navigation/native')
const { useQuery: useQueryGraphQL } = require('@apollo/client')

const useQuery = (query, variables, config) => {
  const nav = useNavigation()
  const isFocused = useIsFocused()
  const dataState = useState(null)

  const { loading, error, refetch } = useQueryGraphQL(query, {
    fetchPolicy: 'no-cache',
    variables,
    notifyOnNetworkStatusChange: true,
    onCompleted: data => {
      if (config?.onSuccess) config.onSuccess(data)
      if (config?.redirectOnSuccess) nav.navigate(options.redirectOnSuccess)
      dataState.set(data)
    },
    onError: e => {
      if (config?.alertError) alert(e?.message)
    },
  })

  useEffect(() => {
    if (isFocused) refetch()
    else dataState.set(null)
  }, [isFocused])

  return {
    loading,
    error,
    data: dataState.val,
    exec: refetch,
  }
}

export default useQuery
