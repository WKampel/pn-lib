import { ApolloError, DocumentNode, useMutation as useMutationGraphQL } from '@apollo/client'
import { namedOperations } from '../../../gql/graphql'
import { useNotification } from './useNotification'

export type UseMutationConfig<TData, TVariables> = {
  onCompleted?: (data: TData) => void
  onError?: (error: ApolloError) => void
  refetchQueries?: Array<keyof OperationNames>
  displaySuccess?: boolean | string
  displayError?: boolean
}

type OperationNames = typeof namedOperations.Query

// Purpose of this wrapper:
// 1) Enforces the execution of mutation through the 'exec' function. This ensures that variables are always passed to the mutation. The 'runMutation' function from Apollo Client does not require variables to be passed, which can lead to potential issues. Therefore, using 'exec' is safer.
// 2) Allows the 'refetchQueries' to be typed, providing better type safety and autocompletion in IDEs.
// 3) Provides a flexible structure for adding any additional configuration or functionality that might be needed in the future.
export const useMutationNew = <TData, TVariables>(query: DocumentNode, config: UseMutationConfig<TData, TVariables>) => {
  const { onCompleted, onError, refetchQueries, displayError = true, displaySuccess } = config
  const { notify } = useNotification()

  const [runMutation, { loading, error, data }] = useMutationGraphQL<TData, TVariables>(query, {
    onCompleted: data => {
      if (displaySuccess) {
        const title = typeof displaySuccess === 'string' ? displaySuccess : 'Success'
        notify({ title, body: '', type: 'INFO', lifeSpan: 3000 })
      }

      try {
        onCompleted?.(data)
      } catch (e) {
        console.log('Error:', e)
      }
    },
    onError: e => {
      if (displayError && e?.graphQLErrors) {
        for (const error of e.graphQLErrors) {
          notify({ title: '', body: error.message, type: 'ERROR' })
        }
      }

      try {
        onError?.(e)
      } catch (e) {
        console.log('Error:', e)
      }
    },
    refetchQueries,
  })

  const exec = (variables: TVariables) => {
    runMutation({ variables })
  }

  return {
    loading,
    error,
    data,
    exec,
  }
}
