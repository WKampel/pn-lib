import { useMutation as useMutationGraphQL } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { useNotification } from '../contexts/Notification'

const useMutation = (query, config) => {
  if (!query) return
  const nav = useNavigation()
  const { notify } = useNotification()

  const [runMutation, { loading, error, data }] = useMutationGraphQL(query, {
    onCompleted: data => {
      if (config?.onSuccess) config.onSuccess(data)
      if (config?.redirectOnSuccess) nav.navigate(config.redirectOnSuccess)
      if (config?.displaySuccess) notify({ title: typeof config?.displaySuccess === 'string' ? config?.displaySuccess : 'Success', lifeSpan: 3000 })
    },
    onError: e => {
      if (config?.alertError) alert(e?.message)
      if (config?.onError) config?.onError(e)

      for (const _error of e?.graphQLErrors) {
        if (config?.displayError) {
          notify({ title: _error.extensions?.code, body: _error.message, type: 'error' })
        }
      }
    },
    refetchQueries: config?.refetchQueries,
  })

  const exec = variables => runMutation({ variables: variables || config?.variables })

  return {
    loading,
    error,
    data,
    exec,
  }
}

export default useMutation
