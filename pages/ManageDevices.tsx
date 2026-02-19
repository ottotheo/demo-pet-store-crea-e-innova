
import React from 'react';
import { ArrowLeft, Menu, Battery, Wifi, Activity, Moon, Cast } from 'lucide-react';

interface ManageDevicesProps {
  onBack: () => void;
}

const ManageDevices: React.FC<ManageDevicesProps> = ({ onBack }) => {
  return (
    <div className="pb-24">
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg sticky top-0 z-30">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="text-white bg-white/20 p-2 rounded-xl"><ArrowLeft size={24} /></button>
          <h1 className="text-white text-2xl font-bold">Devices</h1>
          <button className="text-white"><Menu size={24} /></button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Device 1 */}
        <div className="bg-gray-200/50 p-6 rounded-[32px] shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
             <img src="https://picsum.photos/seed/collar/100/100" className="w-16 h-12 object-contain bg-white rounded-xl" />
             <div className="flex-1">
               <h3 className="text-lg font-bold">Fi Smart Collar</h3>
               <div className="flex items-center gap-1 text-gray-500 font-bold text-xs mt-1">
                 <Battery size={14} className="text-[#5CB15A]" /> 46 %
               </div>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <button className="bg-white py-3 rounded-2xl font-bold shadow-sm flex items-center justify-center gap-2 text-sm">
                <Activity size={18} /> Activity Tracker
             </button>
             <button className="bg-white py-3 rounded-2xl font-bold shadow-sm flex items-center justify-center gap-2 text-sm">
                <Moon size={18} /> Sleep Monitor
             </button>
          </div>
        </div>

        {/* Device 2 */}
        <div className="bg-gray-200/50 p-6 rounded-[32px] shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
             <img src="https://picsum.photos/seed/camera/100/100" className="w-16 h-12 object-contain bg-white rounded-xl" />
             <div className="flex-1">
               <h3 className="text-lg font-bold">Petcube Pet Camera</h3>
               <div className="flex items-center gap-1 text-gray-500 font-bold text-xs mt-1">
                 <Wifi size={14} className="text-[#5CB15A]" /> Connected
               </div>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <button className="bg-white py-3 rounded-2xl font-bold shadow-sm flex items-center justify-center gap-2 text-sm">
                <Wifi size={18} className="text-red-400" /> Disconnect
             </button>
             <button className="bg-white py-3 rounded-2xl font-bold shadow-sm flex items-center justify-center gap-2 text-sm">
                <Cast size={18} /> Stream
             </button>
          </div>
        </div>

        <div className="flex justify-center pt-4">
           <button className="bg-gray-200 px-10 py-3 rounded-2xl font-black text-gray-800 tracking-widest text-sm shadow-sm">
             ADD DEVICES
           </button>
        </div>

        {/* Explore Tips */}
        <div>
          <h3 className="text-xl font-bold mb-4">EXPLORE</h3>
          <div className="bg-gray-200/50 p-4 rounded-[32px] flex items-center gap-4 shadow-sm">
            <img src="https://picsum.photos/seed/tips/100/100" className="w-20 h-20 rounded-2xl object-cover" />
            <div>
              <p className="text-[#5CB15A] text-xs font-bold">Tips</p>
              <h4 className="font-bold text-lg leading-tight">Get Started with your Fi Smart Collar</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDevices;
