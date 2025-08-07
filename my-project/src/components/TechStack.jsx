import React from "react";

const TechStackCard = () => {
  const techStack = [
    { title: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { title: 'Express.js', icon: 'https://img.icons8.com/ios/50/000000/express-js.png' },
    { title: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { title: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
    { title: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png' },
    { title: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
    { title: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
    { title: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png' },
    { title: 'Material UI', icon: 'https://img.icons8.com/color/48/000000/material-ui.png' },
    { title: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png' },
    { title: 'Next.js', icon: 'https://img.icons8.com/color/48/000000/nextjs.png' },
    { title: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png' },
    { title: 'C', icon: 'https://img.icons8.com/color/48/000000/c-programming.png' },
    { title: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' },
    { title: 'Pandas', icon: 'https://img.icons8.com/color/48/000000/pandas.png' },
    { title: 'NumPy', icon: 'https://img.icons8.com/color/48/000000/numpy.png' },
    { title: 'Seaborn', icon: 'https://user-images.githubusercontent.com/315810/92254613-279c8000-ee9f-11ea-9b73-5622a7d95f3f.png' },
    { title: 'MatPlotLib', icon: 'https://img.icons8.com/color/48/000000/matplotlib.png' }
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10 ">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-center">
        Tech-Stack
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center ">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] bg-neutral-900/70 rounded-xl flex flex-col items-center justify-center 
              hover:scale-105 hover:bg-neutral-800  grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 ease-in-out"
          >
            <img
              src={tech.icon}
              alt={tech.title}
              className="h-10 w-10 object-contain mb-2"
            />
            <p className="text-xs text-center text-white">{tech.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
