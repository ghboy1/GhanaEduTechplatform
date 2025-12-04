import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Trophy, TrendingUp, Globe, Zap, Award, Target, Brain, Sparkles, Medal, Crown, Star, ChevronRight, Search, Filter, BarChart3, UserPlus, School, Home, Settings, Menu, X } from 'lucide-react';

// ============================================
// COMPREHENSIVE CURRICULUM DATA
// ============================================
const SUBJECTS = {
  mathematics: {
    id: 'math',
    name: 'Mathematics',
    icon: '🔢',
    color: 'from-blue-500 to-cyan-500',
    topics: [
      { id: 'm1', name: 'Numbers & Operations', level: 'JHS1', difficulty: 'easy' },
      { id: 'm2', name: 'Algebra & Equations', level: 'JHS2', difficulty: 'medium' },
      { id: 'm3', name: 'Geometry & Measurement', level: 'JHS1', difficulty: 'medium' },
      { id: 'm4', name: 'Statistics & Probability', level: 'JHS3', difficulty: 'hard' },
      { id: 'm5', name: 'Fractions & Decimals', level: 'JHS1', difficulty: 'easy' },
    ]
  },
  science: {
    id: 'sci',
    name: 'Integrated Science',
    icon: '🔬',
    color: 'from-green-500 to-emerald-500',
    topics: [
      { id: 's1', name: 'Matter & Materials', level: 'JHS1', difficulty: 'easy' },
      { id: 's2', name: 'Living Organisms', level: 'JHS1', difficulty: 'medium' },
      { id: 's3', name: 'Energy & Forces', level: 'JHS2', difficulty: 'medium' },
      { id: 's4', name: 'Earth & Space', level: 'JHS2', difficulty: 'hard' },
      { id: 's5', name: 'Chemical Reactions', level: 'JHS3', difficulty: 'hard' },
    ]
  },
  english: {
    id: 'eng',
    name: 'English Language',
    icon: '📚',
    color: 'from-purple-500 to-pink-500',
    topics: [
      { id: 'e1', name: 'Grammar & Punctuation', level: 'JHS1', difficulty: 'easy' },
      { id: 'e2', name: 'Reading Comprehension', level: 'JHS2', difficulty: 'medium' },
      { id: 'e3', name: 'Writing Skills', level: 'JHS2', difficulty: 'medium' },
      { id: 'e4', name: 'Literature & Poetry', level: 'JHS3', difficulty: 'hard' },
      { id: 'e5', name: 'Oral Communication', level: 'JHS1', difficulty: 'easy' },
    ]
  },
  social: {
    id: 'soc',
    name: 'Social Studies',
    icon: '🌍',
    color: 'from-yellow-500 to-orange-500',
    topics: [
      { id: 'ss1', name: 'Ghana History', level: 'JHS1', difficulty: 'easy' },
      { id: 'ss2', name: 'Government & Citizenship', level: 'JHS2', difficulty: 'medium' },
      { id: 'ss3', name: 'Geography of Ghana', level: 'JHS1', difficulty: 'medium' },
      { id: 'ss4', name: 'Economics & Trade', level: 'JHS3', difficulty: 'hard' },
      { id: 'ss5', name: 'Culture & Heritage', level: 'JHS1', difficulty: 'easy' },
    ]
  },
  ict: {
    id: 'ict',
    name: 'ICT',
    icon: '💻',
    color: 'from-indigo-500 to-blue-500',
    topics: [
      { id: 'i1', name: 'Computer Basics', level: 'JHS1', difficulty: 'easy' },
      { id: 'i2', name: 'Internet & Digital Citizenship', level: 'JHS2', difficulty: 'medium' },
      { id: 'i3', name: 'Programming Fundamentals', level: 'JHS3', difficulty: 'hard' },
      { id: 'i4', name: 'Spreadsheets & Data', level: 'JHS2', difficulty: 'medium' },
      { id: 'i5', name: 'Digital Content Creation', level: 'JHS2', difficulty: 'medium' },
    ]
  },
  french: {
    id: 'fr',
    name: 'French',
    icon: '🇫🇷',
    color: 'from-red-500 to-rose-500',
    topics: [
      { id: 'f1', name: 'Basic Greetings & Introduction', level: 'JHS1', difficulty: 'easy' },
      { id: 'f2', name: 'Grammar & Verbs', level: 'JHS2', difficulty: 'medium' },
      { id: 'f3', name: 'Conversation Skills', level: 'JHS2', difficulty: 'medium' },
      { id: 'f4', name: 'French Culture', level: 'JHS3', difficulty: 'hard' },
      { id: 'f5', name: 'Reading & Writing', level: 'JHS3', difficulty: 'hard' },
    ]
  }
};

// Sample questions for demo
const SAMPLE_QUESTIONS = {
  m1: {
    question: "What is 25 × 4?",
    options: ["90", "100", "110", "120"],
    correct: 1,
    explanation: "25 × 4 = 100. Think of it as 25 × 2 = 50, then double it to get 100."
  },
  s1: {
    question: "What are the three states of matter?",
    options: ["Solid, Liquid, Gas", "Hot, Cold, Warm", "Big, Medium, Small", "Heavy, Light, Dense"],
    correct: 0,
    explanation: "Matter exists in three main states: Solid (fixed shape), Liquid (takes container shape), and Gas (fills space)."
  },
  e1: {
    question: "Which is the correct sentence?",
    options: ["He don't like rice", "He doesn't likes rice", "He doesn't like rice", "He not like rice"],
    correct: 2,
    explanation: "The correct form is 'He doesn't like rice' - using 'doesn't' (does not) with the base form of the verb."
  }
};

function GhanaLearningPlatform() {
  // Core state
  const [view, setView] = useState('home'); // home, subjects, learning, leaderboard, profile
  const [userType, setUserType] = useState('student'); // student, teacher, parent
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);

  // User data (in production, this would come from auth)
  const [userData, setUserData] = useState({
    name: 'Kwame Mensah',
    school: 'Achimota School',
    region: 'Greater Accra',
    level: 'JHS 2',
    points: 2450,
    badges: 12,
    streak: 7,
    rank: 156,
    completedTopics: []
  });

  // Leaderboard data (would come from shared storage)
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: 'Abena Osei', school: 'Wesley Girls High', region: 'Ashanti', points: 5890, avatar: '👩' },
    { rank: 2, name: 'Kofi Asante', school: 'Prempeh College', region: 'Ashanti', points: 5670, avatar: '👨' },
    { rank: 3, name: 'Ama Serwaa', school: 'Holy Child School', region: 'Central', points: 5420, avatar: '👧' },
    { rank: 4, name: 'Kwesi Boateng', school: 'Mfantsipim School', region: 'Central', points: 4980, avatar: '👦' },
    { rank: 5, name: 'Akosua Darko', school: 'St. Roses School', region: 'Ashanti', points: 4750, avatar: '👩' },
  ]);

  // National stats
  const [nationalStats, setNationalStats] = useState({
    totalStudents: 45678,
    activeToday: 12340,
    questionsAnswered: 1234567,
    topRegion: 'Ashanti',
    topSchool: 'Achimota School'
  });

  // Load persistent data on mount
  useEffect(() => {
    loadUserProgress();
    loadLeaderboard();
  }, []);

  const loadUserProgress = async () => {
    try {
      const result = await window.storage.get('user-progress');
      if (result) {
        const progress = JSON.parse(result.value);
        setUserData(prev => ({ ...prev, ...progress }));
      }
    } catch (error) {
      console.log('No saved progress found, starting fresh');
    }
  };

  const loadLeaderboard = async () => {
    try {
      const result = await window.storage.get('national-leaderboard', true);
      if (result) {
        setLeaderboard(JSON.parse(result.value));
      }
    } catch (error) {
      console.log('Loading default leaderboard');
    }
  };

  const saveProgress = async () => {
    try {
      await window.storage.set('user-progress', JSON.stringify({
        points: userData.points,
        badges: userData.badges,
        streak: userData.streak,
        completedTopics: userData.completedTopics
      }));
    } catch (error) {
      console.error('Failed to save progress');
    }
  };

  const updateLeaderboard = async (newScore) => {
    const newEntry = {
      rank: 0,
      name: userData.name,
      school: userData.school,
      region: userData.region,
      points: newScore,
      avatar: '🎓'
    };

    const updated = [...leaderboard, newEntry]
      .sort((a, b) => b.points - a.points)
      .slice(0, 100)
      .map((entry, idx) => ({ ...entry, rank: idx + 1 }));

    try {
      await window.storage.set('national-leaderboard', JSON.stringify(updated), true);
      setLeaderboard(updated);
    } catch (error) {
      console.error('Failed to update leaderboard');
    }
  };

  const handleAnswerQuestion = (isCorrect, points) => {
    if (isCorrect) {
      const newPoints = userData.points + points;
      const newStreak = userData.streak + 1;
      setUserData(prev => ({
        ...prev,
        points: newPoints,
        streak: newStreak,
        badges: newStreak % 10 === 0 ? prev.badges + 1 : prev.badges
      }));
      updateLeaderboard(newPoints);
      saveProgress();
    } else {
      setUserData(prev => ({ ...prev, streak: 0 }));
      saveProgress();
    }
  };

  // ============================================
  // RENDER COMPONENTS
  // ============================================

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🇬🇭</div>
            <div>
              <h1 className="text-xl font-bold">Ghana Learning Platform</h1>
              <p className="text-xs opacity-90">Building Tomorrow's Leaders</p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-6">
            <NavButton icon={<Home size={20} />} label="Home" active={view === 'home'} onClick={() => setView('home')} />
            <NavButton icon={<BookOpen size={20} />} label="Subjects" active={view === 'subjects'} onClick={() => setView('subjects')} />
            <NavButton icon={<Trophy size={20} />} label="Leaderboard" active={view === 'leaderboard'} onClick={() => setView('leaderboard')} />
            <NavButton icon={<User size={20} />} label="Profile" active={view === 'profile'} onClick={() => setView('profile')} />
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2">
            <NavButton icon={<Home size={20} />} label="Home" active={view === 'home'} onClick={() => { setView('home'); setMenuOpen(false); }} />
            <NavButton icon={<BookOpen size={20} />} label="Subjects" active={view === 'subjects'} onClick={() => { setView('subjects'); setMenuOpen(false); }} />
            <NavButton icon={<Trophy size={20} />} label="Leaderboard" active={view === 'leaderboard'} onClick={() => { setView('leaderboard'); setMenuOpen(false); }} />
          </div>
        )}
      </div>
    </nav>
  );

  const NavButton = ({ icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        active ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  const HomePage = () => (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-yellow-500 to-red-600 rounded-3xl p-12 text-white mb-8 shadow-2xl">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-4">Welcome back, {userData.name}! 🎓</h2>
          <p className="text-xl opacity-90 mb-6">
            Continue your learning journey and climb the national leaderboard!
          </p>
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={() => setView('subjects')}
              className="bg-white text-green-700 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Start Learning →
            </button>
            <button 
              onClick={() => setView('leaderboard')}
              className="bg-white/20 backdrop-blur px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all"
            >
              View Rankings 🏆
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Star className="text-yellow-500" />} value={userData.points} label="Total Points" />
        <StatCard icon={<Zap className="text-orange-500" />} value={`${userData.streak} days`} label="Streak" />
        <StatCard icon={<Award className="text-blue-500" />} value={userData.badges} label="Badges" />
        <StatCard icon={<TrendingUp className="text-green-500" />} value={`#${userData.rank}`} label="National Rank" />
      </div>

      {/* National Impact */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Globe className="text-green-600" />
          National Impact
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <ImpactCard 
            value={nationalStats.totalStudents.toLocaleString()} 
            label="Students Learning"
            icon="👥"
          />
          <ImpactCard 
            value={nationalStats.activeToday.toLocaleString()} 
            label="Active Today"
            icon="📱"
          />
          <ImpactCard 
            value={(nationalStats.questionsAnswered / 1000).toFixed(0) + 'K'} 
            label="Questions Answered"
            icon="✅"
          />
        </div>
      </div>

      {/* Subject Quick Access */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Continue Learning</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.values(SUBJECTS).slice(0, 6).map(subject => (
            <button
              key={subject.id}
              onClick={() => {
                setSelectedSubject(subject);
                setView('subjects');
              }}
              className={`p-6 rounded-xl bg-gradient-to-br ${subject.color} text-white hover:scale-105 transition-transform shadow-lg`}
            >
              <div className="text-4xl mb-2">{subject.icon}</div>
              <div className="font-semibold">{subject.name}</div>
              <div className="text-sm opacity-90">{subject.topics.length} Topics</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const SubjectsView = () => (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">All Subjects</h2>
        <p className="text-gray-600 text-lg">Aligned with Ghana Education Service Curriculum</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search subjects or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
            />
          </div>
        </div>
        <select
          value={filterLevel}
          onChange={(e) => setFilterLevel(e.target.value)}
          className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
        >
          <option value="all">All Levels</option>
          <option value="JHS1">JHS 1</option>
          <option value="JHS2">JHS 2</option>
          <option value="JHS3">JHS 3</option>
        </select>
      </div>

      {/* Subjects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(SUBJECTS).map(subject => (
          <SubjectCard key={subject.id} subject={subject} onClick={setSelectedSubject} />
        ))}
      </div>

      {/* Selected Subject Details */}
      {selectedSubject && (
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">{selectedSubject.icon}</div>
            <div>
              <h3 className="text-3xl font-bold">{selectedSubject.name}</h3>
              <p className="text-gray-600">Choose a topic to start learning</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {selectedSubject.topics
              .filter(topic => filterLevel === 'all' || topic.level === filterLevel)
              .map(topic => (
                <TopicCard key={topic.id} topic={topic} subject={selectedSubject} onStart={setSelectedTopic} />
              ))}
          </div>
        </div>
      )}

      {/* Learning Interface */}
      {selectedTopic && (
        <LearningInterface 
          topic={selectedTopic} 
          subject={selectedSubject}
          onAnswer={handleAnswerQuestion}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </div>
  );

  const LeaderboardView = () => (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">🏆 National Leaderboard</h2>
        <p className="text-gray-600 text-lg">Top students across Ghana</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {leaderboard.slice(0, 3).map((student, idx) => (
          <div
            key={student.rank}
            className={`bg-gradient-to-br ${
              idx === 0 ? 'from-yellow-400 to-yellow-600' :
              idx === 1 ? 'from-gray-300 to-gray-500' :
              'from-orange-400 to-orange-600'
            } text-white rounded-2xl p-6 text-center ${idx === 0 ? 'md:col-span-3 md:order-first' : ''}`}
          >
            <div className="text-6xl mb-2">
              {idx === 0 ? <Crown className="inline" /> : idx === 1 ? <Medal className="inline" /> : <Award className="inline" />}
            </div>
            <div className="text-5xl mb-2">{student.avatar}</div>
            <h3 className="text-2xl font-bold mb-1">{student.name}</h3>
            <p className="opacity-90 mb-2">{student.school}</p>
            <p className="text-sm opacity-80 mb-3">{student.region}</p>
            <div className="text-3xl font-bold">{student.points.toLocaleString()} pts</div>
          </div>
        ))}
      </div>

      {/* Rest of Leaderboard */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 bg-green-600 text-white font-semibold flex items-center gap-4">
          <span className="w-12">Rank</span>
          <span className="flex-1">Student</span>
          <span className="w-32 text-right">Points</span>
        </div>
        {leaderboard.slice(3).map((student) => (
          <div key={student.rank} className="p-4 border-b hover:bg-gray-50 flex items-center gap-4">
            <span className="w-12 font-bold text-gray-600">#{student.rank}</span>
            <div className="flex-1">
              <div className="font-semibold">{student.name}</div>
              <div className="text-sm text-gray-600">{student.school} • {student.region}</div>
            </div>
            <span className="w-32 text-right font-bold text-green-600">{student.points.toLocaleString()}</span>
          </div>
        ))}
      </div>

      {/* Your Rank */}
      <div className="mt-8 bg-gradient-to-r from-green-600 to-yellow-500 text-white rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm opacity-90">Your National Rank</div>
            <div className="text-4xl font-bold">#{userData.rank}</div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90">Your Points</div>
            <div className="text-4xl font-bold">{userData.points}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const LearningInterface = ({ topic, subject, onAnswer, onClose }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const question = SAMPLE_QUESTIONS[topic.id] || SAMPLE_QUESTIONS.m1;

    const handleAnswer = (index) => {
      if (showResult) return;
      
      setSelectedAnswer(index);
      setShowResult(true);
      const isCorrect = index === question.correct;
      
      if (isCorrect) {
        setScore(prev => prev + 100);
        onAnswer(true, 100);
      } else {
        onAnswer(false, 0);
      }
    };

    const handleNext = () => {
      setSelectedAnswer(null);
      setShowResult(false);
      // In full version, load next question
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Header */}
          <div className={`bg-gradient-to-r ${subject.color} text-white p-8`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">{topic.name}</h3>
                <p className="opacity-90">{subject.name} • {topic.level}</p>
              </div>
              <button 
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Score: {score}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full capitalize">{topic.difficulty}</span>
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-2">Question 1 of 1</div>
              <h4 className="text-2xl font-bold mb-6">{question.question}</h4>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                      showResult
                        ? index === question.correct
                          ? 'border-green-500 bg-green-50'
                          : index === selectedAnswer
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : 'border-gray-200 hover:border-green-500 hover:bg-green-50'
                    }`}
                  >
                    <span className="font-semibold">{String.fromCharCode(65 + index)}.</span> {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            {showResult && (
              <div className={`p-6 rounded-xl ${selectedAnswer === question.correct ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
                <div className="flex items-center gap-3 mb-3">
                  {selectedAnswer === question.correct ? (
                    <>
                      <div className="text-3xl">✅</div>
                      <div>
                        <div className="font-bold text-green-700 text-xl">Correct!</div>
                        <div className="text-green-600">+100 points</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-3xl">❌</div>
                      <div>
                        <div className="font-bold text-red-700 text-xl">Incorrect</div>
                        <div className="text-red-600">Try again next time</div>
                      </div>
                    </>
                  )}
                </div>
                <p className="text-gray-700">{question.explanation}</p>
              </div>
            )}

            {/* Actions */}
            {showResult && (
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  Next Question →
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50"
                >
                  Finish
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Helper Components
  const StatCard = ({ icon, value, label }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="text-3xl font-bold">{value}</span>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );

  const ImpactCard = ({ value, label, icon }) => (
    <div className="text-center p-6 bg-gray-50 rounded-xl">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-green-600 mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );

  const SubjectCard = ({ subject, onClick }) => (
    <button
      onClick={() => onClick(subject)}
      className={`p-6 rounded-2xl bg-gradient-to-br ${subject.color} text-white hover:scale-105 transition-transform shadow-xl`}
    >
      <div className="text-5xl mb-3">{subject.icon}</div>
      <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
      <p className="text-sm opacity-90">{subject.topics.length} topics available</p>
      <div className="mt-4 flex justify-end">
        <ChevronRight size={24} />
      </div>
    </button>
  );

  const TopicCard = ({ topic, subject, onStart }) => (
    <button
      onClick={() => onStart(topic)}
      className="p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-lg">{topic.name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${
          topic.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
          topic.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {topic.difficulty}
        </span>
      </div>
      <div className="text-sm text-gray-600">{topic.level}</div>
    </button>
  );

  const User = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  // Main Render
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {view === 'home' && <HomePage />}
      {view === 'subjects' && <SubjectsView />}
      {view === 'leaderboard' && <LeaderboardView />}
      {view === 'profile' && <HomePage />}
    </div>
  );
}

export default GhanaLearningPlatform;