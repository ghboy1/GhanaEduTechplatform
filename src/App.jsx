// ============================================
// FILE 2: src/App.jsx
// ============================================

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage.jsx';
import GamifiedLearningPage from './pages/GamifiedLearningPage.jsx';
import AssessmentsReportsPage from './pages/AssessmentsReportsPage.jsx';
import InteractiveSimulationsPage from './pages/InteractiveSimulationsPage.jsx';
import ResultsSuccessPage from './pages/ResultsSuccessPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

// Portals
import StudentPlatform from './pages/StudentPlatform.jsx';
import TeacherDashboard from './pages/TeacherDashboard.tsx';
import ParentPortal from './pages/ParentPortal.jsx';
import SchoolManagement from './pages/schoolAdmin.jsx'; // ✅ Correct component

// Auth
import LoginForm from './components/auth/LoginForm.jsx';
import { saveSession, loadSession, clearSession } from './utils/auth.js';

// Navigation
import Navbar from './components/navigation/Navbar.jsx';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Load saved session on mount
  useEffect(() => {
    const initSession = async () => {
      const session = await loadSession();
      if (session && session.loggedIn) {
        setUser(session);
        setCurrentView(session.userType); // 'student', 'teacher', 'parent', or 'schoolAdmin'
      }
    };
    initSession();
  }, []);

  const handleSelectView = (view) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 500);
  };

  const handleLogin = async (userData) => {
    setUser(userData);
    setCurrentView(userData.userType); // Redirect to portal after login
    await saveSession(userData);
  };

  const handleLogout = async () => {
    setUser(null);
    setCurrentView('home');
    await clearSession();
  };

  const renderView = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-yellow-50 to-green-50">
          <div className="text-center">
            <div className="text-7xl mb-8 animate-pulse">🇬🇭</div>
            <div className="text-4xl font-black bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
              Loading...
            </div>
          </div>
        </div>
      );
    }

    // LOGIN VIEWS
    if (currentView === 'student-login') {
      return <LoginForm userType="student" onLogin={handleLogin} onBack={() => setCurrentView('home')} />;
    }
    if (currentView === 'teacher-login') {
      return <LoginForm userType="teacher" onLogin={handleLogin} onBack={() => setCurrentView('home')} />;
    }
    if (currentView === 'parent-login') {
      return <LoginForm userType="parent" onLogin={handleLogin} onBack={() => setCurrentView('home')} />;
    }
    if (currentView === 'schoolAdmin-login') {
      return <LoginForm userType="schoolAdmin" onLogin={handleLogin} onBack={() => setCurrentView('home')} />;
    }

    // AUTHENTICATED PORTAL VIEWS
    if (currentView === 'student' && user?.loggedIn) {
      return (
        <div>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white flex justify-between items-center sticky top-16 z-40">
            <div>
              <span className="font-semibold">Welcome, {user.name}!</span>
              <span className="ml-4 text-sm opacity-90">{user.school} • {user.level}</span>
            </div>
            <button onClick={handleLogout} className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-all font-semibold">
              Logout
            </button>
          </div>
          <StudentPlatform />
        </div>
      );
    }

    if (currentView === 'teacher' && user?.loggedIn) {
      return (
        <div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center sticky top-16 z-40">
            <div>
              <span className="font-semibold">Welcome, {user.name}!</span>
              <span className="ml-4 text-sm opacity-90">{user.school}</span>
            </div>
            <button onClick={handleLogout} className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-all font-semibold">
              Logout
            </button>
          </div>
          <TeacherDashboard />
        </div>
      );
    }

    if (currentView === 'parent' && user?.loggedIn) {
      return (
        <div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white flex justify-between items-center sticky top-16 z-40">
            <div>
              <span className="font-semibold">Welcome, {user.name}!</span>
              <span className="ml-4 text-sm opacity-90">Children: {user.children?.join(', ')}</span>
            </div>
            <button onClick={handleLogout} className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-all font-semibold">
              Logout
            </button>
          </div>
          <ParentPortal />
        </div>
      );
    }

    if (currentView === 'schoolAdmin' && user?.loggedIn) {
      return (
        <div>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 text-white flex justify-between items-center sticky top-16 z-40">
            <div>
              <span className="font-semibold">Welcome, {user.name}!</span>
              <span className="ml-4 text-sm opacity-90">{user.school} • {user.role}</span>
            </div>
            <button onClick={handleLogout} className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-all font-semibold">
              Logout
            </button>
          </div>
          <SchoolManagement />
        </div>
      );
    }

    // PUBLIC VIEWS
    switch (currentView) {
      case 'home':
        return <HomePage onSelectUserType={handleSelectView} />;
      case 'gamified':
        return <GamifiedLearningPage />;
      case 'assessments':
        return <AssessmentsReportsPage />;
      case 'simulations':
        return <InteractiveSimulationsPage />;
      case 'results':
        return <ResultsSuccessPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onSelectUserType={handleSelectView} />;
    }
  };

  const shouldShowNavbar = !currentView.includes('-login') && !['student', 'teacher', 'parent', 'schoolAdmin'].includes(currentView);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {shouldShowNavbar && <Navbar currentView={currentView} onSelectView={handleSelectView} />}
      <motion.main
        key={currentView}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={shouldShowNavbar ? 'pt-20 pb-10' : ''}
      >
        {renderView()}
      </motion.main>

      {(currentView === 'home' || currentView === 'about') && (
        <footer className="bg-black/95 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-4">Ghana Mastery Quest 2028</h2>
            <p className="text-yellow-400 text-2xl italic font-medium">
              Sankofa — We learn from the past to build the future
            </p>
            <p className="mt-8 text-lg opacity-80">
              Powered by Passion • Built for Excellence • Proudly Ghanaian 🇬🇭
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
