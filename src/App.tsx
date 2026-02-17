import { useState } from 'react';
import { HomeView } from './components/HomeView';
import { MenuView } from './components/MenuView';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'comida', 'cocteles'

  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-[url('/bg-m.png')] md:bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat" />
      {currentView === 'home' ? (
        <HomeView onNavigate={setCurrentView} />
      ) : (
        <MenuView currentView={currentView} onBack={() => setCurrentView('home')} />
      )}
    </>
  );
}
