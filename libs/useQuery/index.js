const { useState, useEffect } = require('react')
const { useNavigation, useIsFocused } = require('@react-navigation/native')
const { useQuery: useQueryGraphQL } = require('graphql-hooks')

const useQuery = (query, config) => {
  const nav = useNavigation()

  const { loading, error, data, refetch } = useQueryGraphQL(query, {
    variables: config?.variables,
    onSuccess: () => {
      if (config?.onSuccess) config.onSuccess()
      if (config?.redirectOnSuccess) nav.navigate(options.redirectOnSuccess)
    },
  })

  useEffect(() => {
    if (config?.alertError) alert(error)
  }, [error])

  return {
    loading,
    error,
    data,
    exec: refetch,
  }
}

export default useQuery
