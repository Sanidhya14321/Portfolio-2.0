import { motion } from "framer-motion";

import React from 'react'
import { PROJECTS } from "../constants";
import CircularGallery from "./CircularGallery";

const Projects = () => {
    const projectVariants={
        hidden:{
            opacity:0,scale:0.8,rotate:-40,y:50,
        },
        visible:{
            opacity:1,
            scale:1,
            rotate:0,
            y:0,
            transition:{
                duration:0.6,
                ease:"easeOut",
                type:"spring",
                bounce:0.4,
            }
        }
    }
  return (
    <section className="px-6 py-10" id="work">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mt-10">Projects</h1>
        <div className="h-1 w-20 mb-10 bg-white"></div>
        <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} borderRadius={0.05}/>
</div>
    </section>
  )
}

export default Projects