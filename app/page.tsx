'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

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
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]">
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
                    duration: 1.7,
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
                    duration: 1.7,
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
            className="col-span-12 md:col-span-4 lg:col-span-5 self-end pb-6 md:pb-8 lg:pb-10 flex justify-end"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white text-xl md:text-2xl">Scroll Down</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
