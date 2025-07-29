import { useScroll, useSpring, motion } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] z-[9999] bg-gradient-to-r from-blue-500 to-purple-600 origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
