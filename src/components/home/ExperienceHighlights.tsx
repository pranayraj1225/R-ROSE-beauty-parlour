import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Wallet } from 'lucide-react';

export function ExperienceHighlights() {
  const highlights = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Personalized Attention",
      description: "Services tailored around your preferences."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Friendly Experience",
      description: "Customers regularly mention the warm and friendly service."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality You Can Trust",
      description: "A perfect 5.0-star rating across 121 Google reviews."
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Reasonable Pricing",
      description: "Customers specifically highlight the reasonable pricing."
    }
  ];

  return (
    <section className="py-24 bg-rrose-bg-alt relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rrose-secondary/5 rounded-l-full -mr-20"></div>
      
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-rrose-text mb-6">
            More than a service.<br />
            <span className="italic text-rrose-primary font-light">It's your time to feel your best.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start p-8 bg-white rounded-2xl shadow-sm border border-white hover:border-rrose-secondary/30 transition-colors"
            >
              <div className="p-4 rounded-xl bg-rrose-bg text-rrose-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-rrose-text mb-3">
                {item.title}
              </h3>
              <p className="text-rrose-text-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
