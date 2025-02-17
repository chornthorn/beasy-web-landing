import {
  HealthIcon,
  LearningIcon,
  WorkLifeIcon,
  TeamIcon,
  EquipmentIcon,
  CareerIcon,
} from "../components/BenefitIcons";

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const jobPostings: JobPosting[] = [
  {
    id: "senior-cloud-engineer",
    title: "Senior Cloud Engineer",
    department: "Engineering",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We're looking for a Senior Cloud Engineer to help design, implement, and manage our cloud infrastructure. You'll work on cutting-edge technologies and help shape the future of our cloud services.",
    responsibilities: [
      "Design and implement cloud infrastructure solutions",
      "Lead technical projects and mentor junior engineers",
      "Optimize cloud resource utilization and costs",
      "Implement security best practices and compliance measures",
      "Troubleshoot complex system issues",
      "Collaborate with cross-functional teams",
    ],
    requirements: [
      "5+ years of experience with cloud platforms (AWS, Azure, GCP)",
      "Strong knowledge of infrastructure as code (Terraform, CloudFormation)",
      "Experience with containerization and orchestration (Docker, Kubernetes)",
      "Proficiency in scripting languages (Python, Bash)",
      "Strong understanding of networking and security principles",
      "Excellent problem-solving and communication skills",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Annual learning and development budget",
      "Flexible working hours",
      "Remote work options",
      "Regular team building events",
    ],
    postedDate: "2025-02-15",
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our frontend team to build beautiful, responsive, and performant user interfaces. You'll work on our customer-facing applications and internal tools.",
    responsibilities: [
      "Develop responsive web applications using React",
      "Implement UI/UX designs with attention to detail",
      "Write clean, maintainable, and efficient code",
      "Collaborate with designers and backend developers",
      "Optimize application performance",
      "Write unit tests and documentation",
    ],
    requirements: [
      "3+ years of experience with React and TypeScript",
      "Strong understanding of HTML, CSS, and JavaScript",
      "Experience with modern frontend tools and practices",
      "Knowledge of responsive design and cross-browser compatibility",
      "Familiarity with version control systems (Git)",
      "Good understanding of web performance optimization",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance coverage",
      "Professional development opportunities",
      "Flexible working hours",
      "Modern office environment",
      "Regular team activities",
    ],
    postedDate: "2025-02-10",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Operations",
    location: "Phnom Penh, Cambodia",
    type: "Full-time",
    experience: "3+ years",
    description:
      "We're seeking a DevOps Engineer to help streamline our development and deployment processes. You'll work on automating infrastructure and improving our CI/CD pipelines.",
    responsibilities: [
      "Implement and maintain CI/CD pipelines",
      "Automate deployment processes",
      "Manage cloud infrastructure",
      "Monitor system performance and reliability",
      "Implement security measures",
      "Collaborate with development teams",
    ],
    requirements: [
      "3+ years of DevOps experience",
      "Strong knowledge of CI/CD tools (Jenkins, GitLab CI)",
      "Experience with cloud platforms (AWS, GCP)",
      "Proficiency in scripting and automation",
      "Knowledge of containerization and orchestration",
      "Understanding of security best practices",
    ],
    benefits: [
      "Competitive compensation",
      "Health and wellness benefits",
      "Training and certification support",
      "Flexible work arrangements",
      "Modern equipment provided",
      "Team building activities",
    ],
    postedDate: "2025-02-01",
  },
];

export const benefits: Benefit[] = [
  {
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance coverage for you and your family",
    icon: <HealthIcon />,
  },
  {
    title: "Learning & Development",
    description: "Annual budget for courses, conferences, and certifications",
    icon: <LearningIcon />,
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
    icon: <WorkLifeIcon />,
  },
  {
    title: "Team Building",
    description: "Regular team activities and social events",
    icon: <TeamIcon />,
  },
  {
    title: "Equipment",
    description: "Latest hardware and software tools provided",
    icon: <EquipmentIcon />,
  },
  {
    title: "Career Growth",
    description: "Clear career progression and mentorship opportunities",
    icon: <CareerIcon />,
  },
];
