import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import FiveGService from "./components/5G";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Render different service components based on the ID
  const renderServiceContent = () => {
    switch (id) {
      case "5g-infrastructure":
      case "private-5g":
      case "edge-computing":
      case "iot-connectivity":
        return <FiveGService />;
      default:
        return (
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-gray-900">
                Service Details
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Details for service: {id}
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">{renderServiceContent()}</main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
