import { useState } from "react";
import ProjectCard from "./ProjectCard";

// Place your projects array here directly
import projects7 from "../assets/project7.png";
import projects8 from "../assets/project8.png";
import projects9 from "../assets/project9.png";
import projects3 from "../assets/Project3.jpg";
import projects4 from "../assets/Project4.jpg";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

const projects = [
  {
    title: "CS-ASSESSMENT",
    description: "An online assessment platform for computer science students",
    image: projects7,
    techStack: ["Next", "Nextauth", "MongoDB", "Tailwind CSS", "Typescript", "Bcrypt.js", "Framer Motion"],
    detailedDescription: "CS-ASSESSMENT is an online assessment platform designed for computer science students...",
    features: ["User authentication", "Quiz creation and management", "Progress tracking", "Feedback system", "Leaderboard"],
    githubUrl: "https://github.com/Sanidhya14321/assessment-2",
  },
  {
    title: "SPARK",
    description: "A platform for students to stay updated with hackathons and events",
    image: projects8,
    techStack: ["React.js", "Node.js", "Express.js", "JWT", "MongoDB", "Tailwind", "Redux.js", "RTK-Query"],
    detailedDescription: "SPARK is a platform designed to keep students updated with the latest hackathons...",
    features: ["Secure login", "Community engagement", "Open-source practice", "Feedback system"],
    githubUrl: "https://github.com/Sanidhya14321/SPARK",
  },
  {
    title: "CareerCompass",
    description: "AI-Powered Career Guidance Platform",
    image: projects9,
    techStack: ["React.js", "Vite", "Framer Motion", "Three.js", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "OpenAI API"],
    detailedDescription: "CareerCompass is an AI-powered platform designed to guide students...",
    features: ["AI-Powered Guidance", "Career Comparisons", "Interactive Chatbot"],
    liveUrl: "https://careercompass-xi.vercel.app/",
    githubUrl: "https://github.com/Sanidhya14321/CareerCompass",
  },
  {
    title: "HairRevive",
    description: "Hair regrowth solutions powered by science",
    image: projects3,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    detailedDescription: "HairRevive provides scientifically backed hair regrowth solutions...",
    features: ["AI analysis", "Treatment plans", "Product recommendations"],
    githubUrl: "https://github.com/Sanidhya14321/HairRevive",
  },
  {
    title: "DevDeck",
    description: "Track coding activity with an interactive dashboard",
    image: projects4,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    detailedDescription: "DevDeck tracks and analyzes your coding productivity...",
    features: ["GitHub integration", "Analytics", "Custom widgets"],
    githubUrl: "https://github.com/Sanidhya14321/devdeck",
  },
  {
    title: "FitConnect",
    description: "Connect athletes and trainers via social fitness",
    image: projects5,
    techStack: ["React", "Node.js", "MongoDB", "GraphQL"],
    detailedDescription: "FitConnect helps athletes and trainers share progress and workouts...",
    features: ["Tracking", "Connections", "Challenges"],
    githubUrl: "https://github.com/Sanidhya14321/SocialFitness",
  },
  {
    title: "WellNest",
    description: "Mental & physical wellness improvement app",
    image: projects6,
    techStack: ["React", "Firebase", "Tailwind CSS"],
    detailedDescription: "WellNest provides daily meditation and wellness plans...",
    features: ["Meditation", "Wellness plans", "Analytics"],
    githubUrl: "https://github.com/Sanidhya14321/Wellness-App",
  },
];

export default function ProjectsGrid() {
  const [showAll, setShowAll] = useState(false);

  const mainProjects = projects.slice(0, 3);
  const extraProjects = projects.slice(3);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mainProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        {showAll &&
          extraProjects.map((project, index) => (
            <ProjectCard key={index + 3} project={project} />
          ))}
      </div>

      <div className="flex justify-center mt-6">
        {extraProjects.length > 0 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-xl bg-gradient-to-r from-[#525252] to-[#0d0d0d] px-6 py-2 text-white shadow-lg transition hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
}
