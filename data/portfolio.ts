export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  university: string;
  cgpa: string;
  batch: string;
  location: string;
  bio: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  userNameOrLabel?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  timelineLabel: string;
  date: string;
  description: string;
  features: string[];
  tags: string[];
  github?: string;
  demo?: string;
  isFeatured: boolean;
}

export interface Accolade {
  title: string;
  organization: string;
  date: string;
  type: 'achievement' | 'certification';
  detail: string;
  link?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  category: 'academic' | 'technical' | 'innovation';
  isLatest?: boolean;
}

export const personalInfo: PersonalInfo = {
  name: "Golconda Dhanush Kumar",
  title: "Building high-performance full-stack applications with intelligent architectures.",
  subtitle: "Computer Science Undergrad at CBIT, Hyderabad · Full-Stack Developer",
  university: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad",
  cgpa: "9.55 / 10",
  batch: "Class of 2028 (2024 - 2028)",
  location: "Hyderabad, India",
  bio: "Currently pursuing Computer Science at CBIT Hyderabad with an outstanding 9.55 CGPA. I believe software engineering is a continuous climb of exploration and high-impact shipping. I have developed AI-powered streaming platforms, designed rural telemedicine solutions, and actively solve complex computational challenges daily. My core motivation is to refine full-stack workflows, master cloud services, and build tools that solve genuine problems."
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: "github",
    userNameOrLabel: "github.com/dhanush"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
    icon: "linkedin",
    userNameOrLabel: "linkedin.com/in/dhanush"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/",
    icon: "code",
    userNameOrLabel: "leetcode.com/gdhanushkumar"
  },
  {
    name: "Email",
    url: "mailto:gdhanushkumar19@gmail.com",
    icon: "mail",
    userNameOrLabel: "gdhanushkumar19@gmail.com"
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "Web Stack",
    items: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Oracle DB 21c"]
  },
  {
    category: "Data Science & AI",
    items: ["NumPy", "Pandas", "Matplotlib", "Gemini API", "Prompt Engineering"]
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "GitHub", "VS Code", "AWS (S3, Lambda, Bedrock)", "Postman"]
  }
];

export const projectsData: Project[] = [
  {
    id: "contentiq",
    title: "ContentIQ",
    subtitle: "AI Video Intelligence & Distribution System",
    timelineLabel: "AI for Bharat Hackathon Winner Project",
    date: "March 2026",
    description: "An advanced, high-performance media processing and evaluation dashboard built to analyze multi-modal engagement parameters using cloud serverless constructs.",
    features: [
      "Engineered multi-modal asset evaluation pipeline using AWS Bedrock large models",
      "Created sub-second transcription and linguistic sync using AWS Transcribe workflows",
      "Pioneered secure, decoupled storage flow using AWS S3 upload events triggering automated multi-stage AWS Lambdas",
      "Designed a professional high-fidelity dashboard visualizer tracing retention forecasts and dynamic script alternates"
    ],
    tags: ["React", "TypeScript", "AWS S3", "AWS Lambda", "AWS Bedrock", "AWS Transcribe", "Tailwind CSS"],
    isFeatured: true,
    github: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: "arogyasarathi",
    title: "Arogya Sarathi",
    subtitle: "Rural Low-Bandwidth Telemedicine Interface",
    timelineLabel: "Healthcare Innovation Hackathon Milestone",
    date: "January 2026",
    description: "An offline-first patient triage and live specialist consult portal tailored for extreme low-signal healthcare clinics in remote rural hubs.",
    features: [
      "Optimized payload compression matrices and light socket triggers to function below 50kbps",
      "Developed secure client-side database caching using persistent service-worker synchronizers",
      "Built structured offline queues that auto-reconcile with cloud instances upon network verification",
      "Created highly accessible vernacular interfaces featuring voice translation assist badges"
    ],
    tags: ["React", "Node.js", "Express.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    isFeatured: false,
    github: "https://github.com/",
    demo: "https://github.com/"
  }
];

export const accoladesData: Accolade[] = [
  {
    title: "Ranked 36th in Dev Duel",
    organization: "IIT Hyderabad (Elan & nVision)",
    date: "Feb 2026",
    type: "achievement",
    detail: "Secured Outstanding All-India Rank 36 among hundreds of professional engineering and university teams during a high-stakes algorithmic sprint."
  },
  {
    title: "Top Integration Award winner",
    organization: "AI for Bharat Hackathon",
    date: "Mar 2026",
    type: "achievement",
    detail: "Earned national recognition and commercial-tier cloud deployment support for designing ContentIQ's serverless media pipeline."
  },
  {
    title: "Data Science Foundation",
    organization: "Infosys Springboard",
    date: "Feb 2026",
    type: "certification",
    detail: "Certified in analytical modeling, key regression metrics, statistical transformations, and programmatic visualizations using Pandas, NumPy and Matplotlib."
  },
  {
    title: "Adobe India Hackathon Participant",
    organization: "Team Binary Brains",
    date: "Jan 2026",
    type: "achievement",
    detail: "Shipped highly responsive, real-time shared vector whiteboard synchronizers ensuring minimal lag across shared clients."
  }
];

export const timelineMilestones: Milestone[] = [
  {
    year: "Present",
    title: "AI Media Platform Pioneer",
    description: "Won AI for Bharat Hackathon. Active on campus developing next-generation intelligent full-stack applications.",
    category: "innovation",
    isLatest: true
  },
  {
    year: "Early 2026",
    title: "Critical Hackathon Initiatives",
    description: "Built Arogya Sarathi rural health portal and presented real-time whiteboard utilities at Adobe India Hackathon.",
    category: "technical"
  },
  {
    year: "late 2025",
    title: "Algorithmic Climb",
    description: "Completed 200+ complex challenges on LeetCode, strengthening algorithm designs and runtime efficiency paradigms.",
    category: "technical"
  },
  {
    year: "Mid 2025",
    title: "Distinction Track",
    description: "Maintained a continuous 9.55 CGPA at CBIT Hyderabad, placing in top tier of the computer engineering batch.",
    category: "academic"
  },
  {
    year: "Late 2024",
    title: "Undergraduate Commencement",
    description: "Began Computer Science and Engineering curriculum at CBIT. Started exploring advanced modern web frameworks.",
    category: "academic"
  }
];
