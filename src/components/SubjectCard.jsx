import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function SubjectCard({ subject, onClick }) {
  return (
    <button
      onClick={() => onClick(subject)}
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${subject.color} p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
      
      <div className="relative z-10 text-left">
        <div className="text-7xl mb-4 opacity-90">{subject.icon}</div>
        <h3 className="text-3xl font-bold mb-3">{subject.name}</h3>
        <p className="text-lg opacity-90 mb-6">{subject.topics.length} Topics Available</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm opacity-80">Start Learning →</span>
          <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 text-9xl opacity-10">
        {subject.icon}
      </div>
    </button>
  );
}