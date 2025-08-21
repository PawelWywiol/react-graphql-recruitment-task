'use client';

import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs';

import { makeClient } from './apollo.client';

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => (
  <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
);
