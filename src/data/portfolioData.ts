import aadiImg from '../aadi.png';

export interface Project {
  id: string;
  title: string;
  category: 'Enterprise' | 'Web App' | 'Management System' | 'Brand Platform';
  tagline: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isSkillSum?: boolean;
  image?: string;
  statusBadge: string;
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend & Programming' | 'Database' | 'Tools & Productivity';
  skills: {
    name: string;
    level: string; // e.g., 'Proficient', 'Core Focus', 'Experienced'
    icon: string;
    description: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  boardOrAuthority?: string;
  details: string;
  badge: string;
}

export interface SkillSumService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Aditya Kumar",
  title: "Full Stack Web Developer | Founder of SkillSum Innovations",
  brand: "AaDiTeCh",
  tagline: "“I build responsive websites, practical management systems, and digital experiences that turn ideas into useful products.”",
  location: "Ballia, Uttar Pradesh, India",
  email: "aaditya0775@gmail.com",
  phone: "+91-9023208267",
  whatsappUrl: "https://wa.me/919023208267?text=Hi%20Aditya,%20I%20saw%20your%20portfolio",
  status: "Available for new projects & tech collaborations",
  resumePath: "/Aditya_Kumar_Resume.pdf",
  profileImage: aadiImg,
  bioParagraph1: "I am a Full Stack Web Developer and the founder of SkillSum Innovations, based in Ballia, Uttar Pradesh. I focus on creating responsive, performant websites and structured database-backed management applications that solve tangible administrative and business problems.",
  bioParagraph2: "With a strong technical foundation spanning modern frontend interfaces, PHP, Python, and MySQL database architectures, I manage projects from initial wireframing to production deployment. Alongside client and management platforms, I lead SkillSum Innovations, delivering tailored technology solutions for businesses.",
  summaryStrengths: [
    "Full Stack Web Development",
    "Responsive Web Design",
    "Database Management & Optimization",
    "End-to-End System Architecture",
    "Problem Solving & Clean Code",
    "Entrepreneurial Leadership at SkillSum"
  ]
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Alex0775edu", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/aditya-kumar-cse/", icon: "Linkedin" },
  { name: "YouTube", url: "https://www.youtube.com/@CodeWithAditya0775", icon: "Youtube" },
  { name: "Instagram", url: "https://www.instagram.com/_alex_0775_/", icon: "Instagram" },
  { name: "Facebook", url: "https://www.facebook.com/_alex_0775_/", icon: "Facebook" },
  { name: "X (Twitter)", url: "https://x.com/AlexAditya0775", icon: "Twitter" }
];

export const SKILLSUM_DATA = {
  name: "SkillSum Innovations",
  tagline: "Innovate. Build. Grow.",
  url: "https://skillsum.in",
  logoUrl: "/assets/skillsum/logo.webp",
  logoFallback: "/assets/skillsum/logo.png",
  foundedRole: "Founder & Website Developer",
  mission: "SkillSum Innovations delivers innovative digital and technology solutions with quality, creativity, and trust, helping modern businesses turn concepts into scalable digital products.",
  brandColors: {
    primary: "#556b2f",
    primaryDark: "#3e4f22",
    accent: "#f8e6a8",
    secondary: "#a8d5a2",
    dark: "#1b2d14",
    bg: "#f8faf5",
    surface: "#ffffff"
  },
  services: [
    {
      id: "web-dev",
      title: "Website Development",
      shortDesc: "Custom websites, business sites, portfolios, landing pages — built for performance and conversion.",
      fullDesc: "Engineered with clean semantics, responsive mobile-first architecture, and optimized assets to ensure high speed, search visibility, and frictionless user journeys.",
      iconName: "Globe",
      tags: ["Modern Web", "Performance", "Responsive"]
    },
    {
      id: "management-systems",
      title: "Software & Management Systems",
      shortDesc: "Tailored software solutions, management systems, and business automation tools.",
      fullDesc: "Custom data architectures and management platforms that automate manual workflows, record student or customer data, and deliver real-time operational reports.",
      iconName: "Server",
      tags: ["Database Architecture", "Automation", "Workflows"]
    },
    {
      id: "embedded-iot",
      title: "Embedded Systems & IoT",
      shortDesc: "Arduino, ESP32, automation, IoT projects — bridging hardware and software.",
      fullDesc: "Connecting physical sensors, microcontrollers, and cloud endpoints to create intelligent monitoring, data logging, and smart automation systems.",
      iconName: "Cpu",
      tags: ["ESP32", "Arduino", "Hardware Integration"]
    },
    {
      id: "video-production",
      title: "Video Editing & Production",
      shortDesc: "Commercial ads, product shoots, corporate videos — storytelling through visuals.",
      fullDesc: "High-impact visual narratives, promotional teasers, social media reels, and brand media crafted with modern color grading and pacing.",
      iconName: "Video",
      tags: ["Commercials", "Visual Storytelling", "Post-Production"]
    },
    {
      id: "seo-marketing",
      title: "SEO & Digital Marketing",
      shortDesc: "Search engine optimization, digital strategy, and online growth solutions.",
      fullDesc: "Data-informed strategies to boost organic search rankings, enhance technical SEO hygiene, and amplify brand presence across digital channels.",
      iconName: "TrendingUp",
      tags: ["Technical SEO", "Growth Strategy", "Analytics"]
    },
    {
      id: "ai-maintenance",
      title: "AI Solutions & Maintenance",
      shortDesc: "AI-powered tools, website maintenance, and ongoing technical support.",
      fullDesc: "Continuous system health monitoring, security updates, feature enhancements, and the pragmatic integration of modern AI-powered automations.",
      iconName: "Bot",
      tags: ["Continuous Support", "AI Automation", "Security"]
    }
  ],
  founderJourney: [
    {
      step: "01",
      title: "Vision & Brand Inception",
      desc: "Founded SkillSum Innovations with a commitment to bridge practical engineering with modern digital services for clients who need dependable software."
    },
    {
      step: "02",
      title: "End-to-End Website Engineering",
      desc: "Designed, coded, and deployed the official skillsum.in company portal from wireframes to high-performance production hosting."
    },
    {
      step: "03",
      title: "Unified Service Ecosystem",
      desc: "Brought diverse digital pillars—web engineering, software management, IoT, and digital media—together under a clear, trusted brand identity."
    },
    {
      step: "04",
      title: "Live Operations & Deployment",
      desc: "Maintaining live web infrastructure with SEO optimization, fast loading times, and direct client inquiry handling."
    }
  ]
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "skillsum-platform",
    title: "SkillSum Innovations Official Platform",
    category: "Brand Platform",
    tagline: "Live official portal and digital service showcase for SkillSum Innovations",
    role: "Founder & Website Developer",
    description: "The official corporate web portal for SkillSum Innovations, engineered to present the company's full technology service suite, software products, and brand identity with a responsive, polished presentation.",
    problem: "A technology and digital services brand requires an authentic online presence that communicates technical competence, service clarity, and trust across all devices.",
    solution: "Designed and implemented a custom, lightweight, high-performance web platform featuring responsive service breakdowns, live contact points, brand media, and optimized assets.",
    features: [
      "Authentic corporate identity & green/cream brand design",
      "Interactive multi-service showcase covering web, software, IoT, and SEO",
      "Responsive layout tested across desktop, tablet, and mobile browsers",
      "Live deployment on official domain with SEO and meta tags"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO Architecture"],
    liveUrl: "https://skillsum.in",
    isSkillSum: true,
    statusBadge: "Live Brand Portal"
  },
  {
    id: "ems-system",
    title: "Education Management System (EMS)",
    category: "Management System",
    tagline: "Comprehensive academic platform for course distribution, notes, syllabus, and student records",
    role: "Full Stack Developer",
    description: "A centralized educational web system engineered to streamline academic administration. Facilitates digital notes dissemination, organized syllabus repositories, course catalogs, and structured student data records.",
    problem: "Educational institutions struggle with fragmented distribution of syllabi, lost course materials, and cumbersome manual record-keeping.",
    solution: "Built a structured database-backed platform providing an intuitive interface for students and educators to access study materials and manage academic records cleanly.",
    features: [
      "Structured syllabus & subject-wise notes download repository",
      "Robust relational database schema for student records retrieval",
      "Course catalog management and syllabus distribution workflow",
      "Clean, accessible dashboard interface"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    liveUrl: "https://aaditech2.pythonanywhere.com",
    githubUrl: "https://github.com/Alex0775edu/EMS-AADITECH",
    statusBadge: "Verified Deployment"
  },
  {
    id: "student-internship-system",
    title: "Student Internship Management System",
    category: "Web App",
    tagline: "End-to-end portal for managing student internship applications and tracking status",
    role: "Developer",
    description: "An operational web application designed to handle the lifecycle of internship applications, automate status tracking, and provide administrative reporting for academic programs.",
    problem: "Manual spreadsheet tracking of internship applicants creates delays, missed status updates, and poor visibility for administrators.",
    solution: "Engineered a streamlined application management portal with status progression indicators, record filtering, and clear visibility for both applicants and coordinators.",
    features: [
      "Application submission and centralized tracking dashboard",
      "Automated status tracking reducing manual administrative overhead",
      "Structured application records and searchable listings",
      "Responsive interface optimized for quick record audits"
    ],
    technologies: ["Web Stack", "MySQL / Database", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://aaditech.pythonanywhere.com/",
    statusBadge: "Operational System"
  },
  {
    id: "attendance-management-system",
    title: "Attendance Management System",
    category: "Management System",
    tagline: "Real-time attendance recording, student tracking, and automated reporting",
    role: "Developer",
    description: "A digital attendance platform focused on fast daily recording, organized student logs, and analytical attendance reports to eliminate paper register discrepancies.",
    problem: "Paper-based attendance registers are error-prone, slow to audit, and lack real-time visibility into student attendance trends.",
    solution: "Created a focused web application allowing quick roll-call logging, real-time presence calculations, and downloadable attendance summaries.",
    features: [
      "Rapid attendance logging interface with instant calculations",
      "Real-time attendance analytics and status summaries",
      "Organized student database records with date-wise filtering",
      "Clean dashboard visual design for administrators"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Firebase / MySQL", "Bootstrap"],
    liveUrl: "https://attendance-system-five-fawn.vercel.app/",
    statusBadge: "Live Production App"
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: "Core", icon: "Code2", description: "Semantic markup, accessibility, modern standards" },
      { name: "CSS3", level: "Core", icon: "Palette", description: "Flexbox, CSS Grid, custom properties, responsive systems" },
      { name: "JavaScript", level: "Advanced", icon: "Braces", description: "ES6+, DOM API, async/await, event-driven interfaces" },
      { name: "Bootstrap", level: "Proficient", icon: "Layout", description: "Component grids, responsive utility-first patterns" },
      { name: "Responsive Web Design", level: "Specialist", icon: "Smartphone", description: "Mobile-first layouts, fluid typography, touch optimization" }
    ]
  },
  {
    category: "Backend & Programming",
    skills: [
      { name: "PHP", level: "Core", icon: "Server", description: "Server-side architecture, session handling, CRUD APIs" },
      { name: "Python", level: "Proficient", icon: "Terminal", description: "Backend scripting, application logic, data handling" },
      { name: "C Programming", level: "Foundational", icon: "Cpu", description: "Memory management, algorithms, data structures" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: "Core", icon: "Database", description: "Relational schema design, indexes, normalized tables" },
      { name: "DBMS", level: "Proficient", icon: "Layers", description: "Database management concepts, ACID properties, queries" }
    ]
  },
  {
    category: "Tools & Productivity",
    skills: [
      { name: "Git", level: "Core", icon: "GitBranch", description: "Version control, branching, repository management" },
      { name: "GitHub", level: "Core", icon: "Github", description: "Open source collaboration, issue tracking, remote repos" },
      { name: "Microsoft Word", level: "Proficient", icon: "FileText", description: "Technical documentation, structured reporting" },
      { name: "Microsoft Excel", level: "Proficient", icon: "FileSpreadsheet", description: "Data tabulation, formula calculations, auditing" },
      { name: "Microsoft PowerPoint", level: "Proficient", icon: "Presentation", description: "Project presentations, technical briefs" },
      { name: "Tally Prime", level: "Experienced", icon: "Calculator", description: "Financial tracking, computerized accounting records" },
      { name: "Adobe Photoshop", level: "Creative", icon: "Image", description: "UI assets, mockups, image retouching & optimization" },
      { name: "Adobe PageMaker", level: "Experienced", icon: "BookOpen", description: "Page layout design, document publishing" },
      { name: "CapCut", level: "Creative", icon: "Film", description: "Video editing, motion pacing, promotional media" }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Mahamaya Polytechnic of Information Technology",
    period: "Ongoing",
    boardOrAuthority: "Dhanapur, Chandauli (U.P.)",
    details: "Core technical curriculum covering Data Structures, Web Engineering, Database Systems, Computer Architecture, and Software Engineering methodologies.",
    badge: "Diploma in CSE"
  },
  {
    degree: "Advanced Diploma in Computer Applications (ADCA)",
    institution: "EDGE Education",
    period: "2023 – 2024",
    boardOrAuthority: "Professional Certification",
    details: "Intensive training in full computer operations, advanced office applications, accounting systems (Tally), graphic design, and software fundamentals.",
    badge: "Specialized Diploma"
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "UP Board",
    period: "2024",
    boardOrAuthority: "Uttar Pradesh State Board",
    details: "Completed senior secondary education with strong emphasis on Mathematics, Science, and Analytical Logic.",
    badge: "Senior Secondary"
  },
  {
    degree: "High School (10th Grade)",
    institution: "UP Board",
    period: "2022",
    boardOrAuthority: "Uttar Pradesh State Board",
    details: "Foundational secondary schooling with science and mathematics focus, developing early interest in computing.",
    badge: "Secondary School"
  }
];
