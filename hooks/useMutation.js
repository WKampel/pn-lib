import { useMutation as useMutationGraphQL } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { useNotification } from '../contexts/Notification'

const useMutation = (query, config) => {
  const nav = useNavigation()
  const { notify } = useNotification()

  const [runMutation, { loading, error, data }] = useMutationGraphQL(query, {
    onCompleted: data => {
      if (config?.onSuccess) config.onSuccess(data)
      if (config?.redirectOnSuccess) nav.navigate(config.redirectOnSuccess)
    },
    onError: e => {
      if (config?.alertError) alert(e?.message)

      for (const _error of e?.graphQLErrors) {
        if (config?.displayError) {
          notify({ title: _error.extensions?.code, body: _error.message, type: 'error' })
        }
      }
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
