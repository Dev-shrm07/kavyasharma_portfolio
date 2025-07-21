
import Cbre from "@/components/icons/cbre";
import Iit from "@/components/icons/iit";


export const Experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "CBRE Asia Pacific",
    date: "Jun 2024 - Present",
    icon: Cbre,
    points: ["Developed multiple robust microservices and RESTful APIs powering core internal tools, including rent prediction, opportunity spotting, cashflow simulation, portfolio enrichment and commission modelling, handling 400,000+ monthly requests with high availability.",
"Built an enterprise agentic AI platform using LangChain, LangGraph, and GPT-4o reasoning models. Developed a modular multi-agent system delivered as an API with real-time chat functionality via WebSocket implementation that integrates with existing microservices to provide strategic recommendations for portfolio optimization, reducing manual analysis time by 70%.",
"Developed a Transaction Optimization platform with a React.js frontend built on clean architecture principles, ensuring modularity and maintainability. Implemented SSO authentication, intuitive portfolio management workflows, and a seamless user experience. Developed Backend using FastAPI integrating internal cashflow microservices and optimized Snowflake schemas for portfolios, rent schedules, cashflow tables, and related metadata.",
"Led end-to-end development of Rent Buddy, an end-to-end system for rent and lease attributes prediction, including data pipelines ingesting from 10+ sources, designed modular Snowflake schemas, trained predictive models, and built performant APIs; improved accuracy by 54% and reduced API latency by 80% using vectorized operations, geospatial indexing and caching using Redis.",
"Developed a high-availability portfolio enrichment service that processes client portfolios to return enriched property metadata and tenant lease information, utilizing similarity search and address standardization algorithms along  with other services; adopted by the Advisory & Transactions team for Fortune 500 client accounts.",
"Implemented software engineering best practices including clean code principles, maintainable architecture, comprehensive unit and integration test coverage, Docker containerization, and Agile development methodologies ensuring high code quality, system reliability, and team productivity across all projects."]
,
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
