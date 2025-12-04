import React from 'react';

export default function StatCard({ icon, value, label, change }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        {change && (
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
            change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}>
            {change}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}