import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import ResponsiveCarousel from "./ResponsiveCarousel";
import SpotlightCard from "./SpotlightCard";

const TechStackCard = () => {
  const techStack = [
    { id: 1, title: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png', description: 'A NoSQL database for scalable and flexible data storage.' },
  { id: 2, title: 'Express.js', icon: 'https://img.icons8.com/ios/50/000000/express-js.png', description: 'A minimal and fast Node.js framework for building web applications.' },
  { id: 3, title: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png', description: 'A JavaScript library for building dynamic and interactive UIs.' },
  { id: 4, title: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png', description: 'A runtime for executing JavaScript on the server side.' },
  { id: 5, title: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png', description: 'A backend-as-a-service platform for app development.' },
  { id: 6, title: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png', description: 'A versatile, high-level programming language for multiple domains.' },
  { id: 7, title: 'C', icon: 'https://img.icons8.com/color/48/000000/c-programming.png', description: 'A low-level programming language for system development and performance.' },
  { id: 8, title: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png', description: 'An extension of C with object-oriented programming support.' },
  { id: 9, title: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png', description: 'A core web technology for dynamic and interactive content.' },
  { id: 10, title: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png', description: 'A superset of JavaScript adding static typing and scalability.' },
  { id: 11, title: 'Pandas (In Progress)', icon: 'https://img.icons8.com/color/48/000000/pandas.png', description: 'A Python library for data manipulation and analysis.' },
  { id: 12, title: 'NumPy (In Progress)', icon: 'https://img.icons8.com/color/48/000000/numpy.png', description: 'A Python library for numerical computing and matrix operations.' },
  { id: 13, title: 'Next.js', icon: 'https://img.icons8.com/color/48/000000/nextjs.png', description: 'A React framework for server-side rendering and static site generation.' },
  { id: 14, title: 'Solidity (In Progress)', icon: 'https://img.icons8.com/color/48/000000/solidity.png', description: 'A programming language for writing Ethereum smart contracts.' },
  { id: 15, title: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png', description: 'A utility-first CSS framework for rapid UI design.' },
  { id: 16, title: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png', description: 'A CSS framework for responsive, mobile-first web development.' },
  { id: 17, title: 'Material UI', icon: 'https://img.icons8.com/color/48/000000/material-ui.png', description: 'A React component library following Google’s Material Design.' },
  ];

  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 mt-10 flex justify-center">
        Tech-Stack
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center justify-center ">
            <SpotlightCard
              className="custom-spotlight-card w-44 md:w-72"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img src={tech.icon} alt={tech.title} className="h-12 min-w-12" />
              <p className="text-lg md:text-xl font-semibold mb-1">{tech.title}</p>
              <p className="text-xs md:text-xs font-extralight">{tech.description}</p>  
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
