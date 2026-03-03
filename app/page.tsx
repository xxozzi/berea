'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Photoreel from './components/Photoreel';

export default function Home() {
  const line1 = [
    { text: 'Where', font: 'var(--font-mori)', italic: false },
    { text: 'art', font: 'var(--font-editorial)', italic: true },
  ];

  const line2 = [
    { text: 'meets', font: 'var(--font-mori)', italic: false },
    { text: 'the', font: 'var(--font-mori)', italic: false },
    { text: 'Earth', font: 'var(--font-editorial)', italic: true },
  ];

  const aboutHeading = [
    { text: 'Berea', color: '#000000', weight: 'normal' },
    { text: 'is the', color: '#888888', weight: 'normal' },
    { text: 'Folk Arts Capital of Kentucky.', color: '#000000', weight: 'normal' },
    { text: "We're a community built on deep roots and helping hands.", color: '#888888', weight: 'normal' },
    { text: 'This hub is designed to', color: '#888888', weight: 'normal' },
    { text: 'connect you with the local organizations', color: '#000000', weight: 'normal' },
    { text: 'making a', color: '#888888', weight: 'normal' },
    { text: 'difference.', color: '#FF6B35', weight: 'normal' },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/potter.png)' }}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Grid */}
        <div className="relative h-full grid grid-cols-12 gap-4 px-6 py-6 md:px-12 lg:px-16">
          {/* Hero Text - Bottom Left */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 self-end pb-6 md:pb-8 lg:pb-10">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.0]">
              {line1.map((word, index) => (
                <motion.span
                  key={`line1-${index}`}
                  style={{
                    fontFamily: word.font,
                    fontStyle: word.italic ? 'italic' : 'normal',
                    display: 'inline-block',
                    marginRight: '0.25em'
                  }}
                  initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 3.0,
                    delay: 0.2 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {word.text}
                </motion.span>
              ))}
              <br />
              {line2.map((word, index) => (
                <motion.span
                  key={`line2-${index}`}
                  style={{
                    fontFamily: word.font,
                    fontStyle: word.italic ? 'italic' : 'normal',
                    display: 'inline-block',
                    marginRight: '0.25em'
                  }}
                  initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 3.0,
                    delay: 0.2 + (line1.length + index) * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Scroll Down - Bottom Right */}
          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-5 self-end pb-6 md:pb-8 lg:pb-10 flex justify-end items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white text-xl md:text-2xl">Scroll Down</p>
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 md:w-8 md:h-8"
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.6
              }}
            >
              <path
                d="M16 10L16 28M16 28L10 22M16 28L22 22"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </motion.svg>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative w-full bg-[#FAF9F6] py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-4 px-6 md:px-12 lg:px-16">
          {/* Left Column - Section Label & Description */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
            {/* Section Label */}
            <motion.div
              className="mb-8 md:mb-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[#FF6B35] text-xl md:text-2xl leading-tight" style={{ fontFamily: 'var(--font-mori)' }}>
                01
              </p>
              <p className="text-black text-xl md:text-2xl leading-tight" style={{ fontFamily: 'var(--font-mori)' }}>
                About Berea
              </p>
            </motion.div>

            {/* Description Text */}
            <motion.p
              className="text-[#888888] text-sm md:text-base leading-relaxed max-w-[250px] mt-auto"
              style={{ fontFamily: 'var(--font-mori)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              The Berea Folk arts and Sustainability Hub is a passion project pursued by students at Paul Laurence Dunbar High School.
            </motion.p>
          </div>

          {/* Right Column - Main Content */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col min-h-[400px] md:min-h-[500px]">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2]">
              {aboutHeading.map((segment, index) => (
                <motion.span
                  key={`about-${index}`}
                  style={{
                    fontFamily: 'var(--font-mori)',
                    color: segment.color,
                    fontWeight: segment.weight === 'semibold' ? 600 : 400,
                    display: 'inline',
                    marginRight: '0.25em'
                  }}
                  initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                  whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 3.0,
                    delay: 0.2 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {segment.text}
                </motion.span>
              ))}
            </h2>

            {/* CTA Button Group */}
            <motion.div
              className="flex items-center justify-start mt-8 group cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-black rounded-full text-black text-base transition-all duration-300 hover:bg-black hover:text-white cursor-pointer" style={{ fontFamily: 'var(--font-mori)' }}>
                View the Directory
              </button>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
                >
                  <path
                    d="M5 15L15 5M15 5H7M15 5V13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photoreel Carousel Section */}
      <Photoreel />
    </main>
  );
}
