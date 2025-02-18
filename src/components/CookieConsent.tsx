import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CookieDialog from "./CookieDialog";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("cookieChoice");
    if (!cookieChoice) {
      setIsVisible(true);
    } else {
      setShowIcon(true);
    }
  }, []);

  const handleChoice = (choice: "accept" | "reject") => {
    localStorage.setItem("cookieChoice", choice);
    setIsVisible(false);
    setShowIcon(true);
  };

  return (
    <>
      {/* Cookie Consent Banner */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transition-transform duration-300 ease-in-out">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-700 text-sm mb-4 sm:mb-0">
              This website uses cookies to ensure you get the best experience on
              our website.{" "}
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
      )}

      {/* Floating Cookie Icon */}
      {showIcon && (
        <button
          onClick={() => setShowDialog(true)}
          className="fixed bottom-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
          aria-label="Cookie Settings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#ff6b4a]"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </button>
      )}

      {/* Cookie Preferences Dialog */}
      <CookieDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onAccept={() => {
          handleChoice("accept");
          setShowDialog(false);
        }}
        onReject={() => {
          handleChoice("reject");
          setShowDialog(false);
        }}
      />
    </>
  );
};

export default CookieConsent;
