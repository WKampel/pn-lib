import { ApolloError, DocumentNode, MutationHookOptions, useMutation as useMutationGraphQL } from '@apollo/client'
import { namedOperations } from '../../../gql/graphql'
import useNotification from '../../hooks/useNotification'
import { useNav } from './useNav'

export type UseMutationConfig<TData, TVariables> = {
  onSuccess?: (data: TData) => void
  redirectOnSuccess?: string
  displaySuccess?: boolean | string
  onError?: (error: ApolloError) => void
  displayError?: boolean
  refetchQueries?: Array<keyof OperationNames>
  variables: TVariables
}

type OperationNames = typeof namedOperations.Query

export const useMutation = <TData, TVariables>(query: DocumentNode, config: UseMutationConfig<TData, TVariables>) => {
  const nav = useNav()
  const { notify } = useNotification()

  const displayError = config.displayError !== undefined ? config.displayError : true

  const [runMutation, { loading, error, data }] = useMutationGraphQL<TData, TVariables>(query, {
    variables: config.variables,
    onCompleted: data => {
      try {
        // on success
        if (config.onSuccess) config.onSuccess(data)

        // redirect on success
        if (config.redirectOnSuccess) nav.navigate(config.redirectOnSuccess)

        // display success
        if (config.displaySuccess) {
          const title = typeof config.displaySuccess === 'string' ? config.displaySuccess : 'Success'
          notify({ title, lifeSpan: 3000 })
        }
      } catch (e) {
        console.log('Error:', e)
      }
    },
    onError: e => {
      // on error
      if (config.onError) config.onError(e)

      // display error
      if (displayError && e?.graphQLErrors) {
        for (const error of e.graphQLErrors) {
          notify({ body: error.message, type: 'error' })
        }
      }
    },
    refetchQueries: config.refetchQueries,
  } as MutationHookOptions<TData, TVariables>)

  return {
    loading,
    error,
    errorField: error?.graphQLErrors?.[0]?.extensions?.field,
    data,
    exec: (options?: { variables: Partial<TVariables> }) => {
      if (options) {
        return runMutation({ variables: { ...config.variables, ...options.variables } })
      } else {
        return runMutation()
      }
    },
  }
}
