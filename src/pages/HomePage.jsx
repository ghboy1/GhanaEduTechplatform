import React from 'react';
import { BookOpen, Users, Heart, School } from 'lucide-react';

function HomePage({ onSelectUserType }) {
  const userTypes = [
    {
      id: 'student',
      title: 'Student Portal',
      description: 'Learn, practice, and compete with students across Ghana',
      icon: <BookOpen size={64} />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Interactive Lessons', 'Quizzes & Games', 'National Leaderboard', 'Earn Badges']
    },
    {
      id: 'teacher',
      title: 'Teacher Dashboard',
      description: 'Manage classes, create assignments, and track student progress',
      icon: <School size={64} />,
      color: 'from-green-500 to-emerald-500',
      features: ['Class Management', 'Create Assignments', 'Performance Analytics', 'Parent Communication']
    },
    {
      id: 'parent',
      title: 'Parent Portal',
      description: 'Monitor your child\'s learning journey and communicate with teachers',
      icon: <Heart size={64} />,
      color: 'from-purple-500 to-pink-500',
      features: ['Progress Tracking', 'Teacher Messages', 'Performance Reports', 'Study Recommendations']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ghana-green via-ghana-gold to-ghana-red text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-6">🇬🇭</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ghana Learning Platform
          </h1>
          <p className="text-2xl mb-8 opacity-90">
            Building Tomorrow's Leaders Today
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <div className="text-3xl font-bold">1M+</div>
              <div>Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5K+</div>
              <div>Schools</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div>Teachers</div>
            </div>
          </div>
        </div>
      </div>

      {/* User Type Selection */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Portal
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {userTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onSelectUserType(type.id)}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                {type.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              
              <div className="space-y-2 text-left">
                {type.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-ghana-green"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 text-ghana-green font-semibold flex items-center justify-center gap-2">
                Enter Portal →
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Platform?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Aligned with GES Curriculum', desc: 'Content designed to match Ghana Education Service standards' },
              { icon: '🏆', title: 'Gamified Learning', desc: 'Earn points, badges, and compete nationally' },
              { icon: '📱', title: 'Mobile Friendly', desc: 'Learn anywhere, anytime on any device' },
              { icon: '🔌', title: 'Offline Access', desc: 'Download lessons and study without internet' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🇬🇭</div>
          <h3 className="text-2xl font-bold mb-2">Ghana Learning Platform</h3>
          <p className="text-gray-400 mb-6">
            Proudly Ghanaian • Building Tomorrow's Leaders
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2025 Ghana Learning Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;