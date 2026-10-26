import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

/** Shared chrome for every page: fixed navbar + footer around the route content. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
