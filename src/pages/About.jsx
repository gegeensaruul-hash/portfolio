import React from 'react';
import { Code, Palette, Music, Coffee, Camera, Sparkles } from 'lucide-react';

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Figma", icon: "🎯" },
  { name: "Git", icon: "🔀" }
];

export default function About({ darkMode }) {
  const cardBg = darkMode ? 'bg-gray-800/50' : 'bg-white/80';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="space-y-12 animate-fadeIn">
      <div className="text-center space-y-4 mb-12">
        <h2 className={`text-5xl md:text-6xl font-black ${textColor}`}>
          About <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Me</span> 💫
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Bio */}
        <div className={`${cardBg} backdrop-blur-sm rounded-3xl p-8 shadow-xl space-y-6`}>
          <div className="inline-block p-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl">
            <Camera className="w-10 h-10 text-white" />
          </div>
          <h3 className={`text-3xl font-black ${textColor}`}>Hi there! </h3>
          <div className={`space-y-4 ${secondaryText} leading-relaxed`}>
            <p>
              I'm a <span className="font-bold text-pink-600 dark:text-pink-400">creative frontend developer</span> who
              loves bringing designs to life with beautiful animations and interactions!
            </p>
            <p>
              I specialize in <span className="font-bold text-purple-600 dark:text-purple-400">React</span>,
              modern CSS frameworks, and creating <span className="font-bold text-blue-600 dark:text-blue-400">user experiences</span> that
              make people smile 
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends, drinking
              bubble tea , or listening to lo-fi music while sketching UI ideas!
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className={`${cardBg} backdrop-blur-sm rounded-3xl p-8 shadow-xl space-y-6`}>
          <div className="inline-block p-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h3 className={`text-3xl font-black ${textColor}`}>Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-4 bg-gradient-to-br from-white/50 to-white/30 dark:from-white/10 dark:to-white/5 rounded-2xl text-center hover:scale-105 transition-transform shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <div className={`font-bold ${textColor}`}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className={`${cardBg} backdrop-blur-sm rounded-3xl p-8 shadow-xl`}>
        <h3 className={`text-3xl font-black ${textColor} mb-6`}>Things I Love </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Code className="w-6 h-6" />, label: "Coding", color: "from-pink-400 to-red-400" },
            { icon: <Palette className="w-6 h-6" />, label: "Design", color: "from-purple-400 to-blue-400" },
            { icon: <Music className="w-6 h-6" />, label: "Music", color: "from-blue-400 to-green-400" },
            { icon: <Coffee className="w-6 h-6" />, label: "Bubble Tea", color: "from-amber-400 to-orange-400" }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-2">
              <div className={`inline-flex p-4 bg-gradient-to-r ${item.color} rounded-2xl text-white mx-auto`}>
                {item.icon}
              </div>
              <div className={`font-bold ${textColor}`}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
