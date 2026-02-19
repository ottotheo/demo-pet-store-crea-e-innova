
import React from 'react';
import { ArrowLeft, LogOut, User, ShoppingBag, MapPin, Dog, Laptop, ChevronRight } from 'lucide-react';
import { AppView } from '../types';

interface ProfileProps {
  onNavigate: (view: AppView) => void;
  onSignOut: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate, onSignOut }) => {
  const menuItems = [
    { label: 'About me', icon: User, action: () => {} },
    { label: 'My Orders', icon: ShoppingBag, action: () => onNavigate(AppView.CART) },
    { label: 'My Address', icon: MapPin, action: () => onNavigate(AppView.EXPLORE) },
    { label: 'Add Pet', icon: Dog, action: () => onNavigate(AppView.ADD_PET) },
    { label: 'Add Device', icon: Laptop, action: () => onNavigate(AppView.MANAGE) },
  ];

  return (
    <div className="pb-24">
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg sticky top-0 z-30">
        <div className="flex justify-between items-center">
          <button onClick={() => onNavigate(AppView.HOME)} className="text-white bg-white/20 p-2 rounded-xl"><ArrowLeft size={24} /></button>
          <h1 className="text-white text-2xl font-bold">Profile</h1>
          <img src="https://picsum.photos/seed/pet/100/100" className="w-10 h-10 rounded-xl border-2 border-white" />
        </div>
      </div>

      <div className="p-6">
        {/* User Hero */}
        <div className="relative mb-12">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-64 object-cover rounded-[40px] shadow-xl"
            alt="User"
          />
          <div className="absolute -bottom-6 left-6 right-6 bg-white p-6 rounded-[32px] shadow-2xl flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Pixel Posse</h2>
              <div className="text-gray-400 text-sm font-medium mt-1">
                 <p>pixelposse@gmail.com</p>
                 <p>0758519048</p>
              </div>
            </div>
            <button 
              onClick={onSignOut}
              className="flex items-center gap-1 text-red-500 font-bold text-sm"
            >
              <LogOut size={18} /> Sign out
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-[40px] shadow-lg p-4 space-y-2 mt-12">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button 
                key={idx}
                onClick={item.action}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-all"
              >
                <div className="p-2 bg-gray-100 rounded-xl text-gray-600">
                  <Icon size={20} />
                </div>
                <span className="flex-1 text-left font-bold text-gray-700">{item.label}</span>
                <ChevronRight size={18} className="text-gray-300" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
