import React from "react";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { LINKS } from "../constants/index.js";
import { Link } from "react-router-dom";
import CircularText from "./CircularText.jsx";
import Button from "./Button.jsx";
import { motion, AnimatePresence } from "framer-motion"; 

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex justify-between items-center max-w-6xl mx-auto md:my-2
         bg-stone-950/70 p-1 md:rounded-xl backdrop-blur-lg px-4"
      >
        <div className="">
          <Link to="/">
            <CircularText
              text="SANIDHYA * VATS * "
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </Link>
        </div>

        <div className="hidden md:flex cursor-pointer  space-x-8">
          {LINKS.map((link, index) => (
            <Link
              to={link.linker}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300"
            >
              <Button text={link.label}></Button>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Line className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:hidden p-2 bg-stone-950/95 backdrop-blur-lg 
        rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto origin-top"
    >
      {LINKS.map((link, index) => (
        <Link
          to={link.linker}
          key={index}
          onClick={handleClick}
          className="text-white hover:text-stone-400 transition duration-300"
        >
          {link.label}
        </Link>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
};

export default NavBar;
