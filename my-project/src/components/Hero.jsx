import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import sanid from "../assets/Sanid.jpg";
import DecryptedText from "./DecryptedText";
import RotatingText from "./RotatingText";
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
          className="relative z-10 min-h-screen flex flex-wrap flex-col
        md:flex-row items-center justify-center md:pl-52"
        >
          <motion.div
            className="w-full md:w-1/2 p-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-2xl md:text-3xl lg:text-5xl my-14 flex gap-3"
              variants={textVariants}
            >
              <DecryptedText
                text={HERO_CONTENT.greeting}
                animateOn="view"
                revealDirection="start"
                speed={60}
                maxIterations={10}
                sequential={true}
                className=""
              />
              <RotatingText
                texts={["Sanidhya Vats","Full Stack Developer","UI/UX Designer","Open Source Contributor","Tech Enthusiast"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg "
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-3xl mb-4"
              variants={textVariants}
            >
              {HERO_CONTENT.introduction}
            </motion.p>
            <motion.p
              className="text-lg md:text-xl lg:text-3xl "
              variants={textVariants}
            >
              {HERO_CONTENT.description}
            </motion.p>
            <motion.a
              className="bg-stone-50 text-stone-900 p-3 lg:p-4
                mt-8 inline-block rounded-2xl"
              href="./public/resume.pdf"
              download
              rel="noopener noreferrer"
              target="_blank"
              variants={textVariants}
            >
              {HERO_CONTENT.resumeLinkText}
            </motion.a>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-8"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src={sanid}
              alt="Sanidhya Vats"
              width={450}
              height={450}
              className="rounded-3xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
