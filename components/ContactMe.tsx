import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <div className="fixed bottom-10 right-5 max-sm:mx-5 z-[50000]">
      <a href="mailto:aryah144@gmail.com">
        <button
          className=" fixed bottom-6 right-6 w-[5rem] h-[5rem] md:w-20 md:h-20 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 border-[#393BB2] border-2"
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "50%",
            border: "2px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <div className="flex flex-col items-center">
            <FaBriefcase className="text-2xl mb-1" />
            <span className="text-xs font-semibold">Hire Me</span>
          </div>
        </button>
      </a>
    </div>
  );
};

export default ContactMe;
