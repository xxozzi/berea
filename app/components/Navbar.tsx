'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar({ variant = 'light', startAnimations = true }: { variant?: 'light' | 'dark', startAnimations?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // If not on home page, always show hamburger
    if (pathname !== '/') {
      setShowHamburger(true);
      return;
    }

    // On home page, show hamburger based on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const halfViewport = window.innerHeight / 2;
      setShowHamburger(scrollY > halfViewport);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: 'Resources', href: '/resources', type: 'page' },
    { label: 'Gallery', href: '/#gallery', type: 'scroll' },
    { label: 'TSA Page', href: '/tsa-page', type: 'page' },
    { label: 'About', href: '/#about', type: 'scroll' }
  ];

  return (
    <>
      {/* Regular Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 md:px-12 md:pt-8 lg:px-16 lg:pt-10"
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: showHamburger ? 0 : 1,
          pointerEvents: showHamburger ? 'none' : 'auto'
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-start justify-between">
          {/* Logo */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={startAnimations ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/#hero" className="cursor-pointer">
              <Image
                src="/images/logo.svg"
                alt="Berea - Folk art and Sustainability Hub"
                width={140}
                height={80}
                className={`w-32 md:w-36 lg:w-40 h-auto ${variant === 'dark' ? 'brightness-0' : ''}`}
              />
            </Link>
          </motion.div>

          {/* Nav Items */}
          <div className={`hidden md:flex gap-8 lg:gap-12 text-xl md:text-2xl ${variant === 'dark' ? 'text-black' : 'text-white'}`}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="hover:opacity-70 transition-opacity"
                initial={{ y: -8, opacity: 0 }}
                animate={startAnimations ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.2 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hamburger Menu Button */}
      <AnimatePresence>
        {showHamburger && (
          <motion.button
            onClick={toggleMenu}
            className="fixed top-6 right-6 z-[70] w-16 h-16 bg-[#FF6B35] rounded-full flex flex-col items-center justify-center gap-[6px] cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-8 h-[3px] bg-white rounded-full"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 9 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-8 h-[3px] bg-white rounded-full"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-8 h-[3px] bg-white rounded-full"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -9 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Slideout Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-[#F5F1E8] z-[60] shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col h-full p-8 pt-24">
              {/* Logo */}
              <div className="mb-12">
                <Link href="/#hero" className="cursor-pointer" onClick={closeMenu}>
                  <Image
                    src="/images/logo.svg"
                    alt="Berea"
                    width={140}
                    height={80}
                    className="w-36 h-auto brightness-0"
                  />
                </Link>
              </div>

              {/* Nav Items */}
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-3xl text-black hover:opacity-70 transition-opacity"
                    onClick={closeMenu}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
