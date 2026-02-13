import React from 'react';
import { Star, Heart, Sparkles } from 'lucide-react';

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/3 right-20 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      <Star className="absolute top-20 right-1/4 w-6 h-6 text-yellow-400/40 animate-spin" style={{ animationDuration: '8s' }} />
      <Heart className="absolute bottom-1/3 right-10 w-8 h-8 text-pink-400/40 animate-bounce" />
      <Sparkles className="absolute top-1/2 left-10 w-6 h-6 text-purple-400/40 animate-pulse" />
    </div>
  );
}
