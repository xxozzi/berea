'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const imagesToPreload = [
      '/images/logo.svg',
      '/images/potter.png',
      '/images/finearts.png',
      '/images/shelter.png',
      '/images/nourishment.png',
      '/images/berea1.png',
      '/images/berea2.png',
      '/images/berea3.png',
      '/images/berea4.png',
      '/images/berea5.png',
    ];

    let loadedCount = 0;
    const totalAssets = imagesToPreload.length;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalAssets) * 100);
      setProgress(newProgress);

      if (loadedCount === totalAssets) {
        // Wait a brief moment to show 100%, then start fade out
        setTimeout(() => {
          setIsComplete(true);
          // Notify parent after fade animation starts
          setTimeout(() => {
            onLoadingComplete();
          }, 300); // Start hero animation during fadeout
        }, 200);
      }
    };

    // Preload all images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // Count errors as loaded to prevent hanging
      img.src = src;
    });
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo or Site Name */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-4xl md:text-5xl text-black"
              style={{ fontFamily: 'var(--font-mori)' }}
            >
              Berea
            </h1>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-64 md:w-80 h-1 bg-gray-200 rounded-full overflow-hidden mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="h-full bg-[#FF6B35] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.p
            className="text-[#888888] text-lg"
            style={{ fontFamily: 'var(--font-mori)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {progress}%
          </motion.p>

          {/* Loading Text */}
          <motion.p
            className="text-[#888888] text-sm mt-2"
            style={{ fontFamily: 'var(--font-mori)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Loading resources...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
