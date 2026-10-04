export type PortfolioLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  visual: 'skycam' | 'knowledge' | 'evaluation';
  status: string;
};

export type Certification = {
  issuer: string;
  brand: 'oracle' | 'sap' | 'cisco';
  name: string;
  detail: string;
  mark: string;
  date: string;
  credentialUrl: string;
  modules?: string[];
};

export type JourneyEntry = {
  kind: 'education' | 'build';
  date: string;
  title: string;
  organization: string;
  detail: string;
  marker: string;
  projectIds?: Project['id'][];
};

export const portfolio = {
  name: 'Dharshan B',
  brandName: 'Dharshan',
  role: 'Final-year Information Technology student',
  school: 'Bannari Amman Institute of Technology',
  hero: {
    greeting: 'Hi, my name is',
    roleLead: 'I’m a',
    roles: ['Developer', 'Tester', 'Freelancer'],
  },
  heroImage: {
    src: '/hero-avatar.webp',
    alt: 'Illustration of a developer working at a laptop.',
  },
  statement:
    'I enjoy solving problems—especially the tough ones. I build across the full stack, from thoughtful interfaces to reliable APIs, databases, and data pipelines, with a focus on clean code that makes a meaningful difference.',
  availabilityLabel: 'Currently open to opportunity',
  sections: {
    skills: {
      eyebrow: 'Technical skills',
      title: 'The engine room.',
      note: 'A curated stack of languages, frameworks, and infrastructure powering my development process.',
    },
    projects: {
      eyebrow: 'Project work',
      title: 'Crafted with purpose.',
      note: 'End-to-end applications engineered to solve complex, real-world challenges.',
    },
    journey: {
      eyebrow: 'Education & experience',
      title: 'The path so far.',
      note: 'Bridging rigorous academic foundations with hands-on, practical engineering experience.',
    },
    certifications: {
      eyebrow: 'Credentials',
      title: 'Certified expertise.',
      note: 'Industry-recognized milestones spanning cloud AI, enterprise SAP, and foundational networking.',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Start a conversation.',
      note: 'Actively seeking software engineering roles and open to ambitious, technical collaborations.',
      invitation: 'Let’s build something extraordinary.',
      emailLabel: 'Direct email',
      socialsLabel: 'Find me elsewhere',
    },
  },
  contactIntro: {
    detail:
      'Ambitious concepts deserve a proper blueprint. Drop me an email—let’s architect something exceptional.',
  },
  footerStatement: 'Developer · Tester · Freelancer',
  email: 'dharshanbalas02@gmail.com',
  resumePath: '/resume.pdf',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/dharshan-02' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/02-dharshan' },
  ] satisfies PortfolioLink[],
  navigation: [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#work' },
    { label: 'Experience', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ],
  skills: [
    {
      id: 'languages',
      title: 'Programming languages',
      items: [
        { name: 'Java', mark: 'Java', icon: 'java' },
        { name: 'C++', mark: 'C++', icon: 'cplusplus' },
        { name: 'C', mark: 'C', icon: 'c' },
        { name: 'Python', mark: 'Py', icon: 'python' },
        { name: 'TypeScript', mark: 'TS', icon: 'typescript' },
        { name: 'JavaScript', mark: 'JS', icon: 'javascript' },
      ],
    },
    {
      id: 'frameworks',
      title: 'Frameworks & databases',
      items: [
        { name: 'React', mark: 'R', icon: 'react' },
        { name: 'Node.js', mark: 'N', icon: 'nodedotjs' },
        { name: 'Express.js', mark: 'Ex', icon: 'express' },
        { name: 'Spring Boot', mark: 'S', icon: 'springboot' },
        { name: 'MongoDB', mark: 'M', icon: 'mongodb' },
        { name: 'MySQL', mark: 'SQL', icon: 'mysql' },
        { name: 'PostgreSQL', mark: 'PG', icon: 'postgresql' },
        { name: 'Redis', mark: 'Rd', icon: 'redis' },
      ],
    },
    {
      id: 'platforms',
      title: 'Cloud, networking & tools',
      items: [
        { name: 'SAP CAP', mark: 'SAP', icon: 'sap' },
        { name: 'AWS', mark: 'aws', icon: 'aws' },
        { name: 'Google Cloud', mark: 'GCP', icon: 'googlecloud' },
        { name: 'Docker', mark: 'D', icon: 'docker' },
        { name: 'Kubernetes', mark: 'K8s', icon: 'kubernetes' },
        { name: 'Linux', mark: 'Lx', icon: 'linux' },
        { name: 'Postman', mark: 'P', icon: 'postman' },
        { name: 'Git & GitHub', mark: 'Git', icon: 'github' },
        { name: 'Cisco', mark: 'C', icon: 'cisco' },
        { name: 'Selenium', mark: 'Se', icon: 'selenium' },
        { name: 'TCP/IP', mark: 'IP', icon: 'network' },
      ],
    },
  ],
  projects: [
    {
      id: 'evaluation',
      number: '01',
      name: 'Student Evaluation Hub',
      subtitle: 'Automated assessment, with secure execution.',
      problem:
        'Manual evaluation slows feedback and makes it difficult to see patterns across student submissions.',
      approach:
        'Engineered an evaluation workflow with automated code execution, plagiarism checks, role-based access, analytics and PDF reports.',
      outcome:
        'Designed backend services for concurrent student submissions with automated evaluation and reporting.',
      stack: ['React', 'Node.js', 'MongoDB', 'Docker'],
      liveUrl: 'https://d-evaluation-platform-teal.vercel.app/',
      githubUrl: 'https://github.com/dharshan-02/Evaluation-Platform',
      visual: 'evaluation',
      status: 'Completed',
    },
    {
      id: 'knowledge',
      number: '02',
      name: 'Knowledge Sharing Portal',
      subtitle: 'Publish knowledge. Find it faster.',
      problem:
        'A growing publishing platform needs to keep content discoverable and protect the people contributing to it.',
      approach:
        'Designed a full-stack publishing flow with optimized MongoDB schemas, indexed queries, REST APIs and OAuth 2.0/JWT role controls.',
      outcome: 'Improved retrieval speed through MongoDB query optimization and indexing.',
      stack: ['React', 'Node.js', 'MongoDB', 'OAuth / JWT'],
      liveUrl: 'https://knowledge-sharing-ks.vercel.app/',
      githubUrl: 'https://github.com/dharshan-02/Knowledge-Sharing',
      visual: 'knowledge',
      status: 'Completed',
    },
    {
      id: 'skycam',
      number: '03',
      name: 'SkyCam',
      subtitle: 'A faster home for visual storytelling.',
      problem:
        'Photography deserves a portfolio that lets the work breathe, without making visitors wait for it to load.',
      approach:
        'Built a responsive photography experience with reusable React components, semantic structure and carefully lazy-loaded imagery.',
      outcome:
        'Created a responsive photography portfolio with an optimized gallery and room for future API integration.',
      stack: ['React', 'TypeScript', 'SEO'],
      liveUrl: 'https://sky-cam-photography.vercel.app/',
      githubUrl: 'https://github.com/dharshan-02/SkyCam-Photography',
      visual: 'skycam',
      status: 'Completed',
    },
  ] satisfies Project[],
  journey: [
    {
      kind: 'education',
      date: '2024 — Present',
      title: 'B.Tech, Information Technology',
      organization: 'Bannari Amman Institute of Technology',
      detail:
        'Final-year student building a strong foundation across software, systems and networks.',
      marker: '02',
      projectIds: ['evaluation', 'knowledge', 'skycam'],
    },
    {
      kind: 'education',
      date: '2022 — 2024',
      title: 'Diploma, Information Technology',
      organization: 'PSG Polytechnic College',
      detail: 'Graduated with 83.65%, building practical foundations in computing and engineering.',
      marker: '01',
    },
  ] satisfies JourneyEntry[],
  certifications: [
    {
      issuer: 'Oracle',
      brand: 'oracle',
      name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      detail: 'Foundational artificial intelligence certification',
      mark: 'OCI',
      date: 'Issued March 21, 2026',
      credentialUrl: '',
    },
    {
      issuer: 'SAP',
      brand: 'sap',
      name: 'SAP Certified - Backend Developer',
      detail: 'SAP Cloud Application Programming Model',
      mark: 'SAP',
      date: 'Issued August 10, 2026',
      credentialUrl: '',
    },
    {
      issuer: 'Cisco Networking Academy',
      brand: 'cisco',
      name: 'CCNA Networking Academy',
      detail: 'Three completed courses in networking and infrastructure.',
      mark: 'CCNA',
      date: 'Completed June 2026',
      credentialUrl: '',
      modules: [
        'Introduction to Networks',
        'Switching, Routing, and Wireless Essentials',
        'Enterprise Networking, Security, and Automation',
      ],
    },
  ] satisfies Certification[],
} as const;
