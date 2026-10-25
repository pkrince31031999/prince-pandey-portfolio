import type {
  EducationItem,
  Experience,
  FocusArea,
  NavLink,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const profile = {
  name: "Prince Pandey",
  title: "Software Engineer | Backend Developer | DevOps Engineer",
  shortTitle: "Software Engineer | Backend Developer",
  headlineLead: "Building Scalable Backend Systems &",
  headlineAccent: "Cloud-Native",
  headlineTail: "Solutions.",
  description:
    "I build backend systems and APIs that stay dependable as products grow, from cloud infrastructure to the services around them. Cursor, Claude, generative AI, and Google ADK are part of how I design and ship that work.",
  experienceLabel: "4+ Years",
  location: "Noida, India",
  locationFull: "Noida, Uttar Pradesh, India",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Noida%2C%20Uttar%20Pradesh%2C%20India",
  email: "princepandey31031999@yahoo.com",
  phone: "+91 8178853839",
  phoneHref: "tel:+918178853839",
  resumePath: "/prince-pandey-resume.pdf",
  resumeFileName: "Prince-Pandey-Resume.pdf",
} as const;

/**
 * Profile URLs were not listed on the resume.
 * Set a full https URL here to show the link. Leave null to hide it.
 */
export const profiles = {
  linkedin: null as string | null,
  github: null as string | null,
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const satisfies readonly NavLink[];

export const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const satisfies readonly NavLink[];

export const heroStack = [
  "PHP",
  "Python",
  "Go",
  "Laravel",
  "Flask",
  "AWS",
  "Docker",
  "Kubernetes",
  "MySQL",
] as const;

export const aiStack = [
  "Cursor",
  "Claude",
  "Generative AI",
  "Google ADK",
  "APIs",
] as const;

export const snapshot = [
  {
    title: "4+ Years of Experience",
    body: "Designing, shipping, and maintaining backend systems across logistics, healthcare, and cloud products.",
  },
  {
    title: "Backend & API Development",
    body: "APIs carry the product: REST, SOAP, webhooks, and integrations that keep data moving between services.",
  },
  {
    title: "Cloud & DevOps Engineering",
    body: "AWS infrastructure, containers, CI/CD, and the operational tooling around a running service.",
  },
  {
    title: "Scalable System Architecture",
    body: "Modular services, caching, and API design with performance and maintainability in mind.",
  },
] as const;

export const about = {
  paragraphs: [
    "I’m a backend and DevOps engineer with 4+ years of building, deploying, and maintaining web applications, REST and SOAP APIs, microservices, and cloud systems.",
    "That work has covered logistics and transportation platforms, healthcare operations, and cloud identity workflows. I focus on API design, database performance, AWS, and containerized delivery. Cursor, Claude, generative AI, and Google ADK are the tools I use when an AI-assisted workflow or an agent is the right fit.",
  ],
};

export const focusAreas = [
  {
    title: "Backend engineering",
    body: "PHP with Laravel and CodeIgniter, Python with Flask and Django, and Go with Gin.",
  },
  {
    title: "API integrations & architecture",
    body: "REST and SOAP APIs, webhooks, partner integrations, JWT, and OAuth — interfaces other services can rely on.",
  },
  {
    title: "Database optimization",
    body: "MySQL, Redis, and MongoDB, including query performance and connection pooling.",
  },
  {
    title: "Cloud infrastructure",
    body: "AWS EC2, S3, RDS, IAM, CloudWatch, VPC, and security groups, along with Azure.",
  },
  {
    title: "Containerization & automation",
    body: "Docker, Kubernetes, Terraform, Jenkins CI/CD, and GitHub Actions.",
  },
  {
    title: "Performance & reliability",
    body: "Monitoring with Grafana and Prometheus, plus an emphasis on scalability and system reliability.",
  },
  {
    title: "Generative AI & agents",
    body: "Cursor and Claude in the development workflow, generative AI for drafting and reasoning, and Google ADK for agent-style tooling.",
  },
] as const satisfies readonly FocusArea[];

export const skillGroups = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "languages",
    items: ["PHP", "Python", "Go", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: "frameworks",
    items: ["Laravel", "CodeIgniter", "Flask", "Django", "Gin", "jQuery"],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "backend",
    items: [
      "REST APIs",
      "SOAP APIs",
      "Webhooks",
      "API Integration",
      "Cron Jobs",
      "Microservices",
      "MVC Architecture",
      "JWT",
      "OAuth",
    ],
  },
  {
    id: "databases",
    title: "Databases & Caching",
    icon: "databases",
    items: [
      "MySQL",
      "Redis",
      "MongoDB",
      "Database Optimization",
      "Query Performance Tuning",
      "Connection Pooling",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: "cloud",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS IAM",
      "AWS CloudWatch",
      "VPC",
      "Security Groups",
      "Azure",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Automation",
    icon: "devops",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins CI/CD",
      "GitHub Actions",
      "Linux",
      "Ubuntu",
      "Nginx",
      "Apache",
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring & Observability",
    icon: "monitoring",
    items: [
      "Grafana",
      "Prometheus",
      "Log Monitoring",
      "Application Performance Monitoring",
    ],
  },
  {
    id: "ai",
    title: "AI, Agents & APIs",
    icon: "ai",
    items: [
      "Cursor",
      "Claude",
      "Generative AI",
      "Google ADK",
      "APIs",
    ],
  },
  {
    id: "tools",
    title: "Tools & Integrations",
    icon: "tools",
    items: [
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Jira",
      "Trello",
      "Postman",
      "Swagger",
      "VS Code",
      "Kafka (Basics)",
      "Twilio",
      "Courier APIs",
      "Payment Gateway APIs",
    ],
  },
] as const satisfies readonly SkillGroup[];

export const experience = [
  {
    id: "telgoo5",
    company: "Telgoo5",
    organization: "Vcare Call Center Pvt. Ltd.",
    monogram: "T5",
    role: "Software Engineer",
    start: "October 2024",
    end: "Present",
    current: true,
    location: "Noida",
    technologies: ["Python Flask", "PHP", "REST APIs", "AWS"],
    highlights: [
      "Developed RESTful APIs using PHP Core and Python Flask for cloud-based products.",
      "Built enterprise modules focused on scalability, performance, and enterprise-grade functionality.",
      "Integrated AWS Rekognition and Face Liveness Detection for identity verification, biometric authentication, and fraud prevention workflows.",
      "Designed backend services for facial comparison, liveness validation, and image processing using AWS services.",
      "Collaborated with cross-functional teams to deliver robust backend solutions aligned with business requirements.",
      "Optimized API architecture for high-performance cloud applications.",
    ],
  },
  {
    id: "apporio",
    company: "Apporio Infolabs & Shipmozo",
    organization: "Apporio Infolabs Pvt. Ltd.",
    monogram: "AS",
    role: "Software Engineer",
    start: "February 2024",
    end: "October 2024",
    current: false,
    location: "Noida",
    technologies: ["PHP", "Laravel", "CodeIgniter", "MySQL", "AWS"],
    highlights: [
      "Integrated courier partner APIs, including DTDC, Blue Dart, Shiprocket, India Post, Ecom Express, Gati, and Ekart.",
      "Led backend development for logistics and transportation systems in collaboration with mobile application teams.",
      "Developed a WhatsApp-based taxi booking system using Twilio APIs.",
      "Integrated international payment gateways, including PayPal, MaxiCash, PayNow, BudPay, and Paytm.",
      "Optimized databases and backend services to improve performance and scalability.",
    ],
  },
  {
    id: "parcelx",
    company: "ParcelX",
    organization: "Exyte Solutions Pvt. Ltd.",
    monogram: "PX",
    role: "Software Developer",
    start: "April 2023",
    end: "January 2024",
    current: false,
    location: "Jasola, Delhi",
    technologies: ["PHP", "Laravel", "CodeIgniter", "Logistics APIs"],
    highlights: [
      "Led courier API integration projects, improving data accuracy and real-time shipment tracking by 20%.",
      "Developed scalable RESTful APIs and modular backend architectures.",
      "Implemented real-time tracking systems integrating multiple courier providers.",
      "Developed an E-Waybill module and automated tracking-event processing through Cron Jobs.",
      "Built refund and order reprocessing systems.",
      "Developed microservice-based courier integrations using REST APIs, SOAP APIs, and Redis caching.",
    ],
  },
  {
    id: "healthians",
    company: "Healthians",
    monogram: "HN",
    role: "Software Development Engineer – 1",
    start: "January 2022",
    end: "March 2023",
    current: false,
    location: "Gurugram",
    technologies: ["PHP", "CodeIgniter", "MySQL", "REST APIs"],
    highlights: [
      "Developed business administration and CRM modules supporting healthcare operations.",
      "Built radiology and laboratory workflow systems, including barcode generation and bulk CSV uploads.",
      "Created CRUD dashboards and administrative panels.",
      "Performed REST API integrations, testing, and backend maintenance.",
    ],
  },
] as const satisfies readonly Experience[];

export const projects = [
  {
    id: "identity",
    title: "Identity Verification & Face Liveness",
    context: "Telgoo5 — Vcare Call Center Pvt. Ltd.",
    overview:
      "Backend services for identity verification, using AWS Rekognition and Face Liveness Detection for biometric authentication and fraud-prevention workflows.",
    stack: ["Python Flask", "PHP", "REST APIs", "AWS Rekognition"],
    responsibilities: [
      "Integrated face liveness validation and facial comparison into secure backend workflows.",
      "Designed services for image processing and identity checks on AWS.",
      "Shaped API architecture for high-performance cloud applications.",
    ],
    art: "identity",
    motif: "Identity",
  },
  {
    id: "courier",
    title: "Courier Integration & Shipment Tracking",
    context: "ParcelX and Apporio Infolabs & Shipmozo",
    overview:
      "Multi-provider courier integrations for logistics platforms, including real-time shipment tracking across REST and SOAP services.",
    stack: ["PHP", "Laravel", "CodeIgniter", "REST", "SOAP", "Redis", "MySQL"],
    responsibilities: [
      "At Apporio Infolabs & Shipmozo, integrated DTDC, Blue Dart, Shiprocket, India Post, Ecom Express, Gati, and Ekart.",
      "At ParcelX, led courier API work that improved data accuracy and real-time shipment tracking by 20%.",
      "Built microservice-based courier integrations with REST APIs, SOAP APIs, and Redis caching.",
    ],
    art: "courier",
    motif: "Tracking",
  },
  {
    id: "booking",
    title: "WhatsApp Taxi Booking System",
    context: "Apporio Infolabs & Shipmozo",
    overview:
      "A WhatsApp-based taxi booking flow built with Twilio APIs as part of transportation backend work alongside mobile application teams.",
    stack: ["PHP", "Laravel", "Twilio", "REST APIs"],
    responsibilities: [
      "Developed the booking workflow through Twilio APIs.",
      "Connected the conversation flow with backend transportation services.",
      "Worked alongside mobile teams on the broader logistics platform.",
    ],
    art: "booking",
    motif: "Booking",
  },
  {
    id: "ewaybill",
    title: "E-Waybill & Shipment Automation",
    context: "ParcelX — Exyte Solutions Pvt. Ltd.",
    overview:
      "Logistics automation covering an E-Waybill module, tracking-event processing, and refund and order reprocessing.",
    stack: ["PHP", "Laravel", "Cron Jobs", "REST APIs"],
    responsibilities: [
      "Automated tracking-event processing with Cron Jobs.",
      "Developed the E-Waybill module inside the shipment workflow.",
      "Built refund and order reprocessing systems.",
    ],
    art: "automation",
    motif: "Automation",
  },
  {
    id: "healthcare",
    title: "Healthcare Administration & Laboratory Workflows",
    context: "Healthians",
    overview:
      "Administration, CRM, and laboratory systems supporting day-to-day healthcare operations.",
    stack: ["PHP", "CodeIgniter", "MySQL", "REST APIs"],
    responsibilities: [
      "Built radiology and laboratory workflows, including barcode generation and bulk CSV uploads.",
      "Created CRUD dashboards and administrative panels for operational teams.",
      "Handled REST API integration, testing, and backend maintenance.",
    ],
    art: "healthcare",
    motif: "Operations",
  },
] as const satisfies readonly Project[];

export const education = [
  {
    id: "btech",
    credential: "Bachelor of Technology",
    detail: "Computer Science Engineering",
    school: "Sharda University",
    location: "Greater Noida",
    period: "2018–2022",
    prominent: true,
  },
  {
    id: "twelfth",
    credential: "12th — CBSE Board",
    detail: "Senior secondary",
    school: "Shaffali Public School",
    period: "2016–2017",
    prominent: false,
  },
  {
    id: "tenth",
    credential: "10th — CBSE Board",
    detail: "Secondary",
    school: "Shaffali Public School",
    period: "2015–2016",
    prominent: false,
  },
] as const satisfies readonly EducationItem[];
