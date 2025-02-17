export interface Project {
  id: string;
  title: string;
  description: string;
  category: "web" | "mobile" | "cloud" | "ai";
  image: string;
  client: string;
  technologies: string[];
  link?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with advanced inventory management and real-time analytics.",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "RetailCorp Inc.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    testimonial: {
      quote:
        "The platform transformed our online presence and increased sales by 200%.",
      author: "Sarah Johnson",
      role: "CEO, RetailCorp Inc.",
    },
  },
  {
    id: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    description:
      "Real-time analytics dashboard powered by AI for predictive insights and data visualization.",
    category: "ai",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "DataTech Solutions",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    testimonial: {
      quote:
        "The AI insights have been invaluable for our decision-making process.",
      author: "Michael Chen",
      role: "CTO, DataTech Solutions",
    },
  },
  {
    id: "cloud-migration",
    title: "Enterprise Cloud Migration",
    description:
      "Successful migration of legacy systems to cloud infrastructure with zero downtime.",
    category: "cloud",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "Global Enterprises Ltd.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    testimonial: {
      quote:
        "Seamless migration with significant cost savings and improved performance.",
      author: "David Wilson",
      role: "IT Director, Global Enterprises",
    },
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    description:
      "Secure and user-friendly mobile banking application with biometric authentication.",
    category: "mobile",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "SecureBank",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    testimonial: {
      quote: "The app has received outstanding feedback from our customers.",
      author: "Emily Brown",
      role: "Product Manager, SecureBank",
    },
  },
  {
    id: "iot-platform",
    title: "IoT Monitoring Platform",
    description:
      "Real-time IoT device monitoring and management platform for industrial applications.",
    category: "cloud",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "IndustrialTech",
    technologies: ["Node.js", "MQTT", "InfluxDB", "React"],
    testimonial: {
      quote:
        "Revolutionized our device management and monitoring capabilities.",
      author: "Robert Martinez",
      role: "Operations Director, IndustrialTech",
    },
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Service Chatbot",
    description:
      "Intelligent chatbot system with natural language processing for customer support.",
    category: "ai",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "ServiceFirst Co.",
    technologies: ["Python", "NLP", "React", "MongoDB"],
    testimonial: {
      quote:
        "Reduced support tickets by 60% while maintaining high customer satisfaction.",
      author: "Lisa Thompson",
      role: "Support Manager, ServiceFirst",
    },
  },
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "cloud", name: "Cloud Solutions" },
  { id: "ai", name: "AI & ML" },
];
