import { useMutation as useMutationGraphQL } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'

const useMutation = (query, config) => {
  const nav = useNavigation()

  const [runMutation, { loading, error, data }] = useMutationGraphQL(query, {
    onCompleted: data => {
      if (config?.onSuccess) config.onSuccess(data)
      if (config?.redirectOnSuccess) nav.navigate(config.redirectOnSuccess)
    },
    onError: e => {
      if (config?.alertError) alert(e?.message)
    },
  })

  const exec = variables => runMutation({ variables })

  return {
    loading,
    error,
    data,
    exec,
  }
}

export default useMutation
