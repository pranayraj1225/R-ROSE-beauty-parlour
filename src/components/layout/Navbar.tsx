import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../../config';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex flex-col relative z-50">
            <span className={`font-serif text-2xl font-semibold tracking-wide transition-colors ${
              isScrolled ? 'text-rrose-primary' : 'text-rrose-primary lg:text-white'
            }`}>
              {BUSINESS_INFO.shortName}
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium -mt-1 transition-colors ${
              isScrolled ? 'text-rrose-text-light' : 'text-rrose-text-light lg:text-white/80'
            }`}>
              BEAUTY PARLOUR
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-rrose-accent ${
                    isScrolled ? 'text-rrose-text-light' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button as="a" href={BUSINESS_INFO.whatsappLink} target="_blank" size="sm" variant={isScrolled ? 'primary' : 'outline'} className={isScrolled ? '' : 'text-white border-white hover:bg-white hover:text-rrose-text'}>
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden relative z-50 p-2 -mr-2 transition-colors ${
              isScrolled || mobileMenuOpen ? 'text-rrose-text' : 'text-rrose-text lg:text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 items-center text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-rrose-text hover:text-rrose-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8 w-full max-w-xs">
                <Button 
                  as="a" 
                  href={BUSINESS_INFO.whatsappLink} 
                  target="_blank" 
                  className="w-full justify-center"
                >
                  Book Appointment
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
