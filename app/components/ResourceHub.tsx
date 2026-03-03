'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ResourceCard {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  imagePath: string;
}

const resourceData: ResourceCard[] = [
  {
    id: 1,
    title: 'Fine Arts',
    description: 'Our selection of fine arts resources',
    buttonText: 'VIEW ARTS RESOURCES',
    imagePath: '/images/fine-arts.jpg'
  },
  {
    id: 2,
    title: 'Shelter',
    description: '',
    buttonText: 'VIEW RESOURCES',
    imagePath: '/images/shelter.jpg'
  },
  {
    id: 3,
    title: 'Nourishment',
    description: '',
    buttonText: 'VIEW RESOURCES',
    imagePath: '/images/nourishment.jpg'
  }
];

export default function ResourceHub() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="px-[100px]">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#FF6B35] text-xl md:text-2xl leading-tight mb-1" style={{ fontFamily: 'var(--font-mori)' }}>
            03
          </p>
          <p className="text-black text-xl md:text-2xl leading-tight" style={{ fontFamily: 'var(--font-mori)' }}>
            Our Resources
          </p>
        </motion.div>

        <motion.h2
          className="text-black text-4xl md:text-5xl leading-[1.2] mb-12"
          style={{ fontFamily: 'var(--font-mori)' }}
          initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 3.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Explore our selection of local organizations
        </motion.h2>

        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {resourceData.map((card, index) => {
            const isHovered = hoveredCard === card.id;
            const isOtherHovered = hoveredCard !== null && hoveredCard !== card.id;

            let width = '33.33%';
            if (isHovered) {
              width = '50%';
            } else if (isOtherHovered) {
              width = '25%';
            }

            return (
              <div
                key={card.id}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  width,
                  transition: 'width 400ms ease-in-out',
                  aspectRatio: '3/4'
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.imagePath})`,
                    backgroundColor: index === 0 ? '#D4B896' : index === 1 ? '#8B6F47' : '#87CEEB'
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <h3
                    className="text-white text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-mori)' }}
                  >
                    {card.title}
                  </h3>

                  {card.description && (
                    <p
                      className="text-white text-sm md:text-base mb-4"
                      style={{
                        fontFamily: 'var(--font-mori)',
                        opacity: isHovered ? 0.9 : 0,
                        transition: 'opacity 400ms ease-in-out'
                      }}
                    >
                      {card.description}
                    </p>
                  )}

                  <button
                    className="bg-white text-black text-xs md:text-sm font-medium uppercase tracking-wide px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                    style={{ fontFamily: 'var(--font-mori)' }}
                  >
                    {card.buttonText}
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
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
