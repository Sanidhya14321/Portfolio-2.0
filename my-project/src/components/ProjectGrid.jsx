
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectGrid = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-6xl font-semibold text-center mb-12">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            layout
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-neutral-900/80 rounded-2xl overflow-hidden hover:scale-[1.02]   grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-200 ease-in-out"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-white text-lg font-semibold">
                {project.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-neutral-950 rounded-2xl max-w-3xl w-full mx-4 p-6 relative text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-white text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="mb-4 text-gray-300">
                {selectedProject.detailedDescription}
              </p>
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Tech Stack:</h3>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-neutral-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              {selectedProject.features && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-1">Features:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex gap-4 mt-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;