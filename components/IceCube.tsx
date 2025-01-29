"use client";

import { useState } from 'react';

export default function IceCube() {
  const [clicks, setClicks] = useState(0);
  const maxClicks = 20;

  const handleClick = () => {
    if (clicks < maxClicks) {
      setClicks(prev => prev + 1);
    }
  };

  const handleReplay = () => {
    setClicks(0);
  };

  const opacity = 1 - (clicks / maxClicks);
  const scale = 1 - (clicks / maxClicks) * 0.5;

  if (clicks >= maxClicks) {
    return (
      <div className="flex flex-col items-center gap-4 select-none">
        <div className="text-2xl text-blue-900 font-bold">
          The ice cube has melted!
        </div>
        <button 
          onClick={handleReplay}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 select-none"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 select-none">
      <div 
        className="w-32 h-32 cursor-pointer transition-all duration-200 ease-in-out"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-blue-300 stroke-blue-400"
        >
          <path
            d="M20,20 L80,20 L90,50 L80,80 L20,80 L10,50 Z"
            strokeWidth="2"
          />
          <path
            d="M30,30 L70,30 M25,50 L75,50 M30,70 L70,70"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="text-lg text-blue-900">
        Clicks remaining: {maxClicks - clicks}
      </div>
    </div>
  );
}