import Link from "next/link";
import type { Strand } from "@/data/theses";
import { CpuChipIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";

const strands: Array<{
  key: Strand;
  label: string;
  description: string;
  Icon: typeof CpuChipIcon;
  href: string;
}> = [
  {
    key: "ICT",
    label: "ICT Theses",
    description: "Software, networks, and immersive tech innovations.",
    Icon: CpuChipIcon,
    href: "/ict",
  },
  {
    key: "PBM",
    label: "PBM Theses",
    description: "Business strategy, finance, and community ventures.",
    Icon: BuildingOffice2Icon,
    href: "/pbm",
  },
  {
    key: "HUMSS",
    label: "HUMSS Theses",
    description: "Business strategy, finance, and community ventures.",
    Icon: BuildingOffice2Icon,
    href: "/humss",
  },
];

type StrandFilterProps = {
  activeStrand?: Strand;
  title?: string;
};

export function StrandFilter({ activeStrand, title }: StrandFilterProps) {
  return (
    <section
      aria-label="Strand navigation"
      className="w-full rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
    >
      {title ? (
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <span className="text-sm text-muted-foreground">3 strands</span>
        </div>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        {strands.map(({ key, label, description, href, Icon }) => (
          <Link
            key={key}
            href={href}
            data-active={activeStrand === key}
            className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-4 transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 data-[active=true]:border-primary data-[active=true]:bg-primary/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">{label}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

