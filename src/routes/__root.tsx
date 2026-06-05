import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <p className="mt-4 text-sm tracking-brand uppercase text-muted-foreground">
          Page not found
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-xs tracking-brand uppercase hover:bg-foreground hover:text-background transition-colors"
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
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something stirred the calm.</h1>
        <p className="mt-3 text-sm text-muted-foreground">Try again — peacefully.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-foreground px-6 py-3 text-xs tracking-brand uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-6 py-3 text-xs tracking-brand uppercase hover:bg-muted transition-colors"
          >
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
      { title: "TRUE SELF — Streetwear for the authentic" },
      {
        name: "description",
        content:
          "Minimalist premium streetwear for those who choose authenticity over noise. Embroidered phrases. Soft fabrics. True energy.",
      },
      { property: "og:title", content: "TRUE SELF — Streetwear for the authentic" },
      {
        property: "og:description",
        content: "Minimalist premium streetwear for those who choose authenticity over noise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Caveat:wght@400;600&family=Space+Grotesk:wght@400;500;600&family=Cairo:wght@300;400;500;600;700&family=Amiri:ital@0;1&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

import { LanguageProvider } from "../hooks/useLanguage";
import { CartProvider } from "../hooks/useCart";

function RootShell({ children }: { children: React.ReactNode }) {
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
      <CartProvider>
        <LanguageProvider>
          <Outlet />
        </LanguageProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
