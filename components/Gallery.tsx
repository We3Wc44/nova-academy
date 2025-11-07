
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Campus & Community</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse into the life and collaboration at Nova Academy.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image: GalleryImage, index: number) => (
            <div key={image.id} className={`${index === 0 || index === 3 ? 'col-span-2' : ''} ${index === 1 || index === 5 ? 'row-span-2' : ''}`}>
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ${image.aspect}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
