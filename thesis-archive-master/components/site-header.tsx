 "use client";
 
 import Link from "next/link";
 import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () =>
    import("./theme-toggle").then((module) => ({
      default: module.ThemeToggle,
    })),
  { ssr: false, loading: () => <span className="text-sm text-muted-foreground">Theme</span> }
);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Thesis Archive
          </Link>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:inline">
            ICT & PBM
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          <Link
            className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            href="/"
          >
            Home
          </Link>
          <Link
            className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            href="/ict"
          >
            ICT Theses
          </Link>
          <Link
            className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            href="/pbm"
          >
            PBM Theses
          </Link>
         <Link
            className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            href="/humms"
          >
           HUMSS Theses
          </Link>
          <Link
            className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            href="/abm"
          >
            ABM Theses
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

