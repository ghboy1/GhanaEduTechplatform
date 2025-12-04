import React from 'react';

export default function TopicCard({ topic, onStart }) {
  const difficultyColor = {
    easy: 'bg-green-100 text-green-700 border-green-300',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    hard: 'bg-red-100 text-red-700 border-red-300'
  };

  return (
    <button
      onClick={() => onStart(topic)}
      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-ghana-gold text-left transform hover:-translate-y-1"
    >
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-bold text-gray-800 group-hover:text-ghana-green transition-colors">
          {topic.name}
        </h4>
        <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${difficultyColor[topic.difficulty]}`}>
          {topic.difficulty.toUpperCase()}
        </span>
      </div>
      
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <span className="px-3 py-1 bg-gray-100 rounded-full">{topic.level}</span>
        <span>• Click to begin quest</span>
      </div>

      <div className="mt-4 flex justify-end">
        <div className="text-ghana-gold text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </div>
      </div>
    </button>
  );
}