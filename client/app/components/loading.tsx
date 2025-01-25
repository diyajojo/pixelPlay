import React from 'react';
import { HashLoader } from 'react-spinners';
import { Gamepad2 } from 'lucide-react';

const Loader = () => {
  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundColor: "rgba(17, 24, 39, 1)",
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Animated Logo */}
      <div className="mb-8 flex items-center gap-4 animate-pulse">
        <Gamepad2 
          className="h-12 w-12 text-white" 
          strokeWidth={1.5}
        />
        <div className="font-noto text-4xl font-bold">
          <span className="text-white">Pixel</span>
          <span className="text-teal-400">Play</span>
        </div>
      </div>
      
      {/* Loader */}
      <HashLoader
        color="#14b8a6"
        size={80}
        speedMultiplier={0.7}
      />
      
      {/* Subtle Loading Text */}
      <p 
        className="font-josefinSans mt-8 text-xl text-white/70 tracking-widest uppercase"
        style={{
          animation: 'fadeInOut 2s infinite',
          fontFamily: 'monospace'
        }}
      >
        ARE U READY TO GAME 🚀
      </p>
      
      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;