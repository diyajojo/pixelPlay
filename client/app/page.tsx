'use client';
import React, { useState, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPixelBackground = () => {
    const pixels = [];
    const pixelCount = 200;

    for (let i = 0; i < pixelCount; i++) {
      const size = Math.random() * 10 + 5;
      const hue = Math.floor(Math.random() * 360);
      pixels.push(
        <div
          key={i}
          className="absolute bg-opacity-50 rounded-sm"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: `hsla(${hue}, 70%, 50%, 0.1)`,
            animation: `pixelMove ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s alternate`,
            boxShadow: `0 0 5px rgba(${hue}, 70%, 50%, 0.3)`
          }}
        />
      );
    }
    return pixels;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-gray-800">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
          <div className="flex-shrink-0 ml-0 text-2xl font-bold text-teal-400">
            PixelPlay
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-teal-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto md:ml-auto flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0 pb-4 md:pb-0 mt-4 md:mt-0`}>
            <a href="#about" className="text-lg hover:text-teal-400 transition-colors">About</a>
            <button 
              onClick={() => router.push('/leaderboard')} 
              className="text-lg hover:text-teal-400 transition-colors"
            >
              Leaderboard
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-teal-400 to-cyan-300 text-gray-900 rounded-full font-semibold hover:from-teal-500 hover:to-cyan-400 transition-all w-full md:w-auto">
              Login /Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-0">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          {renderPixelBackground()}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                LEVEL UP
              </span>
              <br />
              <span className="text-gray-200">YOUR</span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                GAMING
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-xl mx-auto md:mx-0">
              Unleash epic gameplay, connect with gamers worldwide, and dominate the digital arena with PixelPlay.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-300 text-gray-900 rounded-lg font-bold hover:from-teal-500 hover:to-cyan-400 transform hover:scale-105 transition-all">
                Join Battle
              </button>
              <button className="px-8 py-4 border-2 border-teal-400 text-teal-400 rounded-lg font-bold hover:bg-teal-400/10 transform hover:scale-105 transition-all">
                Explore Worlds
              </button>
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-300/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 bg-gradient-to-r from-teal-400/40 to-cyan-300/40 rounded-full animate-spin-slower" />
              <div className="absolute inset-8 bg-gray-900 rounded-full flex items-center justify-center">
                <Gamepad2 className="text-teal-400" size={36} />
              </div>
            </div>
            {/* Stats cards */}
            <div className="absolute top-0 right-0 md:right-0 bg-gray-900/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-teal-400/20">
              <div className="text-teal-400 font-bold text-xl md:text-2xl">120K</div>
              <div className="text-xs md:text-sm text-gray-400">Active Players</div>
            </div>
            <div className="absolute bottom-0 left-5 bg-gray-900/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-teal-400/20">
              <div className="text-teal-400 font-bold text-xl md:text-2xl">247</div>
              <div className="text-xs md:text-sm text-gray-400">Tournaments</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>

      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes pixelMove {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;