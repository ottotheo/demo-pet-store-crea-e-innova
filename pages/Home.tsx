
import React from 'react';
import { Search, MapPin, Bell, ChevronRight, ShoppingBag } from 'lucide-react';
import { MOCK_PETS, MOCK_VETS, MOCK_PRODUCTS } from '../constants';
import { AppView, Pet } from '../types';

interface HomeProps {
  onPetClick: (pet: Pet) => void;
  onNavigate: (view: AppView) => void;
}

const Home: React.FC<HomeProps> = ({ onPetClick, onNavigate }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] flex justify-between items-center shadow-lg">
        <div>
          <h2 className="text-white text-lg font-medium opacity-90">Hey Pixel Posse,</h2>
          <p className="text-white text-2xl font-bold">Good Morning!</p>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" 
            alt="Profile" 
            className="w-14 h-14 rounded-2xl border-2 border-white cursor-pointer object-cover"
            onClick={() => onNavigate(AppView.PROFILE)}
          />
          <button 
            onClick={() => onNavigate(AppView.NOTIFICATIONS)}
            className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center border-2 border-white"
          >
            3
          </button>
        </div>
      </div>

      {/* My Pets */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="p-1.5 bg-gray-100 rounded-lg">🐾</span> My Pets
          </h3>
          <button onClick={() => onNavigate(AppView.ADD_PET)} className="text-[#5CB15A] font-bold text-sm">Add New</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {MOCK_PETS.map(pet => (
            <div 
              key={pet.id} 
              onClick={() => onPetClick(pet)}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-[#5CB15A] transition-all shadow-md">
                <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-gray-600">{pet.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tracking & Status */}
      <div className="px-6 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-3xl shadow-md cursor-pointer" onClick={() => onNavigate(AppView.EXPLORE)}>
          <div className="flex items-center gap-2 mb-3">
             <MapPin size={18} className="text-[#5CB15A]" />
             <h4 className="font-bold text-sm">Pet Location</h4>
          </div>
          <div className="bg-gray-100 h-24 rounded-2xl mb-3 flex items-center justify-center overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" alt="Map" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center -space-x-2">
              {MOCK_PETS.map(p => (
                <img key={p.id} src={p.image} className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover" />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
            <span>Track Pets</span>
            <ChevronRight size={14} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-md">
          <div className="flex items-center gap-2 mb-3">
             <span className="text-[#5CB15A]">💬</span>
             <h4 className="font-bold text-sm">Pet Status</h4>
          </div>
          <div className="space-y-3">
            {MOCK_PETS.slice(0, 2).map(pet => (
              <div key={pet.id} className="flex items-center gap-2">
                <img src={pet.image} className="w-8 h-8 rounded-lg object-cover" />
                <div className="flex-1 space-y-1">
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#5CB15A]" style={{ width: `${pet.status.health}%` }}></div>
                   </div>
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400" style={{ width: `${pet.status.food}%` }}></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 mt-3">
            <span>Check Pets</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 grid grid-cols-3 gap-4">
         <ServiceButton icon="🩺" label="Veterinary" onClick={() => onNavigate(AppView.BOOKING)} />
         <ServiceButton icon="🚿" label="Grooming" onClick={() => {}} />
         <ServiceButton icon="🏠" label="Boarding" onClick={() => {}} />
      </div>

      {/* Pet Food Showcase */}
      <div className="px-6 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="p-1.5 bg-gray-100 rounded-lg">🥣</span> Pet Food
          </h3>
          <button onClick={() => onNavigate(AppView.SHOP)} className="text-[#5CB15A] font-bold text-sm">See all</button>
        </div>
        <div className="space-y-4">
          {MOCK_PRODUCTS.slice(0, 1).map(product => (
            <div key={product.id} className="bg-white p-4 rounded-3xl shadow-md flex gap-4 relative overflow-hidden">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-2xl" />
              <div className="flex-1">
                <p className="text-[#5CB15A] text-xs font-bold uppercase tracking-wide">{product.brand}</p>
                <h4 className="font-bold text-lg leading-tight mb-1">{product.name}</h4>
                <p className="text-gray-400 text-sm">{product.size}</p>
                <div className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-md mt-2">
                  {product.recommendedFor}
                </div>
              </div>
              <button className="absolute bottom-4 right-4 bg-[#5CB15A] p-2 rounded-xl text-white shadow-md">
                 <ShoppingBag size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Vets */}
      <div className="px-6 mb-20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="p-1.5 bg-gray-100 rounded-lg">📍</span> Nearby Vets
          </h3>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-md">
           <div className="flex gap-4">
             <img src={MOCK_VETS[0].image} className="w-24 h-24 object-cover rounded-2xl" />
             <div className="flex-1">
               <h4 className="font-bold text-lg">{MOCK_VETS[0].name}</h4>
               <p className="text-gray-400 text-xs mb-2 leading-tight">{MOCK_VETS[0].title}</p>
               <div className="flex items-center gap-1 text-[#F0BB22]">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-xs">⭐</span>)}
                  <span className="text-gray-500 text-xs font-bold ml-1">5.0 {`{100 reviews}`}</span>
               </div>
               <div className="flex items-center gap-4 mt-3 text-[10px] font-bold text-gray-400">
                  <div className="flex items-center gap-1">📍 {MOCK_VETS[0].distance}</div>
                  <div className="flex items-center gap-1">💰 {MOCK_VETS[0].price}$</div>
               </div>
             </div>
           </div>
           <hr className="my-4 border-gray-100" />
           <div className="flex justify-between items-center">
              <p className="text-xs font-bold text-gray-500">Last Visit: 25/11/2022</p>
              <button 
                onClick={() => onNavigate(AppView.BOOKING)}
                className="text-[#5CB15A] font-bold text-sm flex items-center gap-1"
              >
                Book Appointment <ChevronRight size={16} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const ServiceButton = ({ icon, label, onClick }: { icon: string, label: string, onClick: () => void }) => (
  <div onClick={onClick} className="flex flex-col items-center gap-2 cursor-pointer">
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-md border-b-4 border-gray-100 hover:scale-105 transition-all">
      {icon}
    </div>
    <span className="text-xs font-bold text-gray-500">{label}</span>
  </div>
);

export default Home;
