
import React from 'react';
import { ArrowLeft, ShoppingCart, Phone, Star } from 'lucide-react';

interface MapExploreProps {
  onBack: () => void;
}

const MapExplore: React.FC<MapExploreProps> = ({ onBack }) => {
  return (
    <div className="h-screen w-full relative overflow-hidden flex flex-col">
       <div className="absolute top-0 left-0 right-0 bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg z-20">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="text-white bg-white/20 p-2 rounded-xl"><ArrowLeft size={24} /></button>
          <h1 className="text-white text-2xl font-bold">Find Retail Stores</h1>
          <button className="text-white"><ShoppingCart size={24} /></button>
        </div>
      </div>

      <div className="flex-1 bg-gray-100 relative">
        <img 
          src="https://picsum.photos/seed/mapview/800/1200" 
          alt="Map" 
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* Mock Markers */}
        <MapMarker color="bg-red-500" top="20%" left="30%" />
        <MapMarker color="bg-blue-500" top="40%" left="70%" />
        <MapMarker color="bg-yellow-500" top="65%" left="60%" />
        <MapMarker color="bg-[#5CB15A]" top="55%" left="45%" active />

        {/* Store Detail Card (Bottom) */}
        <div className="absolute bottom-28 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-[40px] shadow-2xl animate-bounce-short">
           <h2 className="text-2xl font-bold mb-1">Keels Pet Foods</h2>
           <div className="flex items-center gap-1 text-[#F0BB22] mb-3">
              {[...Array(4)].map((_, i) => <Star key={i} size={16} fill="#F0BB22" />)}
              <Star size={16} className="text-gray-300" />
              <span className="text-gray-800 font-bold ml-1">5.0</span>
           </div>
           <div className="flex items-center gap-2 text-gray-500 font-medium mb-6">
              <span className="text-[#5CB15A]">📍</span> 700 m away from you
           </div>
           <button className="w-full bg-[#5CB15A] text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now
           </button>
        </div>
      </div>
    </div>
  );
};

const MapMarker = ({ color, top, left, active = false }: any) => (
  <div 
    className={`absolute ${top} ${left} -translate-x-1/2 -translate-y-1/2 z-10`}
    style={{ top, left }}
  >
     <div className={`${color} ${active ? 'w-16 h-16' : 'w-12 h-12'} rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-all`}>
        <ShoppingCart size={active ? 28 : 20} />
     </div>
     {active && <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-white mx-auto -mt-1 shadow-md"></div>}
  </div>
);

export default MapExplore;
