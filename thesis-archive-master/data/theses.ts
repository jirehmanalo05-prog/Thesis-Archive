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
    id: "humss-01",
    title: "THE PSYCHOLOGICAL EFFECT OF SOCIAL MEDIA USAGE IN ACADEMIC PERFORMANCE AMONG THE STUDENTS ON GIl HUMSS OF THE ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL",
    authors: ["Beloso, Maria Erica I. Lopez, Veejay Arth N. Martinez, Ashley Marieze M. Matibag, Angel M. Maliglig, Lovely Thriscia P. Ramirez, Rommel O. Supan, Ralph Benzon A."],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `The purpose of this study investigated the psychological effects of social media use on the academic performance of 11th-grade Humanities and Social Sciences (HUMSS) students at Anselmo A. Sandoval Memorial National High School. Recognizing social media's dual nature, offering benefits like enhanced communication and information access while posing challenges such as distraction and mental health concerns, the research aimed to describe the relationship between social media usage and academic outcomes. A descriptive research design was employed, analyzing data from student questionnaires. Results revealed a significant negative correlation (r=-0.510, p=0.045) between grades and psychological factors associated with social media use. Contrary to expectations of negative impact, the study concluded that social media positively influenced the students' academic performance, easing study difficulties and improving class performance by providing access to information and enhancing vocabulary. The findings suggest that, for this specific student population, social media serves as a beneficial tool for learning and academic improvement.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-02",
    title: "EFFECTS OF COVID 19 PANDEMIC AS TO THE LEARNING QUALITY IN ENGLISH FOR ACADEMIC AND PROFESSIONAL PURPOSES AND SOCIAL ASPECTS AMONG GRADE 12 STUDENTS ",
    authors: ["Cabello, Flavine Dhyll D. Albano, Prinz Carl A. Atkins, Rovick Andrei M. Siazon, Felix Daniel E. Umali, Shone Vince B. Alvarez, Veronica M. Audeje, Jobelle P. De Austria, Krisha Aleeson A. De Castro, Jean Angel M. Evangelista, Mary Ann R. Garcia, Andrea Criszel G. Garcia, Zyra Jane D. Verdadero, Kristine Faith R. "],
    year: "June 2023 ",
    strand: "HUMSS",
    abstract:
      `CHAPTER V 
SUMMARY, CONCLUSION AND RECOMMENDATION 

This chapter presents the summary of findings, conclusions and recommendations of the study. 

Summary 
This study aimed to determine the effects of COVID 19 Pandemic as to the Learning Quality in English for Academic and Professional Purposes and Socialization among Grade 12 Students. Specifically, it sought to answer the following questions: 
1. What is the assessed learning quality of Grade 12 in English for Academic and Professional Purposes after the heightened pandemic in terms of; 
1.1 generating ideas into writing academic texts, 
1.2 skills on writing different academic texts, and 
1.3 literature review utilization. 
2. How may socialization in the classroom of the respondents be assessed after the heightened pandemic? 
3. Is there a significant relationship between the learning quality and socialization among Grade 12 students after the heightened pandemic. 
4. Based on the findings, what intervention activities may be proposed to enhance the learning quality of the students? This study utilized the correlational research design with the use of questionnaire as the main data gathering instrument. 

The respondents of the study were the 62 total Grade 12 students in Anselmo A. Sandoval Memorial National High School. Responses were interpreted using the following statistical tools: ranking. weighted mean, and pearson product moment correlational coefficient. 

Findings 
After throughout analysis interpretation of the data gathered, the following findings were obtained: 
1. The assessed learning quality of Grade 12 students in English for Academic and Professional Purposes after the heightened pandemic in terms of generating ideas into writing academic texts in its composite mean of 2.76, while finding credible sources online and utilizing online databases to support the respondents ideas ranked first with weighted mean of 2.94 interpreted as great extent. 
2. The assessed learning quality of Grade 12 students in English for Academic and Professional Purposes after the heightened pandemic in terms of skills on writing academic texts in its composite mean of 2.84, while I can edit my writing to improve the wording, grammar, punctuation, and spelling ranked first with the weighted mean of 2.90 interpreted as great extent. 
3. The assessed learning quality of Grade 12 students in English for Academic and Professional Purposes after the heightened pandemic in terms of literature review utilization in its composite mean of 2.78. while I have learned to navigate academic databases and identify relevant scholarly articles, books, or other authoritative sources for my literature review ranked first with the weighted mean of 2.94 interpreted as great extent. 
2. Similar or related studies may be conducted by the future researchers. 
3. The teachers may use a fun activities for the students to learn faster and have fun.
`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-03",
    title: "REPORT CARD RELEASING VIA QR CODE: AN EASY ACCESS TOOL ON GRADE VIEWING AMONG GRADE 12 AMETHYST STUDENTS IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL",
    authors: ["Gonzales, Althea Rae Atienza, Kent Benedict Bisa, John Lloyd Bitancur, Arvy Marasigan, Dionel Navarro, Sam Bisa, Hanna Shiacey Matibag, Maybell Ann Mustaza, Lauren Grace Piguerra, Jillian Vissoro, Ma. Lea Jane"],
    year: "April 2024",
    strand: "HUMSS",
    abstract:
      `This study aimed to examine the implementation of QR Code for grade viewing among Amethyst students in Anselmo A. Sandoval Memorial National High School S.Y. 2023-2024 and the effectiveness of QR Code in enhancing convenience and accessibility to student records, while also verifying the authenticity of student cards. The study employed the quantitative research method in experimental research design with the researcher-made questionnaire as the main instrument for data gathering. The respondents of the study involved a total population of 44 Grade 12 Students from the section of Amethyst currently enrolled and studying in Anselmo A. Sandoval Memorial National High School. Moreover, ranking, weighted mean, and t-test were the statistical tools used to treat the data. The results suggest that the use of QR codes for report card releasing does not have an impact on usability and reliability but can positively increase the convenience of the process. This is beneficial for both the users and the school system as it leads to more efficient and convenient report card releasing. Therefore, the use of QR codes for report card releasing is recommended. Based on findings, this study show that students of Grade 12- Amethyst believed that the use of QR codes for card viewing minimized time and effort, and it was not time-consuming as it only required following simple steps to view cards clearly. It also made card-viewing more efficient and resulted in less paper usage. In terms of convenience, students found it helpful in accessing their cards conveniently without any hassle. Additionally, students added that QR codes also help to minimize interruptions to their parents' work and the need for transportation. Students generally agree that card viewing in a traditional way doesn't require wifi and can be done so with their parents. In addition, card viewing traditionally did not require Wi-Fi, which made it more accessible for the students.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-04",
    title: "STRESSORS IN MEDIA AND INFORMATION LITERACY AND ACADEMIC PERFORMANCE AMONG G12 AMETHYST STUDENTS IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ",
    authors: ["Ortega, Gheann Kristine B. Baraquel, Stella Yvone D. Dote, Lovely Ann R. De Austria, Lea Z. Gonda, Heart V. Gonda, Josh M. Mańibo, Rona Marie C. Napeñas, Maria Aelleen M. Villanueva, Rowell M. "],
    year: "April 2024",
    strand: "HUMSS",
    abstract:
      `Republic of the Philippines Department of Education REGION IV – A CALABARZON SCHOOLS DIVISION OF BATANGAS ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL P. BALIBAGUHAN, MABINI, BATANGAS ABSTRACT Stressors and academic performance are about the students’ activeness in class. Due to different stressors, students encounter lots of challenges in terms of their skills. Addressing these challenges helps the researchers know what is their common struggles. Every students have different aspects in thinking so much about their academic performance and skill. This study examines stressors in Media and Information Literacy and Academic Performance among G12 Amethyst students at Anselmo A. Sandoval Memorial National High School. It identifies challenges in editing and analyzing online sources. Furthermore, the researchers propose introducing accessible online and offline editing apps to alleviate these technological difficulties. Results of this study indicates how stressors for students in the subject of Media and Information Literacy and also in their academic performance perceived a great extent agreement that almost 44 students of Amethyst are having a hard time in their the editing and analyzing skills that need to apply in Media and Information Literacy based on the form of questionnaire responses of students-respondents. Moreover, the skill in evaluating reliable sources have a weighted mean that is determined to great extent. Moreover, there is no significant relationship between the stressors and academic performance among G12 Amethyst students. The stressors does not affect the students’ academic performance; students can still ace their performance academically even they are stressed. However, based on the researchers’ findings and conclusions, students can achieve their desired grades even though they are having a hard doing and analyzing a certain activity in Media and Information Literacy.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-05",
    title: "THE ASSISTED CHAT GPT REVIEWER IN TRIPLE I: A TOOL TO QUICK MEMORY RETENTION AMONG GRADE 12-AMETHYST STUDENTS IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ",
    authors: [" Pabelonia, Arman M. Bartolome, Christian Wayne Brucal, Lawrence Jay Balansag, Kenneth Chong, Nash Miano, John Paul An, Kate Berja, Kim Dianne llagan, Shiela Rose Recto, Jhana Velasquez, Mary Joy "],
    year: "April 2024",
    strand: "HUMSS",
    abstract:
      `The purpose of this study was to evaluate grade 12 students at Anselmo A. Sandoval Memorial National High School using the Assisted Chat GPT Reviewer in Triple I. In addition, the various assisted chat GPT reviewer forms were analyzed and classified according on the speed retention, accuracy, and longevity. The purpose of this research study was to assess the speed retention, accuracy, and duration of the Assisted Chat GPT Reviewer and the traditional method. In addition, the study intended to provide strategies for improving students' use of the Online Chat GPT Reviewer. The key tool for data collection in the study was a questionnaire created by the researcher, and it used the experimental research design and the quantitative research method. The study covered 23 Grade 12 Amethyst students who are presently enrolled in Anselmo A. Sandoval Memorial National High School as respondents. Additionally, the statistical techniques applied to the data included ranking, weighted mean, and two-tailed t test analysis. Results of the study indicated that students of all backgrounds perceived a great extent agreement that Al ChatGPT reviewer had a role in their academic performance and understanding of various subjects based on the weighted mean acquired from questionnaire responses of students-respondents. Moreover, the students perceived a great extent role of Al ChatGPT reviewer in providing academic assistance and improving their learning experience. Furthermore, there is a significant relationship between the assessments of the role of Al ChatGPT and academic performance among students. Positive results of Al ChatGPT reviewer in aiding academics`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-06",
    title: "Academic Performance Between Students of OFW Parent/s and of Non- OFW Parent's Among Grade 8 students of Anselmo A. Sandoval Memorial National High School. ",
    authors: ["Eliah Florenne Baronia, Jovert Ansay, Billy De Torres, Joeffrey Emano, Krystel Flores, Princess Rose Herrera, Hazel Mendoza, Ma. Christine Reyes, Riza Villanueva"],
    year: "January 2018",
    strand: "HUMSS",
    abstract:
      `HUMSS RESEARCHERS (AMETHYST). 2018 Anselmo A. Sandoval Memorial National High School Academic Performance Between Students of OFW Parent/s and of Non-OFW Parentis Among Grade 8 students of Anselmo A. Sandoval Memorial National High School Research Teachers: Mrs. Annaliza Alolod Mrs. Marilou Escalona Keywords: Acadernic of Performance, Students with OFW Parent/s and non- OFW Parent/s Family as the basic unit of the family is also an essential part of heritage and culture of Filipinos. As recent times an increasing number of parent/s are undeniable encourage to go to abroad to sustain their family's basic and financial need. Furthermore, in most evident cases which the researchers are interested in some circumstances some students having OFW parent's and non OFW-parent ten to academically excell or fail this cause for the researchers most interest in this topic. This study aimed to determine the Academic Performance Between Students of OFW Parent/s and of Non-OFW Parent/s Among Grade 8 students of Anselmo A. Sandoval Memorial National High School along the knowledge, skills, and participation in school activities. What are the demographic profile of the student-respondents having OFW parent/s and having non-OFW parent's in relation to age, gender, parents in abroad, parent/s occupation, number of years in abroad and guardian? (2) How may the student-respondents of OFW parent's and of non-OFW parents be affected in relation to: (2.1)Communication Aspects (22) Schooling Family Support (2.3) Emotional Family Support (2.4) Character Building (2.5) Peer Influence (3) What is the level of performance of student-respondents with OFW parent/s and Non-OFW parent/s? (4) Is there a significant difference between the studnt-respondents of OFW parent/s and of non-OFW parent/s to their level of performance? (5) Based on the findings, what plan of action may be proposed? Furthermore, this study used the experimental research design to know the Academic Performance Between Students of OFW Parent/s and of Non-OFW Parent/s Among Grade 8 students of Anselmo A. Sandoval Memorial National High School. For the total of eighty (80) students, dividing it into two, forty (40) students having an OFW parent/s and forty (40) students having a non-OFW parents. Using the method of Fishbowl ramdom sampling we are able to get the respondent. To know if there is any significant difference among the two the researchers applied T-Test.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-07",
    title: "STRUGGLES ENCOUNTERED IN FACE-TO-FACE CLASSES IMPLEMENTATION AMONG THE GENDER OF GRADE 12 STUDENTS IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL",
    authors: ["Marigondon Aliah C. Hernandez, Alexzandra D. Alolod, Neil Marc A. Castillo, Edsel H. Chua, Leonel M. Rodelas, Jaylord G. Belen, Madonna C. Castor, Kristine G. Dula, Ann Margaret M. Isla, Keziah Whesley B. Lopez, Princess Zaira R. Rublico, Nyrine O. "],
    year: "June 2023",
    strand: "HUMSS",
    abstract:
      `This study aimed to determine the struggles encountered in face-to-face dasses implementation among the gender of Grade 12 students in Anselmo A. Sandoval Memorial National High School Academic Year 2022-2023. The researcher wanted to determine the struggles of the learners with gender as the demographic profile. Additionally, the said struggles were determined as academic adjustments, social adjustments, and difficulties in terms of transportation accessibility and expenses. This study aimed to find out whether there is a significant difference in the struggles experienced among the gender of Grade 12 students, for possible intervention activities that may be presented to mitigate the problem. The study used quantitative research, specifically employing a descriptive research design. In terms of the number of respondents, sixty-two respective subjects are congregated from the used of the Raosoft Sampling Calculator, and the Stratified Random Sampling method with Equal Allocation was used as the determinant of the chosen respondents. Cronbach Alpha, ranking, percentage, weighted mean, raosoft sampling calculator, and analysis of variance were the statistical tools used to treat the data. Results of the study indicated that the struggles encountered by the students in face-to-face classes at Anselmo A. Sandoval Memorial National High School such as academic adjustment, social adjustment, transportation accessibility, and expenses are moderately manifested in general; thus, they still experience hardship and struggle in school. There is no significant difference in the struggles of students when they are grouped according to their gender, it just simply means that the gender of the respondents is not an affecting factor, as the male, female, and LGBTQIA+ students experience the same hardship in face-to-face classes. As a result, the average of the composite mean per variable to get the variable that obtained the highest response was determined that the students struggle. In adjusting academically and coping with the expenses, thus, intervention activities are proposed. The study's findings were the bases for the development of the proposed activities focused to help the students cope and alleviate the challenges that the students experience in school. Based on the findings and conclusions of the study, some recommendations were given such as the proposed activities geared to somehow alleviate or lessen the struggle that the students encountered on the said factor. Another, the implementation of intervention activities may be encouraged by the school administrators and embraced by target people in each activity for an effective objective. Then, this study is set as a guide for conducting similar or related studies by other future researchers.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-08",
    title: "STRESSORS ENCOUNTERED IN PRACTICAL RESEARCH IN RELATION TO BEHAVIOR AMONG GRADE 12 STUDENTS, ACADEMIC TRACK IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ",
    authors: ["Patricio, Marina M., Evangelista Airah C., Castillo lan Kirby R., Dela Cruz Michael Angelo A., Ebreo Rein Jenn D., Cabrera Cristine C.,Dalawampu Mikylla B. ,Evangelista Airah C. ,Manalo Patricia M. ,Manongsong Bea Crissets A., Panopio Angela Jade E."],
    year: "June 2023 ",
    strand: "HUMSS",
    abstract:
      `This current study aims to determine the stressors encountered in Practical Research subjects and their relation to the behavior among the Grade 12 students, Academic Track in Anselmo A. Sandoval Memorial National Highschool. The descriptive method was used to analyze and describe the stressor experienced by the students in their Practical Research subject. It describes all dependent and independent variables of the study and measured the relationship among them. The study's respondents involved were a total population of 59 Grade 12 students from the total of ten (10) sections in the academic track currently existing in Anselmo A. Sandoval Memorial National High School during the study. According to its results, the majority of the students experience stress due to the deadline in Practical Research subjects. The result of the study is found negative therefore the proponents proposed intervention activities that could help to resolve the problem.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-09",
    title: "Status of Working and Non-working students  Among Senior High School in Anselmo A. Sandoval Memorial National High School ",
    authors: ["John froilan Mendoza ‎Abarquez,Jay R ‎Almario,Ralp Andrew D. ‎Baculo,Luke Andrei M. ‎Castillo,Mark Lorenz A. ‎ Panopio,Daryl H. ‎Beloso,Marienel B. ‎Cabanes,Teajan E. ‎Corona,Kaye Erica M. ‎Dalawampu,jane H. ‎Dauba,windelyn P. ‎Dela Cruz,Marjorie F. ‎Hernandez,Hazel G. ‎Laude,Venus larra Jane A. ‎Malayao,Hazel Mariel S."],
    year: "June 2023",
    strand: "HUMSS",
    abstract:
      `This study aimed to determined the status of Working and Non working students among Senior High School Anselmo A. Sandoval Memorial National High School  in terms of  their Target ‎preference; Academic Performance; relationship and differences of Working and Non-working students . ‎`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-10",
    title: "THE PSYCHOLOGICAL EFFECT OF SOCIAL MEDIA USAGE IN ACADEMIC PERFORMANCE AMONG THE STUDENTS ON GIl HUMSS OF THE ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ",
    authors: ["Beloso, Maria Erica I. Lopez, Veejay Arth N. Martinez, Ashley Marieze M. Matibag, Angel M. Maliglig, Lovely Thriscia P. Ramirez, Rommel O. Supan, Ralph Benzon A. "],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `The purpose of this study investigated the psychological effects of social media use on the academic performance of 11th-grade Humanities and Social Sciences (HUMSS) students at Anselmo A. Sandoval Memorial National High School. Recognizing social media's dual nature, offering benefits like enhanced communication and information access while posing challenges such as distraction and mental health concerns, the research aimed to describe the relationship between social media usage and academic outcomes. A descriptive research design was employed, analyzing data from student questionnaires. Results revealed a significant negative correlation (r=-0.510, p=0.045) between grades and psychological factors associated with social media use. Contrary to expectations of negative impact, the study concluded that social media positively influenced the students' academic performance, easing study difficulties and improving class performance by providing access to information and enhancing vocabulary. The findings suggest that, for this specific student population, social media serves as a beneficial tool for learning and academic improvement.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-11",
    title: "THE PROBABILITY OF PASSING THE ENTRANCE EXAM IN BATANGAS STATE UNIVERSITY OF HUMSS STUDENT IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL",
    authors: ["Aguilar, Angel C. Beloso, Mary Rose O. Espiritu, Jennyrose O. Mendoza, Erlyn Marie Z. Panopio, Ralph Lance M. Torres, Karen D. "],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `The Probability of Passing the Entrance Exam in Batangas State University of HUMSS Student in Anselmo A. Sandoval Memorial National High School was explored in this study. It focused on how their academic performance affected their performance on entrance exam also the ideal score that is needed to pass the test, and lastly, the type of entrance exam does Batangas State University offer. Both secondary, especially senior high HUMSS students, and tertiary educational institutions were both included in the study to fully comprehend on how these factors impact the students' chances of passing the entrance exam. The study took a quantitative approach where an online survey questionnaire was used to collect data from 32 former students of grade 12 HUMSS students' batch 2023-2024 who tried to pass the entrance examination in Batangas State University. The respondents were selected using convenience sampling technique. As a quantitative research, statistical methods were employed to analyze the collected data. The results revealed that higher academic performance, particularly in subjects related to reading comprehension, critical thinking, and problem-solving, was strongly correlated with a higher probability of passing the entrance exam. Additionally, the required passing score varied depending on the program applied for, indicating that certain courses demand a higher level of competence. The study found that many students struggled with the entrance exam due to a lack of familiarity with the exam structure and the level of difficulty of the test questions. This suggests that proper preparation and awareness of the exam format are critical for improving success rates. Furthermore, the findings highlighted the need for additional support, such as review programs, study guides, and preparatory courses, to enhance students' readiness for the entrance exam.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-12",
    title: "EFFECTS OF COMMUNITY EVENTS TO LOCAL ENGAGEMENT AND SOCIAL TIES AMONG THE RESIDENTS OF TALAGA EAST, MABINI BATANGAS",
    authors: ["Jaybert A. Caguete, Jozelle M. Calderon, Samantha G. Aque, Gerwin A. Manalo "],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study explored on how community events play a crucial role in fostering local engagement and strengthening social ties in Talaga East. These gatherings provide opportunities for residents to connect, share experiences, and build relationships, ultimately contributing to a vibrant and cohesive community. This study took a quantitative approach where the researcher distribute survey questionnaire was used to collect data from 17 students of Grade 10 and 9 students of Grade 11 and also 11 students of grade 12 making up a total sample size of 37 respondents who were selected using convenience sampling technique. This study allows for an extensive analysis of a community, examining how they enhance themselves through community events and how they build their relationships within the community. As quantitative research, the comparative ANOVA analysis demonstrates how community events in Talaga East build and enhance communication among residents. Community events foster a sense of belonging and shared identity among residents. By bringing people together to celebrate local traditions, cultural heritage, or simply to enjoy each other's company, these gatherings strengthen social bonds and create lasting memories. When residents feel a sense of ownership and pride in their community through events, they may become more likely to participate in other aspects of local life, such as volunteering, attending town meetings, or supporting local initiatives. Events can serve as a gateway to more active involvement. To sum up, Community events in Talaga East play a pivotal role in enhancing local engagement and strengthening social ties. By providing opportunities for communication, fostering civic participation, celebrating shared identity, and building support networks, these events create a sense of belonging and unity. They also encourage inclusivity and intergenerational connections, helping to break down social barriers and promote a more cohesive community. Ultimately, these gatherings help residents feel more connected to each other and their community, creating a stronger, more engaged in community. The findings demonstrate that community events significantly enhance residents' sense of belonging and empowerment. Participation in barangay events provides opportunities for individuals to connect with their community, gain access to resources, and develop leadership skills, ultimately contributing to a more vibrant and engaged local environment.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-13",
    title: "EFFECTS OF LEAST RANKED DIFFICULT SUBJECT TO STUDENTS GRADE 12 HUMSS STRAND IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL",
    authors: ["Claro, Samuel T. Garcia, Airon C. Mitra, Joemel M. Santos, Kristine P.  "],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study explored the influence of the least-ranked difficult subject on the academic performance and study behaviors of Grade 12 students in the Humanities and Social Sciences (HUMSS) strand at Anselmo A. Sandoval Memorial National High School. It examined how students' perceptions of subject difficulty shaped their engagement, motivation, and overall academic outcomes, shedding light on the broader implications of curriculum design in senior high school education. A quantitative research approach was employed, utilizing a survey questionnaire to gather data from 40 students selected through convenience sampling. This method enabled a comprehensive analysis of how students interacted with their least difficult subject, whether it provided academic relief, increased confidence, or led to a decline in effort toward more challenging courses. Using comparative statistical analysis, the study found varied impacts of having a subject perceived as "easy" on different aspects of academic life. While some students leveraged it as an opportunity to boost their overall grades, others demonstrated reduced academic engagement, indicating a complex relationship between subject difficulty perception and performance. These findings suggest that while having an easier subject may contribute positively to student confidence, it also presents challenges in maintaining consistent effort across all subjects. In conclusion, this research highlights the need for balanced academic workloads and curriculum structuring to ensure holistic learning experiences. The results offer insights for educators and policymakers to refine teaching strategies, ensuring that both challenging and less difficult subjects contribute effectively to student growth. As educational dynamics continue to evolve, such studies remain crucial in guiding improvements in academic planning and student support systems.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-14",
    title: "EXAMINING THE ROLE OF TECHNOLOGY IN ENHANCING LEARNING OUTCOMES IN EDUCATION AMONG GRADE 12 HUMSS STUDENTS AT ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ",
    authors: ["Baxa, Janella Bumagat, Glenda G. Dempo, Rena S. Dipasupil, Prince Jharien M. Garcia, Mary Euphrasia E. Mallada, Abegail M Mañibo, Donna Mae S. Ortega, Princess Camille J. "],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study explored the impact of technology on the learning outcomes of Grade 12 HUMSS students at Anselmo A. Sandoval Memorial National High School during the 2024-2025 academic year. The research aimed to identify how technology enhances academic performance, highlight its advantages and challenges, and provide actionable insights for effective integration in educational settings. Using a quantitative descriptive research design, 40 respondents were selected through purposive sampling from sections Diamond, Amethyst, and Pearl. Data collection was conducted through structured survey questionnaires administered via Google Forms, and the gathered information was analyzed using statistical tools such as weighted mean and percentage analysis. Findings revealed that students perceive modern technology as essential for completing tasks efficiently, fostering academic growth, and preparing them for future careers. Positive outcomes included improved critical thinking, better task management, and enhanced engagement in learning activities. Nevertheless, challenges such as distractions, prolonged screen exposure, and information overload were identified as notable concerns. Additionally, access to reliable internet and digital devices remained a significant barrier for some students, limiting equitable learning opportunities. This study concluded that Integrating technology into classroom instruction positively influences students' learning experiences, provided that it is effectively managed and supported by adequate resources. Recommendations include continuous teacher training on digital tools, fostering a balanced approach to screen time, and ensuring students have equal access to necessary technology. Furthermore, school administrators are encouraged to support technology-driven initiatives that promote academic excellence. Future research involving a larger sample size and diverse student groups is recommended to validate and expand upon these findings.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-15",
    title: "EFFECTS OF LEAST RANKED DIFFICULT SUBJECT TO GRADE 12 HUMSS STUDENTS IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL",
    authors: ["Delen, Prince John M. Envase, Mark Anthony T. Gatmen, Nathalie Jhoys B. Salazar, Rhealyn A."],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study examines how Grade 12 students in the Humanities and Social Sciences (HUMSS) strand at Anselmo A. Sandoval Memorial National High School performs academically and how motivated they are based on their disliked subjects. This research study was conducted to analyze the objective of the study which into examine how the difficult subjects in grade 12 affect their learning skills and overall educational outcomes. To achieve this objective, a qualitative data collection method approach was employed. A survey questionnaire was administered to a sample of HUMSS student ,assessing their perceptions, vocabulary and experiences in the subjects. The findings indicated that respondents thought creative writing to be the most challenging subject. Additionally, the study found a strong relationship between students' academic success and their subject preferences. Students who showed a smaller amount of interest in creative writing performed worse academically and were more discouraged. According to the findings, in order to improve academic engagement and achievement, they need to study well, read a lot of books, understand the lessons and search the meaning of unfamiliar words to enhance their vocabulary. These findings contribute to the depth of knowledge that is accessible on the effects of the most challenging subject for grade 12 students, with a particular emphasis on the HUMSS Senior High School setting at Anselmo A. Sandoval Memorial National High School.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-16",
    title: "PSYCHOLOGICAL APPROACH IN ENHANCING THE ENGLISH LANGUAGE SPEAKING SKILLS OF HUMSS STUDENTS",
    authors: ["Aguho, Jomar P. Castillo, Cristel Maranan Castillo, Dorothy Merlin Mañibo, Ryza Elaine O. Sola, Kate Angelene M. "],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study explores the role of psychological approaches in enhancing the English-speaking skills of HUMSS students at Anselmo A. Sandoval Memorial National High School. Despite the global importance of English proficiency, many students struggle with speaking due to factors such as lack of confidence, grammar difficulties, pronunciation issues, and limited vocabulary. This research investigates how psychological elements-such as motivation, self-confidence, and anxiety management—affect students' ability to communicate effectively in English. Using a quantitative experimental research design, the study analyzes data gathered from surveys, interviews, and language assessments to determine the effectiveness of psychological strategies in improving speaking skills. Findings indicate that students experience significant challenges in grammar and confidence, particularly in public speaking. While they demonstrate motivation to improve, they often struggle with vocabulary retention and pronunciation clarity. 
The study highlights the importance of creating an engaging and supportive learning environment where students feel encouraged to practice and refine their English-speaking skills. Strategies such as storytelling, digital portfolios, videoconferencing, and project-based learning are identified as effective interventions. 
Based on the results, the study recommends integrating psychological approaches into language instruction to foster a positive learning experience. Teachers should focus on building students' confidence, providing interactive speaking opportunities, and incorporating technology to enhance engagement.
 Future research should explore long-term effects of these psychological strategies on language acquisition and consider additional factors such as cultural influences and peer interaction in developing speaking proficiency.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-17",
    title: "Detrimental Effect of Stage Fright and Anxiety among HUMSS Students of Grade 12 Diamond Causing Lower Grades and Inactive Participation",
    authors: ["Burlongan, Ma. Asha R. Delgado, Chester Lloyd V. Marasigan, Reneth A. Medrano, Danica Joy M. Paglinawan, Marc Genesis M. Rico, Cherish M."],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study was conducted to examine the effect of stage fright on the academic performance of a student, specially focusing on the Grade 12 Diamond under the strand of HUMSS. A quantitative research methodology was used to ensure precise and objective findings. The data was gathered through distributing printed questionnaires to students, with an average of thirty students taking part in the study, giving their insights about the causes of stage fright and how it affects their academic performance. In order to ensure a fair representation of students, the study employed the roulette wheel random sampling approach to identify the respondents. The purpose of the handed-out questionnaires was to find out what factors contribute to stage fright, such as judgments, prior public speaking experiences, and self-confidence. The researchers were able to distinguish the frequency and intensity of stage fright among students as well as the relationship between it and their academic performance with the help of the responses of the respondents. Stage fright showed a significant effect on grade 12 Diamond HUMSS students' academic performance. Higher levels of stage fright and anxiety were associated with low performance in presentations, recitations, and other academic activities that require the student to do public speaking. Their conflict in terms of academic performance was made worse by the psychological and physical symptoms of stage fright, which include trembling, a rapid heartbeat, and mental blocks. 
As a conclusion, the study emphasizes the significance of treatment and attending symposiums to help students effectively manage their anxiety and stage fright. By employing confidence-boosting techniques and providing teachers with assistance, we can assist students in reducing stage fright by addressing the psychological and physical aspects of stage fright and enhancing their academic performance.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-18",
    title: "INFLUENCES OF SOCIAL MEDIA ON YOUTHS PREFERENCES AND OPINIONS ABOUT THEIR COMMUNITY: A QUANTITATIVE STUDY ",
    authors: ["Bagui, John Lloyd D. Calderon, Jayzell M. Datingaling, Radha Aesha Danielle A. Edep, John Marco B. Garcia, Erika Mae D. Hernandez, Jovie Beboth B. Ornopia, Ailene R. Ortega, Zyrell O. Portillo, Aaron Kevin B. Calderon, Jayzell M. Datingaling, Radha Aesha Danielle A. Edep, John Marco B. Garcia, Erika Mae D. Hernandez, Jovie Beboth B. Ornopia, Ailene R. Ortega, Zyrell O."],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study investigates the influence of social media on youth preferences and opinions about their community. Using a quantitative approach with a single-group pre-test post-test design, the study surveyed 37 Junior High School students from Anselmo A. Sandoval Memorial National High School in Mabini, Batangas, Philippines. The research explored how social media platforms shape youth perceptions of local issues, community events, and overall community engagement. The findings reveal a complex relationship between social media use and community involvement. While social media facilitates connections with peers and raises awareness of community challenges, it also contributes to a lack of trust in online information and a potential focus on negativity. The study highlights the need for media literacy programs to empower youth to navigate online information critically, fostering positive community engagement and mitigating the potential negative impacts of social media. The research underscores the importance of addressing the digital divide and promoting responsible online behavior to harness the positive potential of social media for community building.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-19",
    title: "THE IMPACT OF INADEQUATE VOCABULARY DEVELOPMENT ON THE READING COMPREHENSION OF G10 STUDENTS AT ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ",
    authors: ["Albania, Princess Lherra O. Binay, Melvin M. Brucal, Kc Ann A. Cepillo, Ruzzel James A. Dolor, Cristine Yvette C. Hilario, Krizeah M. Sila, Rashid Anthron G."],
    year: "April 2024",
    strand: "HUMSS",
    abstract:
      `This study examines the effect of insufficient vocabulary development on the reading comprehension skills of Grade 10 students at Anselmo A. Sandoval Memorial National High School, focusing on those who encounter difficulties in academic subjects, particularly in English. Given that vocabulary is essential for understanding and interpreting written texts, the research explores how a lack of vocabulary knowledge can impede students' ability to comprehend reading material fully. By evaluating students' reading abilities, the study seeks to identify the relationship between vocabulary skills and reading comprehension, offering insights into the academic challenges faced by the students. The research followed a quantitative approach, using a descriptive research method to analyze the effects of vocabulary development on students' reading comprehension and vocabulary proficiency. A simple random sampling method was used to select 36 Grade 10 students who completed a survey designed to assess their vocabulary and reading comprehension. Statistical analysis tools, such as mean, weighted mean, and interpretation, were employed to process the survey results and evaluate the link between vocabulary and reading comprehension skills. The results showed a significant relationship, with a p-value of 0,038, indicating that vocabulary development directly influences reading comprehension skills. Additionally, the study found that students who were more engaged, confident, and maintained good study habits showed improved academic performance, underscoring the role of motivation and consistent effort in academic success. Based on these findings, the researchers recommend targeted interventions to address vocabulary deficiencies, which could improve students' reading comprehension. These interventions could also be extended to other subjects to promote overall academic growth. The study offers valuable recommendations for educators looking to implement innovative teaching methods that engage and motivate students, ultimately improving their academic performance. By incorporating effective strategies and tools into their teaching, educators can help students overcome vocabulary-related challenges and enhance their overall academic achievement.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-20",
    title: "ASSESSING THE ROLE OF SOCIAL MEDIA ON GENDER SENSITIVITY AMONG GRADE 12 STUDENTS IN ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ",
    authors: ["Baxa, Princess Mae H. Abratique, Crissa Mae D. Acosta, Adrian A. De Claro, Norwel Nathaniel M. Delos Santos, Erika D. Epis, Mary Grace M. Magsino, Mark Rj D. Marasigan, Jhermie D. Matibag, Zandy Cecilia M. Matira, Jouella B. Pagkaliwagan, Jobel S. Rayles, Francia Mae D."],
    year: "April 2024",
    strand: "HUMSS",
    abstract:
      `This study aimed to assess the role of social media on gender sensitivity among grade 12 students at Anselmo A. Sandoval Memorial National High School. Along with this, social media's role in the gender identity of the students as well as the various dimensions of their gender sensitivity including gender role equality, gender respect, and gender inclusivity were described and identified. This study aimed as well to examine the relationship between the role of social media on gender identity and the different gender sensitivity dimensions such as gender role equality, gender respect, and gender inclusivity. Moreover, challenges encountered by students of all genders were identified. Furthermore, this research study also aimed to propose ways to strengthen the use of social media platforms on gender sensitivity among students. The study employed the quantitative research method in correlational research design with the researcher-made questionnaire as the main instrument for data gathering. The respondents of the study involved a total population of 62 Grade 12 Students currently enrolled and studying at Anselmo A. Sandoval Memorial National High School. Moreover, ranking, weighted mean, and Pearson's product moment correlation coefficient were the statistical tools used to treat the data. Results of the study indicated that students of all genders perceived a great extent agreement that there's a role that social media plays on their gender identity in reference to the weighted mean acquired from the questionnaire responses of students-respondents. Moreover, male and LGBTQIA+ students perceived a great extent role of social media in all gender sensitivity dimensions namely gender role equality, gender respect, and gender inclusivity, while female respondents acquired a great extent role of social media in gender role equality and gender and a very great extent on gender inclusivity. Furthermore, there is a significant relationship in the assessments of the role of social media between gender identity and gender sensitivity dimensions among students. In line with this, a positive result of the effective role of social media on both gender identity and various gender sensitivity dimensions is expected among Grade 12 students in Anselmo A. Sandoval Memorial National High School. On the other hand, the most common primordial challenges that Grade 12 students of all genders have encountered are inferiority or the unequal treatment among genders, gender-based cyberbullying, the need of hiding their gender identity due to discrimination and traditional demands of gender roles. The findings of the study were the basis for the development of the proposed way to strengthen the use of social media platforms on gender sensitivity of grade 12 students. Based on the findings and conclusions of the study, some recommendations were given including the proposed Facebook Page to provide and spread gender sensitivity awareness and promote gender equality, gender respect, and gender inclusivity in online communities. Additionally, the school may also incorporate social media in advocating for the essence of a gender-inclusive environment. Then, this study may serve as a guide for other future researchers in conducting similar or related studies`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-21",
    title: "A Comprehensive Analysis of Social Media's Role in Shaping Reading Behaviors and Academic Discourse Among Filipino Students and Educators",
    authors: ["MHARYEN M. SAWALI"],
    year: "November 2024",
    strand: "HUMSS",
    abstract:
      `Social media refers to the means of interactions among people in which they create, share and or exchange information and ideas in virtual communities and networks. This study explored the complicated relationship between social media and education in the Philippines. It focused on how they shaped reading habits and academic conversations among Filipino students and teachers. This was conducted in districts of Batangas City, covering secondary educational institutions to understand comprehensively how different aspects of academic life are affected by these platforms. The study took a quantitative approach where an online survey questionnaire was used to collect data from students and educators making up a total sample size of 350 respondents who were selected using convenience sampling technique. This allowed for an extensive analysis on patterns of usage of social media as well as their perceived impacts on various academic activities and outcomes. As a quantitative research, ANOVA based comparative analysis indicated non-uniform effects of social media use on different aspects of academic life, hence signifying differential influence. Complexities surrounding education are highlighted by this finding which shows that some areas may have more impact than others when it comes to social media in education. 

Keywords: Social Media Reading Behaviors Comprehensive Analysis Academic Discourse
`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-22",
    title: "Close Reading Strategies in Teaching Oral Communication for Grade 11 Students in Anselmo A. Sandoval Memorial National High School",
    authors: ["MHARYEN M. SAWALI"],
    year: "November 2023",
    strand: "HUMSS",
    abstract:
      `The purpose of this action research is to provide concrete results of strategies for the teachers to be used in teaching oral communication to the Grade 11 students of Anselmo A. Sandoval Memorial National High School that will give a better academic performance of grade 11 students. This action research is quantitative in nature and uses the true experimental. Data are gathered through experiment from 50 HUMSS learners. The respondents are given 1 month and a half to undertake the lessons to be taught. The results of this action research will be a basis for strategies to be used in teaching oral communication. The effectivity of such strategies leads a better academic performance of the students in Oral Communication. Close reading strategy in teaching Oral Communication best describes as a strategy that improves the retentive memory of the students. The level of students' performance in discussion has the highest percentage in High Level through utilization of close reading strategy as well as in the level of students' performance in the story I've Been Stood Up on my Wedding Day while, in World Literature Reporting, the students in Very High Level has the most percentage through utilization of close reading strategy. The proposed supplementary activities are role playing, reporting and group activity. 

Keywords: Oral Communication Supplementary Activity World Literature
`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-23",
    title: "LEVEL OF PERFORMANCE IN ORAL AND WRITTEN SKILLS AMONG GRADE 12 HUMSS STRAND IN ANSELMO A SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ",
    authors: ["Atienza, Joseph Jhones, V. Bacay, Roselle, C. Bonquin, Mary Rose, R. Castillo, Rose Dianne, V. De Guzman, Jaclyn, C. Gadores, Jessica, A. Mendoza, Denice, O. Mendoza, Erika, H. Ramos, Donna Mae, M. Valderrama, Czanea Mikaela, U. "],
    year: "March 2023",
    strand: "HUMSS",
    abstract:
      `As researchers pursue greater understanding of the best strategies for enhancing the performance of Grade 12 HUMSS students, the two productive language domains speaking and writing have traditionally been addressed separately. In this study it endeavors to explore the potential relationship between these two variables and to determine the level of performance in oral and written skills among Grade 12 HUMSS Strand in Anselmo A. Sandoval Memorial National High School.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-24",
    title: "A COMPARATIVE STUDY BETWEEN FACEBOOK PAGE AND WEBSITE AS OUTPUT PLATFORMS IN CREATIVE WRITING AND MEDIA INFORMATION LITERACY AMONG GRADE 12 HUMSS ",
    authors: ["Magbuhos, Nhea Vel C. Guevarra, Jaren Eve Irish Camongol, John Mark R. Dural, John Leirey D. Salazar, Jhon Rovic N. Pancho, King Carlo H. Alvarez, Angela G. Datinguinoo, Danica Joy A. Mendoza, Erikka Mae Z. Ilagan Rubie Ann M. Letada Marivic R. Manibo Aizel Lorraine R."],
    year: "May 2024",
    strand: "HUMSS",
    abstract:
      `The digital age has led to the rise of platforms like Facebook Pages and personal websites, providing new communication channels for personal and professional lives. However, students at Anselmo A. Sandoval Memorial National High School at Humanities and Social Sciences struggle to choose the best platform for their Creative Writing, Media, and Information Literacy outputs. A bunch of students prefer the Facebook page since it is easier to use and more accessible since almost everyone has Facebook accounts, and for the website they find them hard to use. Due to the complications in the setup, it seems that there is no difference between the two. The researcher came up with the study that will compare the two and find out which is the better platform to use for their Creative Writing, Media and Information Literacy outputs. The study compares Facebook page and website using quantitative- comparative design, a variable-oriented, case-oriented, and collection-oriented methodology for data analysis. This study consists of 50 Grade 12 Humanities and Social Sciences students at Anselmo A. Sandoval Memorial National High School, selected using the Stratified Sampling method. The Raosoft calculator was used to select respondents from four sections: Pearl and Amethyst, Spinel and Diamond, and Amethyst. The sample size was assessed with a 90% confidence level and 10% margin of error, accounting for 180 people. Researchers used a self-crafted survey questionnaire to gather essential information from selected respondents. The questionnaires' validity was ensured by 3 I's teachers who checked, revised, and suggested until polished for dissemination. The gadget that is suggested for using the two platforms. Facebook pages on frequency of 128 are most effective seen on mobile devices such as smartphones or tablets instead of laptops or computer.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-17",
    title: "Detrimental Effect of Stage Fright and Anxiety among HUMSS Students of Grade 12 Diamond Causing Lower Grades and Inactive Participation",
    authors: ["Burlongan, Ma. Asha R. Delgado, Chester Lloyd V. Marasigan, Reneth A. Medrano, Danica Joy M. Paglinawan, Marc Genesis M. Rico, Cherish M."],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study was conducted to examine the effect of stage fright on the academic performance of a student, specially focusing on the Grade 12 Diamond under the strand of HUMSS. A quantitative research methodology was used to ensure precise and objective findings. The data was gathered through distributing printed questionnaires to students, with an average of thirty students taking part in the study, giving their insights about the causes of stage fright and how it affects their academic performance. In order to ensure a fair representation of students, the study employed the roulette wheel random sampling approach to identify the respondents. The purpose of the handed-out questionnaires was to find out what factors contribute to stage fright, such as judgments, prior public speaking experiences, and self-confidence. The researchers were able to distinguish the frequency and intensity of stage fright among students as well as the relationship between it and their academic performance with the help of the responses of the respondents. Stage fright showed a significant effect on grade 12 Diamond HUMSS students' academic performance. Higher levels of stage fright and anxiety were associated with low performance in presentations, recitations, and other academic activities that require the student to do public speaking. Their conflict in terms of academic performance was made worse by the psychological and physical symptoms of stage fright, which include trembling, a rapid heartbeat, and mental blocks. 
As a conclusion, the study emphasizes the significance of treatment and attending symposiums to help students effectively manage their anxiety and stage fright. By employing confidence-boosting techniques and providing teachers with assistance, we can assist students in reducing stage fright by addressing the psychological and physical aspects of stage fright and enhancing their academic performance.`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "humss-17",
    title: "Detrimental Effect of Stage Fright and Anxiety among HUMSS Students of Grade 12 Diamond Causing Lower Grades and Inactive Participation",
    authors: ["Burlongan, Ma. Asha R. Delgado, Chester Lloyd V. Marasigan, Reneth A. Medrano, Danica Joy M. Paglinawan, Marc Genesis M. Rico, Cherish M."],
    year: "March 2025",
    strand: "HUMSS",
    abstract:
      `This study was conducted to examine the effect of stage fright on the academic performance of a student, specially focusing on the Grade 12 Diamond under the strand of HUMSS. A quantitative research methodology was used to ensure precise and objective findings. The data was gathered through distributing printed questionnaires to students, with an average of thirty students taking part in the study, giving their insights about the causes of stage fright and how it affects their academic performance. In order to ensure a fair representation of students, the study employed the roulette wheel random sampling approach to identify the respondents. The purpose of the handed-out questionnaires was to find out what factors contribute to stage fright, such as judgments, prior public speaking experiences, and self-confidence. The researchers were able to distinguish the frequency and intensity of stage fright among students as well as the relationship between it and their academic performance with the help of the responses of the respondents. Stage fright showed a significant effect on grade 12 Diamond HUMSS students' academic performance. Higher levels of stage fright and anxiety were associated with low performance in presentations, recitations, and other academic activities that require the student to do public speaking. Their conflict in terms of academic performance was made worse by the psychological and physical symptoms of stage fright, which include trembling, a rapid heartbeat, and mental blocks. 
As a conclusion, the study emphasizes the significance of treatment and attending symposiums to help students effectively manage their anxiety and stage fright. By employing confidence-boosting techniques and providing teachers with assistance, we can assist students in reducing stage fright by addressing the psychological and physical aspects of stage fright and enhancing their academic performance.`,
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
    year: "March 2025",
    strand: "HE",
    abstract:
      `This study investigated the development and evaluation of powercoal cookware cleanser designed to an excellent cleaning solution for stubborn stains, oil, and burnt residues on a variety of cookware surfaces. With its potent yet mild formula, it successfully restores the original sheen of pots, pans, and cooking utensils without scratching or damaging them. It is an indispensable solution for preserving cleanliness and prolonging the life of kitchenware because of its quick-acting formula, which guarantees ease of use. Powercoal Cookware Cleaner is notable for its effectiveness, safety, and capacity to manage intense cleaning tasks with little effort. Keywords: Powercoal Cookware Cleanser Shining Shimering Coallagen`,
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    pdfUrl: "/pdfs/thesis-08.pdf",
  },
  {
    id: "he-03",
    title: "FACTORS IN PREVENTING DIFFICULTIES OF GRADE 12 TECHNICAL- VOCATIONAL LIVELIHOOD STUDENTS OF ANSELMO A. SANDOVAL MEMORIAL NATIONAL HIGH SCHOOL ON THEIR WORK IMMERSION",
    authors: ["Catarig, Glydel Mae Magmanlac, Queenan Faye Maliglig, Leslie Marquez, Shiela Matira, Anjeleca Panopio, Sophia Nicolle Reyes, Aerish Joy Siazon, Doren Layron, Jairon Valdez, Jayvison Luistro, Crizel Marie Malibiran, Kana Elaine Marcellana, Jimabel Masangcay, Eunice Claire Mauhay, Rochelle Rado, Quennie Rose Reyes, Hannah Vera Sibal, Jovelyn Magbuhat, Red"],
    year: "March 2018 ",
    strand: "HE",
    abstract:
      `EXECUTIVE SUMMARY 
TITLE: Difficulties of Grade 12 Technical-Vocational Livelihood Students of Anselmo A. Sandoval Memorial National High School on their Work Immersion 
AUTHOR: Home Economics Group 2
ADVISER: Mrs. Lorena D. Aloya 

Summary
 The purpose of the study aims to show the difficulties of grade 12 technical-vocational livelihood students of Anselmo A. Sandoval Memorial National High School on their work immersion. The researchers use descriptive survey method to gather and collect data from different kind of students concerning to the topic that would supply for the completion of the study. 

OT 
Using descriptive survey method, the researchers prepared questionnaire for the survey and surveyed 145 students from the strand of EIM. ICT and HOME ECONOMICS wherein there are 30 respondents in EIM, 40 respondents on Home Economics and 75 respondents on ICT that participated in the study 

Findings
 Based on the data analyzed, the following are the significant findings of the study. 1. What is the profile of the respondents? 
1.1 Sex. The total number of male from female was higher by 51 in total, wherein the number of male are 98 and female are 47. 
1.2 1.2. Age. The findings of the study in the aspect of age have a higher number in between the age of 18-20. It shows that 93 of the respondents or 64% of them are under 18-20 years old, while 23% (33) are under 15-17 years old and only 13% (19) only are under 21-23 years old. 
1.3 1.3 Strand. The findings about the strand of the respondents are not equally distributed due to the factor that there is a different number of population in every strand wherein there are 75 respondents in ICT, 40 respondents in Home Economics and 30 respondents in EIM. 
1.4 1.4 Skill Acquired. In this study the researchers has 145 respondents that gives a great part in this research which all of the respondents are already a National Certificate holder. These findings show that the respondents have their certificates that also became important to for their work immersion. vil 
1.5 1.5 Number of Certificates. This findings show that 72% (105) of the respondents had one National Certificate while the rest 28% (40) had 2-3 National Certificates. 

2. How does the respondents determine their difficulties encountered during their Work Immersion in terms of the following aspects: 
2.1 Nature of Workplace. The findings of the study shows that the nature of workplace is a huge factor that contributes to prevent difficulties on work immersion. Work immersion would help you to improve your knowledge and skills that you learned from it that could help you on your future job. Giving your full effort on your training helps you to have a good feedback from them. The experience you gained from the immersion company become a great help or factor to your learning. 
2.2 Job Description. The findings of the study shows that duties performed on the work immersion, also the experience and skills became one of the factors that prevented difficulties during the work immersion of the students. Also the equall treatment of the management to the students doesn't demonstrate favouritism that became factors that prevented difficulties to the students. 
2.3 Rules and Regulations of the Company. The findings of the study shows that trainees must maintain good self comfidence and must maintain good companionship with other people or even trainees . 
The conclusion drawn on the study shows that the duties performed by the students are also the factors that contributed to the skills they already had, while the treatment of the management contributes to the factors that help the students to prevent difficulties on their work immersion. 
3. The rules and regulations of the immersion company contributed to the prevention of difficulties on the work immersion of the students wherein developing good self confidence and companionship with others create a well balanced relationship to the management and also to co-workers. Also following and obeying the rules and regulations of the company are the huge factor seen in preventing difficulties. 

Recommendation
 Based from the findings and conclusion of the study, the following recommendations are offered. 
1. The proposed study may be presented to the management of Anselmo A. Sandoval Memorial National High School for review and enrichment of the study increase to the knowledge of the next generation that will benefit from the Kto12 program. 
2. 2. Teachers, Students and Faculty members have the benefit fom he result and information this study have.
3. To Technical-Vocational Livelihood students. 
4. To all Grade 12 Technical-Vocational Livelihood students that undergo work immersion.
 5. A similar study may conducted by the other students along this line.
`,
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

