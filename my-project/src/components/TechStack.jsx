import React from 'react';
import { motion } from 'framer-motion';

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
  ];

  return (
    <motion.div
      className="tech-stack-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        background: 'linear-gradient(145deg, #1f1f1f, #333)',
        borderRadius: '15px',
        boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.4)',
        maxWidth: '90%',
        width: '400px',
        margin: '20px auto',
        color: '#e0e0e0',
      }}
    >
      <h2 style={{ marginBottom: '20px', color: '#ffffff', fontSize: '1.5rem' }}>My Tech Stack</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '15px',
          width: '100%',
        }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px',
              background: '#1a1a1a',
              borderRadius: '12px',
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
            }}
          >
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              width={40}
              height={40}
              style={{ marginBottom: '10px' }}
            />
            <p style={{ marginTop: '10px', color: '#cfcfcf', fontSize: '0.9rem' }}>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackCard;
