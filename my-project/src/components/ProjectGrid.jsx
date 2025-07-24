import ProjectCard from "./ProjectCard";
import projects1 from "../assets/Project1.png";
import projects2 from "../assets/Project2.png";
import projects3 from "../assets/Project3.jpg";
import projects4 from "../assets/Project4.jpg";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";
import projects7 from "../assets/project7.png";
import projects8 from "../assets/project8.png";
import projects9 from "../assets/project9.png";

export default function ProjectsGrid() {
  const projects = [
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
      // liveUrl: "https://github.com/Sanidhya14321/HairRevive",
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
      // liveUrl: "https://github.com/Sanidhya14321/devdeck",
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
      // liveUrl: "https://github.com/Sanidhya14321/SocialFitness",
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
      // liveUrl: "https://github.com/Sanidhya14321/Wellness-App",
      githubUrl: "https://github.com/Sanidhya14321/Wellness-App",
    },
    {
      title: "CS-ASSESSMENT",
      description: "An online assessment platform for computer science students",
      image: projects7, // Fixed
      techStack: ["Next","Nextauth", "MongoDB", "Tailwind CSS","Typescript","Bcrypt.js","Framer Motion"],
      detailedDescription:
        "CS-ASSESSMENT is an online assessment platform designed for computer science students. It allows users to take quizzes, track their progress, and receive feedback on their performance.",
      features: [
        "User authentication",
        "Quiz creation and management",
        "Progress tracking",
        "Feedback system",
        "Leaderboard",
      ],
      // liveUrl: "https://github.com/Sanidhya14321/assessment-2",
      githubUrl: "https://github.com/Sanidhya14321/assessment-2",
    },
    {
      title: "SPARK",
      description: "A platform for students to stay updated with hackathons and events",
      image: projects8, // Fixed
      techStack: ["React.js", "Node.js", "Express.js", "JWT", "Bcrypt.js", "MongoDB", "Mongoose (ODM)", "Tailwind", "Redux.js", "RTK-Query"],
      detailedDescription:
        "SPARK is a platform designed to keep students updated with the latest hackathons, events, and workshops. It fosters community engagement through blogs and discussions.",
      features: [
        "Spark ensures secure login, granting users access to premium hackathon updates, events, and workshops.",
        "Enables students to join inter-college communities, interact through blogs, and engage in discussions.",
        "Facilitates hands-on open-source practice, empowering students with real-world development experience with Wide variety Internship Problem Statement Contributions.",
        "Feedback system"
      ],
      // liveUrl: "https://github.com/Sanidhya14321/SPARK",
      githubUrl: "https://github.com/Sanidhya14321/SPARK",
    },
    {
      title: "CareerCompass",
      description: "AI-Powered Career Guidance Platform",
      image: projects9, // Fixed
      techStack: ["React.js", "Vite", "Framer Motion", "Three.js", "Tailwind CSS", "Node.js","Express.js", "MongoDB", "Firebase", "OpenAI API", 
        "Botpress Webchat" ],
      detailedDescription:
        "CareerCompass is an AI-powered platform designed to guide students in choosing the right career path. It offers personalized assessments, career comparisons, and interactive chatbot support.",
      features: [
        "AI-Powered Career Guidance: Assesses users through subject-related questions and recommends the most suitable career paths.",
        "Career Field Comparison: Provides in-depth analysis of different career options, success rates, and growth opportunities.",
        "Interactive Chatbot: Integrates AI-driven conversations for personalized career assessment and insights. ",
      ],
      liveUrl: "https://careercompass-xi.vercel.app/",
      githubUrl: "https://github.com/Sanidhya14321/CareerCompass",
    }
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
