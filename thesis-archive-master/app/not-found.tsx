import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="text-4xl font-bold text-foreground">
        We couldn’t find that page.
      </h1>
      <p className="max-w-xl text-base text-muted-foreground">
        The thesis strand or resource you are looking for may have been removed
        or relocated. Return to the home page to continue exploring the Thesis
        Archive.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        Back to Home
      </Link>
    </div>
  );
}

