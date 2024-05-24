"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ApolloWrapper } from "./apollo";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <ApolloWrapper>{children}</ApolloWrapper>
      </SessionProvider>
    </>
  );
};
