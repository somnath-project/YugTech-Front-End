import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,  // Only trigger once
    threshold: 0.1,     // Lower threshold for mobile
    rootMargin: '-50px 0px' // Adjust root margin
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      } 
    },
  };

  return (
    <motion.div 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={variants}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;