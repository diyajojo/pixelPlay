'use client';
import React, { useState } from 'react';
import { Trophy, ChevronLeft, Medal, Star, Target } from 'lucide-react';
import { useRouter } from 'next/navigation';


interface Player {
  rank: number;
  name: string;
  score: number;
  country: string;
}


type LeaderboardTab = 'global' | 'fps' | 'moba';

const LeaderboardPage = () => {
  const router = useRouter();
  
 
  const [activeTab, setActiveTab] = useState<LeaderboardTab>('global');


  const leaderboardData: Record<LeaderboardTab, Player[]> = {
    global: [
      { rank: 1, name: 'DragonSlayer99', score: 25340, country: '🇺🇸' },
      { rank: 2, name: 'NinjaCoder', score: 24780, country: '🇯🇵' },
      { rank: 3, name: 'StarWolf', score: 23560, country: '🇰🇷' },
      { rank: 4, name: 'PhantomRider', score: 22890, country: '🇬🇧' },
      { rank: 5, name: 'CyberNinja', score: 22340, country: '🇩🇪' },
    ],
    fps: [
      { rank: 1, name: 'ShadowSniper', score: 2540, country: '🇺🇸' },
      { rank: 2, name: 'QuickScope', score: 2380, country: '🇨🇦' },
      { rank: 3, name: 'HeadshotKing', score: 2210, country: '🇦🇺' },
    ],
    moba: [
      { rank: 1, name: 'MidLaneGod', score: 3240, country: '🇰🇷' },
      { rank: 2, name: 'JungleMaster', score: 3100, country: '🇨🇳' },
      { rank: 3, name: 'CarryRole', score: 2950, country: '🇧🇷' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 flex">
      
      <div className="w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center p-12">
      
        <div className="relative z-20 mb-8">
          <img 
            src="/assets/gamer.jpg"
            alt="Gaming Logo"
            className="w-48 h-48 rounded-full shadow-lg border-2 border-teal-500/20"
          />
        </div>

        
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
            <h2 className="font-noto text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              CHAMPION'S ARENA
            </h2>
          </div>

          <div className="font-noto space-y-6 text-gray-300">
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <Medal className="text-teal-400" size={36} />
              <p className="text-lg">Climb the ranks and become a global legend</p>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <Star className="text-teal-400" size={36} />
              <p className="text-lg">Compete across multiple game genres</p>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <Target className="text-teal-400" size={36} />
              <p className="text-lg">Real-time global rankings updated instantly</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-1/2 p-12 bg-gray-900 overflow-y-auto">
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-full">
            <h1 className="font-noto text-3xl font-bold text-teal-400">LEADERBOARD</h1>
          </div>
        </div>

       
        <div className="font-josefinSans flex mb-6 bg-gray-800 rounded-lg">
          {(['global', 'fps', 'moba'] as LeaderboardTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 p-3 uppercase text-sm font-bold ${
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
                <th className="p-4 text-left">Rank</th>
                <th className="p-4 text-left">Player</th>
                <th className="p-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData[activeTab].map((player) => (
                <tr 
                  key={player.rank} 
                  className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                >
                  <td className="p-4 font-bold text-teal-400">{player.rank}</td>
                  <td className="p-4 flex items-center space-x-2">
                    <span>{player.country}</span>
                    <span>{player.name}</span>
                  </td>
                  <td className="p-4 text-right font-semibold">{player.score.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
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