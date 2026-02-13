import React from 'react';
import { Heart, Star, Sparkles, Github, Linkedin, Mail, Code, Palette, Coffee, Camera, Music } from 'lucide-react';

export default function Home({ darkMode }) {
  const cardBg = darkMode ? 'bg-gray-800/50' : 'bg-white/80';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-center space-y-8 px-4">
          <div className="relative inline-block">
            <div className={`absolute -inset-4 ${darkMode ? 'bg-purple-500/20' : 'bg-pink-200'} blur-2xl rounded-full`}></div>
            <h1 className={`relative text-7xl font-bold ${textColor}`}>
              Hi! I'm <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Gegeene</span>
              <Sparkles className="inline-block ml-4 text-yellow-400 animate-pulse" />
            </h1>
          </div>
          
          <p className={`text-2xl ${secondaryText} max-w-2xl mx-auto`}>
            A creative developer who loves building delightful experiences with code 
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="p-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl text-white shadow-lg hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl text-white shadow-lg hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl text-white shadow-lg hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-bold rounded-full shadow-2xl hover:shadow-pink-300/50 hover:scale-105 transition-all">
            View My Work ✨
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Code className="w-8 h-8" />, label: "Projects", value: "20+", color: "from-pink-400 to-pink-500" },
          { icon: <Palette className="w-8 h-8" />, label: "Designs", value: "50+", color: "from-purple-400 to-purple-500" },
          { icon: <Coffee className="w-8 h-8" />, label: "Coffee", value: "999+", color: "from-amber-400 to-amber-500" },
          { icon: <Heart className="w-8 h-8" />, label: "Passion", value: "100%", color: "from-red-400 to-red-500" }
        ].map((stat, index) => (
          <div key={index} className={`${cardBg} backdrop-blur-sm rounded-3xl p-6 shadow-xl text-center hover:scale-105 transition-transform`}>
            <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-2xl text-white mb-3`}>
              {stat.icon}
            </div>
            <div className={`text-3xl font-black ${textColor} mb-1`}>{stat.value}</div>
            <div className={`text-sm ${secondaryText} font-medium`}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
