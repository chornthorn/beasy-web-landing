import React from "react";
import { Link } from "react-router-dom";

interface CookieDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onReject: () => void;
}

const CookieDialog: React.FC<CookieDialogProps> = ({
  isOpen,
  onClose,
  onAccept,
  onReject,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Cookie Preferences
          </h2>
          <p className="text-gray-700 mb-4">
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
            <Link
              to="/privacy"
              className="text-[#ff6b4a] hover:text-[#ff8568] underline transition-colors duration-300"
              onClick={onClose}
            >
              Read More
            </Link>
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={onAccept}
              className="bg-[#ff6b4a] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#ff8568] transition-colors duration-300"
            >
              Accept All Cookies
            </button>
            <button
              onClick={onReject}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
            >
              Reject Non-Essential Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieDialog;
