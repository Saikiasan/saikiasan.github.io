import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoGameController } from 'react-icons/io5';
import * as styles from '../styles/sass/loading-screen.module.scss';

const LoadingScreen = ({ isLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className={styles.loadingOverlay}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        >
          {/* Controller Icon Container */}
          <motion.div
            className={styles.controllerContainer}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { duration: 0.5 }
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                filter: [
                  'drop-shadow(0 0 5px rgba(0, 255, 136, 0.3))',
                  'drop-shadow(0 0 20px rgba(0, 255, 136, 0.6))',
                  'drop-shadow(0 0 5px rgba(0, 255, 136, 0.3))'
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <IoGameController className={styles.controllerIcon} />
            </motion.div>
          </motion.div>

          {/* Loading Progress Info */}
          <div className={styles.loadingTextContainer}>
            <motion.h2 
              className={styles.loadingText}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Initializing...
            </motion.h2>
            
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressFill}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.span 
              className={styles.statusMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {progress < 30 && "Loading assets..."}
              {progress >= 30 && progress < 70 && "Compiling shaders..."}
              {progress >= 70 && progress < 100 && "Readying viewport..."}
              {progress >= 100 && "Press START"}
            </motion.span>
          </div>

          {/* Background Decorative Elements */}
          <motion.div 
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-5%',
              width: '40vw',
              height: '40vw',
              background: 'radial-gradient(circle, rgba(0, 255, 136, 0.03) 0%, transparent 70%)',
              zIndex: -1
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
