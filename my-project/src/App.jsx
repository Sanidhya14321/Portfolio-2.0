import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import About from "./components/About";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Cursor from "./components/Cursor";
import LiquidChrome from "./components/BlurBackground";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Cursor />
      
      <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10
    pointer-events-none flex justify-center items-center filter blur-[100px]
    opacity-70'>
  <LiquidChrome
    baseColor={[0,0.2,0.2]}
    speed={0.5}
    amplitude={0.4}
    interactive={false}
  />
</div>

      {loading && <Loader />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={loading ? "pointer-events-none" : ""}
      >
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <About />
                <Experience />
                <Contacts />
              </>
            }
          />
          <Route path="/work" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </motion.div>
    </Router>
  );
};

export default App;
  