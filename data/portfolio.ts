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
  cgpa: "9.60 / 10",
  batch: "Class of 2028 (2024 - 2028)",
  location: "Hyderabad, India",
  bio: "Currently pursuing Computer Science at CBIT Hyderabad with an outstanding 9.60 CGPA. I believe software engineering is a continuous climb of exploration and high-impact shipping. I have developed AI-powered streaming platforms, designed rural telemedicine solutions, and actively solve complex computational challenges daily. My core motivation is to refine full-stack workflows, master cloud services, and build tools that solve genuine problems."
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/gdhanushkumar07",
    icon: "github",
    userNameOrLabel: "github.com/gdhanushkumar07"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/g-dhanush-kumar-8b4b48334",
    icon: "linkedin",
    userNameOrLabel: "linkedin.com/in/g-dhanush-kumar"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/GDhanush_07/",
    icon: "code",
    userNameOrLabel: "leetcode.com/u/GDhanush_07"
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
    subtitle: "AI Media Creation & Distribution Platform",
    timelineLabel: "AI for Bharat Hackathon Shortlisted Project",
    date: "March 2026",
    description: "Engineered an AI-powered platform that analyzes video and audio content to produce scene-level insights, scripts, and engagement predictions.",
    features: [
      "Developed during AI for Bharat Hackathon",
      "Integrated multimodal media analysis and automated content optimization using AWS services including S3, Lambda, Bedrock, and Transcribe",
      "Implemented capabilities such as video intelligence, script generation, multilingual dubbing, background music recommendation, and automated social media distribution"
    ],
    tags: ["React", "TypeScript", "AWS"],
    isFeatured: true,
    github: "https://github.com/gdhanushkumar07/ContentIQ",
    demo: "http://98.89.43.72:3000"
  },
  {
    id: "arogyasarathi",
    title: "Arogya Sarathi",
    subtitle: "Rural Healthcare Communication Platform",
    timelineLabel: "Healthcare Innovation Hackathon Milestone",
    date: "January 2026",
    description: "Created a low-bandwidth healthcare web platform enabling rural patients to share symptoms, images, and voice notes with doctors asynchronously.",
    features: [
      "Designed an offline-first architecture using browser local storage, client-side compression, and Base64 encoding to support unstable network environments",
      "Implemented a full-stack system using React (TypeScript), Node.js, and Express.js to enable reliable medical communication in remote regions",
      "Hackathon Project – Healthcare Accessibility Solution"
    ],
    tags: ["React", "Node.js", "Express"],
    isFeatured: false,
    github: "https://github.com/gdhanushkumar07/Arogya-Sarathi-final-",
    demo: ""
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
    title: "Shortlisted in AI for Bharat",
    organization: "AI for Bharat Hackathon",
    date: "Apr 2026",
    type: "achievement",
    detail: "Selected as national finalist and shortlisted among top teams for designing ContentIQ's serverless media pipeline."
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
    year: "Early 2026",
    title: "AI Media Platform Finalist",
    description: "Shortlisted for AI for Bharat Hackathon. Developed ContentIQ media intelligence engine until April 2026.",
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
    description: "Maintained a continuous 9.60 CGPA at CBIT Hyderabad, placing in top tier of the computer engineering batch.",
    category: "academic"
  },
  {
    year: "Late 2024",
    title: "Undergraduate Commencement",
    description: "Began Computer Science and Engineering curriculum at CBIT. Started exploring advanced modern web frameworks.",
    category: "academic"
  }
];
