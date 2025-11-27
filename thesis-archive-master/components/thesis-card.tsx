import Image from "next/image";
import type { Thesis } from "@/data/theses";

type ThesisCardProps = {
  thesis: Thesis;
  onViewAbstract: (thesis: Thesis) => void;
};

const strandColors: Record<Thesis["strand"], string> = {
  ICT: "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-200",
  PBM: "bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-200",
};

export function ThesisCard({ thesis, onViewAbstract }: ThesisCardProps) {
  return (
    <article className="group flex flex-col rounded-3xl border border-border/60 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden rounded-t-3xl">
        <Image
          src={thesis.thumbnail}
          alt={`${thesis.title} thumbnail`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 350px, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{thesis.year}</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${strandColors[thesis.strand]}`}
            >
              {thesis.strand}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {thesis.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {thesis.authors.join(", ")}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onViewAbstract(thesis)}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            View Abstract
          </button>
          <a
            href={thesis.pdfUrl}
            download
            className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Download PDF
          </a>
        </div>
      </div>
    </article>
  );
}

