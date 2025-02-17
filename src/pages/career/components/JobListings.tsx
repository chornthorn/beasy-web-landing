import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jobPostings, JobPosting } from "../data";
import ApplicationModal from "./ApplicationModal";

const JobListings: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyingJob, setApplyingJob] = useState<JobPosting | null>(null);

  const handleApply = (job: JobPosting) => {
    setApplyingJob(job);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity and join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {jobPostings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="text-gray-600">{job.department}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{job.location}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{job.type}</span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedJob(selectedJob === job.id ? null : job.id)
                      }
                      className="mt-4 md:mt-0 inline-flex items-center text-[#ff6b4a] font-medium hover:text-[#ff3e3e] transition-colors duration-300"
                    >
                      {selectedJob === job.id ? "View Less" : "View More"}
                      <svg
                        className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                          selectedJob === job.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  <AnimatePresence>
                    {selectedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 space-y-6"
                      >
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            About the Role
                          </h4>
                          <p className="text-gray-600">{job.description}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Responsibilities
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {job.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Requirements
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {job.requirements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Benefits
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {job.benefits.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6">
                          <button
                            onClick={() => handleApply(job)}
                            className="w-full sm:w-auto bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] text-white px-8 py-3 rounded-full font-semibold hover:from-[#ff3e3e] hover:to-[#ff6b4a] transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            Apply Now
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setApplyingJob(null);
        }}
        job={applyingJob}
      />
    </>
  );
};

export default JobListings;
