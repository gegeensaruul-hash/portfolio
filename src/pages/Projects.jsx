import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Site",
    description: "Cute online shop with smooth animations and pastel design",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "TailwindCSS", "Stripe"],
    color: "#FFD6E8",
    link: "#"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Kawaii weather dashboard with fun illustrations",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    tags: ["Vue", "API", "Charts"],
    color: "#C7E9FF",
    link: "#"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Colorful productivity app with drag & drop",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["React", "Firebase", "DnD"],
    color: "#FFE7C7",
    link: "#"
  },
  {
    id: 4,
    title: "Home work",
    description: "Reading, worksheets, long-term projects, and test preparation.",
    image: "https://onlinedegrees.sandiego.edu/wp-content/uploads/2017/12/education-inequity-and-homework.jpg",
    tags: ["JavaScript", "Web Audio", "CSS"],
    color: "#E8D4FF",
    link: "#"
  },
  {
    id: 5,
    title: "Team project",
    description: "a group of people working together in collaboration or cooperation towards a common goal",
    image: "https://www.graduateprogram.org/wp-content/uploads/2025/03/Mar-5-Should-Students-Have-Homework_web-1536x1024.jpg",
    tags: ["React", "Spoonacular", "Styled"],
    color: "#FFE5CC",
    link: "#"
  },
  {
    id: 6,
    title: "Portfolio Site",
    description: "This very portfolio you're looking at!",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tags: ["React", "Tailwind", "Vite"],
    color: "#D4F1F4",
    link: "#"
  }
];

export default function Projects({ darkMode }) {
  const cardBg = darkMode ? 'bg-gray-800/50' : 'bg-white/80';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center space-y-4 mb-12">
        <h2 className={`text-5xl md:text-6xl font-black ${textColor}`}>
          My <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Projects</span> 
        </h2>
        <p className={`text-xl ${secondaryText}`}>
          A collection of cute and functional web creations
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`${cardBg} backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 group`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className={`text-xl font-black ${textColor}`}>{project.title}</h3>
                <div
                  className="w-4 h-4 rounded-full shadow-lg"
                  style={{ backgroundColor: project.color }}
                />
              </div>

              <p className={`${secondaryText} leading-relaxed`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 dark:text-purple-400 hover:gap-3 transition-all"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
