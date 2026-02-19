
import React from 'react';
import { ArrowLeft, Link as LinkIcon, Plus } from 'lucide-react';
import { MOCK_PETS } from '../constants';

interface AddPetProps {
  onBack: () => void;
}

const AddPet: React.FC<AddPetProps> = ({ onBack }) => {
  return (
    <div className="pb-24 text-gray-800">
      {/* Header */}
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg sticky top-0 z-30">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="text-white bg-white/20 p-2 rounded-xl">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-2xl font-bold">Add Pets</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-end mb-8">
          <button className="bg-[#5CB15A] text-white px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2 active:scale-95 transition-transform">
            Scan for Pets
          </button>
        </div>

        <h3 className="text-xl font-bold mb-6 text-gray-800">Added Pets</h3>
        <div className="space-y-4 mb-10">
          {MOCK_PETS.map(pet => (
            <div key={pet.id} className="bg-white p-4 rounded-3xl shadow-md flex items-center gap-6 border-b-4 border-gray-100">
               <img src={pet.image} className="w-20 h-20 rounded-2xl object-cover shadow-sm" />
               <h4 className="flex-1 text-xl font-bold text-gray-700">{pet.name}</h4>
               <LinkIcon size={24} className="text-gray-400" />
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-6 text-gray-800">Manually Add Pet</h3>
        <div className="space-y-4">
           <input 
             type="text" 
             placeholder="Pet Name" 
             className="w-full bg-gray-200/50 py-4 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-[#5CB15A] text-gray-800 placeholder-gray-500" 
           />
           <input 
             type="text" 
             placeholder="Breed Name" 
             className="w-full bg-gray-200/50 py-4 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-[#5CB15A] text-gray-800 placeholder-gray-500" 
           />
           
           <div className="grid grid-cols-3 gap-4">
              <input type="text" placeholder="Gender" className="w-full bg-gray-200/50 py-4 px-4 rounded-2xl outline-none text-gray-800 placeholder-gray-500" />
              <input type="text" placeholder="Age" className="w-full bg-gray-200/50 py-4 px-4 rounded-2xl outline-none text-gray-800 placeholder-gray-500" />
              <input type="text" placeholder="Colour" className="w-full bg-gray-200/50 py-4 px-4 rounded-2xl outline-none text-gray-800 placeholder-gray-500" />
           </div>

           <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Height" className="w-full bg-gray-200/50 py-4 px-6 rounded-2xl outline-none text-gray-800 placeholder-gray-500" />
              <input type="text" placeholder="Weight" className="w-full bg-gray-200/50 py-4 px-6 rounded-2xl outline-none text-gray-800 placeholder-gray-500" />
           </div>

           <button className="w-full bg-[#5CB15A] text-white py-4 rounded-2xl font-bold text-xl shadow-lg mt-4 flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <Plus size={24} />
              Add Pet
           </button>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
