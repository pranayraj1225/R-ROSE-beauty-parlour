import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { TrustBar } from './components/home/TrustBar';
import { About } from './components/home/About';
import { Services } from './components/home/Services';
import { Reviews } from './components/home/Reviews';
import { Gallery } from './components/home/Gallery';
import { Location } from './components/home/Location';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';

export default function App() {
  return (
    <div className="min-h-screen bg-rrose-bg flex flex-col relative pb-[70px] md:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Reviews />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
