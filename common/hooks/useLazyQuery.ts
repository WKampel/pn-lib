import { ApolloError, DocumentNode, OperationVariables, WatchQueryFetchPolicy, useLazyQuery as apolloUseLazyQuery } from '@apollo/client'

export type UseLazyQueryConfig<TData, TVariables> = {
  onCompleted?: (data: TData) => void
  onError?: (error: ApolloError) => void
  fetchPolicy?: WatchQueryFetchPolicy
}

export const useLazyQuery = <TData, TVariables extends OperationVariables>(query: DocumentNode, config?: UseLazyQueryConfig<TData, TVariables>) => {
  const { onCompleted, onError, fetchPolicy } = config || {}

  const [run, { loading, error, data }] = apolloUseLazyQuery<TData, TVariables>(query, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: fetchPolicy || 'cache-and-network',
    onCompleted: (data: TData) => {
      try {
        onCompleted?.(data)
      } catch (e) {
        console.log('Error:', e)
      }
    },
    onError: (err: ApolloError) => {
      try {
        onError?.(err)
      } catch (e) {
        console.log('Error:', e)
      }
    },
  })

  return {
    loading,
    error,
    data,
    exec: (variables: TVariables) => {
      return run({ variables })
    },
  }
}
