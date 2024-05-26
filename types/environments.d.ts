declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GRAPHQL_URL: string;
      TRANSACTIONS_URL: string;
      NEXTAUTH_SECRET: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      SERVICE_USERS_GRPC_HOST: string;
      SERVICE_USERS_GRPC_SSL: string;
      SERVICE_USERS_SETTINGS_GRPC_HOST: string;
      SERVICE_USERS_SETTINGS_GRPC_SSL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
