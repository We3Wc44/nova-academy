
import React from 'react';
import { FEATURES } from '../constants';
import type { Feature } from '../types';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Nova Academy?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a learning experience that is flexible, comprehensive, and built for your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature: Feature, index: number) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
