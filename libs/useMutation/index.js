const { useEffect } = require('react')
const { useNavigation } = require('@react-navigation/native')
const { useMutation: useMutationGraphQL } = require('graphql-hooks')

const useMutation = (query, config) => {
  const nav = useNavigation()

  const [exec, { loading, error, data }] = useMutationGraphQL(query, {
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
    exec,
  }
}

export default useMutation
