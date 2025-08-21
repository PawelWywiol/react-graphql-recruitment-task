import { ApolloLink, HttpLink, type NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloClient, InMemoryCache, SSRMultipartLink } from '@apollo/client-integration-nextjs';

const UNAUTHORIZED_STATUS_CODE = 401;

const httpLink: ApolloLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || process.env.GRAPHQL_ENDPOINT,
  fetchOptions: { cache: 'no-store' },
});

const errorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      //TODO: Implement error logging
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  if (networkError) {
    //TODO: Implement error logging
    console.error(`[Network error]: ${networkError}`);

    if ('statusCode' in networkError && networkError.statusCode === UNAUTHORIZED_STATUS_CODE) {
      if (typeof globalThis !== 'undefined') {
        localStorage.removeItem('auth-token');
        globalThis.location.href = '/login';
      }
    }
  }
});

const link: ApolloLink =
  typeof globalThis === 'undefined'
    ? ApolloLink.from([
        new SSRMultipartLink({
          stripDefer: false,
          cutoffDelay: 100,
        }),
        errorLink,
        httpLink,
      ])
    : ApolloLink.from([errorLink, httpLink]);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const makeClient = (): ApolloClient<NormalizedCacheObject> => client;
