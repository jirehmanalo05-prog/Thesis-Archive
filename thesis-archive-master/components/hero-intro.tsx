import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "Theses", value: "50+" },
  { label: "Strands", value: "8" },
  { label: "Access", value: "Free" },
];

export function HeroIntro() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-lg sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Welcome to the SHS Theses Archive
          </h1>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Discover groundbreaking research from our academic community
          </h4>
          <p className="max-w-2xl text-lg text-muted-foreground">
            This archive hosts theses from ACADEMIC and TVL tracks theses/research papers, enabling quick
            browsing,and abstract previews. Whether you are a
            student, mentor, or industry partner, use this library to stay
            inspired and bring new ideas into your next research and endeavor.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/ict"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Explore ICT Theses
            </Link>
            <Link
              href="/stem"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Explore STEM Theses
            </Link>
            <Link
              href="/abm"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Explore ABM Theses
            </Link>
            <Link
              href="/pbm"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Explore PBM Theses
            </Link>
            <Link
              href="/humss"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Explore HUMSS Theses
            </Link>
             <Link
              href="/eim"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Explore EIM Theses
            </Link>
            <Link
              href="/he"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Explore HE Theses
            </Link>
            <Link
              href="/smaw"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Explore SMAW Theses
            </Link>
          </div>
          <dl className="flex flex-wrap gap-6 text-center sm:text-left">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-4 rounded-3xl border border-white/30 opacity-40 blur-2xl" />
          <Image
            src="MainImage.jpg"
            alt="Students collaborating on research"
            width={900}
            height={700}
            className="h-full w-full rounded-3xl object-cover shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

