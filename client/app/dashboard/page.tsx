'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Shield, 
  Bolt, 
  Zap, 
  Activity,
  Clock,
  Trophy 
} from 'lucide-react';
import LandingPageLoader from '../components/loading'; // Import the loader

// Dummy player data (unchanged)
const playerData = {
  level: 23,
  xp: 820,
  heroFragments: 59,
  class: 'Cycle Support',
  durable: 80,
  nuker: 65,
  disabler: 75,
  difficulty: 3,
  masterLevel: {
    current: 444,
    max: 1000
  },
  hoursPlayed: 245,
  games: [
    { name: 'Cyber Realm', hoursPlayed: 120 },
    { name: 'Quantum Shift', hoursPlayed: 85 },
    { name: 'Neon Horizon', hoursPlayed: 40 }
  ]
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <LandingPageLoader />;
  }

  return (
    <div className="max-h-screen bg-[#1a1f3c] text-gray-200 overflow-hidden relative">
      {/* Rest of the existing Dashboard code remains the same */}
      <div className="flex h-screen">
        {/* Character Portrait */}
        <div className="w-1/3 bg-gray-900 relative ">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat" 
            style={{ 
              backgroundImage: 'url(/assets/dashboard.jpg)',
              imageRendering: 'crisp-edges',
              objectFit: 'cover',
              WebkitBackfaceVisibility: 'hidden',
              MozBackfaceVisibility: 'hidden',
            }} 
          />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>
        {/* Dashboard Content */}
        <div className="w-2/3 px-8 py-12 space-y-6">
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h1 className="font-noto text-4xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Welcome Back, DIYA!
            </h1>
            <p className="font-josefinSans text-gray-400">
              Let's dive into your latest adventure and see how you're progressing.
            </p>
          </motion.div>

          {/* Master Level Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                <span className="font-noto bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  MASTER LEVEL
                </span>
              </h2>
              <div className="font-noto flex items-center space-x-2">
                <Clock className="text-cyan-400" size={20} />
                <span>{playerData.hoursPlayed} hrs</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-grow">
                <div className="bg-gray-700 rounded-full h-4 w-full overflow-hidden">
                  <div 
                    className=" font-noto bg-gradient-to-r from-teal-400 to-cyan-300 h-full" 
                    style={{ width: `${(playerData.masterLevel.current / playerData.masterLevel.max) * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-sm">
                {playerData.masterLevel.current}/{playerData.masterLevel.max}
              </div>
            </div>
          </motion.div>

          {/* Player Info and Character */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-josefinSans bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg flex items-center justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  {playerData.level}
                </span>
                <br />
                <span className="text-xl text-gray-400">Master</span>
              </h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="text-teal-400" size={24} />
                  <span className="text-lg">{playerData.xp} XP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="text-cyan-400" size={24} />
                  <span className="text-lg">{playerData.heroFragments} Hero Fragments</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4">Class</h3>
              <p className="text-gray-400">{playerData.class}</p>
            </div>
            <div className="flex-shrink-0 ml-8">
              <div className="bg-gradient-to-r from-teal-400/20 to-cyan-300/20 rounded-full w-48 h-48 flex items-center justify-center">
                <div className="bg-gradient-to-r from-teal-400/40 to-cyan-300/40 rounded-full w-40 h-40 flex items-center justify-center">
                  <img 
                    src="/assets/character.png" 
                    alt="Player Character" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Game History Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Trophy className="font-noto mr-2 text-yellow-400" size={24} />
              GAME HISTORY
            </h3>
            <div className="font-josefinSans space-y-3">
              {playerData.games.map((game, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                  <span className="text-lg">{game.name}</span>
                  <span className="text-gray-400">{game.hoursPlayed} hrs</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Class Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-josefinSans bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Class Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Bolt className="text-teal-400" size={24} />
                <span className="text-lg">{playerData.durable}</span>
                <span className="text-gray-400">Durable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-cyan-400" size={24} />
                <span className="text-lg">{playerData.nuker}</span>
                <span className="text-gray-400">Nuker</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="text-purple-400" size={24} />
                <span className="text-lg">{playerData.disabler}</span>
                <span className="text-gray-400">Disabler</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="text-yellow-400" size={24} />
                <span className="text-lg">{playerData.difficulty}</span>
                <span className="text-gray-400">Difficulty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;