import React from 'react';
import { BUSINESS_INFO } from '../../config';
import { Button } from '../ui/Button';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-rrose-bg-alt">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-rrose-text mb-6">
          Let's plan your next visit.
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 text-rrose-text-light">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-rrose-accent" />
            <span>{BUSINESS_INFO.phone}</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-rrose-secondary/50"></div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-rrose-accent" />
            <span>{BUSINESS_INFO.shortAddress}</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-rrose-secondary/50"></div>
          <div className="flex items-center gap-2">
            <span>{BUSINESS_INFO.hours}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            as="a" 
            href={BUSINESS_INFO.whatsappLink} 
            target="_blank"
            className="w-full sm:w-auto flex items-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </Button>
          
          <Button 
            as="a" 
            href={BUSINESS_INFO.phoneLink} 
            variant="secondary"
            className="w-full sm:w-auto flex items-center gap-2"
          >
            <Phone size={20} />
            Call
          </Button>
          
          <Button 
            as="a" 
            href={BUSINESS_INFO.mapsLink} 
            target="_blank"
            variant="outline"
            className="w-full sm:w-auto flex items-center gap-2"
          >
            <MapPin size={20} />
            Get Directions
          </Button>
        </div>
        
      </div>
    </section>
  );
}
