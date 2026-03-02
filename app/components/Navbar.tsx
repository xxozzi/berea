'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 md:px-12 md:pt-8 lg:px-16 lg:pt-10"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-start justify-between">
        {/* Logo Section */}
        <div>
          <Image
            src="/images/logo.svg"
            alt="Berca - Folk art and Sustainability Hub"
            width={140}
            height={80}
            className="w-32 md:w-36 lg:w-40 h-auto"
          />
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex gap-8 lg:gap-12 text-white text-xl md:text-2xl">
          {['The Arts', 'Recycle', 'Nourish', 'Shelter'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:opacity-70 transition-opacity"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
