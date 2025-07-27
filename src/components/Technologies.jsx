import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 
            whileInView={{opacity: 1, y:0}}
            initial={{ opacity: 0, y: -100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity:0, x: -100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-2 px-4 w-full max-w-4xl mx-auto">
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <FaHtml5 className='text-4xl text-orange-500' />
                </motion.div>
                
                <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <FaCss3Alt className='text-4xl text-blue-500' />
                </motion.div>

                <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <SiJavascript className='text-4xl text-yellow-400' />
                </motion.div>

                <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <RiReactjsLine className='text-4xl text-cyan-400' />
                </motion.div>

                <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <FaNodeJs className='text-4xl text-green-600' />
                </motion.div>

                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <SiExpress className='text-4xl text-white' />
                </motion.div>

                <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <SiMongodb className='text-4xl text-green-500' />
                </motion.div>

                <motion.div variants={iconVariants(3.4)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <SiMysql className='text-4xl text-blue-600' />
                </motion.div>

                <motion.div variants={iconVariants(3.6)} initial="initial" animate="animate" className="rounded-xl border-2 border-neutral-800 p-2">
                    <FaAws className='text-4xl text-orange-400' />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;
