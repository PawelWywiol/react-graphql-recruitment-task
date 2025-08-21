import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: [
    'src/graphql/**/*.{ts,tsx,graphql,gql}',
    'src/components/**/*.{ts,tsx}',
    'src/hooks/**/*.{ts,tsx}',
  ],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/types/schema.ts': {
      plugins: ['typescript'],
    },
    'src/graphql/types/generated.ts': {
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: '@apollo/client',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
      },
    },
    'src/graphql/types/introspection.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
