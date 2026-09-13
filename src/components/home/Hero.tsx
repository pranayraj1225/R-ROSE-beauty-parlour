import React from 'react';
import { BUSINESS_INFO, IMAGES } from '../../config';
import { Button } from '../ui/Button';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-rrose-accent"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rrose-accent">
                  {BUSINESS_INFO.shortAddress}
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-rrose-text mb-6">
                Beauty that feels <br />
                <span className="italic font-light text-rrose-primary">as beautiful as you do.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-rrose-text-light mb-10 max-w-lg leading-relaxed text-balance">
                Personalized beauty services, thoughtful styling and a warm salon experience in Kompally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button as="a" href={BUSINESS_INFO.whatsappLink} target="_blank">
                  Book an Appointment
                </Button>
                <Button as="a" href={BUSINESS_INFO.whatsappLink} variant="outline" target="_blank">
                  WhatsApp Us
                </Button>
              </div>
              
              {/* Trust Badge */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-rrose-bg-alt w-fit">
                <div className="flex flex-col gap-1">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-rrose-text">{BUSINESS_INFO.rating}</span>
                    <span className="text-sm text-rrose-text-light">{BUSINESS_INFO.reviewCount} Google Reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] lg:h-[700px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 z-10 rounded-t-full rounded-br-full overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES.hero} 
                alt="Elegant salon interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-rrose-primary/10 mix-blend-overlay"></div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 -right-4 w-24 h-24 border border-rrose-secondary rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 left-10 w-32 h-32 bg-rrose-secondary/20 rounded-full blur-2xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
