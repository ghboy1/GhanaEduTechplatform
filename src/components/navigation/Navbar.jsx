// ============================================
// FILE 1: src/components/navigation/Navbar.jsx
// ============================================

import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { 
  Home, Gamepad2, BarChart3, Target, Trophy, Info, 
  Menu, X, Sparkles, ChevronDown, User, LogIn
} from 'lucide-react';
import PropTypes from 'prop-types';

// Constants for maintainability
const NAV_CONFIG = {
  brand: {
    name: 'NYANSAPO',
    subtitle: 'WISDOM QUEST • MASTERY 2028',
    colors: {
      primary: 'from-red-600 via-yellow-500 to-green-600',
      hover: 'hover:bg-white/20',
      active: 'bg-white text-black'
    }
  },
  breakpoints: {
    mobile: 'lg:hidden',
    desktop: 'hidden lg:flex'
  }
};

// Performance-optimized Logo component with memo
const NyansapoLogo = memo(() => (
  <svg 
    width="60" 
    height="60" 
    viewBox="0 0 100 100" 
    className="drop-shadow-2xl"
    aria-label="Nyansapo Wisdom Knot Logo"
    role="img"
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FFEC8B" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#gold-gradient)" stroke="#000" strokeWidth="4"/>
    <path 
      d="M50,12 A38,38 0 1,1 88,50 A38,38 0 1,1 50,88 A38,38 0 1,1 12,50 A38,38 0 1,1 50,12
       M50,30 A20,20 0 1,1 50,70 A20,20 0 1,1 50,30"
      fill="none" 
      stroke="#000" 
      strokeWidth="7"
    />
    <circle cx="50" cy="50" r="14" fill="#000"/>
    <circle cx="50" cy="50" r="8" fill="#FFD700" filter="url(#glow)"/>
  </svg>
));

NyansapoLogo.displayName = 'NyansapoLogo';

// Main navigation items
const MainNavItems = memo(({ currentView, onSelectView }) => {
  const items = [
    { id: 'home', label: 'Home', icon: <Home size={20} aria-hidden="true" /> },
    { id: 'gamified', label: 'Gamified Learning', icon: <Gamepad2 size={20} aria-hidden="true" /> },
    { id: 'results', label: 'Results & Success', icon: <Trophy size={20} aria-hidden="true" /> },
    { id: 'about', label: 'About', icon: <Info size={20} aria-hidden="true" /> },
  ];

  return items.map(item => (
    <li key={item.id}>
      <button
        onClick={() => onSelectView(item.id)}
        aria-current={currentView === item.id ? 'page' : undefined}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
          currentView === item.id
            ? `${NAV_CONFIG.brand.colors.active} shadow-xl ring-4 ring-yellow-400`
            : 'bg-black/20 text-white hover:bg-white/20'
        }`}
      >
        {item.icon}
        {item.label}
      </button>
    </li>
  ));
});

MainNavItems.displayName = 'MainNavItems';

const Navbar = ({ currentView, onSelectView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  
  const whyRef = useRef(null);
  const loginRef = useRef(null);
  const whyTimeoutRef = useRef(null);
  const loginTimeoutRef = useRef(null);

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (whyTimeoutRef.current) clearTimeout(whyTimeoutRef.current);
      if (loginTimeoutRef.current) clearTimeout(loginTimeoutRef.current);
    };
  }, []);

  // Close dropdowns on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setWhyOpen(false);
        setLoginOpen(false);
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (whyRef.current && !whyRef.current.contains(e.target)) {
        setWhyOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // UPDATED: Changed view names to trigger login pages
  const loginOptions = [
  { name: 'Student Portal', view: 'student-login', icon: <User size={18} aria-hidden="true" /> },
  { name: 'Teacher Portal', view: 'teacher-login', icon: <User size={18} aria-hidden="true" /> },
  { name: 'Parent Portal', view: 'parent-login', icon: <User size={18} aria-hidden="true" /> },
  { name: 'SchoolAdmin', view: 'sms', icon: <User size={18} aria-hidden="true" /> },
];


  const handleViewSelect = useCallback((view) => {
    onSelectView(view);
    setMobileMenuOpen(false);
    setWhyOpen(false);
    setLoginOpen(false);
    // Clear any pending timeouts
    if (whyTimeoutRef.current) clearTimeout(whyTimeoutRef.current);
    if (loginTimeoutRef.current) clearTimeout(loginTimeoutRef.current);
  }, [onSelectView]);

  // All navigation items (including hidden ones for mobile menu and dropdown)
  const allNavItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} aria-hidden="true" /> },
    { id: 'gamified', label: 'Gamified Learning', icon: <Gamepad2 size={20} aria-hidden="true" /> },
    { id: 'assessments', label: 'Assessments & Reports', icon: <BarChart3 size={20} aria-hidden="true" /> },
    { id: 'simulations', label: 'Interactive Simulations', icon: <Target size={20} aria-hidden="true" /> },
    { id: 'results', label: 'Results & Success', icon: <Trophy size={20} aria-hidden="true" /> },
    { id: 'about', label: 'About', icon: <Info size={20} aria-hidden="true" /> },
  ];

  // Mobile menu items - show all items
  const MobileNavItems = () => (
    <>
      {allNavItems.map(item => (
        <button
          key={item.id}
          onClick={() => handleViewSelect(item.id)}
          aria-current={currentView === item.id ? 'page' : undefined}
          className="w-full text-left px-6 py-4 bg-white/20 rounded-2xl text-white font-bold flex items-center gap-4 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </>
  );

  // Handle "Why Nyansapo" dropdown hover with delay
  const handleWhyMouseEnter = () => {
    if (whyTimeoutRef.current) clearTimeout(whyTimeoutRef.current);
    setWhyOpen(true);
  };

  const handleWhyMouseLeave = () => {
    whyTimeoutRef.current = setTimeout(() => {
      if (!whyRef.current?.matches(':hover') && !whyRef.current?.contains(document.activeElement)) {
        setWhyOpen(false);
      }
    }, 150); // 150ms delay before closing
  };

  // Handle Login dropdown hover with delay
  const handleLoginMouseEnter = () => {
    if (loginTimeoutRef.current) clearTimeout(loginTimeoutRef.current);
    setLoginOpen(true);
  };

  const handleLoginMouseLeave = () => {
    loginTimeoutRef.current = setTimeout(() => {
      if (!loginRef.current?.matches(':hover') && !loginRef.current?.contains(document.activeElement)) {
        setLoginOpen(false);
      }
    }, 150); // 150ms delay before closing
  };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 shadow-2xl"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button 
              onClick={() => handleViewSelect('home')}
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded-lg p-1"
              aria-label="Go to homepage"
            >
              <NyansapoLogo />
              <div className="text-left">
                <div className="text-2xl font-black text-white drop-shadow-2xl">
                  {NAV_CONFIG.brand.name}
                </div>
                <div className="text-xs font-bold text-white/90 tracking-widest">
                  {NAV_CONFIG.brand.subtitle}
                </div>
              </div>
              <Sparkles className="text-yellow-300 animate-pulse" size={22} aria-hidden="true" />
            </button>

            {/* Desktop Navigation */}
            <div className={`${NAV_CONFIG.breakpoints.desktop} items-center gap-2`}>
              <ul className="flex items-center gap-2">
                {/* Why Nyansapo Dropdown - FIXED */}
                <li className="relative">
                  <div 
                    ref={whyRef}
                    className="relative"
                    onMouseEnter={handleWhyMouseEnter}
                    onMouseLeave={handleWhyMouseLeave}
                  >
                    <button
                      onClick={() => setWhyOpen(!whyOpen)}
                      aria-expanded={whyOpen}
                      aria-haspopup="true"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/20 text-white font-bold text-sm whitespace-nowrap hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                    >
                      Why Nyansapo
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${whyOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    {whyOpen && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-96 bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-yellow-500 z-50 animate-fadeIn"
                        role="menu"
                        style={{
                          // Add invisible bridge between button and dropdown
                          paddingTop: '8px',
                          marginTop: '-8px'
                        }}
                        onMouseEnter={handleWhyMouseEnter}
                        onMouseLeave={handleWhyMouseLeave}
                      >
                        <h3 className="text-2xl font-black text-center mb-6 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                          The Wisdom Knot of Learning
                        </h3>
                        <div className="grid grid-cols-2 gap-8 text-sm">
                          <div>
                            <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                              <Sparkles size={16} />
                              Engagement
                            </h4>
                            <button 
                              onClick={() => handleViewSelect('gamified')}
                              className="block w-full text-left py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                              role="menuitem"
                            >
                              Gamified Learning
                            </button>
                            <button 
                              onClick={() => handleViewSelect('simulations')}
                              className="block w-full text-left py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                              role="menuitem"
                            >
                              Interactive Simulations
                            </button>
                          </div>
                          <div>
                            <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                              <Trophy size={16} />
                              Mastery
                            </h4>
                            <button 
                              onClick={() => handleViewSelect('assessments')}
                              className="block w-full text-left py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                              role="menuitem"
                            >
                              Assessments & Reports
                            </button>
                            <button 
                              onClick={() => handleViewSelect('results')}
                              className="block w-full text-left py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                              role="menuitem"
                            >
                              Results & Analytics
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                {/* Main Navigation Items */}
                <MainNavItems currentView={currentView} onSelectView={handleViewSelect} />

                {/* Request Demo Button */}
                <li>
                  <button
                    className="bg-white text-red-600 px-6 py-2.5 rounded-full font-black text-sm whitespace-nowrap shadow-lg hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                    onClick={() => {/* Add demo request handler */}}
                  >
                    REQUEST DEMO
                  </button>
                </li>

                {/* Login Dropdown - FIXED */}
                <li className="relative">
                  <div 
                    ref={loginRef}
                    className="relative"
                    onMouseEnter={handleLoginMouseEnter}
                    onMouseLeave={handleLoginMouseLeave}
                  >
                    <button
                      onClick={() => setLoginOpen(!loginOpen)}
                      aria-expanded={loginOpen}
                      aria-haspopup="true"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 text-white font-bold text-sm whitespace-nowrap hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                    >
                      <LogIn size={18} aria-hidden="true" />
                      Login
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${loginOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    {loginOpen && (
                      <div 
                        className="absolute right-0 top-full mt-3 w-60 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 animate-fadeIn"
                        role="menu"
                        style={{
                          // Add invisible bridge between button and dropdown
                          paddingTop: '8px',
                          marginTop: '-8px'
                        }}
                        onMouseEnter={handleLoginMouseEnter}
                        onMouseLeave={handleLoginMouseLeave}
                      >
                        {loginOptions.map(opt => (
                          <button
                            key={opt.view}
                            onClick={() => handleViewSelect(opt.view)}
                            className="w-full text-left px-6 py-4 hover:bg-green-50 text-gray-800 font-semibold flex items-center gap-3 transition-colors focus:outline-none focus:bg-green-100"
                            role="menuitem"
                          >
                            {opt.icon}
                            {opt.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${NAV_CONFIG.breakpoints.mobile} p-3 rounded-full bg-black/30 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white transition-colors`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div 
              className="lg:hidden fixed inset-x-0 top-16 bg-gradient-to-b from-red-600 via-yellow-500 to-green-600 z-40 pt-6 pb-10 overflow-y-auto h-[calc(100vh-4rem)]"
              role="dialog"
              aria-modal="true"
            >
              <div className="px-6 space-y-2">
                {/* Mobile menu shows all navigation items */}
                <MobileNavItems />
                
                <button className="w-full bg-white text-red-600 py-4 rounded-2xl font-black focus:outline-none focus:ring-2 focus:ring-red-500 mt-4">
                  REQUEST DEMO
                </button>
                
                {loginOptions.map(opt => (
                  <button
                    key={opt.view}
                    onClick={() => handleViewSelect(opt.view)}
                    className="w-full bg-black/40 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <LogIn size={22} aria-hidden="true" />
                    {opt.name}
                  </button>
                ))}
                
                <p className="text-center text-white/90 font-bold italic pt-6 border-t border-white/20 mt-6">
                  "Sankofa: Wisdom from the past, mastery for the future"
                </p>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Add Tailwind CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translate(-50%, -5px); 
          }
          to { 
            opacity: 1; 
            transform: translate(-50%, 0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        /* Add smooth transition for dropdown */
        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px);
        }
        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 200ms, transform 200ms;
        }
        .dropdown-exit {
          opacity: 1;
        }
        .dropdown-exit-active {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 200ms, transform 200ms;
        }
      `}</style>
    </>
  );
};

Navbar.propTypes = {
  currentView: PropTypes.string.isRequired,
  onSelectView: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  currentView: 'home',
};

export default memo(Navbar);