
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface OnboardingProps {
  onFinish: () => void;
}

const steps = [
  {
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000',
    title: 'Hey! Welcome',
    description: 'while you sit and stay - we\'ll go out and play'
  },
  {
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000',
    title: 'Now !',
    description: 'One tap for foods, accessories, health care products & digital gadgets'
  },
  {
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1000',
    title: 'We provide',
    description: '24hrs location tracking & health updates. On time feeding updates'
  }
];

const Onboarding: React.FC<OnboardingProps> = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-white overflow-hidden">
      <div className="flex-[1.2] relative">
        <img 
          src={steps[step].image} 
          alt="Pet" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
      </div>
      
      <div className="flex-1 bg-white px-8 pt-6 pb-10 flex flex-col items-center -mt-16 rounded-t-[40px] relative z-10 shadow-2xl">
        <div className="flex gap-2 mb-4 shrink-0">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${step === i ? 'w-8 bg-[#5CB15A]' : 'w-2 bg-gray-200'}`}
            ></div>
          ))}
        </div>

        <img 
          src="https://img.freepik.com/free-vector/cute-corgi-dog-cartoon-vector-illustration_138676-2615.jpg" 
          alt="Logo" 
          className="w-14 h-14 rounded-full mb-3 shrink-0"
        />

        <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
          <h2 className="text-2xl font-bold mb-2 text-center leading-tight">{steps[step].title}</h2>
          <p className="text-gray-500 text-center text-base leading-relaxed max-w-[280px]">
            {steps[step].description}
          </p>
        </div>

        <div className="w-full mt-6 shrink-0">
          <button 
            onClick={next}
            className="w-full bg-[#5CB15A] text-white py-4 rounded-2xl flex items-center justify-center gap-2 text-lg font-bold shadow-lg hover:brightness-95 active:scale-[0.98] transition-all"
          >
            {step === steps.length - 1 ? 'Get Started' : 'Next'}
            <ChevronRight size={20} />
          </button>

          {step === steps.length - 1 ? (
            <p className="mt-4 text-center text-gray-500 text-sm">
              Already have an account? <span className="text-[#5CB15A] font-bold cursor-pointer underline underline-offset-2">Login</span>
            </p>
          ) : (
             <button 
               onClick={onFinish}
               className="w-full mt-3 py-2 text-gray-400 font-medium text-sm hover:text-gray-600 transition-colors"
             >
               Skip
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
