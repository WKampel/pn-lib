import { ApolloProvider as ApolloApolloProvider, ApolloClient, InMemoryCache, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
// @ts-ignore
import { createUploadLink } from 'apollo-upload-client'
import { ReactNode, useMemo } from 'react'
import { useAppConfig } from '../../core/hooks/useAppConfig'

type ApolloProviderProps = {
  children: ReactNode
  token: string | undefined | null
  setToken?: (token: string | null) => void
}

export const ApolloProvider = ({ children, token, setToken }: ApolloProviderProps) => {
  const { version, platform, app } = useAppConfig()

  const client = useMemo(() => {
    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
        app,
        version,
        platform,
      },
    }))

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
      if (networkError) {
        const { statusCode } = networkError as any
        if (statusCode === 401) setToken?.(null)
        console.log(`[Network error]: ${networkError}`)
      }
    })

    const uploadLink = createUploadLink({ uri: process.env.EXPO_PUBLIC_API_URL + '/backend/graphql' })

    return new ApolloClient({
      link: from([authLink, errorLink, uploadLink]),
      cache: new InMemoryCache(),
    })
  }, [token])

  return <ApolloApolloProvider client={client}>{children}</ApolloApolloProvider>
}
