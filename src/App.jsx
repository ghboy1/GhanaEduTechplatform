import React, { useState, useEffect } from 'react';
import StudentPlatform from './pages/StudentPlatform';
import TeacherDashboard from './pages/TeacherDashboard';
import ParentPortal from './pages/ParentPortal';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion'; // Optional: for epic animations

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectView = (view) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsLoading(false);
    }, 600);
  };

  const renderView = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-green-50">
          <div className="text-center">
            <div className="text-6xl mb-8">Loading...</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
              Welcome to Ghana Mastery Quest
            </div>
          </div>
        </div>
      );
    }

    switch (currentView) {
      case 'student':
        return <StudentPlatform onBack={() => handleSelectView('home')} />;
      case 'teacher':
        return <TeacherDashboard onBack={() => handleSelectView('home')} />;
      case 'parent':
        return <ParentPortal onBack={() => handleSelectView('home')} />;
      case 'home':
      default:
        return <HomePage onSelectUserType={handleSelectView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navbar is fixed at top */}
      <Navbar currentView={currentView} onSelectView={handleSelectView} />

      {/* Main Content - with smooth transition */}
      <motion.div
        key={currentView}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-16" // Offset for fixed navbar
      >
        {renderView()}
      </motion.div>

      {/* Optional: Footer */}
      {currentView === 'home' && (
        <footer className="bg-black/90 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-2xl font-bold mb-4">Ghana Mastery Quest 2028</p>
            <p className="text-yellow-400 text-lg italic">Sankofa — We learn from the past to build the future</p>
            <p className="mt-6 text-sm opacity-75">
              Powered by Passion • Crafted with Excellence • Proudly Ghanaian
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;