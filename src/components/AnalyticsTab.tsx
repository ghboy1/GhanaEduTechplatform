// src/components/AnalyticsTab.tsx
'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Users, Target, Brain, Award, Clock, AlertCircle, Star } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AnalyticsTab() {
  const performanceData = [
    { month: 'Aug', score: 68 }, { month: 'Sep', score: 74 }, { month: 'Oct', score: 79 },
    { month: 'Nov', score: 86 }, { month: 'Dec', score: 91 }
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', score: 94, color: '#8b5cf6' },
    { subject: 'English', score: 89, color: '#3b82f6' },
    { subject: 'Science', score: 87, color: '#10b981' },
    { subject: 'Social Studies', score: 91, color: '#f59e0b' },
    { subject: 'ICT', score: 96, color: '#ec4899' },
  ];

  const engagementData = [
    { name: 'Highly Engaged', value: 72, color: '#10b981' },
    { name: 'Moderate', value: 20, color: '#f59e0b' },
    { name: 'At Risk', value: 8, color: '#ef4444' },
  ];

  const attendanceData = [
    { day: 'Mon', present: 118, absent: 7 },
    { day: 'Tue', present: 122, absent: 3 },
    { day: 'Wed', present: 120, absent: 5 },
    { day: 'Thu', present: 119, absent: 6 },
    { day: 'Fri', present: 115, absent: 10 },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-7xl font-black mb-4">Analytics & Insights</h1>
            <p className="text-3xl opacity-90">Data-driven teaching • BECE success guaranteed</p>
          </div>
          <div className="text-right">
            <div className="text-6xl font-black mb-2">94.2%</div>
            <p className="text-2xl opacity-90">Predicted BECE Pass Rate</p>
            <div className="flex items-center gap-3 mt-6 justify-end">
              <TrendingUp size={48} className="text-green-400" />
              <span className="text-4xl font-bold">+12.8%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-10 shadow-2xl">
          <Users size={48} className="mb-4" />
          <div className="text-5xl font-black">125</div>
          <p className="text-xl opacity-90">Total Students</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-3xl p-10 shadow-2xl">
          <Target size={48} className="mb-4" />
          <div className="text-5xl font-black">91.4%</div>
          <p className="text-xl opacity-90">Class Average</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-10 shadow-2xl">
          <Brain size={48} className="mb-4" />
          <div className="text-5xl font-black">87%</div>
          <p className="text-xl opacity-90">Engagement Rate</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-3xl p-10 shadow-2xl">
          <Award size={48} className="mb-4" />
          <div className="text-5xl font-black">#2</div>
          <p className="text-xl opacity-90">Regional Rank</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Performance Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <TrendingUp className="text-green-600" />
            Performance Trend (2025)
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="score" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorScore)" strokeWidth={4} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Subject Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <Star className="text-yellow-500" />
            Subject Performance
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" radius={[20, 20, 0, 0]}>
                {subjectPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Engagement Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
          <h3 className="text-3xl font-bold mb-8">Student Engagement</h3>
          <ResponsiveContainer width="100%" height={380}>
            <PieChart>
              <Pie
                data={engagementData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
              >
                {engagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-3">
            {engagementData.map(item => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="font-semibold">{item.name}</span>
                </div>
                <span className="text-2xl font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Attendance */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 lg:col-span-2">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <Clock className="text-blue-600" />
            Weekly Attendance Pattern
          </h3>
          <ResponsiveContainer width="100%" height={380}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="present" stroke="#10b981" strokeWidth={6} name="Present" />
              <Line type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={6} name="Absent" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
        <div className="flex items-center gap-6 mb-8">
          <Brain size={64} />
          <h2 className="text-5xl font-black">AI-Powered Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8">
            <AlertCircle size={48} className="mb-4 text-yellow-400" />
            <h4 className="text-2xl font-bold mb-3">Early Warning</h4>
            <p className="text-lg opacity-90">4 students showing declining performance in Mathematics. Recommend intervention within 7 days.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8">
            <Target size={48} className="mb-4 text-green-400" />
            <h4 className="text-2xl font-bold mb-3">Strength Identified</h4>
            <p className="text-lg opacity-90">78% of class excels at word problems. Consider advanced challenge group.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8">
            <TrendingUp size={48} className="mb-4 text-cyan-400" />
            <h4 className="text-2xl font-bold mb-3">Success Predictor</h4>
            <p className="text-lg opacity-90">Current trajectory: 94% BECE pass rate. On track for #1 in Greater Accra Region!</p>
          </div>
        </div>
      </div>
    </div>
  );
}