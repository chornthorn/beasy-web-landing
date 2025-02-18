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
    title: "Compute",
    items: [
      {
        name: "Cloud VPS",
        description: "Virtual Private Servers with NVMe storage",
        href: "/products/cloud-vps",
      },
      {
        name: "Cloud VDS",
        description: "Virtual Dedicated Servers with dedicated resources",
        href: "/products/cloud-vds",
      },
      {
        name: "Storage VPS",
        description: "High-storage Virtual Private Servers",
        href: "/products/storage-vps",
      },
      {
        name: "Windows VPS",
        description: "Windows-based Virtual Private Servers",
        href: "/products/windows-vps",
      },
    ],
  },
  {
    title: "Storage",
    items: [
      {
        name: "Object Storage",
        description: "Scalable object storage solution",
        href: "/products/object-storage",
      },
      {
        name: "Block Storage",
        description: "High-performance block storage",
        href: "/products/block-storage",
      },
      {
        name: "Backup Storage",
        description: "Reliable backup storage solutions",
        href: "/products/backup-storage",
      },
      {
        name: "CDN",
        description: "Content Delivery Network",
        href: "/products/cdn",
      },
    ],
  },
  {
    title: "Hosting",
    items: [
      {
        name: "cPanel VPS",
        description: "VPS with cPanel control panel",
        href: "/products/cpanel-vps",
      },
      {
        name: "Domain Names",
        description: "Domain registration and management",
        href: "/products/domains",
      },
      {
        name: "Web Hosting",
        description: "Reliable web hosting solutions",
        href: "/products/web-hosting",
      },
      {
        name: "Email Hosting",
        description: "Professional email hosting",
        href: "/products/email-hosting",
      },
    ],
  },
];

export default productCategories;
