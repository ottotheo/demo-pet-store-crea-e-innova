
import React, { useState } from 'react';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { AppView } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface CartProps {
  onNavigate: (view: AppView) => void;
  onBack: () => void;
}

const Cart: React.FC<CartProps> = ({ onNavigate, onBack }) => {
  const [items, setItems] = useState(
    MOCK_PRODUCTS.map(p => ({ ...p, quantity: 1 }))
  );

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="pb-32">
      {/* Header */}
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg sticky top-0 z-30">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="text-white bg-white/20 p-2 rounded-xl">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-2xl font-bold">Cart</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-3xl shadow-md flex items-center gap-4 relative">
              <img src={item.image} className="w-20 h-20 object-cover rounded-2xl" />
              <div className="flex-1">
                <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                <p className="text-gray-400 text-xs mb-2">{item.brand}</p>
                <p className="text-[#5CB15A] font-bold">Rs {item.price * item.quantity}.00</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button 
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 bg-[#5CB15A] text-white rounded-full flex items-center justify-center shadow-sm"
                >
                  <Plus size={16} />
                </button>
                <span className="font-bold text-gray-700">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center shadow-sm"
                >
                  <Minus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 bg-white p-8 rounded-[40px] shadow-lg border border-gray-100">
           <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500 font-bold">
                 <span>Sub total</span>
                 <span>Rs {subtotal}.00</span>
              </div>
              <div className="flex justify-between text-gray-500 font-bold">
                 <span>Shipping</span>
                 <span>Rs 150.00</span>
              </div>
              <hr className="border-dashed" />
              <div className="flex justify-between text-2xl font-bold">
                 <span>Total</span>
                 <span className="text-[#5CB15A]">Rs {subtotal + 150}.00</span>
              </div>
           </div>

           <button 
            onClick={() => onNavigate(AppView.PAYMENT)}
            className="w-full bg-[#5CB15A] text-white py-4 rounded-2xl font-bold text-xl shadow-lg flex items-center justify-center gap-2"
           >
              Buy Now
              <ShoppingBag size={24} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
