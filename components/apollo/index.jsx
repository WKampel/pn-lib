import { ApolloClient, InMemoryCache, ApolloProvider, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { useMemo } from 'react'
import { createUploadLink } from 'apollo-upload-client'

export default props => {
  const client = useMemo(() => {
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: props.token ? `Bearer ${props.token}` : '',
          practiceid: props.practiceId,
        },
      }
    })

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

    const uploadLink = createUploadLink({ uri: 'http://192.168.1.36:3050/graphql' })

    return new ApolloClient({
      link: from([authLink, errorLink, uploadLink]),
      cache: new InMemoryCache(),
    })
  }, [props.token, props.practiceId])

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
