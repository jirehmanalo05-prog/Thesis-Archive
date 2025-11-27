import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Strand, getThesesByStrand } from "@/data/theses";
import { StrandFilter } from "@/components/strand-filter";
import { ThesisGrid } from "@/components/thesis-grid";

const strandConfig: Record<
  string,
  { key: Strand; title: string; excerpt: string; highlight: string }
> = {
  ict: {
    key: "ICT",
    title: "Information and Communications Technology",
    excerpt:
      "Explore theses focused on software development, AI-driven solutions, networks, and human-computer interaction.",
    highlight: "Prototypes, immersive learning, and digital infrastructure.",
  },
  pbm: {
    key: "PBM",
    title: "Pre-Baccalaureate Maritime",
    excerpt:
      "Dive into business research covering finance, entrepreneurship, community ventures, and sustainable growth.",
    highlight: "Strategy blueprints, data-driven policies, and social impact.",
  },
  humss: {
    key: "HUMSS",
    title: "Humanities and Social Sciences",
    excerpt:
      "Dive into business research covering finance, entrepreneurship, community ventures, and sustainable growth.",
    highlight: "Strategy blueprints, data-driven policies, and social impact.",
  },
};

type StrandPageProps = {
  params: Promise<{ strand: string }>;
};

export function generateStaticParams() {
  return Object.keys(strandConfig).map((slug) => ({ strand: slug }));
}

export async function generateMetadata({
  params,
}: StrandPageProps): Promise<Metadata | undefined> {
  const { strand } = await params;
  const data = strandConfig[strand.toLowerCase()];
  if (!data) return undefined;

  return {
    title: `${data.key} Theses • Thesis Archive`,
    description: data.excerpt,
  };
}

export default async function StrandPage({ params }: StrandPageProps) {
  const { strand } = await params;
  const slug = strand?.toLowerCase?.();
  const data = slug ? strandConfig[slug] : undefined;
  if (!data) {
    notFound();
  }

  const theses = getThesesByStrand(data.key);

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-border/60 bg-card/70 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {data.key} Strand
        </p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">{data.title}</h1>
        <p className="mt-4 text-base text-muted-foreground">{data.excerpt}</p>
        <p className="mt-2 text-sm text-foreground">{data.highlight}</p>
      </section>

      <StrandFilter activeStrand={data.key} title="Switch strand" />

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              Featured Research
            </h2>
            <p className="text-sm text-muted-foreground">
              {theses.length} curated theses with downloadable PDFs.
            </p>
          </div>
        </div>
        <ThesisGrid theses={theses} />
      </section>
    </div>
  );
}

