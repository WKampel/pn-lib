import { ApolloClient, InMemoryCache, ApolloProvider, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { useMemo } from 'react'
import { createUploadLink } from 'apollo-upload-client'

export default props => {
  const client = useMemo(() => {
    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: props.token ? `Bearer ${props.token}` : '',
      },
    }))

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
      if (networkError) {
        const { statusCode } = networkError
        if (statusCode === 401) props.clearToken()
        console.log(`[Network error]: ${networkError}`)
      }
    })

    const uploadLink = createUploadLink({ uri: 'http://137.184.135.124:3050/graphql' })

    return new ApolloClient({
      link: from([authLink, errorLink, uploadLink]),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      },
    })
  }, [props.token])

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
