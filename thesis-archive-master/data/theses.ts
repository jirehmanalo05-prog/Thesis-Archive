export type Strand = "ICT" | "STEM" | "ABM" | "PBM" | "HUMSS" | "EIM" | "HE" | "SMAW";

export interface Thesis {
  id: string;
  title: string;
  authors: string[];
  year: number | string;
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
    id: "stem-01",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: 2021,
    strand: "STEM",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "abm-01",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: 2021,
    strand: "ABM",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "pbm-01",
    title: "TRANSFORMING SALINE WATER INTO A SUSTAINABLE FRESHWATER RESOURCE: A PROCESS BENEFICIAL TO MARINERS ONBOARD",
    authors: ["Casa, Krystel Marie C. Castillo", "Zedrick O. Datinguinoo", "Julie M. De Villa", "Giovanni M. Escalona", "Drew Zyvann A. "],
    year: "March 2025" ,
    strand: "PBM",
    abstract:
      `This study evaluates the effectiveness of "Oceanus Evo," a desalination system prototype, designed for maritime applications. The research assesses the prototype's performance in producing potable water, focusing on key metrics such as salinity removal and water production rate. The study employs a quantitative experimental design, utilizing laboratory testing and field simulations to gather data. The effectiveness of " Oceanus Evo" is analyzed through measurements volume of salt water, amount of salt produced, and volume of fresh water produced. The findings demonstrate Oceanus Evo's capability to effectively desalinate seawater, providing valuable data on its potential for practical implementation within the maritime industry. This research contributes to the development of sustainable water solutions for maritime environments, highlighting the potential of "Oceanus Evo" to address freshwater scarcity challenges.`,
    thumbnail:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-05.pdf",
  },
  {
    id: "pbm-02",
    title: "Exploring the Potential of Coco Coir as Oil Spill Cleaner",
    authors: ["Bantugon, Jonathan Anglo", "France Aloya, Leovy Asi", "Jan Elmer Ballester", "Jay Carlo Castillo", "Gian Corona", "Nhelmark Dalawampu", "Thristan Dalawampu", "Carl David De Mayo", "John Paolo "],
    year: "March 2025",
    strand: "PBM",
    abstract:
      `Mabini is known for its beautiful and lively marine diversity that's why it becomes one of the popular and favorite tourist destinations of travelers, vacationers, divers, and adventurers. For this reason, the economy of the municipality rises as well as the number of its wastes production. The clear water of the place became filthy and floating wastes are observable, like, plastics, bottles, cans, paper, candy wrap, and even diapers can be seen now in the surface of the seawater. This situation motivates the researchers to build an environment friendly machine called "the seabin" that will lessen the number of wastes or even be a solution for the over production of waste in water areas in Mabini. The seabin works similarly to a filter. An electric pump draws water through the bottom of the cylinder, creating a vortex around the upper edge that pulls in water and floating trash. A bag filter, made of natural material like a coffee sack, collects the trash and allows water to pass through (M. Weiser, 2016). Furthermore, to determine the potential and effectiveness of the seabin, the researchers focuses on the seabin's capacity and speed of collecting waste. They conduct some trials to measure the ability of the machine. The researchers estimated the amount of garbage that the seabin can gather weekly, monthly, and yearly. In addition, they test the relationship of the capacity and speed of collecting wastes of the seabin. Afterwards, the researchers find actions that can be done to enhance the performance of the seabin. The researcher uses Experimental-Correlational method for this study in order to view the potential and effectiveness of the seabin in collecting wastes. As a result, the researchers found out that the seabin can bring a large impact to the problem of over production of wastes of Mabini.`,
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
  {
    id: "eim-01",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: 2021,
    strand: "EIM",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-01",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: 2021,
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "smaw-01",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: 2021,
    strand: "SMAW",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
];

export const getThesesByStrand = (strand: Strand) =>
  theses.filter((thesis) => thesis.strand === strand);

