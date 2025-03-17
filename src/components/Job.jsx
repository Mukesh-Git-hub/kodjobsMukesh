import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ job, index }) => {
  if (!job) return null;
  const gradients = [
    "bg-gradient-to-r from-blue-500 to-purple-100",
    "bg-gradient-to-r from-red-500 to-yellow-100",
    "bg-gradient-to-r from-green-500 to-teal-100",
    "bg-gradient-to-r from-yellow-500 to-orange-100",
    "bg-gradient-to-r from-purple-500 to-pink-100",
  ];
  const gradientClass = gradients[index % gradients.length];
  function formatISODate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="bg-[#121212] border border-gray-700 rounded-2xl shadow-xl w-full max-w-lg mx-auto p-6 hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-evenly backdrop-blur-lg">
    {/* Animated Gradient Border */}
    <div className="top-0 left-0 rounded-t-2xl h-2 absolute w-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
  
    {/* Header */}
    <div className="flex justify-between items-center border-b border-gray-600 pb-3 mb-4">
      <div className="flex items-center gap-4 justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-500 rounded-full shadow-inner"></div>
          <div>
            <h2 className="text-lg font-bold text-white">{job.company.name}</h2>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>{job.locations[0]?.name}</span>
            </div>
          </div>
        </div>
  
        {/* Styled Date */}
        <div className="text-xs text-white bg-gray-800 px-3 py-1 rounded-md shadow-md border border-gray-500 flex items-center gap-2">
          <span className="bg-blue-500 px-2 py-1 rounded text-xs font-bold text-white">
            📅 {formatISODate(job.publication_date)}
          </span>
        </div>
      </div>
    </div>
  
    {/* Job Title */}
    <h3 className="text-lg font-semibold text-white mb-2">{job.name}</h3>
  
    {/* Job Levels with Glow Effect */}
    {job.levels && job.levels.length > 0 && (
      <div className="text-sm text-gray-300 mb-3 flex items-center gap-2">
        
        <span className="bg-gradient-to-r from-green-500 to-lime-600 text-white px-3 py-1 rounded-md text-xs font-bold shadow-md animate-pulse">
          {job.levels.map((level) => level.name).join(", ")}
        </span>
      </div>
    )}
  
    {/* Job Tags */}
    {job.tags && job.tags.length > 0 && (
      <div className="text-sm text-gray-400 mb-2">
        <b className="text-white">Tags:</b> {job.tags.join(", ")}
      </div>
    )}
  
    {/* Apply Button */}
    <div className="flex justify-end">
      <a
        href={job.refs.landing_page}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-purple-700 hover:to-pink-600"
      >
        ➝ Apply Now
      </a>
    </div>
  </div>
  
  

  );
};

export default JobCard;
