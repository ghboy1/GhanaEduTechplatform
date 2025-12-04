import React from 'react';

export default function ProgressBar({ percentage, label, color = 'from-green-500 to-emerald-500' }) {
  return (
    <div className="w-full">
      {label && <div className="text-sm text-gray-600 mb-2">{label}</div>}
      <div className="w-full bg-gray-200 rounded-full h-10 overflow-hidden shadow-inner">
        <div
          className={`h-full bg-gradient-to-r ${color} flex items-center justify-end pr-4 text-white font-bold transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        >
          <span className="drop-shadow-md">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}