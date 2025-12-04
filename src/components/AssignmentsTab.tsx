// src/components/AssignmentsTab.tsx
'use client';

import React, { useState } from 'react';
import { Plus, Search, Filter, Clock, CheckCircle, AlertTriangle, Sparkles, Download, MoreVertical, Edit3, Trash2, Copy, Send } from 'lucide-react';

interface Assignment {
  id: number;
  title: string;
  subject: string;
  dueDate: string;
  dueTime: string;
  submitted: number;
  total: number;
  avgScore: number;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'active' | 'upcoming' | 'completed' | 'overdue';
  aiGenerated?: boolean;
}

export default function AssignmentsTab() {
  const [showAICreator, setShowAICreator] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const assignments: Assignment[] = [
    { id: 1, title: 'Linear Equations Mastery', subject: 'Mathematics', dueDate: 'Tomorrow', dueTime: '11:59 PM', submitted: 22, total: 25, avgScore: 78, difficulty: 'medium', status: 'active', aiGenerated: true },
    { id: 2, title: 'States of Matter Quiz', subject: 'Integrated Science', dueDate: 'In 3 days', dueTime: '2:00 PM', submitted: 8, total: 25, avgScore: 0, difficulty: 'hard', status: 'upcoming' },
    { id: 3, title: 'Ghana Independence Essay', subject: 'Social Studies', dueDate: 'Completed', dueTime: 'Dec 6', submitted: 25, total: 25, avgScore: 88, difficulty: 'easy', status: 'completed' },
    { id: 4, title: 'Algebraic Fractions', subject: 'Mathematics', dueDate: 'Overdue', dueTime: 'Yesterday', submitted: 12, total: 25, avgScore: 62, difficulty: 'hard', status: 'overdue' },
  ];

  const generateWithAI = async () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    await new Promise(r => setTimeout(r, 2200));
    alert(`AI Assignment Generated!\nTopic: "${aiPrompt}"\nSubject: Auto-detected\n10 questions ready`);
    setIsGenerating(false);
    setAiPrompt('');
    setShowAICreator(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'upcoming': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'completed': return 'bg-green-100 text-green-700 border-green-300';
      case 'overdue': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-emerald-100 text-emerald-700';
      case 'medium': return 'bg-amber-100 text-amber-700';
      case 'hard': return 'bg-rose-100 text-rose-700';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header + AI Creator */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex justify-between items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-4">Assignments Center</h2>
            <p className="text-xl opacity-90">Create, track, and analyze student work in real-time</p>
          </div>
          <button
            onClick={() => setShowAICreator(true)}
            className="bg-white text-purple-600 px-8 py-5 rounded-2xl font-bold text-xl flex items-center gap-4 hover:scale-105 transition-all shadow-2xl cursor-pointer"
          >
            <Sparkles size={32} />
            Create with AI
          </button>
        </div>
      </div>

      {/* AI Assignment Creator Modal */}
      {showAICreator && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl p-10">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold flex items-center gap-4">
                <Sparkles className="text-purple-600" size={36} />
                AI Assignment Generator
              </h3>
              <button onClick={() => setShowAICreator(false)} className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">
                X
              </button>
            </div>
            <input
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="e.g. Create a 10-question quiz on fractions for JHS 2 with word problems"
              className="w-full px-6 py-5 text-lg bg-gray-50 dark:bg-gray-700 rounded-2xl focus:ring-4 focus:ring-purple-500 focus:outline-none mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 bg-gray-200 dark:bg-gray-700 rounded-2xl font-bold">Cancel</button>
              <button
                onClick={generateWithAI}
                disabled={isGenerating}
                className="py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:scale-105 transition-all disabled:opacity-70 flex items-center justify-center gap-3"
              >
                {isGenerating ? 'Generating Magic...' : 'Generate Assignment'}
                {!isGenerating && <Sparkles size={24} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl p-8 shadow-xl">
          <h4 className="text-4xl font-black">42</h4>
          <p className="opacity-90">Active This Week</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-xl">
          <h4 className="text-4xl font-black">89%</h4>
          <p className="opacity-90">On-Time Submission</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-3xl p-8 shadow-xl">
          <h4 className="text-4xl font-black">14</h4>
          <p className="opacity-90">AI-Generated</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-8 shadow-xl">
          <h4 className="text-4xl font-black">94%</h4>
          <p className="opacity-90">Class Average</p>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-6">
        {assignments.map(assignment => (
          <div key={assignment.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg ${
                  assignment.status === 'overdue' ? 'bg-red-500' :
                  assignment.status === 'completed' ? 'bg-green-500' :
                  assignment.status === 'active' ? 'bg-blue-500' : 'bg-purple-500'
                }`}>
                  {assignment.aiGenerated ? 'AI' : 'HW'}
                </div>
                <div>
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    {assignment.title}
                    {assignment.aiGenerated && <Sparkles className="text-purple-600" size={28} />}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{assignment.subject} • Due {assignment.dueDate} at {assignment.dueTime}</p>
                </div>
              </div>
              <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl"><MoreVertical /></button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold">{assignment.submitted}/{assignment.total}</div>
                <p className="text-sm text-gray-600">Submitted</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold">{assignment.avgScore || '--'}%</div>
                <p className="text-sm text-gray-600">Average</p>
              </div>
              <div className={`rounded-2xl p-5 text-center ${getDifficultyColor(assignment.difficulty)}`}>
                <div className="text-2xl font-bold uppercase">{assignment.difficulty}</div>
                <p className="text-sm">Difficulty</p>
              </div>
              <div className={`rounded-2xl p-5 text-center ${getStatusColor(assignment.status)} border-2`}>
                <div className="text-2xl font-bold uppercase">{assignment.status}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-5 text-center">
                <Download size={32} className="mx-auto mb-2 text-purple-600" />
                <p className="text-sm font-bold">Download</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold hover:scale-105 transition-all">
                View Submissions
              </button>
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-2xl font-bold hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all flex items-center gap-2">
                <Send size={20} /> Reminder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}