import { useMutation as useMutationGraphQL } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import useNotification from './useNotification'

const useMutation = (query, { onSuccess, redirectOnSuccess, displaySuccess, onError, displayError = true, refetchQueries, variables } = {}) => {
  const nav = useNavigation()
  const { notify } = useNotification()

  const [runMutation, { loading, error, data }] = useMutationGraphQL(query, {
    variables,
    onCompleted: data => {
      try {
        // on success
        if (onSuccess) onSuccess(data)

        // redirect on success
        if (redirectOnSuccess) nav.navigate(redirectOnSuccess)

        // display success
        if (displaySuccess) {
          const title = typeof displaySuccess === 'string' ? displaySuccess : 'Success'
          notify({ title, lifeSpan: 3000 })
        }
      } catch (e) {
        console.log('Error:', e)
      }
    },
    onError: e => {
      // on error
      if (onError) onError(e)

      // display error
      if (displayError && e?.graphQLErrors) {
        for (const error of e.graphQLErrors) {
          notify({ body: error.message, type: 'error' })
        }
      }
    },
    refetchQueries,
  })

  return {
    loading,
    error,
    errorField: error?.graphQLErrors?.[0]?.extensions?.field,
    data,
    exec: runMutation,
  }
}

export default useMutation
