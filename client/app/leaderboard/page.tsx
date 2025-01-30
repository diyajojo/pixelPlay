'use client';
import React, { useState } from 'react';
import { Trophy, Medal, Star, Target } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Player {
  rank: number;
  name: string;
  score: number;
  countryCode: string;
}

type LeaderboardTab = 'global' | 'fps' | 'moba';

const LeaderboardPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<LeaderboardTab>('global');

  const leaderboardData: Record<LeaderboardTab, Player[]> = {
    global: [
      { rank: 1, name: 'DragonSlayer99', score: 25340, countryCode: 'us' },
      { rank: 2, name: 'NinjaCoder', score: 24780, countryCode: 'jp' },
      { rank: 3, name: 'StarWolf', score: 23560, countryCode: 'kr' },
      { rank: 4, name: 'PhantomRider', score: 22890, countryCode: 'gb' },
      { rank: 5, name: 'CyberNinja', score: 22340, countryCode: 'de' },
    ],
    fps: [
      { rank: 1, name: 'ShadowSniper', score: 2540, countryCode: 'us' },
      { rank: 2, name: 'QuickScope', score: 2380, countryCode: 'ca' },
      { rank: 3, name: 'HeadshotKing', score: 2210, countryCode: 'au' },
    ],
    moba: [
      { rank: 1, name: 'MidLaneGod', score: 3240, countryCode: 'kr' },
      { rank: 2, name: 'JungleMaster', score: 3100, countryCode: 'cn' },
      { rank: 3, name: 'CarryRole', score: 2950, countryCode: 'br' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left section */}
        <div className="w-full lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center p-6 lg:p-12">
          <div className="relative z-20 mb-6 lg:mb-8">
            <img 
              src="/assets/gamer.jpg"
              alt="Gaming Logo"
              className="w-32 h-32 lg:w-48 lg:h-48 rounded-full shadow-lg border-2 border-teal-500/20"
            />
          </div>

          {/* Animated background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
            {[...Array(100)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-teal-500/5 rounded-full"
                style={{
                  width: `${Math.random() * 100 + 20}px`,
                  height: `${Math.random() * 100 + 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s infinite alternate`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <div className="mb-8">
              <Trophy className="mx-auto text-teal-400 mb-4" size={64} />
              <h2 className="font-noto text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                CHAMPION'S ARENA
              </h2>
            </div>

            <div className="font-noto space-y-6 text-gray-300">
              <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                <Medal className="text-teal-400" size={36} />
                <p className="text-base lg:text-lg">Climb the ranks and become a global legend</p>
              </div>
              <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                <Star className="text-teal-400" size={36} />
                <p className="text-base lg:text-lg">Compete across multiple game genres</p>
              </div>
              <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                <Target className="text-teal-400" size={36} />
                <p className="text-base lg:text-lg">Real-time global rankings updated instantly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 bg-gray-900 overflow-y-auto">
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-full">
              <h1 className="font-noto text-2xl lg:text-3xl font-bold text-teal-400">LEADERBOARD</h1>
            </div>
          </div>

          <div className="font-josefinSans flex mb-6 bg-gray-800 rounded-lg">
            {(['global', 'fps', 'moba'] as LeaderboardTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 p-2 lg:p-3 uppercase text-sm font-bold ${
                  activeTab === tab 
                    ? 'bg-teal-400 text-gray-900' 
                    : 'text-gray-400 hover:bg-gray-700'
                } transition-colors capitalize`}
              >
                {tab} Leaderboard
              </button>
            ))}
          </div>

          <div className="font-josefinSans bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 lg:p-4 text-left">Rank</th>
                  <th className="p-3 lg:p-4 text-left">Player</th>
                  <th className="p-3 lg:p-4 text-right">Score</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData[activeTab].map((player) => (
                  <tr 
                    key={player.rank} 
                    className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="p-3 lg:p-4 font-bold text-teal-400">{player.rank}</td>
                    <td className="p-3 lg:p-4 flex items-center space-x-2">
                      <img 
                      //flagcdn api is used to get the flag of the country
                        src={`https://flagcdn.com/24x18/${player.countryCode}.png`}
                        alt={`${player.countryCode.toUpperCase()} flag`}
                        className="w-6 h-4 object-cover rounded"
                      />
                      <span className="truncate">{player.name}</span>
                    </td>
                    <td className="p-3 lg:p-4 text-right font-semibold">{player.score.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default LeaderboardPage;