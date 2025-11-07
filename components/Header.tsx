
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const NavMenuIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">
          Nova Academy
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a key={link.label} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#apply" className="hidden md:inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
          Apply Now
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <NavMenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link: NavLink) => (
              <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-lg">
                {link.label}
              </a>
            ))}
            <a href="#apply" onClick={() => setIsMenuOpen(false)} className="w-11/12 text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
              Apply Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
