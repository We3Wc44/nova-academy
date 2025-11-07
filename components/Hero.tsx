
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32 md:py-48"
      style={{ backgroundImage: "url('https://picsum.photos/seed/school/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          Unlock Your Potential. Learn Without Limits.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Join a new generation of learners at Nova Academy, where flexible online education meets a world-class curriculum and a vibrant community.
        </p>
        <a
          href="#apply"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 inline-block"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default Hero;
