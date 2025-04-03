import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Cursor from "./components/Cursor";
import LiquidChrome from "./components/BlurBackground";
import Educations from "./components/Experience";

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

      <div
        className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10
    pointer-events-none flex justify-center items-center filter blur-[160px]
    opacity-70"
      >
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={0.2}
          amplitude={0.1}
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
                <About />
                <Projects />

                <Educations />
                <Contacts />
              </>
            }
          />
          <Route path="/work" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Educations />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </motion.div>
    </Router>
  );
};

export default App;
