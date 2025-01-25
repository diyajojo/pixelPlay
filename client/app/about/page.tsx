'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Target, 
  Users, 
  Globe, 
  Trophy, 
  Rocket 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const pixelVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const renderPixelBackground = () => {
    const pixels = [];
    const pixelCount = 150;

    for (let i = 0; i < pixelCount; i++) {
      const size = Math.random() * 8 + 3;
      const hue = Math.floor(Math.random() * 360);
      pixels.push(
        <motion.div
          key={i}
          variants={pixelVariants}
          className="absolute bg-opacity-20 rounded-sm"
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
    <div className="min-h-screen bg-gray-950 text-gray-200 overflow-hidden relative">
     
      <nav className="font-noto fixed w-full z-50 top-0 border-b border-gray-800">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
          <div className="flex-shrink-0 ml-0 flex items-center space-x-2">
            <img 
              src="/assets/logo.png"
              alt="PixelPlay Logo"
              className="w-30 h-20"
            />
            <span className="text-2xl font-bold text-teal-400">
              PixelPlay
            </span>
          </div>
         
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

        
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto md:ml-auto flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0 pb-4 md:pb-0 mt-4 md:mt-0`}>
            <button 
              onClick={() => router.push('/')}
              className="text-lg hover:text-teal-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => router.push('/leaderboard')} 
              className="text-lg hover:text-teal-400 transition-colors"
            >
              Leaderboard
            </button>
            <button
              onClick={() => router.push('/auth')}
              className="px-6 py-2 bg-gradient-to-r from-teal-400 to-cyan-300 text-gray-900 rounded-full font-semibold hover:from-teal-500 hover:to-cyan-400 transition-all w-full md:w-auto"
            >
              Sign In / Register
            </button>
          </div>
        </div>
      </nav>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
        className="absolute inset-0 z-0"
      >
        {renderPixelBackground()}
      </motion.div>

     
      <div className="relative z-10 container mx-auto mt-20 px-4 py-16 space-y-16">
     
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg"
        >
          <Target className="w-16 h-16 text-teal-400" />
          <p className="font-josefinSans text-xl text-gray-300">
            Our mission is to create a vibrant gaming ecosystem where players transcend boundaries, forge epic connections, and turn virtual adventures into unforgettable experiences.
          </p>
        </motion.div>

       
        <div className="font-josefinSans space-y-16">
        
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <Users className="w-16 h-16 text-cyan-400" />
            <p className="text-xl text-gray-300">
              We believe in the power of community. PixelPlay isn't just a platform—it's a global network of passionate gamers who support, challenge, and inspire each other.
            </p>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <Rocket className="w-16 h-16 text-purple-400" />
            <p className="text-xl text-gray-300">
              Innovation drives us forward. We're constantly evolving, integrating cutting-edge technologies to create immersive, seamless gaming experiences that push the boundaries of what's possible.
            </p>
          </motion.div>

          {/* Global Reach */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <Globe className="w-16 h-16 text-green-400" />
            <p className="text-xl text-gray-300">
              Our platform breaks geographical barriers, connecting gamers from every corner of the globe. Whether you're in Tokyo or Toronto, PixelPlay is your gateway to global gaming adventures.
            </p>
          </motion.div>
        </div>

       
      </div>

     
      <style jsx global>{`
        @keyframes pixelMove {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;