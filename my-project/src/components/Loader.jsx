import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CircularText from "./CircularText";

const Loader = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 2500);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-black"
      animate={startAnimation ? { backdropFilter: "blur(20px)", opacity: 0 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute"
        initial={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }}
        animate={startAnimation ? { top: "5rem", left: "11rem", translateX: "0", translateY: "0" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <CircularText text="SANIDHYA * VATS * " onHover="speedUp" spinDuration={20} />
      </motion.div>
    </motion.div>
  );
};

export default Loader;

