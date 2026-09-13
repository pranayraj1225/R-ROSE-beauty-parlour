import React from 'react';
import { BUSINESS_INFO, IMAGES } from '../../config';
import { Button } from '../ui/Button';

export function AppointmentCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="bg-rrose-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Content */}
          <div className="p-10 md:p-16 flex-1 flex flex-col justify-center relative">
            {/* Subtle decorative background for text area */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 relative z-10">
              Ready for your next beauty appointment?
            </h2>
            
            <p className="text-rrose-bg-alt/90 text-lg mb-10 relative z-10">
              Book your visit at {BUSINESS_INFO.name} in {BUSINESS_INFO.shortAddress}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Button 
                as="a" 
                href={BUSINESS_INFO.whatsappLink} 
                target="_blank"
                className="bg-white text-rrose-primary hover:bg-rrose-bg hover:text-rrose-primary hover:-translate-y-1 shadow-md"
              >
                Book on WhatsApp
              </Button>
              <Button 
                as="a" 
                href={BUSINESS_INFO.phoneLink} 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Call Now
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-2/5 h-64 md:h-auto hidden md:block">
            <img 
              src={IMAGES.experience} 
              alt="Beauty treatment" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
