import { HERO_CONTENT } from "..";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import devAnimation from '../assets/dev-lottie.json'; // your Lottie JSON file

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-32 lg:mb-35">
      {/* for responsiveness */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Prajwal Wadekar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-16 flex justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full max-w-lg"
            style={{ height: "auto" }} // let height adjust automatically
          >
            <Lottie
              animationData={devAnimation}
              loop={true}
              style={{ width: "100%", height: "auto", maxHeight: 400 }} // max height caps size on big screens
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
