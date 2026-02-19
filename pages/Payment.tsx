
import React from 'react';
import { ArrowLeft, CreditCard, CheckCircle, Truck, Wallet } from 'lucide-react';

interface PaymentProps {
  onBack: () => void;
  onFinish: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onBack, onFinish }) => {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg sticky top-0 z-30">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="text-white bg-white/20 p-2 rounded-xl">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-2xl font-bold">Confirm Payment</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-6">
        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-10 mb-12 relative px-4">
           <div className="absolute top-1/2 left-10 right-10 h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>
           <div className="flex flex-col items-center gap-1">
             <div className="w-12 h-12 bg-[#5CB15A] text-white rounded-2xl flex items-center justify-center shadow-lg"><Truck size={24} /></div>
             <span className="text-[10px] font-bold text-gray-400">Delivery</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <div className="w-12 h-12 bg-[#5CB15A] text-white rounded-2xl flex items-center justify-center shadow-lg"><Wallet size={24} /></div>
             <span className="text-[10px] font-bold text-[#5CB15A]">Payment</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <div className="w-12 h-12 bg-white text-gray-200 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100"><CheckCircle size={24} /></div>
             <span className="text-[10px] font-bold text-gray-200">Finished</span>
           </div>
        </div>

        {/* Card Details */}
        <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 mb-8">
          <h3 className="text-xl font-bold mb-6">Enter Card Details</h3>
          <div className="space-y-4">
             <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 ml-2">Card Number</label>
                <div className="relative">
                   <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-gray-50 py-4 px-6 rounded-2xl border border-gray-100 outline-none" />
                   <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 ml-2">Card Holder Name</label>
                <input type="text" placeholder="Pixel Posse" className="w-full bg-gray-50 py-4 px-6 rounded-2xl border border-gray-100 outline-none" />
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 ml-2">Expiry Date</label>
                  <input type="text" placeholder="05/2024" className="w-full bg-gray-50 py-4 px-6 rounded-2xl border border-gray-100 outline-none" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 ml-2">CVV</label>
                  <input type="password" placeholder="***" className="w-full bg-gray-50 py-4 px-6 rounded-2xl border border-gray-100 outline-none" />
               </div>
             </div>
          </div>
        </div>

        {/* Total Summary */}
        <div className="space-y-3 mb-10 px-4">
           <div className="flex justify-between text-gray-500 font-bold">
              <span>Delivery Charges</span>
              <span>Rs 150.00</span>
           </div>
           <div className="flex justify-between text-gray-500 font-bold">
              <span>Store Credits</span>
              <span className="text-red-400">- Rs 250.00</span>
           </div>
           <div className="flex justify-between text-2xl font-bold pt-3 border-t border-dashed border-gray-200">
              <span>Net Total</span>
              <span className="text-[#5CB15A]">Rs 7,200.00</span>
           </div>
        </div>

        <button 
          onClick={onFinish}
          className="w-full bg-[#5CB15A] text-white py-4 rounded-2xl font-bold text-xl shadow-lg flex items-center justify-center gap-2"
        >
           Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
