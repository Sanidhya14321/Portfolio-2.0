import React from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';

const TechStackCard = () => {
  const techStack = [
    { name: 'MongoDB', logo: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { name: 'Express.js', logo: 'https://img.icons8.com/ios/50/000000/express-js.png' },
    { name: 'React', logo: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { name: 'Node.js', logo: 'https://img.icons8.com/color/48/000000/nodejs.png' },
    { name: 'Firebase', logo: 'https://img.icons8.com/color/48/000000/firebase.png' },
    { name: 'Python', logo: 'https://img.icons8.com/color/48/000000/python.png' },
    { name: 'C', logo: 'https://img.icons8.com/color/48/000000/c-programming.png' },
    { name: 'C++', logo: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' },
    { name: 'Javascript', logo: 'https://img.icons8.com/color/48/000000/javascript.png' },
    { name: 'Typescript', logo: 'https://img.icons8.com/color/48/000000/typescript.png' },
    { name: 'Pandas', logo: 'https://img.icons8.com/color/48/000000/pandas.png' },
    { name: 'Numpy', logo: 'https://img.icons8.com/color/48/000000/numpy.png' },
    { name: 'NextJS', logo: 'https://img.icons8.com/color/48/000000/nextjs.png' },
    { name: 'Solidity', logo: 'https://img.icons8.com/color/48/000000/solidity.png' },
    { name: 'Tailwind CSS', logo: 'https://img.icons8.com/color/48/000000/tailwindcss.png' },
    { name: 'Bootstrap', logo: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
    { name: 'Material UI', logo: 'https://img.icons8.com/color/48/000000/material-ui.png' },
    { name: 'Sass', logo: 'https://img.icons8.com/color/48/000000/sass.png' },
  ];

  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 mt-10 flex justify-center">Tech-Stack</h1>
      <div style={{ height: '400px', position: 'relative' }} className='items-center justify-center flex'>
  <Carousel
    baseWidth={400}
    autoplay={true}
    autoplayDelay={1700}
    pauseOnHover={true}
    loop={true}
    round={true}
  />
</div>
    </div>
  );
};

export default TechStackCard;
