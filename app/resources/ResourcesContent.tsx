'use client';

import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface Resource {
  title: string;
  link: string;
  tags: string[];
  description: string;
}

export default function ResourcesContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [resourcesData, setResourcesData] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  const headingSegments = [
    { text: 'Discover', color: '#000000' },
    { text: 'resources', color: '#888888' },
    { text: 'that', color: '#888888' },
    { text: 'connect you', color: '#FF6B35' },
    { text: 'to', color: '#888888' },
    { text: "Berea's", color: '#000000' },
    { text: 'vibrant community.', color: '#000000' },
  ];

  useEffect(() => {
    fetch('/resources.json')
      .then(response => response.json())
      .then(data => {
        setResourcesData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading resources:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam && resourcesData.length > 0) {
      setSelectedTags([tagParam]);
    }
  }, [searchParams, resourcesData]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    resourcesData.forEach(resource => {
      resource.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [resourcesData]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchQuery('');
  };

  const filteredResources = useMemo(() => {
    return resourcesData.filter(resource => {
      const matchesSearch = searchQuery === '' ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags = selectedTags.length === 0 ||
        resource.tags.some(tag => selectedTags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags, resourcesData]);

  return (
    <>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[#FF6B35] text-xl md:text-2xl mb-1" style={{ fontFamily: 'var(--font-mori)' }}>
          Resources
        </p>
        <p className="text-black text-xl md:text-2xl" style={{ fontFamily: 'var(--font-mori)' }}>
          Your Gateway to Berea
        </p>
      </motion.div>

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

      <motion.p
        className="text-[#888888] text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
        style={{ fontFamily: 'var(--font-mori)' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Browse our curated collection of local organizations, programs, and opportunities
        that make Berea the Folk Arts Capital of Kentucky.
      </motion.p>

      <motion.p
        className="text-[#888888] text-base md:text-lg leading-relaxed max-w-3xl mb-16"
        style={{ fontFamily: 'var(--font-mori)' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Want to contribute? Want to promote more resources? We're taking suggestions now!{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSffQKhOkycumgwkn5zEfOzGvgrunt14fBpmSzDvg44VD4VK_w/viewform?usp=sharing&ouid=112257001286858466971"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF6B35] hover:underline transition-all duration-300"
        >
          Click here
        </a>
        {' '}to let us know.
      </motion.p>

      {isLoading ? (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#888888] text-lg" style={{ fontFamily: 'var(--font-mori)' }}>
            Loading resources...
          </p>
        </motion.div>
      ) : (
        <>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] transition-colors"
              style={{ fontFamily: 'var(--font-mori)' }}
            />
          </motion.div>

          <motion.div
            className="mb-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={clearFilters}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedTags.length === 0 && searchQuery === ''
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
              style={{ fontFamily: 'var(--font-mori)' }}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
                style={{ fontFamily: 'var(--font-mori)' }}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          <motion.p
            className="text-[#888888] text-sm mb-6"
            style={{ fontFamily: 'var(--font-mori)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredResources.map((resource, index) => (
              <motion.a
                key={`${resource.title}-${index}`}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#FAF9F6] rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#FF6B35] text-white text-xs rounded-full"
                      style={{ fontFamily: 'var(--font-mori)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-xl font-bold text-black mb-3 group-hover:text-[#FF6B35] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-mori)' }}
                >
                  {resource.title}
                </h3>

                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-mori)' }}
                >
                  {resource.description}
                </p>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
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

          {filteredResources.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#888888] text-lg" style={{ fontFamily: 'var(--font-mori)' }}>
                No resources found. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </>
      )}
    </>
  );
}
