import { ApolloLink, HttpLink, type NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloClient, InMemoryCache, SSRMultipartLink } from '@apollo/client-integration-nextjs';

import { HTTP_LINK_URI, UNAUTHORIZED_STATUS_CODE } from './apollo.config';

import { LOGIN_ROUTE_PATH } from '@/config/route';
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from '@/config/storage';

const httpLink: ApolloLink = new HttpLink({
  uri: HTTP_LINK_URI,
  fetchOptions: { cache: 'no-store' },
});

const errorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // graphQLErrors.forEach(({ message, locations, path }) => {
    //TODO: Implement error logging e.g. Sentry
    // });
  }

  if (networkError) {
    //TODO: Implement error logging e.g. Sentry

    if ('statusCode' in networkError && networkError.statusCode === UNAUTHORIZED_STATUS_CODE) {
      if (typeof globalThis !== 'undefined') {
        localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
        globalThis.location.href = LOGIN_ROUTE_PATH;
      }
    }
  }
});

const authLink: ApolloLink = new ApolloLink((operation, forward) => {
  if (typeof globalThis !== 'undefined') {
    const token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
    if (token) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }
  return forward(operation);
});

const link: ApolloLink =
  typeof globalThis === 'undefined'
    ? ApolloLink.from([
        new SSRMultipartLink({
          stripDefer: false,
          cutoffDelay: 100,
        }),
        errorLink,
        authLink,
        httpLink,
      ])
    : ApolloLink.from([errorLink, authLink, httpLink]);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const makeClient = (): ApolloClient<NormalizedCacheObject> => client;
