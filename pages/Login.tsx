
import React from 'react';
import { Mail, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col px-8 pt-20">
      <div className="flex flex-col items-center mb-12">
        <img 
          src="https://img.freepik.com/free-vector/cute-corgi-dog-cartoon-vector-illustration_138676-2615.jpg" 
          alt="Logo" 
          className="w-32 h-32 rounded-full mb-2"
        />
        <h1 className="text-4xl font-bold text-[#803131]">COCO</h1>
      </div>

      <div className="space-y-4 mb-6">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-[#D4D4D4]/40 py-4 pl-12 pr-4 rounded-xl outline-none focus:ring-2 focus:ring-[#5CB15A]"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-[#D4D4D4]/40 py-4 pl-12 pr-4 rounded-xl outline-none focus:ring-2 focus:ring-[#5CB15A]"
          />
        </div>
        <p className="text-right text-[#5CB15A] font-medium cursor-pointer">Forgot Password?</p>
      </div>

      <button 
        onClick={onLogin}
        className="w-full bg-[#5CB15A] text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:brightness-95 transition-all mb-8"
      >
        LOGIN
      </button>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-gray-400 font-medium">or connect with</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="space-y-4 pb-12">
        <SocialButton icon="🌐" label="Login With Google" onClick={onLogin} />
        <SocialButton icon="📘" label="Login With Facebook" onClick={onLogin} />
        <SocialButton icon="🍎" label="Login With Apple" onClick={onLogin} />
      </div>

      <p className="mt-auto py-8 text-center text-gray-400 text-sm">
        © All Rights Reserved to Pixel Posse - 2022
      </p>
    </div>
  );
};

const SocialButton = ({ icon, label, onClick }: { icon: string, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="w-full bg-[#5CB15A] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-semibold shadow-md hover:brightness-95 transition-all"
  >
    <span className="text-xl">{icon}</span>
    {label}
  </button>
);

export default Login;
