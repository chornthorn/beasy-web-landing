export interface ProductItem {
  name: string;
  description: string;
  href: string;
}

export interface ProductCategory {
  title: string;
  items: ProductItem[];
}

const productCategories: ProductCategory[] = [
  {
    title: "5G Solutions",
    items: [
      {
        name: "5G Network Infrastructure",
        description: "Enterprise-grade 5G network deployment and management",
        href: "/products/5g-infrastructure",
      },
      {
        name: "Private 5G Networks",
        description: "Dedicated 5G networks for industrial and enterprise use",
        href: "/products/private-5g",
      },
      {
        name: "Edge Computing",
        description:
          "5G-enabled edge computing solutions for low-latency applications",
        href: "/products/edge-computing",
      },
      {
        name: "IoT Connectivity",
        description: "5G IoT solutions for smart devices and sensors",
        href: "/products/iot-connectivity",
      },
    ],
  },
  {
    title: "Communication",
    items: [
      {
        name: "Business Chat",
        description:
          "Secure enterprise messaging platform with team collaboration features",
        href: "/products/business-chat",
      },
      {
        name: "Video Conferencing",
        description: "HD video meetings with screen sharing and recording",
        href: "/products/video-conferencing",
      },
      {
        name: "Voice Solutions",
        description: "VoIP and cloud telephony services for business",
        href: "/products/voice-solutions",
      },
      {
        name: "Unified Messaging",
        description: "Integrated SMS, email, and chat platform",
        href: "/products/unified-messaging",
      },
    ],
  },
  {
    title: "Enterprise Solutions",
    items: [
      {
        name: "Call Center Suite",
        description: "Complete contact center solution with analytics",
        href: "/products/call-center",
      },
      {
        name: "Network Security",
        description: "Advanced security for 5G and communication networks",
        href: "/products/network-security",
      },
      {
        name: "Analytics Platform",
        description: "Network and communication insights platform",
        href: "/products/analytics",
      },
      {
        name: "API Integration",
        description: "Communication APIs for developers and businesses",
        href: "/products/api-integration",
      },
    ],
  },
];

export default productCategories;
