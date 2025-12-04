// src/components/SettingsTab.tsx
'use client';

import React, { useState } from 'react';
import { Moon, Sun, Bell, Globe, Shield, User, Mail, Lock, Smartphone, Palette, Download, LogOut, ChevronRight, Check, X, Settings } from 'lucide-react';

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const SettingsSection = ({ title, children, icon }: SettingsSectionProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
    <div className="flex items-center gap-4 mb-8">
      {icon && <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl text-white">{icon}</div>}
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <div className="space-y-6">{children}</div>
  </div>
);

type NotificationKeys = 'assignments' | 'messages' | 'studentAlerts' | 'liveClass' | 'parentUpdates';

export default function SettingsTab() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState<Record<NotificationKeys, boolean>>({
    assignments: true,
    messages: true,
    studentAlerts: true,
    liveClass: true,
    parentUpdates: false,
  });
  const [email, setEmail] = useState('kwesi.amissah@accra-intl.edu.gh');
  const [phone, setPhone] = useState('+233 54 123 4567');
  const [language, setLanguage] = useState('en');
  const [themeColor, setThemeColor] = useState('emerald');

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-4">Settings & Preferences</h2>
            <p className="text-xl opacity-90">Personalize your teaching experience</p>
          </div>
          <div className="w-32 h-32 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
            <Settings className="w-16 h-16" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Settings */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile */}
          <SettingsSection title="Profile Information" icon={<User size={28} />}>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                KA
              </div>
              <div>
                <h4 className="text-2xl font-bold">Mr. Kwesi Amissah</h4>
                <p className="text-gray-600 dark:text-gray-400">JHS Mathematics & Science Teacher</p>
                <button className="mt-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:scale-105 transition-all">
                  Change Photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input type="text" defaultValue="Kwesi Amissah" className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700 rounded-xl focus:ring-4 focus:ring-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Staff ID</label>
                <input type="text" defaultValue="AIS-2023-047" readOnly className="w-full px-5 py-4 bg-gray-100 dark:bg-gray-700 rounded-xl cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <div className="flex">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-5 py-4 bg-gray-50 dark:bg-gray-700 rounded-l-xl focus:ring-4 focus:ring-purple-500 focus:outline-none" />
                  <button className="px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-r-xl flex items-center gap-2">
                    <Check size={20} /> Verified
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700 rounded-xl focus:ring-4 focus:ring-purple-500 focus:outline-none" />
              </div>
            </div>
          </SettingsSection>

          {/* Notifications */}
          <SettingsSection title="Notification Preferences" icon={<Bell size={28} />}>
            <div className="space-y-5">
              {Object.entries(notifications).map(([key, value]) => {
                const typedKey = key as NotificationKeys;
                return (
                  <div key={key} className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all">
                    <div>
                      <h4 className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Get notified when {key.includes('student') ? 'a student needs attention' : key.toLowerCase()} occur</p>
                    </div>
                    <button
                      onClick={() => setNotifications(prev => ({ ...prev, [typedKey]: !prev[typedKey] }))}
                      className={`relative w-16 h-9 rounded-full transition-all ${value ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                    >
                      <div className={`absolute top-1 w-7 h-7 bg-white rounded-full shadow-lg transition-all ${value ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                  </div>
                );
              })}
            </div>
          </SettingsSection>

          {/* Appearance */}
          <SettingsSection title="Appearance" icon={<Palette size={28} />}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-4">Theme Mode</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setDarkMode(false)}
                    className={`flex-1 py-6 rounded-2xl border-4 transition-all ${!darkMode ? 'border-purple-600 shadow-xl' : 'border-gray-200 dark:border-gray-700'}`}
                  >
                    <Sun size={40} className="mx-auto mb-3 text-yellow-500" />
                    <span className="font-bold">Light</span>
                  </button>
                  <button
                    onClick={() => setDarkMode(true)}
                    className={`flex-1 py-6 rounded-2xl border-4 transition-all ${darkMode ? 'border-purple-600 shadow-xl' : 'border-gray-200 dark:border-gray-700'}`}
                  >
                    <Moon size={40} className="mx-auto mb-3 text-blue-500" />
                    <span className="font-bold">Dark</span>
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-4">Accent Color</label>
                <div className="grid grid-cols-4 gap-4">
                  {['emerald', 'blue', 'purple', 'pink'].map(color => (
                    <button
                      key={color}
                      onClick={() => setThemeColor(color)}
                      className={`w-full h-16 rounded-2xl bg-gradient-to-br from-${color}-500 to-${color}-700 shadow-lg transition-all ${themeColor === color ? 'ring-4 ring-white ring-offset-4 ring-offset-gray-800' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SettingsSection>

          {/* Security */}
          <SettingsSection title="Security & Privacy" icon={<Shield size={28} />}>
            <div className="space-y-5">
              <button className="w-full text-left p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Lock size={24} className="text-purple-600" />
                  <div>
                    <h4 className="font-bold">Change Password</h4>
                    <p className="text-sm text-gray-600">Last changed 3 months ago</p>
                  </div>
                </div>
                <ChevronRight size={24} />
              </button>
              <button className="w-full text-left p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Smartphone size={24} className="text-green-600" />
                  <div>
                    <h4 className="font-bold">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">Enabled</span>
              </button>
            </div>
          </SettingsSection>
        </div>

        {/* Right Column - Quick Actions */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full py-5 bg-white/20 backdrop-blur-lg rounded-2xl font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-3">
                <Download size={24} /> Export Student Data
              </button>
              <button className="w-full py-5 bg-white/20 backdrop-blur-lg rounded-2xl font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-3">
                <Mail size={24} /> Contact IT Support
              </button>
              <button className="w-full py-5 bg-white/20 backdrop-blur-lg rounded-2xl font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-3">
                <Globe size={24} /> Language & Region
              </button>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/30 rounded-3xl p-8 border-2 border-red-200 dark:border-red-800">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Sign Out</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">You’ll be signed out from all devices</p>
            <button className="w-full py-5 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-3">
              <LogOut size={24} /> Sign Out Everywhere
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center">
            <h4 className="text-xl font-bold mb-2">All Settings Saved</h4>
            <p className="opacity-90">Your preferences are automatically synced</p>
            <Check size={48} className="mx-auto mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}