import React from 'react';
import { BUSINESS_INFO } from '../../config';
import { Star, Heart, ShieldCheck, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustBar() {
  const items = [
    {
      icon: <Star size={20} className="text-yellow-500" fill="currentColor" />,
      title: `${BUSINESS_INFO.rating} ★ Google Rating`,
      subtitle: `${BUSINESS_INFO.reviewCount} Happy Reviews`
    },
    {
      icon: <Heart size={20} className="text-rrose-primary" />,
      title: "Friendly Service",
      subtitle: "Welcoming Environment"
    },
    {
      icon: <Tag size={20} className="text-rrose-primary" />,
      title: "Reasonable Pricing",
      subtitle: "Excellent Value"
    },
    {
      icon: <ShieldCheck size={20} className="text-rrose-primary" />,
      title: "Quality Experience",
      subtitle: "Personalized Care"
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-rrose-bg-alt py-12 border-y border-rrose-secondary/20">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center gap-3">
              <div className="p-3 bg-white rounded-full shadow-sm text-rrose-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-rrose-text">{item.title}</h3>
                <p className="text-sm text-rrose-text-light">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
