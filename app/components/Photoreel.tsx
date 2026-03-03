'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  id: number;
  placeholderColor: string;
  title: string;
  photographer: string;
  source: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    placeholderColor: '#4A90E2',
    title: 'Pinnacles of Berea',
    photographer: 'u/acmoli01',
    source: 'Reddit'
  },
  {
    id: 2,
    placeholderColor: '#E27A4A',
    title: 'Autumn Valley Views',
    photographer: 'u/kentuckyphotos',
    source: 'Reddit'
  },
  {
    id: 3,
    placeholderColor: '#7AC943',
    title: 'Forest Trails',
    photographer: 'u/bereahiker',
    source: 'Instagram'
  },
  {
    id: 4,
    placeholderColor: '#C94A90',
    title: 'Mountain Sunrise',
    photographer: 'u/appalachian_lens',
    source: 'Reddit'
  },
  {
    id: 5,
    placeholderColor: '#F4A460',
    title: 'Rock Formations',
    photographer: 'u/geologylover',
    source: 'Flickr'
  }
];

const categories = [
  { name: 'Mountains', opacity: 1, color: '#FFFFFF' },
  { name: 'Waterfalls', opacity: 0.7, color: '#CCCCCC' },
  { name: 'Buildings', opacity: 0.5, color: '#AAAAAA' },
  { name: 'Vehicles', opacity: 0.3, color: '#888888' }
];

export default function Photoreel() {
  const [currentIndex, setCurrentIndex] = useState(5); // Start at middle set
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      // If we'd go below 0, wrap to 10 instead
      if (newIndex < 0) {
        return 10;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      // If we'd go above 14, wrap to 4 instead
      if (newIndex > 14) {
        return 4;
      }
      return newIndex;
    });
  };

  // Handle seamless looping
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Check if we need to reset position after transition
    if (currentIndex === 14) {
      // At end of array, reset to near the middle
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(4);
      }, 400); // Match transition duration
    } else if (currentIndex === 0) {
      // At start of array, reset to near the middle
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(10);
      }, 400); // Match transition duration
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const currentItem = carouselData[currentIndex % carouselData.length];

  return (
    <section className="relative w-full bg-[#1a1a1a] py-[90px] px-[100px]">
      {/* Category Navigation - Top Right of Section */}
      <motion.div
        className="absolute top-[90px] right-[100px] flex flex-col gap-0"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {categories.map((category, index) => (
          <button
            key={category.name}
            className="text-[19px] leading-[40px] text-left transition-opacity duration-300 hover:opacity-100"
            style={{
              fontFamily: 'var(--font-mori)',
              color: category.color,
              opacity: category.opacity
            }}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Section Label */}
      <motion.div
        className="mb-8 md:mb-0"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[#FF6B35] text-xl md:text-2xl leading-tight mb-1" style={{ fontFamily: 'var(--font-mori)' }}>
          02
        </p>
        <p className="text-white text-xl md:text-2xl leading-tight mb-8" style={{ fontFamily: 'var(--font-mori)' }}>
          Take a gander
        </p>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        className="text-white text-[52px] leading-[1.2] max-w-[680px] mb-[60px]"
        style={{ fontFamily: 'var(--font-mori)' }}
        initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 3.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        The views of Berea are where artistic inspiration lives.
      </motion.h2>

      {/* Carousel Container */}
      <motion.div
        className="overflow-hidden mb-[40px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="flex gap-[24px]"
          style={{
            transform: `translateX(-${currentIndex * (700 + 24)}px)`,
            transition: isTransitioning ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
          }}
        >
          {[...carouselData, ...carouselData, ...carouselData].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[700px] h-[467px] rounded-[10px] flex-shrink-0"
              style={{ backgroundColor: item.placeholderColor }}
            />
          ))}
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <motion.div
        className="flex gap-[14px] mb-[50px]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#F5F5F5] hover:scale-105 active:scale-95 cursor-pointer"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          aria-label="Previous image"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L6 10L12 16"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#F5F5F5] hover:scale-105 active:scale-95 cursor-pointer"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          aria-label="Next image"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4L14 10L8 16"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </button>
      </motion.div>

      {/* Image Credits - Below Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white text-[22px] font-medium mb-2" style={{ fontFamily: 'var(--font-mori)' }}>
            {currentItem.title}
          </p>
          <p className="text-[#999999] text-[15px]" style={{ fontFamily: 'var(--font-mori)' }}>
            Source: {currentItem.photographer} on {currentItem.source}
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
