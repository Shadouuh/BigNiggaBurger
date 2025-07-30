import React from 'react';
import { LuInstagram } from 'react-icons/lu';

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer Principal */}
      <footer className="bg-gradient-to-r from-black/80 via-black/60 to-gray-900 backdrop-blur-sm py-6 md:py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs md:text-sm text-center md:text-left" style={{ fontFamily: 'Poppins' }}>
              © 2025 Big Nigga Burger. Todos los derechos no son reservados.
            </div>

            <div className="flex space-x-3 md:space-x-4">
              <a href="https://www.instagram.com/bignigga.arg/">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <LuInstagram size={16} className="md:w-5 md:h-5" stroke="#1e2939" />
              </div>
              </a>
            </div>

            <div className="text-gray-400 text-xs md:text-sm text-center md:text-right" style={{ fontFamily: 'Poppins' }}>
              Sirviendo las mejores hamburguesas desde 2020
            </div>
          </div>
        </div>
      </footer>

      {/* Sección del Logo Grande - Simplificado */}
      <div className="bg-gradient-to-r from-orange-400 via-red-500 to-red-700 py-8 md:py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-black tracking-tighter leading-none select-none" style={{ fontFamily: 'Poppins-Bold' }}>
            <span className="letter-hover">B</span>
            <span className="letter-hover">I</span>
            <span className="letter-hover">G</span>
            <span className="mx-1 sm:mx-2 md:mx-3 lg:mx-4"></span>
            <span className="letter-hover">N</span>
            <span className="letter-hover">I</span>
            <span className="letter-hover">G</span>
            <span className="letter-hover">G</span>
            <span className="letter-hover">A</span>
            <span className="mx-1 sm:mx-2 md:mx-3 lg:mx-4"></span>
            <span className="letter-hover text-orange-400">B</span>
            <span className="letter-hover text-orange-400">U</span>
            <span className="letter-hover text-orange-400">R</span>
            <span className="letter-hover text-orange-400">G</span>
            <span className="letter-hover text-orange-400">E</span>
            <span className="letter-hover text-orange-400">R</span>
          </h2>
        </div>
      </div>

      <style>{`
        .letter-hover {
          display: inline-block;
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: 'Poppins-Bold';
        }
        
        .letter-hover:hover {
          transform: rotate(25deg);
          color: white;
        }
      `}</style>
    </>
  );
};

export default Footer;