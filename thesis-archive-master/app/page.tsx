import { CommandLineIcon, CubeTransparentIcon, ChartPieIcon,MapIcon,BookOpenIcon,Cog8ToothIcon,ShoppingBagIcon,SparklesIcon } from "@heroicons/react/24/outline";
import { HeroIntro } from "@/components/hero-intro";
import { StrandFilter } from "@/components/strand-filter";

const strandInsights = [
  {
    title: "What is ICT?",
    description:
      "(Information and Communications Technology) - Tackle software engineering, intelligent systems, infrastructure, and immersive experiences that move our digital campus forward.",
    icon: CommandLineIcon,
  },
  {
    title: "What is STEM?",
    description:
      "(Science, Technology, Engineering, Mathematics) – The strand for curious innovators ready to explore, experiment, and engineer the future.",
    icon: CubeTransparentIcon,
  },
  {
    title: "What is ABM?",
    description:
      "(Accountancy, Business, and Management) – Home of future entrepreneurs and leaders who turn ideas into success stories.",
    icon: ChartPieIcon,
  },
  {
    title: "What is PBM?",
    description:
      "(Pre - Baccalaureate Maritime) – Where future seafarers begin their voyage, mastering discipline, navigation, and the call of the open sea.",
    icon: MapIcon,
  },
  {
    title: "What is HUMSS?",
    description:
      "(Humanities and Social Sciences) – The path for storytellers, thinkers, and advocates who want to shape society with words and wisdom.",
    icon: BookOpenIcon,
  },
  {
    title: "What is EIM?",
    description:
      "(Electrical Installation and Maintenance) – For hands that bring power to life—future electricians who keep systems running and lights shining.",
    icon: Cog8ToothIcon,
  },
  {
    title: "What is HE?",
    description:
      "(Home Economics) – Where future culinary creatives are born—crafting flavors, mastering kitchen skills, and turning passion for cooking into a profession.",
    icon: ShoppingBagIcon,
  },
  {
    title: "What is SMAW?",
    description:
      "(Shielded Metal Arc Welding) – Where sparks fly and skills are forged, creating builders ready to weld the world into shape.",
    icon: SparklesIcon,
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroIntro />

      <section className="grid gap-6 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-sm md:grid-cols-2">
        {strandInsights.map((item) => (
          <article key={item.title} className="flex gap-4">
            <div className="mt-1 rounded-2xl bg-red-800/10 p-3 text-red-800"">
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
