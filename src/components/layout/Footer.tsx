import React from 'react';
import { BUSINESS_INFO } from '../../config';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-rrose-text text-white pt-20 pb-10 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="flex flex-col mb-6 inline-block">
              <span className="font-serif text-3xl font-semibold tracking-wide text-white">
                {BUSINESS_INFO.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-rrose-secondary font-medium mt-1">
                BEAUTY PARLOUR
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              A premium local beauty destination offering personalized styling, 
              makeup, and grooming services in a welcoming environment.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-xl font-medium mb-6 text-rrose-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-xl font-medium mb-6 text-rrose-secondary">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a href={BUSINESS_INFO.phoneLink} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.mapsLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {BUSINESS_INFO.shortAddress}
                </a>
              </li>
              <li>
                {BUSINESS_INFO.hours}
              </li>
            </ul>
          </motion.div>
          
          {/* CTA */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-xl font-medium mb-6 text-rrose-secondary">Visit Us</h4>
            <a 
              href={BUSINESS_INFO.whatsappLink} 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-rrose-primary font-medium text-sm hover:bg-rrose-secondary transition-colors rounded-sm"
            >
              Book an Appointment
            </a>
          </motion.div>
          
        </motion.div>
        
        {/* Bottom */}
        <motion.div 
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>{BUSINESS_INFO.rating} ★ Google Rating</span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span>{BUSINESS_INFO.shortAddress}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
