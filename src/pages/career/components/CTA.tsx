import React, { useState } from "react";
import ApplicationModal from "./ApplicationModal";
import { JobPosting } from "../data";

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create a generic job posting for general applications
  const generalApplication: JobPosting = {
    id: "general",
    title: "General Application",
    department: "Any",
    location: "Phnom Penh, Cambodia",
    type: "Full-time", // Using one of the allowed types from JobPosting
    experience: "Any",
    description:
      "We're always looking for talented individuals to join our team. If you don't see a specific role that matches your skills, submit a general application and we'll keep you in mind for future opportunities.",
    responsibilities: ["Varies based on role and department"],
    requirements: [
      "Strong communication skills",
      "Team player mentality",
      "Passion for technology",
      "Drive for continuous learning",
    ],
    benefits: [
      "Competitive compensation",
      "Health and wellness benefits",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Modern office environment",
      "Regular team activities",
    ],
    postedDate: new Date().toISOString().split("T")[0],
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] rounded-3xl overflow-hidden">
            <div className="px-6 py-16 sm:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team.
                Send us your resume and we'll keep you in mind for future
                opportunities.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={generalApplication}
      />
    </>
  );
};

export default CTA;
