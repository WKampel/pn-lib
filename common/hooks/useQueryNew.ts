import { ApolloError, DocumentNode, OperationVariables, WatchQueryFetchPolicy, useQuery as apolloUseQuery } from '@apollo/client'

export type UseQueryNewConfig<TData, TVariables> = {
  variables: TVariables
  skip?: boolean
  onCompleted?: (data: TData) => void
  onError?: (error: ApolloError) => void
  fetchPolicy?: WatchQueryFetchPolicy
}

export const useQueryNew = <TData, TVariables extends OperationVariables>(query: DocumentNode, config: UseQueryNewConfig<TData, TVariables>) => {
  const { variables, skip, onCompleted, onError, fetchPolicy } = config || {}

  const { loading, error, data, refetch } = apolloUseQuery<TData, TVariables>(query, {
    notifyOnNetworkStatusChange: true,
    variables,
    fetchPolicy: fetchPolicy || 'cache-and-network',
    skip,
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
    exec: (variables: Partial<TVariables> = {}) => {
      return refetch({ ...config.variables, ...variables })
    },
  }
}
