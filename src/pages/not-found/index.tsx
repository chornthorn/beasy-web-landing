import React from "react";
import { Link } from "react-router-dom";
import { CompanyHeader } from "../../components/layout/header";
import Footer from "../../components/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CompanyHeader />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-[#1e1b4b] via-[#ff6b4a20] to-[#ff3e3e20] px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-2xl text-white/90 mb-8">Page not found</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
