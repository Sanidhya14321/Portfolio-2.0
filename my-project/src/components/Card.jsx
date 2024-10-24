import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Card = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden h-[500px] transition-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            <StyledWrapper>
              <FlipCard project={project} />
            </StyledWrapper>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FlipCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <motion.div
      className="flip-card"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flip-card-front">
          <p className="title">{project.name}</p>
        </div>
        <div className="flip-card-back">
          <img src={project.image} alt={project.name} />
          <p className="text-orange-500 text-2xl mx-4 mt-5">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 400px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform-style: preserve-3d;
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
    justify-content:center;
    align-items:center;
  }

  .flip-card-front {
    background: rgba(72, 72, 72, 0.3); /* Dark stone color with 30% opacity */
    color: coral;
  }

  .flip-card-back {
    background: rgba(72, 72, 72, 0.3); /* Dark stone color with 30% opacity */
    color: white;
    transform: rotateY(180deg);
  }
    .flip-card-back img{
    width:50%;
    }
`;

export default Card;
