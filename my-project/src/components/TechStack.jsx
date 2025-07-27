import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const TechStackCard = () => {
  const techStack = [
    { title: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png',  },
  { title: 'Express.js', icon: 'https://img.icons8.com/ios/50/000000/express-js.png',  },
  { title: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png',  },
  { title: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png', },
  {  title: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png',  },
  {  title: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png',  },
  { title: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png', },
  {  title: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png', },
  {  title: 'Material UI', icon: 'https://img.icons8.com/color/48/000000/material-ui.png', },
  { title: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png', },
  {  title: 'Next.js', icon: 'https://img.icons8.com/color/48/000000/nextjs.png', },
  { title: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png', },
  { title: 'C', icon: 'https://img.icons8.com/color/48/000000/c-programming.png',  },
  { title: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png',  },
  { title: 'Pandas', icon: 'https://img.icons8.com/color/48/000000/pandas.png',  },
  { title: 'NumPy', icon: 'https://img.icons8.com/color/48/000000/numpy.png',  },
  { title: 'Seaborn', icon: 'https://user-images.githubusercontent.com/315810/92254613-279c8000-ee9f-11ea-9b73-5622a7d95f3f.png',},
  { title: 'MatPlotLib', icon: 'https://img.icons8.com/color/48/000000/matplotlib.png',}
  
  ];

  return (
    <div className="mx-56">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 mt-10 flex justify-center">
        Tech-Stack
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center justify-center ">
            <SpotlightCard
              className="custom-spotlight-card bg-neutral-900/70"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img src={tech.icon} alt={tech.title} className="h-12 min-w-12 justify-self-center" />
              <p className="text-sm md:text-xl mb-1">{tech.title}</p>
              <p className="text-xs md:text-xs font-extralight">{tech.progress}</p>    
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
