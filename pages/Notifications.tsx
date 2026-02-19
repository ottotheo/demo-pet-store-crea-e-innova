
import React from 'react';
import { ArrowLeft, Bell, PawPrint, ShoppingCart, Trash2 } from 'lucide-react';

interface NotificationsProps {
  onBack: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onBack }) => {
  const notifications = [
    {
      id: 1,
      type: 'health',
      title: 'Vaccine Reminder',
      description: "It's time for Bella's annual rabies vaccination boost.",
      time: '2 hours ago',
      icon: <PawPrint className="text-red-500" />
    },
    {
      id: 2,
      type: 'store',
      title: 'Weekend Offer!',
      description: 'Get 20% off on all Josera mini deluxe food packs.',
      time: '5 hours ago',
      icon: <ShoppingCart className="text-[#5CB15A]" />
    },
    {
      id: 3,
      type: 'system',
      title: 'Device Connected',
      description: 'Your Fi Smart Collar for Roudy is now synced.',
      time: '1 day ago',
      icon: <Bell className="text-blue-500" />
    }
  ];

  return (
    <div className="pb-24">
      <div className="bg-[#5CB15A] p-6 rounded-b-[40px] shadow-lg sticky top-0 z-30">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="text-white bg-white/20 p-2 rounded-xl">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-2xl font-bold">Notifications</h1>
          <button className="text-white/50"><Trash2 size={24} /></button>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {notifications.map(notif => (
            <div key={notif.id} className="bg-white p-5 rounded-[32px] shadow-md flex gap-4 border-b-4 border-gray-100 hover:scale-[1.02] transition-all">
               <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                  {notif.icon}
               </div>
               <div className="flex-1">
                 <div className="flex justify-between items-start mb-1">
                   <h4 className="font-bold text-lg">{notif.title}</h4>
                   <span className="text-[10px] font-bold text-gray-400">{notif.time}</span>
                 </div>
                 <p className="text-gray-500 text-sm leading-relaxed">{notif.description}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <button className="text-gray-400 font-bold text-sm">Mark all as read</button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
