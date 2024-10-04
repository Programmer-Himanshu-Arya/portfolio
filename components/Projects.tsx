"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { projects } from "@/Data";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="min-h-screen bg-[#000319] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="heading py-[5rem]" id="projects">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 h-64 md:h-auto md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={project.img}
                    alt={project.title}
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="mt-1 text-2xl font-semibold leading-tight truncate">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{project.des}</p>
                  <div className="mt-4 flex space-x-3">
                    {project.iconLists.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300"
                      >
                        <Image src={tech} alt="" width={25} height={25}/>
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-5 items-center">
                    <a href={project.link} target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        aria-label={`View ${project.title} project details`}
                      >
                        Live Demo
                      </motion.button>
                    </a>
                    <a href={project.github} target="_blank">
                      <Image src='/git.svg' alt={project.title} width={25} height={25}/>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
