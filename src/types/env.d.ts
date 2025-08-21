declare namespace NodeJS {
  interface ProcessEnv {
    GRAPHQL_ENDPOINT: string;
    NEXT_PUBLIC_GRAPHQL_ENDPOINT?: string;
  }
}
