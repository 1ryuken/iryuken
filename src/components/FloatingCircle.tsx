import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface FloatingCircleProps {
  delay?: number;
}

export function FloatingCircle({ delay = 0 }: FloatingCircleProps) {
  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(useMotionValue(0), springConfig);
  const y = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) * 0.1;
      const moveY = (clientY - centerY) * 0.1;
      
      x.set(moveX);
      y.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="absolute w-64 h-64 rounded-full bg-yellow-100/20"
      initial={{ scale: 0, x: "-50%", y: "-50%" }}
      animate={{ 
        scale: [1, 1.2, 1],
        x: ["-50%", "-30%", "-50%"],
        y: ["-50%", "-30%", "-50%"],
      }}
      style={{
        x,
        y,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
} 