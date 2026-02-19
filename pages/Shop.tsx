
import React, { useState } from 'react';
import { Search, ShoppingCart, Plus, Minus, ShoppingBag } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { AppView } from '../types';

interface ShopProps {
  onNavigate: (view: AppView) => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('Food');
  
  const categories = [
    { id: 'Food', icon: '🥣' },
    { id: 'Vet Items', icon: '🩺' },
    { id: 'Accessories', icon: '🎗️' },
    { id: 'IOT Devices', icon: '📡' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg sticky top-0 z-30">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-2xl font-bold">Shop</h1>
          <button 
            onClick={() => onNavigate(AppView.CART)}
            className="text-white relative p-2 bg-white/20 rounded-xl"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center border-2 border-[#5CB15A]">2</span>
          </button>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search keywords.." 
            className="w-full bg-white py-4 pl-12 pr-4 rounded-2xl shadow-inner outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mt-8">
        <div className="flex justify-around bg-white p-4 rounded-[30px] shadow-md border border-gray-100">
           {categories.map(cat => (
             <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all ${activeCategory === cat.id ? 'bg-[#5CB15A] text-white shadow-md' : 'text-gray-400'}`}
             >
               <span className="text-2xl">{cat.icon}</span>
               <span className="text-[10px] font-bold">{cat.id.split(' ')[0]}</span>
             </button>
           ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recommended {activeCategory}</h2>
          {activeCategory === 'Food' && (
            <button className="bg-[#5CB15A] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">Check Retail Stores</button>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
           {MOCK_PRODUCTS.map(product => (
             <div key={product.id} className="bg-white rounded-[32px] p-4 shadow-md flex flex-col relative overflow-hidden">
               {product.recommendedFor && (
                 <div className="absolute top-0 left-0 bg-red-100 px-3 py-1 rounded-br-2xl text-[10px] font-bold text-red-500">
                   {product.recommendedFor}
                 </div>
               )}
               <div className="h-40 mb-4 flex items-center justify-center p-2">
                 <img src={product.image} className="max-h-full object-contain rounded-xl" />
               </div>
               <p className="text-[#5CB15A] text-[10px] font-bold">Rs {product.price}.00</p>
               <h4 className="font-bold text-sm leading-tight mb-4 flex-1">{product.name}</h4>
               <button className="w-full bg-white border border-gray-200 py-2 rounded-xl flex items-center justify-center gap-2 text-xs font-bold shadow-sm hover:bg-gray-50 transition-all">
                  <ShoppingBag size={14} className="text-[#5CB15A]" />
                  Add to cart
               </button>
             </div>
           ))}
        </div>
      </div>

      {/* Top Brands */}
      <div className="mt-8">
         <div className="px-6 flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Top Brands</h2>
         </div>
         <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 pb-2">
            {['Royal Canin', 'Josera', 'Pedigree', 'Hills'].map(brand => (
               <div key={brand} className="min-w-[120px] h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border border-gray-50 font-black text-gray-300 tracking-tighter italic">
                 {brand}
               </div>
            ))}
         </div>
      </div>

      {/* Top Selling */}
      <div className="px-6 mt-8">
         <h2 className="text-xl font-bold mb-4">Top Selling</h2>
         <div className="space-y-4">
            {MOCK_PRODUCTS.map(product => (
              <div key={product.id} className="bg-white p-4 rounded-3xl shadow-md flex items-center gap-4">
                <img src={product.image} className="w-16 h-16 object-cover rounded-2xl" />
                <div className="flex-1">
                   <h4 className="font-bold text-sm leading-tight">{product.name}</h4>
                   <p className="text-gray-400 text-xs">{product.size}</p>
                   <div className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-md mt-1">
                     {product.recommendedFor || 'All Breeds'}
                   </div>
                </div>
                <button className="bg-[#5CB15A]/10 p-3 rounded-2xl text-[#5CB15A] shadow-inner">
                   <ShoppingBag size={20} />
                </button>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Shop;
