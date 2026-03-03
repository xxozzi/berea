'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TSAPage() {
  const headingSegments = [
    { text: 'Built', color: '#000000' },
    { text: 'with', color: '#888888' },
    { text: 'passion', color: '#FF6B35' },
    { text: 'by', color: '#888888' },
    { text: 'students', color: '#000000' },
    { text: 'who', color: '#888888' },
    { text: 'care.', color: '#000000' },
  ];

  const teamMembers = [
    { name: 'Justin Chen', id: '22004013' },
    { name: 'Sebastian Creane-Herrera', id: '22004016' },
    { name: 'Taha Hammad', id: '22004028' },
    { name: 'Jayden Jeong', id: '22004033' },
    { name: 'Alex Liao', id: '22004043' },
    { name: 'Rohan Shah', id: '22004075' },
  ];

  const resources = [
    {
      title: 'GitHub Repository',
      description: 'View our complete source code and project development history.',
      link: 'https://github.com/xxozzi/berea',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: 'Project Worklog',
      description: 'Detailed documentation of our development process and timeline.',
      link: '/files/worklog.pdf',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Copyright Form',
      description: 'Official copyright documentation and licensing information.',
      link: '/files/copyright.pdf',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.83 9.17a4 4 0 00-5.66 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.83 14.83a4 4 0 01-5.66 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Image References',
      description: 'Complete attribution for all images used throughout the site.',
      link: '/images/references.png',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="dark" />

      {/* Hero Section */}
      <section className="relative w-full bg-white px-4 md:px-12 lg:px-[100px] py-16 md:py-24 lg:py-32">
        {/* Section Label */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#FF6B35] text-xl md:text-2xl mb-1" style={{ fontFamily: 'var(--font-mori)' }}>
            TSA Project
          </p>
          <p className="text-black text-xl md:text-2xl" style={{ fontFamily: 'var(--font-mori)' }}>
            Technology Student Association
          </p>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] mb-12">
          {headingSegments.map((segment, index) => (
            <motion.span
              key={`heading-${index}`}
              style={{
                fontFamily: 'var(--font-mori)',
                color: segment.color,
                display: 'inline',
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
              {segment.text}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          className="text-[#888888] text-lg md:text-xl leading-relaxed max-w-3xl mb-16"
          style={{ fontFamily: 'var(--font-mori)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          This website was created by students from Paul Laurence Dunbar High School as part of our
          Technology Student Association project. Our goal was inspired by Jayden's experience at the
          Governor's Scholars Program in Morehead, Kentucky, where he encountered many underserved and
          technologically unfamiliar individuals in rural communities who could greatly benefit from
          accessible digital resources like this. We wanted to showcase Berea's rich cultural heritage
          and connect the community with valuable resources.
        </motion.p>

        {/* School Info */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-black text-2xl md:text-3xl font-medium mb-2" style={{ fontFamily: 'var(--font-mori)' }}>
            Paul Laurence Dunbar High School
          </p>
          <p className="text-[#888888] text-lg" style={{ fontFamily: 'var(--font-mori)' }}>
            Lexington, Kentucky
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-black text-3xl md:text-4xl font-medium mb-8" style={{ fontFamily: 'var(--font-mori)' }}>
            Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-[#FAF9F6] rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-black text-lg font-medium mb-1" style={{ fontFamily: 'var(--font-mori)' }}>
                  {member.name}
                </p>
                <p className="text-[#888888] text-sm" style={{ fontFamily: 'var(--font-mori)' }}>
                  ID: {member.id}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-black text-3xl md:text-4xl font-medium mb-8" style={{ fontFamily: 'var(--font-mori)' }}>
            Project Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#FAF9F6] rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon */}
                <div className="text-[#FF6B35] mb-4 transition-colors duration-300">
                  {resource.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-black mb-3 group-hover:text-[#FF6B35] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-mori)' }}
                >
                  {resource.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-mori)' }}
                >
                  {resource.description}
                </p>

                {/* Arrow Icon */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FF6B35]"
                  >
                    <path
                      d="M5 15L15 5M15 5H7M15 5V13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
