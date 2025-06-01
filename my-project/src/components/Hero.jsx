import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import sanid from "../assets/Sanid.jpg";
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%" },
  visible: { clipPath: "inset(0 0% 0 0%" },
  transition: { duration: 2, ease: "easeInOut" },
};

const Hero = () => {
  return (
    <div>
      <section>
        <div
          className="z-10 min-h-screen flex flex-wrap 
        md:flex-row items-center justify-center mt-10"
        >
          <motion.div
            className="w-full md:w-2/3 p-8 self-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-2xl md:text-3xl lg:text-5xl my-5 flex gap-3 md:ml-52"
              variants={textVariants}
            >
              {HERO_CONTENT.greeting}
              
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-3xl mb-4 md:ml-52"
              variants={textVariants}
            >
              {HERO_CONTENT.introduction}
            </motion.p>
            <motion.p
              className="text-lg md:text-xl lg:text-3xl md:ml-52"
              variants={textVariants}
            >
              {HERO_CONTENT.description}
            </motion.p>
            <motion.a
              className="bg-stone-50 text-stone-900 p-3 lg:p-4 md:ml-52
                mt-8 inline-block rounded-2xl"
              href="/resume.pdf"
              download
              rel="noopener noreferrer"
              target="_blank"
              variants={textVariants}
            >
              {HERO_CONTENT.resumeLinkText}
            </motion.a>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 p-8"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src={sanid}
              alt="Sanidhya Vats"
              width={350}
              height={200}
              className="rounded-3xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
