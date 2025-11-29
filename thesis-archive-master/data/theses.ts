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
      `Oil spills pose significant threats to marine ecosystems, coastal populations, and the global economy. Traditional cleanup methods, such as booms and skimmers, are often costly, inefficient, and environmentally harmful. This study explores the potential of coco coir, a natural fiber derived from coconut husks, as a sustainable and cost-effective alternative for oil spill remediation. The research investigates coco coir's adsorption capacity for different oil types, including vegetable oil and gasoline, while also analyzing the effect of contact time on its efficiency. Experimental results demonstrate that coco coir possesses high oil adsorption properties, with a greater affinity for vegetable oil than gasoline. However, its high water absorbency presents a limitation, suggesting the need for modifications to enhance its hydrophobicity. The findings indicate that improvements such as combining coco coir with other materials (e.g., sawdust or corn cobs) or altering its structure into absorbent pads could optimize its performance. This study highlights coco coir's potential as an eco-friendly and cost-efficient oil spill cleaner, promoting sustainability and environmental protection. Further research on large-scale applications and modifications is recommended to enhance its effectiveness in real-world oil spill scenarios.`,
    thumbnail:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-06.pdf",
  },
  {
    id: "pbm-03",
    title: "MARINER'S METAL AND NON-METAL RECOVERY: A KEY TO SUSTAINABILITY" ,
    authors: ["Belen, Dionisio Jr. Magsino, Prince Luigi Lualhati, Clark Steeven Manalo, Winstone Maralit, Kim Justine"],
    year: "March 2025",
    strand: "PBM",
    abstract:
      `The exploration of readily available, low-cost technologies for the separation and recovery of valuable non-metals from agricultural waste streams presents a promising avenue for sustainable resource utilization. Analyzing the potential for integrating DIY metal recovery techniques into existing community recycling programs demonstrates a pathway towards enhancing local waste management practices. This research investigates the effectiveness of utilizing solutions for the extraction of specific metals from industrial wastewater, emphasizing environmentally friendly recovery methods. The development of a comprehensive guide for safe and efficient DIY recovery of rare earth elements from discarded electronic devices addresses a critical challenge in sustainable technology management. Quantifying the economic benefits of implementing DIY metal and non-metal recovery initiatives within small businesses highlights the potential for fostering sustainable entrepreneurial ventures. Examining the impact of widespread adoption of DIY recovery practices on reducing the demand for virgin materials underscores the significance of individual contributions to a circular economy. The development of educational modules focused on the principles of sustainable material recovery empowers individuals to make informed decisions regarding resource consumption and waste management. 
Keywords 
Metal 
Non-metal 
Device
`,
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-07.pdf",
  },
  {
    id: "pbm-04",
    title: "MARINE AC SYSTEM: IMPROVING CABIN'S AIR QUALITY" ,
    authors: [": Manongsong, Josh Jhinsley Fadriquilan", "Mark Joseph Gomez", "Prince Cedrick Herrera", "John Robin Ilagan", "Jhon Howard "],
    year: "March 2025",
    strand: "PBM",
    abstract:
      `This study investigated the development and evaluation of a Marine AC System designed to enhance cabin air quality through cost-effective and energy-efficient cooling. Aiming to provide a practical and sustainable alternative to traditional, energy-intensive systems, this research employed a quantitative experimental design with a correlational approach. A purposive sampling method was utilized to select 15 Pre-Baccalaureate Maritime (PBM) students from Anselmo A. Sandoval Memorial National High School as respondents. Data collection was conducted through survey questionnaires. Statistical analysis involved the calculation of weighted means for descriptive assessment and Pearson correlation to determine the relationship between performance and satisfaction. The findings revealed that the Marine AC System achieved a "very good" performance level, with an overall weighted mean of 3.44. The study concluded that the Marine AC System effectively provides efficient cooling. There is strong positive correlation between the performance and level of satisfaction. The study acknowledges limitations, including the sample size and the specific context of PBM students. The scope of this research was limited, and the performance of the system may vary under different environmental conditions. The impact of this study lies in its demonstration of the feasibility and effectiveness of DIY cooling solutions in the maritime industry, suggesting that such systems can offer a cost-effective, energy-efficient, and user-satisfactory alternative. The research recommends further development of the system, including design optimizations, functionality enhancements, and user interface improvements. Future studies should explore the system's performance in diverse maritime settings and with larger sample sizes to validate and expand upon these findings. 

Keywords: Marine AC System Maritime Industry
`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "pbm-05",
    title: "LOCALIZED SEABIN AS A SEAWATER CLEANER FOR MABINI" ,
    authors: ["Baculo, Leoneil B. Magboo", "Jhon Erickson B. Magnaye", "Joshua C. Mendoza", "Led Grant Rauto", "Heide A. "],
    year: "March 2018",
    strand: "PBM",
    abstract:
      `Mabini is known for its beautiful and lively marine diversity that's why it becomes one of the popular and favorite tourist destinations of travelers, vacationers, divers, and adventurers. For this reason, the economy of the municipality rises as well as the number of its wastes production. The clear water of the place became filthy and floating wastes are observable, like, plastics, bottles, cans, paper, candy wrap, and even diapers can be seen now in the surface of the seawater. This situation motivates the researchers to build an environment friendly machine called "the seabin" that will lessen the number of wastes or even be a solution for the over production of waste in water areas in Mabini. The seabin works similarly to a filter. An electric pump draws water through the bottom of the cylinder, creating a vortex around the upper edge that pulls in water and floating trash. A bag filter, made of natural material like a coffee sack, collects the trash and allows water to pass through (M. Weiser, 2016). Furthermore, to determine the potential and effectiveness of the seabin, the researchers focuses on the seabin's capacity and speed of collecting waste. They conduct some trials to measure the ability of the machine. The researchers estimated the amount of garbage that the seabin can gather weekly, monthly, and yearly. In addition, they test the relationship of the capacity and speed of collecting wastes of the seabin. Afterwards, the researchers find actions that can be done to enhance the performance of the seabin. The researcher uses Experimental-Correlational method for this study in order to view the potential and effectiveness of the seabin in collecting wastes. As a result, the researchers found out that the seabin can bring a large impact to the problem of over production of wastes of Mabini.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "pbm-06",
    title: "Banana Trunk Fiber for Oil Spill Management " ,
    authors: ["Cabral, Queen Althea Mari A. Canarias", "Juvy Danica R. Dela Cruz", "Jade Edison G. Delos Santos", "Meriah Jillean A. Fabila", "Arabele A. Flor", "Charline M."],
    year: "April 2024",
    strand: "PBM",
    abstract:
      `Providing alternative means to serve as a solution to addressing oil spills through the use of banana trunk fibers will significantly assist in the promotion and protection of the environment. The researchers discovered that the lysoda used in creating banana fibers might harm users health. If banana fibers are dried in the heat of the sun, they will stick together and harden. In this study, the researchers made use of the experimental method in order to determine if there are differences between water and land using banana trunk fiber for oil spill management. These will be used to gather information about the difference between the absorption capacity of acylated banana fibers on land and water. This study requires the main materials, such as banana trunk. The study is then interpreted, analyzed, and supported by the review literature and study.Researchers found out that banana fibers are efficiently sorbent in removing oil in water and may be alternatively utilized for oil cleanup. According to the findings of the study, banana trunk fiber can be used as an alternative tool for absorbing oil spills in the water rather than on land. This study will focus on the effectiveness of banana fibers as an oil eliminator.`,
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
    title: "PERSONAL DESIGN AND DEVELOPMENT OF PORTABLE GENERATOR ",
    authors: ["Cantara, Kiarra Mae A. Caringal", "Donna Mae C. Matira", "Kent Russel G. Ortega", "Jhellan Mae D Pancho", "Lint Aeroll C. Reyes", "Domingo R."],
    year: "April 2024",
    strand: "EIM",
    abstract:
      `This study is conducted to determine the effectiveness of a personal design portable generator, a engine- driven machine that generates electricity and can be moved from one location to another. This study aims to determine the capacity of the energy that will consume in plugging gadgets and appliances to the portable generator. In conducting the study, the researchers used quantitative research method to observe and to test the portable generator if it is effective and useable. The research design that was used in the study is the experimental research which is quantitative since all of the data sets are gathered through experimentation of the effectiveness and to test the portable generator. The results shows that the efficiency of the portable generator, may easily endure any power loss by using it to power light bulbs, gadgets, and even appliances. Similarly, a portable generator is a useful purchase if you reside in an area where cyclones frequently cause power outages.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "eim-02",
    title: "EFFECTIVENESS OF FREE ENERGY MAGNETIC LIGHT WITH MOBILE CHARGING SELF-RUNNING MACHINE GENERATOR USING DC MOTOR ",
    authors: ["Castillo, Paul Kevin De Guzman", "Jive Hendrix Gatongay", "Roger Jr. Genteroy", "Roilan Luistro, Christian"],
    year: "March 2019 ",
    strand: "EIM",
    abstract:
      `The purpose of this study is to lessen the bill of electricity and, the use of electricity in way of making this research. The study aims with the help of the of effectiveness of free energy magnetic light with mobile charging self-running machine generator using DC motor us we called "Digital Flasher" this research is create of the researchers also to help lessen the use of electricity. It may help in may residence also when the time of brownout. - The researchers Castillo, Paul Kevin De Guzman, Jive Hendrix Gatongay, Roger Jr. Genteroy, Roilan Luistro, Christian`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-01",
    title: "MULBERRY LEAVES AS A SUSTAINABLE ALTERNATIVE FOOD WRAPPING MATERIAL FOR HOT DESSERTS: A COMPARATIVE ANALYSIS OF FOOD QUALITY AND SHELF-LIFE PRESERVATION ",
    authors: ["Adem, Rynowa Andrea M. Aloya", "Gracelyn A. Casapao", "lan Clarence K. Agina", "Sandy M. Baylon", "Emmaclude Sophia B. Basallote", "Denver R. Boongaling", "Alliyah Rhoanne J. Castillo", "Robert Brian A. De Guzman", "Jane Nhorielyn T. Dela Peña", "Edwin C. Espiritu", "Chelce Anne A. Evangelista", "Jeovannie E. Maranan", "Caroline C. Novencido", "Ace E. Pancho", "Jhenny Rhose Ahnn D."],
    year: "March 2025",
    strand: "HE",
    abstract:
      `This study examines the effectiveness of mulberry leaves as a sustainable alternative food wrapping material for hot desserts by comparing their physical properties, sensory qualities, and food preservation efficacy. Using a true experimental research design, 35 respondents, including 30 G 12 and G 11 senior high school Home Economics students and five teachers, evaluated the effectiveness of mulberry leaves through a validated 4-point Likert scale questionnaire. Desserts wrapped in mulberry leaves and commercial wrappers were assessed for taste, texture, and appearance. The weighted mean was used to measure the central tendency for each criterion. Preservation was observed under room temperature and refrigeration at intervals of 24, 48, 72, and 96 hours, measuring texture, flavor, microbial load, and moisture content. Results indicate that mulberry leaves enhance visual appeal and flavor while providing a rustic and organic presentation. While commercial wrappers offer a more uniform appearance, mulberry leaves effectively preserve dessert quality for up to 48 hours. After this period, sensory qualities declined due to moisture loss and oxidation, with significant deterioration beyond 72 hours. Statistical analysis showed no significant difference between mulberry leaves and commercial wrappers in maintaining food quality (p = 0.2717), suggesting that mulberry leaves can be an alternative wrapping material for hot desserts. The study concludes that mulberry leaves offer an eco-friendly food wrapping alternative without compromising quality. This finding has implications for sustainable food packaging, as businesses and consumers may consider mulberry leaves a viable natural option.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-02",
    title: "POWERCOAL COOKWARE CLEANSER: AN EFFECTIVE JACK TARS CLEANING AGENT" ,
    authors: ["Baculo, Lance Cedric Magtibay", "James Patrick Magtibay", "Ronald Kenneth Matira", "Luiz Martin Padriquilan", "Jaymark Peralta", "Kim Alex"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-03",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-04",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-05",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-06",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-07",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-08",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-09",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-10",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-11",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-12",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-13",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-14",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-15",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-16",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-17",
    title: "Community-Based Tourism Revenue Manager",
    authors: ["Sam Yao", "Celine Ancheta"],
    year: "April 2024",
    strand: "HE",
    abstract:
      "Targeting emerging eco-tourism towns, this project creates a lightweight revenue management framework that guides community councils in pricing tour bundles. Leveraging historical visitor counts, weather data, and transport availability, the model forecasts weekly demand and recommends dynamic price adjustments while preserving equitable earnings among partner households. Field tests in two coastal barangays increased average household tourism income by 18% without reducing visitor satisfaction. The thesis details governance agreements, training modules for local guides, and the ethical guardrails that prevent price gouging. Future work suggests integrating conservation impact metrics and cooperative-owned booking platforms.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "smaw-01",
    title: "DESIGN AND FABRICATION OF A PORTABLE TRI-FOLD WOODEN TABLE FOR SMAW LABORATORY ",
    authors: [": llagan Krizia C. Balindan", "Kerby M. Asilo", "lan M. Arenes", "JonJon C. Abu", "Tj D. Bonquin", "Don Eric L. Decio", "Jhay-Vie C. Napolis", "Paul Vincent P. Secadron", "Eddison M Tolentino", "Christian V."],
    year: "March 2025",
    strand: "SMAW",
    abstract:
      `This study aims to design and develop a folding table with improved stability, portability, and functionality to enhance its usability for various users, including students and professionals. Specifically, it seeks to identify and assess the key features of the folding table, compare its effectiveness with traditional fixed tables in terms of ease of assembly, weight capacity, space efficiency, and user convenience, and determine significant differences between the two. Additionally, the study introduces design innovations to enhance the practicality and versatility of folding tables in different settings. A quasi-experimental research design was employed to evaluate user experiences with both the innovative folding table and a traditional fixed table. The study involved a selected group of participants, chosen through stratified random sampling, to assess the table's features and performance. Data collection was conducted using a structured survey questionnaire with Likert-scale items measuring stability, ease of use, portability, and overall satisfaction. Statistical tools such as frequency counts, ranking, mean, and an independent t-test were used for data analysis. The findings indicate that the innovative folding table offers significant advantages in terms of convenience, space efficiency, and portability compared to traditional models. It reduces setup time and provides greater adaptability for various environments. Statistical analysis confirmed a notable difference between the traditional and innovative table designs, favoring the latter in terms of stability and overall practicality. Keywords: foldable furniture, cost-effectiveness, portability, space efficiency.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "smaw-02",
    title: "DETERMINING THE USE OF PERSONAL PROTECTIVE EQUIPMENT AMONG LOCAL WELDERS IN THE MUNICIPALITY OF MABINI BATANGAS ",
    authors: ["NANA BLANCA D MARIE", "ADANTE JOANA MARIE"],
    year: "November 2017",
    strand: "SMAW",
    abstract:
      `CHAPTER V 
FINDINGS, CONCLUSION AND RECOMMENDATION 
the study. This chapter presents the summary of findings,conclusions and recommendations of 

SUMMARY 
This study aims to determine if the local welders of Mabini, Batangas do use their and proper use of PPE. personal protective equipment. This study also want to find out if they know what is PPE Specifically, this study seeks to answer the following question. 
1. What is the nature of PPE in Mabini? 
2. What the condition of the welder of Mabini, Batangas 2.1 Extent use of PPE 2.2 Skills in using PPE 
3. What are the essential benefits of using PPE for the local welder of Mabini? 
4. What guide lines can be proposed to educate the utilization of PPE?
 FINDINGS
 1. The researchers find out the other local welders in Mabini are familiarize with the Personal Protective Equipment (PPE). 
2. The researchers see that the use of Personal Protective Equipment (PPE) by local welders is they become more consistent in doing welding. 
3. The researchers know the welders are having those consequences in welding because that it could be a part of their job.
 4. The researchers output implemented their with the use of brochure about the Personal Protective Equipment (PPE) and their uses. 

CONCLUSION 
1. The researchers conclusion to that issue is the welders must be aware to know Personal Protective Equipment (PPE) but also the function of it. 2. The welders should prioritize the safety equipment to ensure their safety. 3. The welders must always use their safety equipment form them to avoid accidents In working area. 

RECOMMENDATION 
1. The researchers recommended that every welder must have a proper knowledge about the Personal Protective Equipment(PPE). 
2. The researchers recommended that the welder have training on how to use properly ofPersonal Protective Equipment (PPE). 
3. The researcher suggest that every welders will have a seminars for them to know the Personal Protective Equipment (PPE) is the key to fell safe in work place. whole educational institutions would able to recognized its effectiveness and convenience. 
Recommendations 
1. We recommend Digital Learning as a new way of learning in our educational system. From the result of this study, the researchers conclude that Digital Learning can be an effective way and strategy of learning which is very helpful to every student. 
2. Although the effectiveness is almost similar to the traditional chalk-and-talk setting, most students were engaged and preferred the Digital Learning for it can prevent the class from being boring and heavy. 
3. Teachers can also benefit on it because it can lessen their work and stressed they get from the traditional way of learning. 
4. With the help of Digital Learning, the learning is now in the hands of each learner and student
`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
];

export const getThesesByStrand = (strand: Strand) =>
  theses.filter((thesis) => thesis.strand === strand);

