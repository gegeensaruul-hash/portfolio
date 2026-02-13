import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundDecorations from './components/BackgroundDecorations';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const bgColor = darkMode 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
    : 'bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100';

  return (
    <div className={`min-h-screen ${bgColor} transition-all duration-500 font-sans`}>
      <BackgroundDecorations />
      
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'home' && <Home darkMode={darkMode} />}
        {activeTab === 'work' && <Projects darkMode={darkMode} />}
        {activeTab === 'about' && <About darkMode={darkMode} />}
        {activeTab === 'contact' && <Contact darkMode={darkMode} />}
      </main>
    </div>
  );
}

export default App;
