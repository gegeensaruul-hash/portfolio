import React, { useState } from 'react';
import { Send, Mail, Phone, CheckCircle, AlertCircle, Sparkles, Star, Heart, Zap } from 'lucide-react';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const cardBg = darkMode ? 'bg-gray-800/50' : 'bg-white/80';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mjgekyan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  // Floating decorative elements
  const floatingShapes = [
    { emoji: '✨', delay: '0s', duration: '8s', top: '10%', left: '5%' },
    { emoji: '💫', delay: '2s', duration: '10s', top: '60%', left: '90%' },
    { emoji: '⭐', delay: '1s', duration: '9s', top: '80%', left: '10%' },
    { emoji: '🌟', delay: '3s', duration: '11s', top: '20%', left: '85%' },
    { emoji: '💝', delay: '4s', duration: '7s', top: '50%', left: '8%' },
  ];

  return (
    <div className="relative max-w-4xl mx-auto space-y-12 animate-fadeIn pb-20">
      {/* Floating Background Decorations */}
      {floatingShapes.map((shape, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-20 pointer-events-none animate-float-random"
          style={{
            top: shape.top,
            left: shape.left,
            animationDelay: shape.delay,
            animationDuration: shape.duration,
          }}
        >
          {shape.emoji}
        </div>
      ))}

      {/* Header with Creative Layout */}
      <div className="text-center space-y-6 relative animate-slideDown">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animate-pulse-slow"></div>
          <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-pulse-slow"></div>
        </div>
        
        <div className="relative inline-block">
          <div className="absolute -inset-8 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl rounded-full animate-pulse-slow"></div>
          <h2 className={`relative text-6xl md:text-7xl font-black ${textColor}`}>
            Let's{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Connect
              </span>
              <Star className="absolute -top-4 -right-8 w-8 h-8 text-yellow-400 animate-spin-slow" />
            </span>
          </h2>
        </div>
        
        <p className={`text-2xl ${secondaryText} max-w-2xl mx-auto font-medium`}>
          Got a project in mind? Drop me a message and let's create something extraordinary! 
          <Heart className="inline-block ml-2 w-6 h-6 text-red-400 animate-pulse" />
        </p>
      </div>

      {/* Creative Form Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-slideRight">
          <div className="space-y-5">
            {/* Name Input with Icon */}
            <div className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 ${focusedField === 'name' ? 'opacity-100' : ''}`}></div>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl"></div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Your Name"
                  required
                  className="w-full pl-16 pr-6 py-5 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300/50 transition-all backdrop-blur-sm border-2 border-transparent hover:border-yellow-300/50"
                />
              </div>
            </div>

            {/* Email Input with Icon */}
            <div className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 ${focusedField === 'email' ? 'opacity-100' : ''}`}></div>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl"></div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-16 pr-6 py-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all backdrop-blur-sm border-2 border-transparent hover:border-blue-300/50"
                />
              </div>
            </div>

            {/* Message Textarea with Icon */}
            <div className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 ${focusedField === 'message' ? 'opacity-100' : ''}`}></div>
              <div className="relative">
                <div className="absolute left-5 top-6 text-2xl"></div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Your message here..."
                  rows="6"
                  required
                  className="w-full pl-16 pr-6 py-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-purple-300/50 transition-all resize-none backdrop-blur-sm border-2 border-transparent hover:border-purple-300/50"
                />
              </div>
            </div>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-400/20 animate-shimmer"></div>
              <div className="relative flex items-center gap-3 p-5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-3xl border-2 border-green-400/50 animate-slideDown">
                <CheckCircle className="w-6 h-6 animate-bounce" />
                <span className="font-bold text-lg">Awesome! Your message is on its way!  </span>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-5 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-3xl border-2 border-red-400/50 animate-shake">
              <AlertCircle className="w-6 h-6" />
              <span className="font-bold text-lg">{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={status === 'sending'}
            className="group relative w-full py-6 overflow-hidden rounded-3xl font-black text-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative flex items-center justify-center gap-3 text-white">
              {status === 'sending' ? (
                <>
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending Magic...</span>
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </>
              ) : (
                <>
                  <Zap className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Send Message</span>
                  <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </div>
          </button>
        </form>

        {/* Right: Contact Info Cards */}
        <div className="space-y-6 animate-slideLeft">
          {/* Email Card */}
          <a 
            href="mailto:your.email@example.com" 
            className="group relative block overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 border-2 border-pink-300/50 hover:border-pink-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-300/50"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl text-white shadow-lg group-hover:rotate-12 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <p className={`text-sm font-bold ${secondaryText} uppercase tracking-wider mb-2`}>Email Me</p>
                <p className={`text-xl font-black ${textColor} break-all`}>gegeensaruul@gmail.com</p>
                <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mt-2">Click to send an email →</p>
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+1234567890" 
            className="group relative block overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 border-2 border-purple-300/50 hover:border-purple-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl text-white shadow-lg group-hover:rotate-12 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <p className={`text-sm font-bold ${secondaryText} uppercase tracking-wider mb-2`}>Call Me</p>
                <p className={`text-xl font-black ${textColor}`}>+976 95238963</p>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-2">Click to make a call →</p>
              </div>
            </div>
          </a>

          {/* Fun Facts Card */}
          <div className={`relative overflow-hidden rounded-3xl p-8 ${cardBg} backdrop-blur-sm border-2 border-dashed ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
            <div className="space-y-3">
              <p className={`text-lg font-black ${textColor} flex items-center gap-2`}>
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Quick Facts
              </p>
              <div className="space-y-2">
                <p className={`${secondaryText} font-medium flex items-center gap-2`}>
                  <span className="text-xl">⚡</span> Usually replies within 24 hours
                </p>
                <p className={`${secondaryText} font-medium flex items-center gap-2`}>
                  <span className="text-xl">🌍</span> Available worldwide
                </p>
                <p className={`${secondaryText} font-medium flex items-center gap-2`}>
                  <span className="text-xl">☕</span> Coffee-powered responses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
