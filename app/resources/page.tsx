'use client';

import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import ResourcesContent from './ResourcesContent';
import Footer from '../components/Footer';

export default function Resources() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="dark" />

      {/* Hero Section */}
      <section className="relative w-full bg-white px-4 md:px-12 lg:px-[100px] py-16 md:py-24 lg:py-32">
        <Suspense fallback={
          <div className="text-center py-16">
            <p className="text-[#888888] text-lg" style={{ fontFamily: 'var(--font-mori)' }}>
              Loading...
            </p>
          </div>
        }>
          <ResourcesContent />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
