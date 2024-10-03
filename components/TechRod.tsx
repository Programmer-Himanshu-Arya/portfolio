import React from "react";
import { motion } from "framer-motion";

const TechRod = ({ title, technologies }: any) => {
  return (
    <div className="w-1/2 px-4 max-md:w-full max-md:pb-10">
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <div className="bg-[#04071D] border border-gray-700 p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          {technologies.map((tech: any, index: number) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center bg-gray-900 p-4 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-700"
            >
              <div className="text-4xl mb-2" aria-hidden="true">
                {tech.icon}
              </div>
              <span className="text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechRod;
