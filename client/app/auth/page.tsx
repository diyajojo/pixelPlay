'use client';
import React, { useState, useEffect } from 'react';
import { User, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { supabase } from '../utils/supabase';

const SignupPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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

  const googleAuth = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      }
    });
    
    if(error) {
      console.log("User not authenticated with Google");
    } else {
      console.log("User authenticated with Google");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 overflow-hidden relative">
     
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        {renderPixelBackground()}
      </div>

      <nav className="fixed w-full z-50 top-0 border-b border-gray-800">
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
            <a href="/" className="text-lg hover:text-teal-400 transition-colors">Home</a>
            <button 
              onClick={() => router.push('/leaderboard')} 
              className="text-lg hover:text-teal-400 transition-colors"
            >
              Leaderboard
            </button>
            <button
            onClick={() => router.push('/about')} 
             className="text-lg hover:text-teal-400 transition-colors"
             >
             About
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-24 md:pt-0">
        <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-teal-400/20 p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-24 h-24 mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-300/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 bg-gradient-to-r from-teal-400/40 to-cyan-300/40 rounded-full animate-spin-slower" />
              <div className="absolute inset-8 bg-gray-900 rounded-full flex items-center justify-center">
                <img 
                  src="/assets/logo.png"
                  alt="PixelPlay Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            <h1 className="font-noto text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="font-josefinSans text-gray-400 mt-2">
              Sign in to continue your gaming journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="text-teal-400" size={20} />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400 text-gray-200"
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="text-teal-400" size={20} />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400 text-gray-200"
                required
              />
            </div>

            <button 
              onClick={() => router.push('/dashboard')}
              type="submit"
              className="font-josefinSans w-full py-3 bg-gradient-to-r from-teal-400 to-cyan-300 text-gray-900 rounded-lg font-semibold hover:from-teal-500 hover:to-cyan-400 transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center justify-center">
            <div className="w-full border-t border-gray-700"></div>
            <span className=" font-josefinSans px-4 text-gray-400 bg-gray-900">or</span>
            <div className="w-full border-t border-gray-700"></div>
          </div>

          <button 
            type="button"
            onClick={googleAuth}
            className=" font-josefinSans w-full flex items-center justify-center py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition-all border border-gray-300"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 48 48"
            >
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
              <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.201 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
            </svg>
            Continue with Google
          </button>

          <div className=" font-josefinSans text-center mt-4 text-gray-400">
            Don't have an account? 
            <a href="/signup" className="font-josefinSans text-teal-400 hover:underline ml-2">
              Sign Up
            </a>
          </div>
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

export default SignupPage;