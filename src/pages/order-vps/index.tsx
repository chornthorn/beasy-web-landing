import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HeaderV2 } from "../../components/layout/header";
import Footer from "../../components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import ProductBadges from "./components/ProductBadges";
import Specs from "./components/Specs";
import TermSelection from "./components/TermSelection";
import RegionSelection from "./components/RegionSelection";
import ImageSelection from "./components/ImageSelection";
import OrderSummary from "./components/OrderSummary";
import StorageConfiguration from "./components/StorageConfiguration";
import LoginCredentials from "./components/LoginCredentials";
import ObjectStorageSelection from "./components/ObjectStorageSelection";
import NetworkingOptions from "./components/NetworkingOptions";
import AddOns from "./components/AddOns";
import Divider from "./components/Divider";

interface OrderDetails {
  term: "1" | "3" | "6" | "12";
  region: string;
  quantity: number;
  storageType: "nvme" | "ssd";
  storageSize: number;
  username: string;
  password: string;
  objectStorage: string;
  privateNetworking: string;
  bandwidth: string;
  ipv4: string;
  backupSpace: string;
  serverManagement: string;
  monitoring: string;
  ssl: string;
}

const OrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    term: "1",
    region: searchParams.get("region") || "united-states",
    quantity: parseInt(searchParams.get("qty") || "1"),
    storageType: "nvme",
    storageSize: 100,
    username: "root",
    password: "MQe0IWEgibYacwGk2nTc1wS",
    objectStorage: "",
    privateNetworking: "none",
    bandwidth: "32 TB Out + Unlimited In",
    ipv4: "1",
    backupSpace: "none",
    serverManagement: "unmanaged",
    monitoring: "none",
    ssl: "none",
  });

  const specs = {
    cpu: "4 vCPU",
    ram: "6 GB RAM",
    storage: "100 GB NVMe",
    snapshot: "1 Snapshot",
  };

  const features = [
    "Free Migration Assistance",
    "24/7 Technical Support",
    "99.9% Uptime SLA",
    "Full Root Access",
    "IPv4 & IPv6",
    "Unlimited Traffic",
  ];

  const termSavings = {
    "1": { save: 0, label: "1 Month" },
    "3": { save: 5.0, label: "3 Months" },
    "6": { save: 10.0, label: "6 Months" },
    "12": { save: 15.0, label: "12 Months" },
  };

  const regions = [
    {
      id: "united-states",
      name: "United States (Central)",
      latency: "< 50ms",
      ping: "45 ms",
    },
    {
      id: "europe",
      name: "Europe (Germany)",
      latency: "< 100ms",
      ping: "90 ms",
      discount: 60,
    },
  ];

  const images = {
    categories: ["Popular", "OS", "Apps & Panels", "Blockchain"],
    options: [
      {
        name: "Ubuntu",
        icon: "🐧",
        versions: ["Ubuntu 24.04", "Ubuntu 22.04", "Ubuntu 20.04"],
        price: "Included",
        category: "Popular",
      },
      {
        name: "cPanel",
        icon: "⚙️",
        versions: ["cPanel/WHM (5 accounts)", "cPanel/WHM (10 accounts)"],
        price: "$26.50/month",
        category: "Apps & Panels",
      },
      {
        name: "Plesk + Linux",
        icon: "🔧",
        versions: ["Plesk Obsidian Web Admin", "Plesk Obsidian Web Pro"],
        price: "$14.00/month",
        category: "Apps & Panels",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [selectedImage, setSelectedImage] = useState(images.options[0]);

  const basePrice = 6.45;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#111827]"
    >
      <HeaderV2 />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800/50 rounded-xl p-6 mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-white">Cloud VPS 1</h1>
                  <ProductBadges />
                </div>

                <Specs specs={specs} />

                <Divider />
                <TermSelection
                  termSavings={termSavings}
                  selectedTerm={orderDetails.term}
                  onTermChange={(term) =>
                    setOrderDetails({
                      ...orderDetails,
                      term: term as OrderDetails["term"],
                    })
                  }
                />

                <Divider />
                <RegionSelection
                  regions={regions}
                  selectedRegion={orderDetails.region}
                  onRegionChange={(region) =>
                    setOrderDetails({ ...orderDetails, region })
                  }
                />

                <Divider />
                <ImageSelection
                  categories={images.categories}
                  options={images.options}
                  selectedCategory={selectedCategory}
                  selectedImage={selectedImage}
                  onCategoryChange={setSelectedCategory}
                  onImageSelect={setSelectedImage}
                />

                <Divider />
                <StorageConfiguration
                  selectedType={orderDetails.storageType}
                  selectedSize={orderDetails.storageSize}
                  onTypeChange={(type) =>
                    setOrderDetails({ ...orderDetails, storageType: type })
                  }
                  onSizeChange={(size) =>
                    setOrderDetails({ ...orderDetails, storageSize: size })
                  }
                />

                <Divider />
                <LoginCredentials
                  username={orderDetails.username}
                  password={orderDetails.password}
                  onPasswordChange={(password: string) =>
                    setOrderDetails({ ...orderDetails, password })
                  }
                />

                <Divider />
                <ObjectStorageSelection
                  selectedSize={orderDetails.objectStorage}
                  onSizeChange={(size: string) =>
                    setOrderDetails({ ...orderDetails, objectStorage: size })
                  }
                />

                <Divider />
                <NetworkingOptions
                  privateNetworking={orderDetails.privateNetworking}
                  bandwidth={orderDetails.bandwidth}
                  ipv4={orderDetails.ipv4}
                  onPrivateNetworkingChange={(value: string) =>
                    setOrderDetails({
                      ...orderDetails,
                      privateNetworking: value,
                    })
                  }
                  onIpv4Change={(value: string) =>
                    setOrderDetails({ ...orderDetails, ipv4: value })
                  }
                />

                <Divider />
                <AddOns
                  backupSpace={orderDetails.backupSpace}
                  serverManagement={orderDetails.serverManagement}
                  monitoring={orderDetails.monitoring}
                  ssl={orderDetails.ssl}
                  onBackupSpaceChange={(value: string) =>
                    setOrderDetails({ ...orderDetails, backupSpace: value })
                  }
                  onServerManagementChange={(value: string) =>
                    setOrderDetails({
                      ...orderDetails,
                      serverManagement: value,
                    })
                  }
                  onMonitoringChange={(value: string) =>
                    setOrderDetails({ ...orderDetails, monitoring: value })
                  }
                  onSslChange={(value: string) =>
                    setOrderDetails({ ...orderDetails, ssl: value })
                  }
                />
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                quantity={orderDetails.quantity}
                onQuantityChange={(quantity) =>
                  setOrderDetails({ ...orderDetails, quantity })
                }
                features={features}
                basePrice={basePrice}
                orderDetails={orderDetails}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default OrderPage;
