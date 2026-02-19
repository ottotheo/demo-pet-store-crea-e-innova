
import React, { useState, useEffect } from 'react';
import { AppView, Pet } from './types';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Home from './pages/Home';
import PetProfile from './pages/PetProfile';
import AddPet from './pages/AddPet';
import Shop from './pages/Shop';
import MapExplore from './pages/MapExplore';
import ManageDevices from './pages/ManageDevices';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Notifications from './pages/Notifications';
import BottomNav from './components/BottomNav';
import { MOCK_PETS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.SPLASH);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  useEffect(() => {
    if (currentView === AppView.SPLASH) {
      const timer = setTimeout(() => {
        setCurrentView(AppView.ONBOARDING);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const showPetProfile = (pet: Pet) => {
    setSelectedPet(pet);
    navigateTo(AppView.PET_PROFILE);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.SPLASH: return <Splash />;
      case AppView.ONBOARDING: return <Onboarding onFinish={() => navigateTo(AppView.LOGIN)} />;
      case AppView.LOGIN: return <Login onLogin={() => navigateTo(AppView.HOME)} />;
      case AppView.HOME: return <Home onPetClick={showPetProfile} onNavigate={navigateTo} />;
      case AppView.PET_PROFILE: return <PetProfile pet={selectedPet || MOCK_PETS[0]} onBack={() => navigateTo(AppView.HOME)} />;
      case AppView.ADD_PET: return <AddPet onBack={() => navigateTo(AppView.HOME)} />;
      case AppView.SHOP: return <Shop onNavigate={navigateTo} />;
      case AppView.EXPLORE: return <MapExplore onBack={() => navigateTo(AppView.HOME)} />;
      case AppView.MANAGE: return <ManageDevices onBack={() => navigateTo(AppView.HOME)} />;
      case AppView.PROFILE: return <Profile onNavigate={navigateTo} onSignOut={() => navigateTo(AppView.LOGIN)} />;
      case AppView.BOOKING: return <Booking onBack={() => navigateTo(AppView.HOME)} />;
      case AppView.CART: return <Cart onNavigate={navigateTo} onBack={() => navigateTo(AppView.SHOP)} />;
      case AppView.PAYMENT: return <Payment onBack={() => navigateTo(AppView.CART)} onFinish={() => navigateTo(AppView.HOME)} />;
      case AppView.NOTIFICATIONS: return <Notifications onBack={() => navigateTo(AppView.HOME)} />;
      default: return <Home onPetClick={showPetProfile} onNavigate={navigateTo} />;
    }
  };

  const showBottomNav = ![AppView.SPLASH, AppView.ONBOARDING, AppView.LOGIN].includes(currentView);

  return (
    <div className="max-w-[450px] mx-auto min-h-screen bg-[#F5F5F5] relative shadow-2xl flex flex-col">
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-24">
        {renderView()}
      </div>
      {showBottomNav && (
        <BottomNav activeView={currentView} onNavigate={navigateTo} />
      )}
    </div>
  );
};

export default App;
