import { ReactNode } from "react";
import { Header } from "./_header";
import { Navigation } from "./_nav";

export default function AuthenticatedRoutesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="h-[calc(100vh-var(--header-height))] mt-[var(--header-height)] grid grid-cols-[auto_1fr]">
        <Navigation />
        <div className="py-4 px-6 h-[calc(100vh-var(--header-height))] overflow-scroll">
          {children}
        </div>
      </div>
    </main>
  );
}
