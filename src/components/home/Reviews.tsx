import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../config';
import { motion } from 'motion/react';

export function Reviews() {
  const reviews = [
    {
      name: "Google Reviewer",
      text: "Visited for a haircut and eyebrow service and was really impressed. The stylist listened carefully to my preferences and delivered a fresh, stylish look. My eyebrows were shaped evenly and looked very natural. Pricing was reasonable for the quality of service provided. Overall, a great experience.",
    },
    {
      name: "Google Reviewer",
      text: "The experience very good with Bhavya akka And very friendly nature",
    },
    {
      name: "Google Reviewer",
      text: "I came here for a hair cut and she helped me pick up hair style that will suit me the best.",
    },
    {
      name: "Google Reviewer",
      text: "Service was Excellent and the prices are resonable.",
    },
    {
      name: "Google Reviewer",
      text: "I had an absolutely wonderful experience... Best parlour... I loved the services.",
    },
    {
      name: "Google Reviewer",
      text: "Highly recommend this place.",
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
    <section id="reviews" className="py-24 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-rrose-text mb-4">
            Loved by our customers.
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-rrose-text-light">
            <span className="font-semibold text-rrose-text">{BUSINESS_INFO.rating} ★</span> 
            <span>from {BUSINESS_INFO.reviewCount} Google reviews</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-rrose-bg p-8 rounded-2xl flex flex-col h-full border border-rrose-secondary/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="flex-grow mb-8">
                <p className="text-rrose-text-light italic leading-relaxed text-balance">
                  "{review.text}"
                </p>
              </blockquote>
              <div className="mt-auto pt-6 border-t border-rrose-secondary/30 flex items-center justify-between">
                <span className="font-medium text-rrose-text">{review.name}</span>
                <span className="text-xs uppercase tracking-wider font-semibold text-rrose-accent bg-rrose-bg-alt px-2 py-1 rounded-sm">Google Review</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
