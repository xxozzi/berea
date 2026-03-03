'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'TSA Project', href: '/tsa-page' },
  ];

  return (
    <footer className="relative w-full bg-[#FF6200] px-4 md:px-12 lg:px-[100px] py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-12 gap-8 mb-12">
        <motion.div
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Berea - Folk Arts & Sustainability Hub"
              width={160}
              height={90}
              className="w-36 md:w-40 lg:w-44 h-auto cursor-pointer"
            />
          </Link>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className="text-white text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-mori)' }}>
            Explore
          </h4>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  className="text-white/90 text-lg md:text-xl hover:text-white transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-mori)' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className="text-white text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-mori)' }}>
            Connect
          </h4>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-mori)' }}>
            Connecting communities through art, sustainability, and shared heritage.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-white/80 text-base md:text-lg" style={{ fontFamily: 'var(--font-mori)' }}>
          © 2026 Berea Folk Arts & Sustainability Hub
        </p>
        <p className="text-white/80 text-base md:text-lg" style={{ fontFamily: 'var(--font-mori)' }}>
          A project by students at Paul Laurence Dunbar High School
        </p>
      </motion.div>
    </footer>
  );
}
