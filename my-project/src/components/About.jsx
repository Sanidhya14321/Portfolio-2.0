import React from 'react'
import { ABOUT_CONTENT } from '../constants'
import { motion } from 'framer-motion'
import TechStackCard from './TechStack'

const About = () => {
    const textVariants={
        hidden:{opacity : 0, y:50},
        visible:{
            opacity : 1,
            y:0, 
            transition :{duration : 0.6 , ease :"easeOut"}
        }
    }
  return (
    <section  className='px-6 py-10 mt-20' id='about'>
        <h1 className='text-4xl md:text-6xl font-medium  tracking-tight '>
            About
        </h1>
        <div className='h-1 w-20 bg-white mb-10'></div>
        <div className='max-w-4xl mx-auto'>
            {ABOUT_CONTENT.paragraphs.map((paragraph,index)=>(
                <motion.div key={index} className="text-lg md:text-xl lg:text-3xl mb-10 leading-relaxed" 
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                variants={textVariants}>{paragraph}</motion.div>
            ))}
        </div>
        <TechStackCard/>
    </section>
  )
}

export default About