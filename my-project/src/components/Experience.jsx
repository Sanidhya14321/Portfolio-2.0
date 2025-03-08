import React from 'react'
import { motion } from 'framer-motion'
import { Education } from '../constants'

const Educations = () => {
    const containerVariants={
        hidden:{opacity :0 , y:50},
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.8,
                ease:"easeOut",
                staggerChildren:0.3
            }
        },
    }

    const childVarients={
        hidden:{opacity:0,y:30},
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.6,ease:"easeOut",
            }
        }
    }
  return (
    <section className='px-6 py-10 mt-20'>
        <h2 className='text-4xl md:text-6xl font-medium tracking-tight '>
            Education
        </h2>
        <div className='h-1 w-20 mb-10 bg-white'></div>
        <motion.div
        className='space-y-10 flex flex-col md:ml-20'
        initial='hidden'
        whileInView='visible'
        viewport={{once:true,amount:0.3}}
        variants={containerVariants}>
            {Education.map((experience,index)=>(
                <motion.div
                key={index}
                variants={childVarients}
                >
                    <div className='flex flex-col md:flex-row md:justify-between'>
                        <div className='text-sm md:w-1/4 mb-2 md:mb-0 p-4 md:ml-20'>
                            {experience.yearRange}
                        </div>
                        <div className='md:w-3/4 '>
                            <div className='max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg'>
                                <h2 className='text-xl mb-2'>
                                    {experience.title}
                                </h2>
                                <p className='mb-4 text-sm italic'>
                                    {experience.location}
                                </p>
                                <ul className='list-disc list-inside space-y-2'>
                                    {experience.description.map((desc,index)=>(
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>   
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default Educations