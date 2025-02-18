import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("cookieChoice");
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleChoice = (choice: "accept" | "reject") => {
    localStorage.setItem("cookieChoice", choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-700 text-sm mb-4 sm:mb-0">
          This website uses cookies to ensure you get the best experience on our
          website.{" "}
          <Link
            to="/privacy"
            className="text-[#ff6b4a] hover:text-[#ff8568] underline transition-colors duration-300"
          >
            Read More
          </Link>
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => handleChoice("reject")}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
          >
            Reject
          </button>
          <button
            onClick={() => handleChoice("accept")}
            className="bg-[#ff6b4a] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#ff8568] transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
