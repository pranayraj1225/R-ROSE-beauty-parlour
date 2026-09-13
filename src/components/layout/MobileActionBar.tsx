import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../config';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-rrose-secondary/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe"
        >
          <div className="flex items-center justify-between px-2 py-2">
            
            <a 
              href={BUSINESS_INFO.whatsappLink} 
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex flex-col items-center justify-center py-2 text-rrose-primary active:bg-rrose-bg rounded-lg transition-colors"
            >
              <MessageCircle size={20} className="mb-1" />
              <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
            </a>
            
            <div className="w-px h-8 bg-rrose-secondary/30"></div>
            
            <a 
              href={BUSINESS_INFO.phoneLink} 
              className="flex-1 flex flex-col items-center justify-center py-2 text-rrose-text-light active:bg-rrose-bg rounded-lg transition-colors"
            >
              <Phone size={20} className="mb-1" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
            </a>
            
            <div className="w-px h-8 bg-rrose-secondary/30"></div>
            
            <a 
              href={BUSINESS_INFO.mapsLink} 
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex flex-col items-center justify-center py-2 text-rrose-text-light active:bg-rrose-bg rounded-lg transition-colors"
            >
              <MapPin size={20} className="mb-1" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Directions</span>
            </a>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
