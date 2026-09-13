import React from 'react';
import { BUSINESS_INFO, IMAGES } from '../../config';
import { Button } from '../ui/Button';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative flex flex-col lg:block overflow-hidden lg:min-h-[90vh] bg-rrose-bg lg:bg-transparent">
      
      {/* Background Image & Overlays for Desktop / Bottom Image for Mobile */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:absolute lg:inset-0 lg:h-full z-0 order-2 lg:order-none">
        <img 
          src="/e42f7697-9e4c-4c23-b84f-49d6dbdab1e2.png" 
          alt="Elegant salon interior" 
          className="w-full h-full object-cover object-[center_30%] lg:object-[center_10%]"
        />
        {/* Base dark overlay to ensure text readability (Desktop only) */}
        <div className="hidden lg:block absolute inset-0 bg-black/40"></div>
        {/* Extra gradient on the left side where the text is (Desktop only) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        {/* Tint overlay for luxury aesthetic */}
        <div className="absolute inset-0 bg-rrose-primary/20 mix-blend-overlay"></div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 pt-32 pb-12 lg:py-40 lg:min-h-[90vh] flex items-center order-1 lg:order-none">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full">
          
          {/* Content */}
          <div className="w-full lg:w-2/3 xl:w-1/2 flex flex-col z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-rrose-accent"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rrose-accent lg:text-white">
                  {BUSINESS_INFO.shortAddress}
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-rrose-text lg:text-white mb-6">
                Beauty that feels <br />
                as <span className="italic font-light text-rrose-accent">beautiful</span> as you do.
              </h1>
              
              <p className="text-lg md:text-xl text-rrose-text-light lg:text-white/90 mb-10 max-w-lg leading-relaxed text-balance">
                Personalized beauty services, thoughtful styling and a warm salon experience in Kompally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button as="a" href={BUSINESS_INFO.whatsappLink} target="_blank" variant="primary">
                  Book an Appointment
                </Button>
                <Button as="a" href={BUSINESS_INFO.whatsappLink} variant="outline" target="_blank" className="text-rrose-text border-rrose-text hover:bg-rrose-text hover:text-white lg:text-white lg:border-white lg:hover:bg-white lg:hover:text-rrose-text">
                  WhatsApp Us
                </Button>
              </div>
              
              {/* Trust Badge */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white lg:bg-white/10 lg:backdrop-blur-md shadow-sm lg:shadow-none border border-rrose-bg-alt lg:border-white/20 w-fit">
                <div className="flex flex-col gap-1">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-rrose-text lg:text-white">{BUSINESS_INFO.rating}</span>
                    <span className="text-sm text-rrose-text-light lg:text-white/90">{BUSINESS_INFO.reviewCount} Google Reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
