import React, { useState } from 'react';
import { 
  Gamepad2, 
  Trophy, 
  Target, 
  Zap, 
  Star, 
  Award,
  Users,
  Brain,
  Sparkles,
  Play,
  CheckCircle2
} from 'lucide-react';

const GamifiedLearningPage = () => {
  const [activeTab, setActiveTab] = useState('activities');

  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Interactive Game-Based Learning',
      description: 'Students learn through engaging, interactive games that make complex concepts easy to understand and fun to explore.',
      color: 'blue'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Achievement System',
      description: 'Earn points, badges, and rewards for completing activities and mastering new skills.',
      color: 'yellow'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Personalized Learning Paths',
      description: 'Adaptive content that adjusts to each student\'s pace and learning style.',
      color: 'purple'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Challenges',
      description: 'Team-based activities that promote cooperation and healthy competition.',
      color: 'green'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Critical Thinking Skills',
      description: 'Problem-solving activities that develop analytical and reasoning abilities.',
      color: 'pink'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Instant Feedback',
      description: 'Real-time responses help students learn from mistakes and improve continuously.',
      color: 'indigo'
    }
  ];

  const activityTypes = [
    {
      title: 'Interactive Simulations',
      description: 'Explore 3D science concepts through hands-on virtual experiments',
      icon: '🔬',
      students: '2.5K+',
      completion: '94%'
    },
    {
      title: 'Challenge Levels',
      description: 'Progress through increasingly difficult challenges as you master topics',
      icon: '🎯',
      students: '3.2K+',
      completion: '88%'
    },
    {
      title: 'Quiz Battles',
      description: 'Compete with classmates in real-time quiz competitions',
      icon: '⚔️',
      students: '1.8K+',
      completion: '91%'
    },
    {
      title: 'Story-Based Learning',
      description: 'Learn through engaging narratives and character-driven adventures',
      icon: '📚',
      students: '2.1K+',
      completion: '96%'
    }
  ];

  const benefits = [
    {
      stat: '87%',
      label: 'Increased Engagement',
      description: 'Students show higher participation rates'
    },
    {
      stat: '92%',
      label: 'Improved Retention',
      description: 'Better knowledge retention over time'
    },
    {
      stat: '3.5x',
      label: 'Faster Learning',
      description: 'Accelerated learning compared to traditional methods'
    },
    {
      stat: '95%',
      label: 'Student Satisfaction',
      description: 'Students enjoy learning more'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      pink: 'bg-pink-100 text-pink-600 border-pink-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-pulse"
                style={{
                  width: Math.random() * 100 + 50 + 'px',
                  height: Math.random() * 100 + 50 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 2 + 's',
                  animationDuration: Math.random() * 3 + 2 + 's'
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Gamepad2 className="w-6 h-6" />
              <span className="font-semibold">Gamified Learning Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Make Learning an<br />
              <span className="text-yellow-300">Epic Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Transform education into an engaging game where students level up, earn rewards, and master concepts through interactive challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
              <Play className="w-5 h-5" />
              Start Learning Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <Award className="w-5 h-5" />
              View Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Gamified Learning Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining the power of gaming mechanics with educational content to create unforgettable learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-200"
            >
              <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mb-6 border-2`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Types */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Explore Learning Activities
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Diverse activity types designed to engage every type of learner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityTypes.map((activity, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">{activity.students}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-semibold">{activity.completion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Proven Results That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real data from schools using gamified learning approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="text-center bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                {benefit.stat}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {benefit.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-purple-100 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How Gamified Learning Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, effective approach to making learning engaging and fun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Path',
                description: 'Students select their learning journey and customize their avatar.',
                icon: <Target className="w-12 h-12" />
              },
              {
                step: '02',
                title: 'Complete Challenges',
                description: 'Engage with interactive activities, quizzes, and simulations.',
                icon: <Zap className="w-12 h-12" />
              },
              {
                step: '03',
                title: 'Earn Rewards',
                description: 'Collect points, unlock badges, and level up as you master topics.',
                icon: <Star className="w-12 h-12" />
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute -top-6 left-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="text-purple-600 mb-4 mt-4">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of educators who are already using gamified learning to engage and inspire their students.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Request a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamifiedLearningPage;