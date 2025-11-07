
import React from 'react';
import { REVIEWS } from '../constants';
import type { Review } from '../types';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Students Say</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Real stories from students who have achieved their goals with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review: Review, index: number) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <p className="text-gray-600 italic mb-6 flex-grow">"{review.quote}"</p>
              <div className="flex items-center mt-auto">
                <img src={review.avatarUrl} alt={review.author} className="w-14 h-14 rounded-full mr-4 object-cover"/>
                <div>
                  <h4 className="font-bold text-gray-900">{review.author}</h4>
                  <p className="text-sm text-blue-600 font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
