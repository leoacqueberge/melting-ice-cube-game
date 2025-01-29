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
          {/* Cube main shape */}
          <path
            d="M20,30 L80,30 L80,90 L20,90 Z"
            strokeWidth="2"
          />
          {/* Cube top face */}
          <path
            d="M20,30 L35,15 L95,15 L80,30 Z"
            strokeWidth="2"
            className="fill-blue-200"
          />
          {/* Cube right face */}
          <path
            d="M80,30 L95,15 L95,75 L80,90 Z"
            strokeWidth="2"
            className="fill-blue-400"
          />
          {/* Ice crystal details */}
          <path
            d="M35,45 L65,45 M30,60 L70,60 M35,75 L65,75"
            stroke="white"
            strokeWidth="2"
            opacity="0.6"
          />
          {/* Shine effect */}
          <circle
            cx="35"
            cy="40"
            r="5"
            fill="white"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="text-lg text-blue-900">
        Clicks remaining: {maxClicks - clicks}
      </div>
    </div>
  );
}