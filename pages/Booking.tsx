
import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Calendar as CalendarIcon } from 'lucide-react';

interface BookingProps {
  onBack: () => void;
}

const Booking: React.FC<BookingProps> = ({ onBack }) => {
  const [selectedDay, setSelectedDay] = useState(27);
  const [selectedTime, setSelectedTime] = useState('11:30');

  const days = [
    { num: 29, gray: true }, { num: 30, gray: true }, { num: 31, gray: true }, { num: 1 }, { num: 2, green: true }, { num: 3 }, { num: 4 },
    { num: 5 }, { num: 6 }, { num: 7 }, { num: 8, circle: true }, { num: 9 }, { num: 10 }, { num: 11 },
    { num: 12 }, { num: 13 }, { num: 14 }, { num: 15 }, { num: 16 }, { num: 17 }, { num: 18 },
    { num: 19 }, { num: 20 }, { num: 21 }, { num: 22 }, { num: 23 }, { num: 24 }, { num: 25 },
    { num: 26 }, { num: 27, active: true }, { num: 28 }, { num: 29 }, { num: 30 }, { num: 1, gray: true }, { num: 2, gray: true }
  ];

  const times = ['9:30', '10:30', '11:30', '3:30', '4:30', '5:30'];

  return (
    <div className="pb-24">
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg sticky top-0 z-30">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="text-white bg-white/20 p-2 rounded-xl"><ArrowLeft size={24} /></button>
          <h1 className="text-white text-2xl font-bold">Dr. Nambuvan</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Choose a Date</h2>
        <div className="bg-white p-6 rounded-[40px] shadow-xl border border-gray-100 mb-8">
          <div className="flex justify-around mb-8">
             <button className="flex items-center gap-1 bg-green-50 px-4 py-1.5 rounded-lg text-[#5CB15A] font-bold">
               August <ChevronDown size={18} />
             </button>
             <button className="flex items-center gap-1 bg-gray-50 px-4 py-1.5 rounded-lg text-gray-500 font-bold">
               2021 <ChevronDown size={18} />
             </button>
          </div>
          
          <div className="grid grid-cols-7 text-center font-bold text-sm text-gray-600 mb-4">
             {['M', 'Tu', 'W', 'Th', 'Fri', 'Sa', 'Su'].map(d => <div key={d}>{d}</div>)}
          </div>
          
          <div className="grid grid-cols-7 text-center gap-y-4 font-medium">
             {days.map((d, i) => (
               <div 
                key={i} 
                className={`
                  relative flex items-center justify-center h-10 w-10 mx-auto rounded-full cursor-pointer transition-all
                  ${d.gray ? 'text-gray-300' : 'text-gray-800'}
                  ${d.green ? 'text-green-500' : ''}
                  ${d.circle ? 'bg-gray-100' : ''}
                  ${d.active ? 'bg-[#5CB15A] text-white shadow-lg' : ''}
                `}
                onClick={() => !d.gray && setSelectedDay(d.num)}
               >
                 {d.num}
               </div>
             ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Pick a Time</h2>
        <div className="grid grid-cols-2 gap-4 mb-10">
           {times.map(t => (
             <button 
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`py-4 rounded-2xl font-bold shadow-md transition-all ${selectedTime === t ? 'bg-[#5CB15A] text-white' : 'bg-white text-gray-800'}`}
             >
               {t}
             </button>
           ))}
        </div>

        <button className="w-full bg-[#5CB15A] text-white py-4 rounded-2xl font-bold text-xl shadow-lg flex items-center justify-center gap-2">
           Book an Appointment
           <CalendarIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default Booking;
