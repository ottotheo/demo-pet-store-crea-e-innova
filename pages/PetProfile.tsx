
import React from 'react';
import { ArrowLeft, Heart, Info, Clock, User, Phone, ShoppingCart, MessageSquare } from 'lucide-react';
import { Pet } from '../types';

interface PetProfileProps {
  pet: Pet;
  onBack: () => void;
}

const PetProfile: React.FC<PetProfileProps> = ({ pet, onBack }) => {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Image */}
      <div className="relative h-[45vh]">
        <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
        <button 
          onClick={onBack}
          className="absolute top-12 left-6 bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white border border-white/30"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white px-6 pt-10 -mt-10 rounded-t-[40px] relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-1">{pet.name}</h1>
            <p className="text-[#5CB15A] font-bold text-lg">{pet.breed}</p>
          </div>
          <div className="bg-pink-100 p-3 rounded-2xl text-pink-500 shadow-sm">
             <span className="text-2xl">{pet.gender === 'female' ? '♀' : '♂'}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3 mb-8">
           <StatBox label="Age" value={pet.age} />
           <StatBox label="Weight" value={pet.weight} />
           <StatBox label="Height" value={pet.height} />
           <StatBox label="Color" value={pet.color} />
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
             <Info size={18} className="text-[#5CB15A]" />
             <h3 className="text-lg font-bold">About {pet.name}</h3>
          </div>
          <p className="text-gray-500 leading-relaxed">
            My first dog which was gifted by my mother for my 20th birthday. She's extremely playful and loves going for long walks in the park!
          </p>
        </div>

        {/* Status Actions */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
             <span className="p-1.5 bg-gray-100 rounded-lg">🐕</span> {pet.name}'s Status
          </h3>
          
          <ActionRow 
            icon={<Heart className="text-white" size={20} />} 
            iconBg="bg-red-500" 
            label="Health" 
            subLabel="Last Vaccinated (2mon Ago)" 
            status="Abnormal"
            btnLabel="Contact Vet"
            btnColor="bg-red-500"
          />

          <ActionRow 
            icon={<ShoppingCart className="text-white" size={20} />} 
            iconBg="bg-green-500" 
            label="Food" 
            subLabel="Last Fed (1h Ago)" 
            status="Hungry"
            btnLabel="Check food"
            btnColor="bg-green-500"
          />

          <ActionRow 
            icon={<MessageSquare className="text-white" size={20} />} 
            iconBg="bg-blue-500" 
            label="Mood" 
            subLabel="Needs exercise" 
            status="Abnormal"
            btnLabel="Whistle"
            btnColor="bg-red-400"
          />
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-[#5CB15A]/10 p-3 rounded-2xl flex flex-col items-center justify-center border border-[#5CB15A]/5">
    <span className="text-gray-400 text-[10px] font-bold uppercase mb-1">{label}</span>
    <span className="text-[#3E743A] text-xs font-black text-center leading-tight">{value}</span>
  </div>
);

const ActionRow = ({ icon, iconBg, label, subLabel, status, btnLabel, btnColor }: any) => (
  <div className="flex items-center gap-4">
    <div className={`${iconBg} p-3 rounded-2xl shadow-lg`}>
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-bold">{label}</h4>
      <p className={`text-[10px] font-bold ${status === 'Abnormal' || status === 'Hungry' ? 'text-red-400' : 'text-green-500'}`}>{status}</p>
      <p className="text-gray-400 text-[10px]">{subLabel}</p>
    </div>
    <button className={`${btnColor} text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md flex items-center gap-1`}>
      {btnLabel} <ArrowLeft size={12} className="rotate-180" />
    </button>
  </div>
);

export default PetProfile;
