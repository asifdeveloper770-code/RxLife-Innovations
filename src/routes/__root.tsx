import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logo from "../assets/logo-primary.jpeg.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-gradient px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-gold-gradient">404</h1>
        <h2 className="mt-4 text-xl text-ivory">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page has drifted beyond the helix.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-navy-deep tracking-wide uppercase"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-gradient px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display text-ivory">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-navy-deep"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm text-ivory">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Infinity RxLife — Peptides. Performance. Longevity." },
      { name: "description", content: "Science-driven longevity, premium education, and innovative wellness solutions from Infinity RxLife." },
      { name: "author", content: "Infinity RxLife" },
      { name: "theme-color", content: "#0B1D3B" },
      { property: "og:title", content: "Infinity RxLife — The Future of Longevity" },
      { property: "og:description", content: "Peptides. Performance. Longevity. A luxury biotechnology brand." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Infinity RxLife" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: logo.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
