
import Cbre from "@/components/icons/cbre";
import Iit from "@/components/icons/iit";


export const Experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "CBRE Asia Pacific",
    date: "Jun 2024 - Present",
    icon: Cbre,
    points: [
      "Developed predictive deal model using Bayesian networks and comparative analysis techniques, leveraging input parameters like location, term, year, size, building class, lease type, and usage type to forecast critical rental attributes (starting rent, TI allowances, free rent months).",
      "Created an opportunity spotting model predicting lease opportunities (in terms of net savings) by analyzing end date, lease date, headcount, target headcount, size, capital, and market rent ratio.",
      "Implemented end-to-end data science workflow, from data ingestion and cleaning to model development, deployment, and production implementation.",
      "Deployed these models as scalable FastAPI applications on AWS EC2 to support the portfolio optimization application managing real estate portfolios for multiple clients.",
      "Designed and implemented a comprehensive data pipeline for the Vendor Finance Reporting (VFR) project, transferring data from staging environments to Snowflake tables and implementing automated email-sending tasks triggered by Snowflake data conditions.",
    ],
    iconBg: "#fff",
  },
  {
    title: "D&T Intern",
    company_name: "CBRE Asia Pacific",
    date: "Feb 2024 - Jun 2024",
    icon: Cbre,
    points: [
      "Developed a comprehensive data cleaning and preprocessing pipeline for work order data across multiple client portfolios, standardizing diverse data formats and improving overall data quality",
      "Implemented advanced natural language processing techniques using Hugging Face and foundation models to automatically summarize work orders and identify missing information.",
      "Enhanced work order completion efficiency by creating an intelligent information extraction system that reduces manual review time and accelerates data processing workflows.",
    ],
    iconBg:'#FFF'
  },
  {
    title:"Summmer Research Intern",
    company_name:"Indian Institute of Technology, BHU",
    date:"Jun 2022 - Jul 2022",
    icon:Iit,
    points:[
        "Conducted in-depth research on UAV-based mobile edge computing networks, focusing on innovative smart UAV trajectory planning strategies using advanced reinforcement learning techniques.",
        "Developed custom multi-UAV edge computing models that optimize network performance, computational efficiency, and dynamic trajectory allocation across complex computing environments.",
        "Analyzed and implemented comprehensive research material on  UAV edge computing architectures, exploring novel approaches to distributed computing and intelligent network orchestration."
    ],
     iconBg:'#20271f'
  }
];
