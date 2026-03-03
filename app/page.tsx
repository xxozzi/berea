'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Photoreel from './components/Photoreel';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [startAnimations, setStartAnimations] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setStartAnimations(true);
  };
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
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <main className="min-h-screen">
        <Navbar startAnimations={startAnimations} />

      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/potter.png)' }}
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative h-full grid grid-cols-12 gap-4 px-6 py-6 md:px-12 lg:px-16">
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
                  animate={startAnimations ? { y: 0, opacity: 1, filter: 'blur(0px)' } : {}}
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
                  animate={startAnimations ? { y: 0, opacity: 1, filter: 'blur(0px)' } : {}}
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

          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-5 self-end pb-6 md:pb-8 lg:pb-10 flex justify-end items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={startAnimations ? { opacity: 1, y: 0 } : {}}
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
              animate={startAnimations ? { y: [-4, 4, -4] } : {}}
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

      <section id="about" className="relative w-full bg-[#FAF9F6] py-16 md:py-24 lg:py-32">
        <div className="hidden md:grid grid-cols-12 gap-4 px-4 md:px-12 lg:px-[100px]">
          <div className="md:col-span-4 flex flex-col justify-between min-h-[500px]">
            <motion.div
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

            <motion.p
              className="text-[#888888] text-sm md:text-base leading-relaxed max-w-[250px]"
              style={{ fontFamily: 'var(--font-mori)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              The Berea Folk arts and Sustainability Hub is a passion project pursued by students at Paul Laurence Dunbar High School.
            </motion.p>
          </div>

          <div className="md:col-span-8 flex flex-col justify-between min-h-[500px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2]">
              {aboutHeading.map((segment, index) => (
                <motion.span
                  key={`about-desktop-${index}`}
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

            <Link href="/resources">
              <motion.div
                className="flex items-center justify-start group cursor-pointer"
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
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:hidden px-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#FF6B35] text-xl leading-tight" style={{ fontFamily: 'var(--font-mori)' }}>
              01
            </p>
            <p className="text-black text-xl leading-tight" style={{ fontFamily: 'var(--font-mori)' }}>
              About Berea
            </p>
          </motion.div>

          <h2 className="text-3xl leading-[1.2]">
            {aboutHeading.map((segment, index) => (
              <motion.span
                key={`about-mobile-${index}`}
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

          <Link href="/resources">
            <motion.div
              className="flex items-center justify-start group cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="px-6 py-3 border-2 border-black rounded-full text-black text-base transition-all duration-300 hover:bg-black hover:text-white cursor-pointer" style={{ fontFamily: 'var(--font-mori)' }}>
                View the Directory
              </button>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
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
          </Link>

          <motion.p
            className="text-[#888888] text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-mori)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            The Berea Folk arts and Sustainability Hub is a passion project pursued by students at Paul Laurence Dunbar High School.
          </motion.p>
        </div>
      </section>

      <section id="gallery">
        <Photoreel />
      </section>

      <section className="relative w-full bg-white px-4 md:px-12 lg:px-[100px] py-16 md:py-24 lg:py-32">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#FF6B35] text-xl md:text-2xl mb-1" style={{ fontFamily: 'var(--font-mori)' }}>
            03
          </p>
          <p className="text-black text-xl md:text-2xl" style={{ fontFamily: 'var(--font-mori)' }}>
            Our Resources
          </p>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl text-black mb-12"
          style={{ fontFamily: 'var(--font-mori)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Explore our selection of local organizations
        </motion.h2>

        <ResourceGrid />
      </section>

      <Footer />
    </main>
    </>
  );
}

function ResourceGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    {
      id: 1,
      title: 'Fine Arts',
      buttonText: 'VIEW RESOURCES →',
      bgImage: '/images/finearts.png',
      tag: 'finearts/arts'
    },
    {
      id: 2,
      title: 'Shelter',
      buttonText: 'VIEW RESOURCES →',
      bgImage: '/images/shelter.png',
      tag: 'shelter'
    },
    {
      id: 3,
      title: 'Nourishment',
      buttonText: 'VIEW RESOURCES →',
      bgImage: '/images/nourishment.png',
      tag: 'nourishment'
    }
  ];

  const getGridColumns = () => {
    if (isMobile) return '1fr';

    if (hoveredCard === 1) return '1.5fr 0.75fr 0.75fr';
    if (hoveredCard === 2) return '0.75fr 1.5fr 0.75fr';
    if (hoveredCard === 3) return '0.75fr 0.75fr 1.5fr';
    return '1fr 1fr 1fr';
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 transition-all ease-in-out"
      style={{
        gridTemplateColumns: isMobile ? undefined : getGridColumns(),
        transitionDuration: '400ms'
      }}
    >
      {cards.map((card, index) => {
        const isHovered = hoveredCard === card.id;

        return (
          <Link
            key={card.id}
            href={`/resources?tag=${encodeURIComponent(card.tag)}`}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden cursor-pointer h-[24rem] md:h-[36rem] bg-center bg-cover"
              style={{
                backgroundImage: `url(${card.bgImage})`
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(card.id)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-mori)' }}
                >
                  {card.title}
                </h3>
                <button
                  className="bg-white text-black uppercase text-xs md:text-sm font-medium tracking-wide px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-mori)' }}
                >
                  {card.buttonText.replace(' →', '')}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
