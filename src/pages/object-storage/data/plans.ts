export interface ObjectStoragePlan {
  name: string;
  price: string;
  storage: string;
  features: string[];
}

export interface RegionalPlan {
  size: string;
  price: string;
  region: string;
}

export const storagePlan: ObjectStoragePlan = {
  name: "OBJECT STORAGE",
  price: "2.99",
  storage: "250 GB",
  features: ["All-Inclusive", "Redundant", "S3-Compatible API"],
};

export const regionalPlans: RegionalPlan[] = [
  {
    size: "250 GB Object Storage",
    price: "2.99",
    region: "Europe",
  },
  {
    size: "500 GB Object Storage",
    price: "5.98",
    region: "Europe",
  },
  {
    size: "1 TB Object Storage",
    price: "11.96",
    region: "Europe",
  },
  {
    size: "2 TB Object Storage",
    price: "23.92",
    region: "Europe",
  },
  {
    size: "5 TB Object Storage",
    price: "59.80",
    region: "Europe",
  },
  {
    size: "10 TB Object Storage",
    price: "119.60",
    region: "Europe",
  },
];

export const regions = ["Europe", "United States", "Asia"];

export const features = [
  // ... (keep existing features array)
];

export const highlights = [
  // ... (keep existing highlights array)
];
