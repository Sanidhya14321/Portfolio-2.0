import { motion } from "framer-motion";
import projects7 from "../assets/project7.png";
import projects8 from "../assets/project8.png";
import projects9 from "../assets/project9.png";
import projects3 from "../assets/Project3.jpg";
import projects4 from "../assets/Project4.jpg";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import ProjectsGrid from "./ProjectGrid";
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
const Projects = () => {
    const projectVariants={
        hidden:{
            opacity:0,scale:0.8,rotate:-40,y:50,
        },
        visible:{
            opacity:1,
            scale:1,
            rotate:0,
            y:0,
            transition:{
                duration:0.6,
                ease:"easeOut",
                type:"spring",
                bounce:0.4,
            }
        }
    }
  return (
    <section className="px-6 py-10" id="work">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mt-10">Projects</h1>
        <div className="h-1 w-20 mb-10 bg-white"></div>
        <ProjectsGrid projects={projects} projectVariants={projectVariants} />
    </section>
  )
}

export default Projects