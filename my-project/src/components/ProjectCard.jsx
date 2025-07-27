import { useState } from "react"

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  const projectData = project || defaultProject

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-2 transition-all hover:shadow-md dark:border-gray-800 dark:bg-neutral-900/70 sm:p-4">
        <div className="flex flex-col gap-2">
          <div className="overflow-hidden rounded-md">
            <img
              src={projectData.image || "/placeholder.svg?height=300&width=400"}
              alt={projectData.title}
              className="h-48 w-full object-cover transition-all group-hover:scale-105 sm:h-64"
            />
          </div>

          <div className="flex flex-col gap-2 p-2">
            <h3 className="text-xl font-semibold tracking-tight">{projectData.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">{projectData.description}</p>

            <div className="flex flex-wrap gap-1 pt-2">
              {projectData.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-neutral-900/70 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
              {projectData.techStack.length > 3 && (
                <span className="inline-flex items-center rounded-md border border-gray-200 px-2 py-1 text-xs font-medium dark:border-gray-800">
                  +{projectData.techStack.length - 3}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center rounded-md bg-gray-900/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-900/70 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-900/90 dark:hover:bg-gray-700/90"
              >
                Read More
              </button>

              <div className="flex gap-2">
                {projectData.liveUrl && (
                  <a
                    href={projectData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
                    aria-label="Live Demo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}

                {projectData.githubUrl && (
                  <a
                    href={projectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
                    aria-label="GitHub Repository"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal/Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/70"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-[8700px] max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-900/100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:ring-offset-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </button>

            <div>
              <h2 className="text-lg font-semibold leading-none tracking-tight">{projectData.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{projectData.description}</p>
              <div className="overflow-hidden rounded-md">
            <img
              src={projectData.image || "/placeholder.svg?height=300&width=400"}
              alt={projectData.title}
              className="h-48 w-full object-contain transition-all group-hover:scale-105 sm:h-96"
            />
          </div>
            </div>

            <div className="grid gap-4 py-4">
              <div>
                <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1">
                  {projectData.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                    
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">About this project</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{projectData.detailedDescription}</p>
              </div>

              {projectData.features && projectData.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Features</h4>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc pl-5 space-y-1">
                    {projectData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              {projectData.liveUrl && (
                <a
                  href={projectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              )}

              {projectData.githubUrl && (
                <a
                  href={projectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

