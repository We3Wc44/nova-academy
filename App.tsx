
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Reviews />
        <Gallery />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
