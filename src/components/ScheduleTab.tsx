// src/components/StudentsTab.tsx
'use client';

import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, AlertTriangle, Star, Clock, Award, Brain, MessageSquare, Phone, Mail, MoreVertical, ChevronDown } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  avatar: string;
  class: string;
  progress: number;
  streak: number;
  points: number;
  riskLevel: 'low' | 'medium' | 'high';
  engagement: number;
  predictedBECE: number;
  lastActive: string;
  strengths: string[];
  needsHelp: string[];
  parentContact: string;
}

export default function StudentsTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'at-risk' | 'top' | 'inactive'>('all');

  const students: Student[] = [
    { id: 1, name: 'Abena Osei', avatar: 'AO', class: 'JHS 2A', progress: 94, streak: 21, points: 4850, riskLevel: 'low', engagement: 98, predictedBECE: 96, lastActive: '2 mins ago', strengths: ['Algebra', 'Geometry'], needsHelp: [], parentContact: '+233 24 567 8901' },
    { id: 2, name: 'Kwame Mensah', avatar: 'KM', class: 'JHS 2A', progress: 87, streak: 14, points: 3920, riskLevel: 'low', engagement: 92, predictedBECE: 89, lastActive: '1 hour ago', strengths: ['Science', 'ICT'], needsHelp: ['Fractions'], parentContact: '+233 20 123 4567' },
    { id: 3, name: 'Akosua Boateng', avatar: 'AB', class: 'JHS 2A', progress: 72, streak: 5, points: 2680, riskLevel: 'medium', engagement: 78, predictedBECE: 74, lastActive: '3 hours ago', strengths: ['English', 'Comprehension'], needsHelp: ['Algebra', 'Science'], parentContact: '+233 55 987 6543' },
    { id: 4, name: 'Yaw Amissah', avatar: 'YA', class: 'JHS 2A', progress: 48, streak: 0, points: 1120, riskLevel: 'high', engagement: 42, predictedBECE: 51, lastActive: '5 days ago', strengths: [], needsHelp: ['All core subjects'], parentContact: '+233 27 111 2223' },
    { id: 5, name: 'Esi Arthur', avatar: 'EA', class: 'JHS 2A', progress: 99, streak: 45, points: 7200, riskLevel: 'low', engagement: 100, predictedBECE: 99, lastActive: 'Now', strengths: ['Everything'], needsHelp: [], parentContact: '+233 54 777 8889' },
  ];

  const filteredStudents = students.filter(s => {
    if (filter === 'at-risk') return s.riskLevel === 'high' || s.riskLevel === 'medium';
    if (filter === 'top') return s.progress >= 90;
    if (filter === 'inactive') return s.lastActive.includes('day') || s.lastActive.includes('Now') === false;
    return s.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-amber-500 text-white';
      case 'low': return 'bg-emerald-500 text-white';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-6xl font-bold mb-4">Student Performance</h2>
            <p className="text-2xl opacity-90">Real-time insights • Early intervention • Ghana BECE success</p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-black">125</div>
            <p className="text-xl opacity-90">Total Students</p>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative">
          <Search className="absolute left-5 top-5 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white dark:bg-gray-800 rounded-3xl shadow-xl focus:ring-4 focus:ring-purple-500 focus:outline-none text-lg"
          />
        </div>
        <div className="flex gap-4">
          {(['all', 'at-risk', 'top', 'inactive'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-5 rounded-3xl font-bold capitalize transition-all shadow-lg ${filter === f ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'bg-white dark:bg-gray-800 hover:shadow-xl'}`}
            >
              {f === 'at-risk' ? 'At Risk' : f === 'top' ? 'Top Performers' : f === 'inactive' ? 'Inactive' : 'All Students'}
            </button>
          ))}
        </div>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredStudents.map(student => (
          <div
            key={student.id}
            className={`rounded-3xl shadow-2xl overflow-hidden transition-all hover:scale-105 border-4 ${
              student.riskLevel === 'high' ? 'border-red-500' :
              student.riskLevel === 'medium' ? 'border-amber-500' : 'border-emerald-500'
            }`}
          >
            {/* Header */}
            <div className={`p-8 text-white ${getRiskColor(student.riskLevel)}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-lg rounded-full flex items-center justify-center text-3xl font-black">
                    {student.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{student.name}</h3>
                    <p className="opacity-90">{student.lastActive}</p>
                  </div>
                </div>
                {student.riskLevel === 'high' && <AlertTriangle size={36} className="animate-pulse" />}
              </div>
            </div>

            {/* Body */}
            <div className="p-8 bg-white dark:bg-gray-800 space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Overall Progress</span>
                  <span className="text-2xl font-black">{student.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-8 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-end pr-4 text-white font-bold"
                    style={{ width: `${student.progress}%` }}
                  >
                    {student.progress >= 70 && <TrendingUp size={20} />}
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 rounded-2xl p-4">
                  <div className="text-3xl font-black">{student.streak}</div>
                  <p className="text-xs">Day Streak</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 rounded-2xl p-4">
                  <div className="text-3xl font-black">{student.points.toLocaleString()}</div>
                  <p className="text-xs">Points</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 rounded-2xl p-4">
                  <div className="text-3xl font-black">{student.predictedBECE}%</div>
                  <p className="text-xs">BECE Predict</p>
                </div>
              </div>

              {/* Strengths & Needs */}
              <div className="space-y-4">
                {student.strengths.length > 0 && (
                  <div>
                    <p className="font-bold text-green-600 mb-2">Strong In:</p>
                    <div className="flex flex-wrap gap-2">
                      {student.strengths.map(s => (
                        <span key={s} className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">#{s}</span>
                      ))}
                    </div>
                  </div>
                )}
                {student.needsHelp.length > 0 && (
                  <div>
                    <p className="font-bold text-red-600 mb-2">Needs Help:</p>
                    <div className="flex flex-wrap gap-2">
                      {student.needsHelp.map(n => (
                        <span key={n} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold">! {n}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3 pt-4 border-t dark:border-gray-700">
                <button className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <MessageSquare size={20} /> Message
                </button>
                <button className="p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl hover:scale-110 transition-all">
                  <Phone size={20} />
                </button>
                <button className="p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl hover:scale-110 transition-all">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-10 text-white text-center shadow-2xl">
        <h3 className="text-4xl font-bold mb-4">Class Average: 87.2% • Predicted BECE Pass Rate: 94%</h3>
        <p className="text-xl opacity-90">You're building the next generation of Ghanaian leaders</p>
      </div>
    </div>
  );
}