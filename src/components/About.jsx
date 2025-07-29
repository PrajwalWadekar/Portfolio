import { ABOUT_TEXT } from "..";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutLottie from "../assets/about.json"; 

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl tracking-tight">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-wrap items-start">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-8"
        >
          <Lottie
            animationData={aboutLottie}
            loop
            className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] -mt-20"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <p className="my-2 max-w-xl">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
