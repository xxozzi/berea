'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  photographer: string;
  source: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    image: '/images/berea1.png',
    title: 'Pinnacles of Berea',
    photographer: 'u/acmoli01',
    source: 'Reddit'
  },
  {
    id: 2,
    image: '/images/berea2.png',
    title: 'Autumn Valley Views',
    photographer: 'u/kentuckyphotos',
    source: 'Reddit'
  },
  {
    id: 3,
    image: '/images/berea3.png',
    title: 'Forest Trails',
    photographer: 'u/bereahiker',
    source: 'Instagram'
  },
  {
    id: 4,
    image: '/images/berea4.png',
    title: 'Mountain Sunrise',
    photographer: 'u/appalachian_lens',
    source: 'Reddit'
  },
  {
    id: 5,
    image: '/images/berea5.png',
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalImages = carouselData.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === totalImages - 1;
  const currentItem = carouselData[currentIndex];

  return (
    <section className="relative w-full bg-[#1a1a1a] py-[90px] px-4 md:px-12 lg:px-[100px]">
      <motion.div
        className="absolute top-[90px] right-[100px] hidden md:flex flex-col gap-0"
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

      <motion.h2
        className="text-white text-3xl md:text-4xl lg:text-[52px] leading-[1.2] max-w-[680px] mb-[60px]"
        style={{ fontFamily: 'var(--font-mori)' }}
        initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 3.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        The views of Berea are where artistic inspiration lives.
      </motion.h2>

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
            transform: `translateX(-${currentIndex * (isMobile ? 304 : 724)}px)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {carouselData.map((item) => (
            <div
              key={item.id}
              className="w-[280px] md:w-[700px] h-[187px] md:h-[467px] rounded-[10px] flex-shrink-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex gap-[14px] mb-[50px]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          onClick={handlePrev}
          disabled={isAtStart}
          className={`w-[46px] h-[46px] rounded-full flex items-center justify-center transition-all duration-200 ${
            isAtStart
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-white hover:bg-[#F5F5F5] hover:scale-105 active:scale-95 cursor-pointer'
          }`}
          style={{ boxShadow: isAtStart ? 'none' : '0 2px 8px rgba(0,0,0,0.15)' }}
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
              stroke={isAtStart ? "#999999" : "#1a1a1a"}
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={isAtEnd}
          className={`w-[46px] h-[46px] rounded-full flex items-center justify-center transition-all duration-200 ${
            isAtEnd
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-white hover:bg-[#F5F5F5] hover:scale-105 active:scale-95 cursor-pointer'
          }`}
          style={{ boxShadow: isAtEnd ? 'none' : '0 2px 8px rgba(0,0,0,0.15)' }}
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
              stroke={isAtEnd ? "#999999" : "#1a1a1a"}
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white text-[22px] font-medium mb-2" style={{ fontFamily: 'var(--font-mori)' }}>
            Berea's Landscapes
          </p>
          <p className="text-[#999999] text-[15px]" style={{ fontFamily: 'var(--font-mori)' }}>
            Source: <a href="/tsa-page" className="text-[#FF6B35] hover:underline transition-all duration-300">here</a>.
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
