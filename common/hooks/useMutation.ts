import { ApolloError, DocumentNode, MutationHookOptions, useMutation as useMutationGraphQL } from '@apollo/client'
import { namedOperations } from '../../../gql/graphql'
import { useNav } from './useNav'
import { useNotification } from './useNotification'

type ValidationErrorMessage = string

export type UseMutationConfig<TData, TVariables> = {
  onSuccess?: (data: TData) => void
  redirectOnSuccess?: string
  displaySuccess?: boolean | string
  onError?: (error: ApolloError) => void
  displayError?: boolean
  refetchQueries?: Array<keyof OperationNames>
  variables: TVariables
  validate?: (data: TVariables) => ValidationErrorMessage | boolean
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
          notify({ title, body: '', type: 'INFO', lifeSpan: 3000 })
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
          notify({ title: '', body: error.message, type: 'ERROR' })
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
      const variables = { ...config.variables, ...options?.variables }
      if (options) {
        if (config.validate) {
          const validateResult = config.validate(variables)
          if (typeof validateResult === 'string') {
            notify({ type: 'ERROR', body: validateResult, title: '' })
            return
          }
        }
        return runMutation({ variables })
      }
    },
  }
}
