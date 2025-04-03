import ProjectCard from "./ProjectCard";
import projects1 from "../assets/Project1.png";
import projects2 from "../assets/Project2.png";
import projects3 from "../assets/Project3.jpg";
import projects4 from "../assets/Project4.jpg";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "U-tube",
      description: "YouTube Clone created with create-react-app",
      image: projects1, // Fixed
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      detailedDescription:
        "A fully functional YouTube clone where users can upload, watch, and interact with videos. It supports user authentication, video recommendations, and real-time comments.",
      features: [
        "Video upload and streaming",
        "User authentication",
        "Like, comment, and subscribe features",
        "Recommendation system",
        "Dark and light mode support",
      ],
      liveUrl: "https://github.com/Sanidhya14321/youtube-clone",
      githubUrl: "https://github.com/Sanidhya14321/youtube-clone",
    },
    {
      title: "Todo App",
      description: "Manage, prioritize, and finish your goals and tasks",
      image: projects2, // Fixed
      techStack: ["React", "Firebase", "Tailwind CSS"],
      detailedDescription:
        "A task management application designed to help users organize their daily activities efficiently. It offers categorization, prioritization, and reminders.",
      features: [
        "Task creation and management",
        "Priority setting",
        "Deadline reminders",
        "Progress tracking",
        "Cloud sync with Firebase",
      ],
      liveUrl: "https://github.com/Sanidhya14321/todo",
      githubUrl: "https://github.com/Sanidhya14321/todo",
    },
    {
      title: "HairRevive",
      description: "A platform for hair regrowth solutions powered by science",
      image: projects3, // Fixed
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      detailedDescription:
        "HairRevive is a scientifically backed platform providing hair regrowth solutions. Users can access expert advice, product recommendations, and personalized treatment plans.",
      features: [
        "AI-powered hair analysis",
        "Personalized treatment plans",
        "Product recommendations",
        "User testimonials and success stories",
        "Subscription-based expert consultations",
      ],
      liveUrl: "https://github.com/Sanidhya14321/HairRevive",
      githubUrl: "https://github.com/Sanidhya14321/HairRevive",
    },
    {
      title: "DevDeck",
      description: "Interactive dashboard for developers to track coding activity",
      image: projects4, // Fixed
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      detailedDescription:
        "An interactive dashboard that allows developers to track their coding activity, analyze productivity, and get insights based on their work history.",
      features: [
        "GitHub and GitLab integration",
        "Real-time coding activity tracking",
        "Productivity insights and analytics",
        "Customizable widgets",
        "Dark and light mode themes",
      ],
      liveUrl: "https://github.com/Sanidhya14321/devdeck",
      githubUrl: "https://github.com/Sanidhya14321/devdeck",
    },
    {
      title: "FitConnect",
      description: "Fitness social network to connect athletes and trainers",
      image: projects5, // Fixed
      techStack: ["React", "Node.js", "MongoDB", "GraphQL"],
      detailedDescription:
        "FitConnect is a social network for fitness enthusiasts, athletes, and trainers to connect, share workouts, and track progress together.",
      features: [
        "User profiles and fitness tracking",
        "Trainer-client connections",
        "Workout sharing and logging",
        "Community challenges",
        "Goal setting and progress tracking",
      ],
      liveUrl: "https://github.com/Sanidhya14321/SocialFitness",
      githubUrl: "https://github.com/Sanidhya14321/SocialFitness",
    },
    {
      title: "WellNest",
      description: "A wellness app for mental and physical health improvement",
      image: projects6, // Fixed
      techStack: ["React", "Firebase", "Tailwind CSS"],
      detailedDescription:
        "WellNest is a wellness application that helps users improve their mental and physical well-being through meditation guides, fitness plans, and progress tracking.",
      features: [
        "Guided meditation sessions",
        "Personalized wellness plans",
        "Daily habit tracking",
        "Community support groups",
        "Progress analytics",
      ],
      liveUrl: "https://github.com/Sanidhya14321/Wellness-App",
      githubUrl: "https://github.com/Sanidhya14321/Wellness-App",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
