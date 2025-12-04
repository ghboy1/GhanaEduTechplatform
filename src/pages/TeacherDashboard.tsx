// src/pages/TeacherDashboard.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Users, BookOpen, TrendingUp, Award, Plus, Send, BarChart3, Calendar, Target,
  Brain, Zap, MessageSquare, Bell, Video, Sparkles, X, Menu, Home, Settings,
  Moon, Sun, Trophy, Flame, ArrowUpRight, Clock, Download, Search, ChevronDown,
  Bot, Star, PlayCircle, FileText, Share2, MoreVertical, Edit3, Trash2, Copy,
  Calendar as CalendarIcon, AlertCircle, CheckCircle, UserCheck
} from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';



import AssignmentsTab from '../components/AssignmentsTab';
import AnalyticsTab from '../components/AnalyticsTab';
import LiveClassTab from '../components/LiveClassTab';
import MessagesTab from '../components/MessagesTab';
import SettingsTab from '../components/SettingsTab';
// Assuming HomeDashboard is for Overview; adjust if needed


interface ScheduleEvent {
  id: string;
  day: string;
  time: string;
  subject: string;
  topic: string;
  type: 'lesson' | 'quiz' | 'revision' | 'exam';
  color: string;
}

function SortableScheduleItem({ event }: { event: ScheduleEvent }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: event.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${event.color} text-white rounded-2xl p-5 shadow-lg hover:scale-105 transition-all cursor-move opacity-90 hover:opacity-100`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-bold">{event.time}</span>
        <span className="text-xs px-2 py-1 bg-white/30 rounded-full">{event.type.toUpperCase()}</span>
      </div>
      <h4 className="font-bold text-lg">{event.subject}</h4>
      <p className="text-sm">{event.topic}</p>
    </div>
  );
}

export default function TeacherDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  // DRAG & DROP SCHEDULING
  const [schedule, setSchedule] = useState<ScheduleEvent[]>([
    { id: '1', day: 'Monday', time: '08:00 - 09:30', subject: 'Mathematics', topic: 'Linear Equations', type: 'lesson', color: 'bg-blue-500' },
    { id: '2', day: 'Monday', time: '09:30 - 11:00', subject: 'English', topic: 'Comprehension', type: 'lesson', color: 'bg-green-500' },
    { id: '3', day: 'Tuesday', time: '08:00 - 09:30', subject: 'Science', topic: 'Circulatory System', type: 'lesson', color: 'bg-purple-500' },
    { id: '4', day: 'Tuesday', time: '10:00 - 11:00', subject: 'ICT', topic: 'Internet Safety', type: 'lesson', color: 'bg-pink-500' },
    { id: '5', day: 'Wednesday', time: '08:00 - 11:00', subject: 'Math Quiz', topic: 'Weekly Assessment', type: 'quiz', color: 'bg-red-500' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setSchedule((items) => {
        const oldIndex = items.findIndex(i => i.id === active.id);
        const newIndex = items.findIndex(i => i.id === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Google Calendar Sync (Ready to Connect)
  const syncWithGoogleCalendar = () => {
    alert("Google Calendar Sync Ready! Add your CLIENT_ID in .env");
    // window.open(`https://accounts.google.com/o/oauth2/v2/auth?...`, '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home, active: false },
    { id: 'students', label: 'Students', icon: Users, active: false, badge: 'Live', color: 'bg-red-500' },
    { id: 'assignments', label: 'Assignments', icon: BookOpen, active: false },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, active: false },
    { id: 'liveclass', label: 'Live Class', icon: Video, active: false },
    { id: 'schedule', label: 'Schedule', icon: CalendarIcon, active: true, badge: 'Today', color: 'bg-gradient-to-r from-green-500 to-teal-500' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, active: false, badge: '8', color: 'bg-purple-500' },
    { id: 'settings', label: 'Settings', icon: Settings, active: false },
  ];

  return (
    <>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'} transition-all`}>
        {/* FAB */}
        <button onClick={() => setShowAIAssistant(true)} className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-bounce">
          <Sparkles size={32} />
        </button>

        {/* Sidebar - Matching Your Screenshot */}
        <div className="fixed left-0 top-0 bottom-0 w-80 bg-gradient-to-b from-gray-900 to-blue-950 text-white z-40 shadow-2xl">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black">G</div>
              <div>
                <h1 className="text-2xl font-bold">Teacher Portal</h1>
                <p className="text-xs opacity-70">JHS 2A • Accra</p>
              </div>
            </div>

            <nav className="space-y-3">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${activeTab === item.id ? item.color ? item.color + ' shadow-xl' : 'bg-gradient-to-r from-green-500 to-teal-500 shadow-xl' : 'hover:bg-white/10'}`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon size={24} />
                    <span className="font-medium text-lg">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${item.color || 'bg-purple-500'} text-white`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="pl-80 pt-8 pr-8 pb-20">
          <div className="max-w-7xl mx-auto">
          
            {activeTab === 'assignments' && <AssignmentsTab />}
            {activeTab === 'analytics' && <AnalyticsTab />}
            {activeTab === 'liveclass' && <LiveClassTab />}
            {activeTab === 'schedule' && (
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-6xl font-bold mb-4">Weekly Schedule</h2>
                      <p className="text-2xl opacity-90">Drag to reschedule • Sync with Google Calendar</p>
                    </div>
                    <button onClick={syncWithGoogleCalendar} className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all shadow-xl">
                      <CalendarIcon size={28} /> Sync Calendar
                    </button>
                  </div>
                </div>

                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                      <div key={day} className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 text-center">
                          <h3 className="text-3xl font-bold">{day}</h3>
                        </div>
                        <SortableContext items={schedule.filter(s => s.day === day).map(s => s.id)} strategy={verticalListSortingStrategy}>
                          <div className="p-6 space-y-6 min-h-96">
                            {schedule.filter(s => s.day === day).map(event => (
                              <SortableScheduleItem key={event.id} event={event} />
                            ))}
                          </div>
                        </SortableContext>
                      </div>
                    ))}
                  </div>
                </DndContext>

                <div className="text-center py-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl text-white">
                  <h3 className="text-4xl font-bold">Drag any lesson to reschedule instantly</h3>
                  <p className="text-xl mt-4">Changes auto-save • Students & parents notified</p>
                </div>
              </div>
            )}
            {activeTab === 'messages' && <MessagesTab />}
            {activeTab === 'settings' && <SettingsTab />}
          </div>
        </div>
      </div>
    </>
  );
}