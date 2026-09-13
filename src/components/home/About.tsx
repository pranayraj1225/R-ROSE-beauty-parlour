import React from 'react';
import { IMAGES } from '../../config';
import { Button } from '../ui/Button';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 shadow-xl">
              <img 
                src={IMAGES.about} 
                alt="A beautiful beauty experience" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Offset Box */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-rrose-secondary/40 rounded-2xl -z-10 hidden sm:block"></div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rrose-accent">
                Welcome to R Rose
              </span>
              <div className="h-[1px] w-12 bg-rrose-accent"></div>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-rrose-text mb-6 text-balance">
              A beauty experience designed around you.
            </h2>
            
            <div className="space-y-4 text-lg text-rrose-text-light mb-8">
              <p>
                R ROSE BEAUTY PARLOUR is a welcoming beauty destination in Kompally, Hyderabad, 
                focused on delivering personalized beauty services with care and attention to detail.
              </p>
              <p>
                Customer feedback consistently highlights the salon's friendly service, 
                reasonable pricing and quality experience. We take pride in creating an 
                environment where every client feels valued, relaxed, and ultimately, 
                their most beautiful self.
              </p>
            </div>
            
            <Button as="a" href="#services" variant="primary">
              Discover Our Services
            </Button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
