import React, { useState } from 'react';
import { IMAGES } from '../../config';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Group images logically based on what we have in IMAGES config
  const displayImages = IMAGES.gallery;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-rrose-bg">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-rrose-text mb-4">
            A glimpse of the experience
          </h2>
          <p className="text-rrose-text-light text-lg">
            Step inside our welcoming space designed for your comfort and beauty.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {displayImages.map((src, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative group cursor-pointer overflow-hidden rounded-xl bg-white ${
                index === 1 || index === 4 ? 'row-span-2' : 'aspect-square'
              }`}
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  index === 1 || index === 4 ? '' : 'aspect-square'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-rrose-primary/0 group-hover:bg-rrose-primary/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-md" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImg} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
