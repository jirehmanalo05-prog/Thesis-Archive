import { AcademicCapIcon, BriefcaseIcon, UsersIcon } from "@heroicons/react/24/outline";
import { HeroIntro } from "@/components/hero-intro";
import { StrandFilter } from "@/components/strand-filter";

const strandInsights = [
  {
    title: "What is ICT?",
    description:
      "Information and Communications Technology theses tackle software engineering, intelligent systems, infrastructure, and immersive experiences that move our digital campus forward.",
    icon: AcademicCapIcon,
  },
  {
    title: "What is PBM?",
    description:
      "Principles of Business Management theses examine entrepreneurship, finance, sustainability, and organizational design to strengthen local industries and communities.",
    icon: BriefcaseIcon,
  },
  {
    title: "What is HUMSS?",
    description:
      "Humanities and Social Sciences theses explore culture, communication, pedagogy, and social research that deepen our understanding of people and society.",
    icon: UsersIcon,
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroIntro />

      <section className="grid gap-6 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-sm md:grid-cols-2">
        {strandInsights.map((item) => (
          <article key={item.title} className="flex gap-4">
            <div className="mt-1 rounded-2xl bg-primary/10 p-3 text-primary">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      <StrandFilter title="Browse by strand" />
    </div>
  );
}
