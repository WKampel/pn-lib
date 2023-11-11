import { ApolloProvider as ApolloApolloProvider, ApolloClient, InMemoryCache, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { useMemo } from 'react'
import useAuthToken from '../hooks/useAuthToken'

const ApolloProvider = ({ children, practiceUrl }) => {
  const { token, setToken } = useAuthToken()

  const client = useMemo(() => {
    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
        ...(practiceUrl && { practiceUrl }),
        app: process.env.EXPO_PUBLIC_APP,
      },
    }))

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
      if (networkError) {
        const { statusCode } = networkError
        if (statusCode === 401) setToken && setToken(null)
        console.log(`[Network error]: ${networkError}`)
      }
    })

    const uploadLink = createUploadLink({ uri: process.env.EXPO_PUBLIC_API_URL + '/backend/graphql' })

    return new ApolloClient({
      link: from([authLink, errorLink, uploadLink]),
      cache: new InMemoryCache(),
    })
  }, [token, practiceUrl])

  return <ApolloApolloProvider client={client}>{children}</ApolloApolloProvider>
}

export default ApolloProvider
