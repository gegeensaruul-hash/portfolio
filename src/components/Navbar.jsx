import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const cardBg = darkMode ? 'bg-gray-800/50' : 'bg-white/80';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <header className="relative z-10 pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className={`text-3xl font-black ${textColor}`}>
            Gegeene
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-2xl ${cardBg} backdrop-blur-sm shadow-lg hover:scale-110 transition-transform`}
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-purple-600" />}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className={`${cardBg} backdrop-blur-sm rounded-3xl p-2 shadow-2xl inline-flex gap-2`}>
          {['home', 'work', 'about', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg scale-105'
                  : `${secondaryText} hover:bg-gray-100/50 dark:hover:bg-white/10`
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
