import React from 'react';
import { BUSINESS_INFO, IMAGES } from '../../config';
import { Button } from '../ui/Button';
import { motion } from 'motion/react';

export function Services() {
  const servicesList = [
    {
      title: "Haircut & Styling",
      description: "Personalized cuts and styling based on your preferences and look.",
      image: IMAGES.services.hair,
    },
    {
      title: "Eyebrow Services",
      description: "Careful shaping designed to complement your natural features.",
      image: IMAGES.services.eyebrows,
    },
    {
      title: "Waxing",
      description: "Beauty and grooming services with a comfortable, professional experience.",
      image: IMAGES.services.waxing,
    },
    {
      title: "Makeup",
      description: "Makeup services for occasions when you want to look and feel your best.",
      image: IMAGES.services.makeup,
    },
    {
      title: "Saree Draping",
      description: "Professional saree draping assistance for special occasions and events.",
      image: IMAGES.services.saree,
    },
    {
      title: "Beauty Services",
      description: "A selection of beauty and grooming services tailored to your needs.",
      image: IMAGES.services.beauty,
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-rrose-text mb-6">
            Beauty, styled your way.
          </h2>
          <p className="text-lg text-rrose-text-light text-balance">
            Explore some of the services customers love at {BUSINESS_INFO.name}.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col bg-rrose-bg hover:bg-white transition-colors duration-300 rounded-2xl overflow-hidden border border-rrose-secondary/10 hover:shadow-xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-medium text-rrose-text mb-3">
                  {service.title}
                </h3>
                <p className="text-rrose-text-light mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-rrose-secondary/20 flex justify-between items-center mt-auto">
                  <span className="text-sm font-semibold text-rrose-primary uppercase tracking-wider">
                    Price on consultation
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button as="a" href={BUSINESS_INFO.whatsappLink} target="_blank" size="lg">
            Ask About Services
          </Button>
        </motion.div>
        
      </div>
    </section>
  );
}
