export type Strand = "ICT" | "PBM" | "HUMSS";

export interface Thesis {
  id: string;
  title: string;
  authors: string[];
  year: number;
  strand: Strand;
  abstract: string;
  thumbnail: string;
  pdfUrl: string;
}

export const theses: Thesis[] = [
    {
        id: "ict-01",
        title: "Bottle for a Pen: Via Automated Plastic Bottle Vending Machine",
        authors: [
            "Jaso, Jherwin S.",
            "Gonda, Andrew Jeoyam M.",
            "Maala, Andie Luc C.",
            "Manongsong, Paul Francis D.",
            "Ramos, Ralph Jareez D.",
            "Reyes, John Justin B.",
            "Sarmiento, Mikel Jazle D.",
            "Sombilon, John Joren V.",
            "Dolor, Maria Rosalyn S.",
            "Gunio, Rica Jhane J.",
            "Matira, Christine Joy M.",
            "Presto, Aileen V."
        ],
        year: 2025,
        strand: "ICT",
        abstract: "This research paper, \"Bottle for a Pen: Via Automated Plastic Bottle Vending Machine\", investigates the development and implementation of an automated plastic bottle vending machine designed to promote recycling habits and environmental awareness among students in Anselmo A. Sandoval Memorial National High School. The study aims to assess the machine's effectiveness in encouraging proper disposal of plastic bottles and its overall impact on the school's sustainability initiative. Through quantitative research method, the study evaluates the students' engagement with the vending machine, their recycling behaviors, and their attitudes towards environmental conservation. Data collected from survey provide insights into the machine's usage, its benefits, and areas for improvement. The findings indicate a positive correlation between the presence of the vending machine and an increase in recycling activities among students. Additionally, the study highlights the importance of integrating innovative solution in educational settings to respond environmental responsibility and sustainable practices. The paper concludes with recommendations for further enhancing the vending machine's functionality and expanding its implementation to other educational institutions. This research contributes to the ongoing efforts to address plastic waste management and underscores the role of educational institutions in promoting environmental stewardship.",
        thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7e87?auto=format&fit=crop&w=600&q=80",
        pdfUrl: "/pdfs/thesis-01.pdf"
    },
  {
    id: "ict-02",
    title: "Context-Aware Thesis Recommendation Assistant",
    authors: ["Jasper Co", "Lea Mapili"],
    year: 2023,
    strand: "ICT",
    abstract:
      "The study designs a retrieval-augmented chatbot that helps undergraduates discover relevant theses based on conversational intent rather than keyword search. A corpus of 1,200 abstracts is embedded using Sentence Transformers, and recommendations are ranked through a hybrid cosine similarity and popularity signal. Evaluation with thirty ICT students shows a 41% improvement in perceived discovery speed and higher satisfaction for exploratory research tasks. The paper details the prompt-engineering strategies used to keep generative outputs grounded in institutional sources, alongside ethical safeguards that surface citation reminders and authorship disclaimers. Future enhancements include multilingual embeddings and tighter integration with institutional repositories.",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-02.pdf",
  },
  {
    id: "ict-03",
    title: "IoT Laboratory Environment Sentinel",
    authors: ["Rowena Garcia", "Neil Javier", "Pat Ruiz"],
    year: 2022,
    strand: "ICT",
    abstract:
      "This thesis presents an IoT-based monitoring platform that visualizes humidity, temperature, and power consumption trends across computer laboratories. Low-cost sensors publish data to an MQTT broker, while a Next.js dashboard triggers SMS alerts when readings exceed configurable safety thresholds. Deployment over a twelve-week semester captured 2.4 million telemetry points and prevented three equipment shutdowns caused by overheating. The research outlines calibration methods, OTA update procedures, and a financial analysis that contrasts commercial building management systems with the student-built solution. Stakeholder interviews underscore the importance of transparent alert policies before automating equipment lockdowns.",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-03.pdf",
  },
  {
    id: "ict-04",
    title: "Augmented Reality Equipment Trainer",
    authors: ["Dana Pascual", "Eli Santos"],
    year: 2021,
    strand: "ICT",
    abstract:
      "Focusing on immersive learning, this project develops an AR application that guides electronics students through soldering, board inspection, and safety workflows. Spatial anchors align virtual overlays with physical lab benches, while a validation study compares task completion between AR-assisted and traditional printed guides. Participants using the AR trainer finish calibration steps 33% faster and commit fewer safety violations, according to a rubric developed with faculty mentors. The thesis delves into 3D asset optimization for low-powered tablets, user interface accessibility decisions, and the maintenance process for updating procedures every academic term. Suggestions for future work include haptic feedback integrations and multi-user collaboration modes.",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-04.pdf",
  },
  {
    id: "pbm-01",
    title: "Digital Microfinance Readiness Index",
    authors: ["Ivy Domingo", "Carlos Llamas"],
    year: 2024,
    strand: "PBM",
    abstract:
      "The thesis proposes a readiness index that helps rural cooperatives evaluate whether to adopt mobile microfinance services. Using a mixed-methods approach, the authors identify twenty capability indicators spanning regulatory compliance, borrower literacy, and liquidity resilience. Each indicator is weighted through analytic hierarchy processing with inputs from cooperative managers and fintech mentors. Pilots across five provinces reveal that data governance and agent training are the most common blockers to digital rollout. The study concludes with a toolkit that prioritizes interventions based on cost and projected membership impact, giving community lenders a pragmatic blueprint for staged adoption.",
    thumbnail:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-05.pdf",
  },
  {
    id: "pbm-02",
    title: "Hybrid Work Productivity Playbook",
    authors: ["Miguel Ocampo", "Trina Uy"],
    year: 2023,
    strand: "PBM",
    abstract:
      "Responding to post-pandemic workplace shifts, this research compiles a playbook that small consultancies can adopt to balance hybrid schedules with measurable performance. The authors design a scorecard that blends client-facing KPIs with wellness metrics gathered from voluntary pulse surveys. Mixed ANOVA analysis across three pilot firms shows that structured asynchronous rituals coupled with two on-site collaboration days yield the most stable billable hours per consultant. The paper highlights change-management tactics, such as narrative-based leadership briefings and transparent tooling budgets, which improved staff trust during policy rollouts. Recommendations emphasize continuous retrospectives and mentorship pairings for early-career employees.",
    thumbnail:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-06.pdf",
  },
  {
    id: "pbm-03",
    title: "Circular Packaging Adoption Model",
    authors: ["Gio Ramos", "Lara Austria", "Pia Javier"],
    year: 2022,
    strand: "PBM",
    abstract:
      "This thesis constructs a behavioral model explaining how small food manufacturers decide to adopt reusable or compostable packaging. Drawing on the Theory of Planned Behavior, the authors survey 180 entrepreneurs and enrich the quantitative findings with stakeholder interviews. Structural equation modeling reveals that perceived customer demand exerts a stronger influence than regulatory pressure, while financial incentives only matter when suppliers provide demand forecasts. The proposed adoption model informs a decision matrix that helps founders prioritize pilot programs, supplier negotiations, or consumer education campaigns. Policy recommendations encourage local governments to offer shared logistics hubs for reusable container returns.",
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-07.pdf",
  },
  {
    id: "pbm-04",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: 2021,
    strand: "PBM",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
   {
    id: "humms-01",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: 2021,
    strand: "HUMSS",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
];

export const getThesesByStrand = (strand: Strand) =>
  theses.filter((thesis) => thesis.strand === strand);

