import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    backgroundColor: '#0d062b',
  },
  animate: {
    opacity: 1,
    y: 0,
    backgroundColor: '#0d062b',
  },
  exit: {
    opacity: 0,
    y: -20,
    backgroundColor: '#0d062b',
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.3,
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#0d062b',
        minHeight: '100vh',
        zIndex: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
