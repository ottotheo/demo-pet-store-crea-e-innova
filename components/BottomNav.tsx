
import React from 'react';
import { Home, Compass, MapPin, Laptop, User } from 'lucide-react';
import { AppView } from '../types';
import { COLORS } from '../constants';

interface BottomNavProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate }) => {
  const tabs = [
    { view: AppView.HOME, icon: Home, label: 'HOME' },
    { view: AppView.SHOP, icon: Compass, label: 'DISCOVER' },
    { view: AppView.EXPLORE, icon: MapPin, label: 'EXPLORE' },
    { view: AppView.MANAGE, icon: Laptop, label: 'MANAGE' },
    { view: AppView.PROFILE, icon: User, label: 'PROFILE' },
  ];

  return (
    <div className="fixed bottom-0 max-w-[450px] w-full bg-[#5CB15A] flex justify-around items-center py-3 rounded-t-3xl shadow-lg z-50">
      {tabs.map((tab) => {
        const isActive = activeView === tab.view;
        const Icon = tab.icon;
        return (
          <button
            key={tab.view}
            onClick={() => onNavigate(tab.view)}
            className={`flex flex-col items-center gap-1 transition-all ${isActive ? 'bg-[#3D8C3C] p-2 -mt-4 rounded-xl shadow-md text-white' : 'text-white opacity-80'}`}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-semibold">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
