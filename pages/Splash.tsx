
import React from 'react';
import { COLORS } from '../constants';

const Splash: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#5CB15A]">
      <div className="relative w-56 h-56 mb-8 animate-bounce">
        <img 
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=500" 
          alt="COCO Logo" 
          className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
        />
      </div>
      <h1 className="text-white text-4xl font-bold tracking-widest mt-4">COCO</h1>
      <p className="text-white/80 font-medium tracking-[0.2em] mt-2">PET CARE</p>
      <div className="mt-12 flex gap-3">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-75"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
};

export default Splash;
