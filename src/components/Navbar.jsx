import React, { useState } from 'react';
import { Home, School, Users, BookOpen, Trophy, Menu, X, Sparkles } from 'lucide-react';

const Navbar = ({ currentView, onSelectView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'student', label: 'Student Quest', icon: <School size={20} /> },
    { id: 'teacher', label: 'Teacher Portal', icon: <BookOpen size={20} /> },
    { id: 'parent', label: 'Parent View', icon: <Users size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Ghana Pride */}
          <button
            onClick={() => onSelectView('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="text-3xl font-black tracking-tight text-white drop-shadow-2xl">
                GHANA QUEST
              </div>
              <Sparkles className="absolute -top-1 -right-3 text-yellow-300 animate-pulse" size={20} />
            </div>
            <div className="hidden sm:block text-white/90 font-medium text-sm tracking-wider">
              Mastery 2028
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  currentView === item.id
                    ? 'bg-black/30 text-white shadow-lg scale-105'
                    : 'text-white/90 hover:bg-white/20 hover:text-white hover:shadow-md'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-full bg-black/20 hover:bg-black/40 transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Ghana Flag Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-red-600 via-yellow-500 to-green-600 shadow-2xl border-t-4 border-black/50">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectView(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-4 w-full px-6 py-4 rounded-2xl text-left text-lg font-bold transition-all ${
                  currentView === item.id
                    ? 'bg-white text-ghana-dark shadow-xl scale-105'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <span>{item.label}</span>
                {currentView === item.id && <Trophy className="ml-auto text-yellow-400" size={20} />}
              </button>
            ))}
            <div className="pt-4 text-center text-white/80 font-medium italic">
              "Sankofa: Go back and get it"
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;