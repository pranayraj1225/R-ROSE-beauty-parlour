import React from 'react';
import { BUSINESS_INFO } from '../../config';
import { Button } from '../ui/Button';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export function Location() {
  return (
    <section className="py-24 bg-rrose-bg-alt overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-rrose-secondary/20">
          
          {/* Left Info */}
          <motion.div 
            className="w-full lg:w-1/3 p-10 md:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-rrose-secondary/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-medium text-rrose-text mb-10">
              Visit {BUSINESS_INFO.shortName}
            </h2>
            
            <div className="space-y-8 mb-10 flex-grow">
              <div className="flex items-start gap-4">
                <MapPin className="text-rrose-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-rrose-text mb-1">Address</h4>
                  <p className="text-rrose-text-light">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-rrose-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-rrose-text mb-1">Phone</h4>
                  <p className="text-rrose-text-light">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-rrose-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-rrose-text mb-1">Hours</h4>
                  <p className="text-rrose-text-light">{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>
            
            <Button 
              as="a" 
              href={BUSINESS_INFO.mapsLink} 
              target="_blank" 
              className="w-full justify-center flex gap-2"
            >
              <Navigation size={18} />
              Get Directions
            </Button>
          </motion.div>
          
          {/* Right Map Placeholder/Area */}
          <motion.div 
            className="w-full lg:w-2/3 h-[400px] lg:h-auto bg-rrose-bg relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Ideally this would be an iframe embed, but as per prompt we create a clean card if map is unavailable. */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"></div>
            <div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 max-w-sm mx-4">
              <MapPin className="text-rrose-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-medium mb-2">{BUSINESS_INFO.name}</h3>
              <p className="text-sm text-rrose-text-light mb-6">{BUSINESS_INFO.shortAddress}</p>
              <Button as="a" href={BUSINESS_INFO.mapsLink} target="_blank" variant="outline" size="sm" className="w-full">
                Open in Google Maps
              </Button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
