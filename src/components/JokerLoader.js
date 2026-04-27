import React from 'react';
import { motion } from 'framer-motion';
import { GiCardJoker } from 'react-icons/gi';
import * as styles from '../styles/sass/joker-loader.module.scss';

const JokerLoader = ({ isNavigating }) => {
  // Dots animation variants for juggling effect
  const jugglingVariants = (index) => ({
    animate: {
      x: [0, 40, 0, -40, 0],
      y: [0, -60, -100, -60, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5
      }
    }
  });

  return (
    <motion.div 
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: isNavigating ? 1 : 0 }}
      pointerEvents={isNavigating ? "auto" : "none"}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.jokerContainer}>
        {/* The Joker Icon */}
        <motion.div 
          className={styles.jokerIcon}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <GiCardJoker />
        </motion.div>

        {/* Juggling Dots */}
        <div className={styles.dotsContainer}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={styles.dot}
              variants={jugglingVariants(i)}
              animate="animate"
            />
          ))}
        </div>
        
        <motion.span 
          className={styles.text}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Traveling...
        </motion.span>
      </div>
    </motion.div>
  );
};

export default JokerLoader;
