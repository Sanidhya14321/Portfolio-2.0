import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt } from 'react-icons/fa'; 

const Loader = () => {
  const letters = ["S", "V"]; 
  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    transition: {
      duration: 2.0, 
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <div style={styles.loaderContainer}>
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ ...variants.transition, delay: index * 0.1 }}
          style={styles.letter}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000', 
    fontSize: '48px',
    color: '#FFD700',
  },
  letter: {
    margin: '0 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px', 
  },
};

export default Loader;
