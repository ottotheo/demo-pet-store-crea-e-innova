
import React from 'react';
import { COLORS } from '../constants';

const Splash: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#5CB15A]">
      <div className="relative w-48 h-48 mb-8 animate-bounce">
        <img 
          src="https://img.freepik.com/free-vector/cute-corgi-dog-cartoon-vector-illustration_138676-2615.jpg" 
          alt="COCO Logo" 
          className="rounded-full border-4 border-white shadow-xl"
        />
      </div>
      <h1 className="text-white text-4xl font-bold tracking-widest mt-4">LOADING</h1>
      <div className="mt-8 flex gap-2">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-75"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
};

export default Splash;
