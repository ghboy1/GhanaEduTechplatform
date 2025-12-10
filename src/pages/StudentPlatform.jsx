import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BookOpen, Users, Trophy, TrendingUp, Globe, Zap, Award, Target, Brain, Sparkles, Medal, Crown, Star, ChevronRight, Search, Filter, BarChart3, UserPlus, School, Home, Settings, Menu, X, Check, Lock, Play, Clock, Calendar, ArrowRight, BookMarked, Lightbulb, RefreshCw } from 'lucide-react';

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
      { id: 'm1', name: 'Numbers & Operations', level: 'JHS1', difficulty: 'easy', completed: false, questions: 50 },
      { id: 'm2', name: 'Algebra & Equations', level: 'JHS2', difficulty: 'medium', completed: false, questions: 45 },
      { id: 'm3', name: 'Geometry & Measurement', level: 'JHS1', difficulty: 'medium', completed: false, questions: 40 },
      { id: 'm4', name: 'Statistics & Probability', level: 'JHS3', difficulty: 'hard', completed: false, questions: 35 },
      { id: 'm5', name: 'Fractions & Decimals', level: 'JHS1', difficulty: 'easy', completed: false, questions: 48 },
    ]
  },
  science: {
    id: 'sci',
    name: 'Integrated Science',
    icon: '🔬',
    color: 'from-green-500 to-emerald-500',
    topics: [
      { id: 's1', name: 'Matter & Materials', level: 'JHS1', difficulty: 'easy', completed: false, questions: 42 },
      { id: 's2', name: 'Living Organisms', level: 'JHS1', difficulty: 'medium', completed: false, questions: 38 },
      { id: 's3', name: 'Energy & Forces', level: 'JHS2', difficulty: 'medium', completed: false, questions: 44 },
      { id: 's4', name: 'Earth & Space', level: 'JHS2', difficulty: 'hard', completed: false, questions: 36 },
      { id: 's5', name: 'Chemical Reactions', level: 'JHS3', difficulty: 'hard', completed: false, questions: 40 },
    ]
  },
  english: {
    id: 'eng',
    name: 'English Language',
    icon: '📚',
    color: 'from-purple-500 to-pink-500',
    topics: [
      { id: 'e1', name: 'Grammar & Punctuation', level: 'JHS1', difficulty: 'easy', completed: false, questions: 55 },
      { id: 'e2', name: 'Reading Comprehension', level: 'JHS2', difficulty: 'medium', completed: false, questions: 32 },
      { id: 'e3', name: 'Writing Skills', level: 'JHS2', difficulty: 'medium', completed: false, questions: 28 },
      { id: 'e4', name: 'Literature & Poetry', level: 'JHS3', difficulty: 'hard', completed: false, questions: 30 },
      { id: 'e5', name: 'Oral Communication', level: 'JHS1', difficulty: 'easy', completed: false, questions: 25 },
    ]
  },
  social: {
    id: 'soc',
    name: 'Social Studies',
    icon: '🌍',
    color: 'from-yellow-500 to-orange-500',
    topics: [
      { id: 'ss1', name: 'Ghana History', level: 'JHS1', difficulty: 'easy', completed: false, questions: 46 },
      { id: 'ss2', name: 'Government & Citizenship', level: 'JHS2', difficulty: 'medium', completed: false, questions: 38 },
      { id: 'ss3', name: 'Geography of Ghana', level: 'JHS1', difficulty: 'medium', completed: false, questions: 41 },
      { id: 'ss4', name: 'Economics & Trade', level: 'JHS3', difficulty: 'hard', completed: false, questions: 34 },
      { id: 'ss5', name: 'Culture & Heritage', level: 'JHS1', difficulty: 'easy', completed: false, questions: 39 },
    ]
  },
  ict: {
    id: 'ict',
    name: 'ICT',
    icon: '💻',
    color: 'from-indigo-500 to-blue-500',
    topics: [
      { id: 'i1', name: 'Computer Basics', level: 'JHS1', difficulty: 'easy', completed: false, questions: 43 },
      { id: 'i2', name: 'Internet & Digital Citizenship', level: 'JHS2', difficulty: 'medium', completed: false, questions: 37 },
      { id: 'i3', name: 'Programming Fundamentals', level: 'JHS3', difficulty: 'hard', completed: false, questions: 29 },
      { id: 'i4', name: 'Spreadsheets & Data', level: 'JHS2', difficulty: 'medium', completed: false, questions: 35 },
      { id: 'i5', name: 'Digital Content Creation', level: 'JHS2', difficulty: 'medium', completed: false, questions: 31 },
    ]
  },
  french: {
    id: 'fr',
    name: 'French',
    icon: '🇫🇷',
    color: 'from-red-500 to-rose-500',
    topics: [
      { id: 'f1', name: 'Basic Greetings & Introduction', level: 'JHS1', difficulty: 'easy', completed: false, questions: 40 },
      { id: 'f2', name: 'Grammar & Verbs', level: 'JHS2', difficulty: 'medium', completed: false, questions: 44 },
      { id: 'f3', name: 'Conversation Skills', level: 'JHS2', difficulty: 'medium', completed: false, questions: 36 },
      { id: 'f4', name: 'French Culture', level: 'JHS3', difficulty: 'hard', completed: false, questions: 28 },
      { id: 'f5', name: 'Reading & Writing', level: 'JHS3', difficulty: 'hard', completed: false, questions: 33 },
    ]
  }
};

// Enhanced question bank with multiple questions per topic
const QUESTION_BANK = {
  m1: [
    {
      question: "What is 25 × 4?",
      options: ["90", "100", "110", "120"],
      correct: 1,
      explanation: "25 × 4 = 100. Think of it as 25 × 2 = 50, then double it to get 100."
    },
    {
      question: "If you have 3,456, what digit is in the hundreds place?",
      options: ["3", "4", "5", "6"],
      correct: 1,
      explanation: "In 3,456, the digit 4 is in the hundreds place (reading from right: ones, tens, hundreds, thousands)."
    },
    {
      question: "What is 156 ÷ 12?",
      options: ["11", "12", "13", "14"],
      correct: 2,
      explanation: "156 ÷ 12 = 13. You can verify: 12 × 13 = 156."
    }
  ],
  s1: [
    {
      question: "What are the three states of matter?",
      options: ["Solid, Liquid, Gas", "Hot, Cold, Warm", "Big, Medium, Small", "Heavy, Light, Dense"],
      correct: 0,
      explanation: "Matter exists in three main states: Solid (fixed shape), Liquid (takes container shape), and Gas (fills space)."
    },
    {
      question: "Which of these is a chemical change?",
      options: ["Ice melting", "Paper burning", "Sugar dissolving", "Water boiling"],
      correct: 1,
      explanation: "Burning paper is a chemical change because it creates new substances (ash, smoke). The others are physical changes."
    }
  ],
  e1: [
    {
      question: "Which is the correct sentence?",
      options: ["He don't like rice", "He doesn't likes rice", "He doesn't like rice", "He not like rice"],
      correct: 2,
      explanation: "The correct form is 'He doesn't like rice' - using 'doesn't' (does not) with the base form of the verb."
    },
    {
      question: "What punctuation mark ends a question?",
      options: ["Period (.)", "Question mark (?)", "Exclamation mark (!)", "Comma (,)"],
      correct: 1,
      explanation: "Questions always end with a question mark (?) to show that an answer is expected."
    }
  ]
};

function GhanaLearningPlatform() {
  // Core state
  const [view, setView] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  // User data
  const [userData, setUserData] = useState({
    name: 'Kwame Mensah',
    school: 'Achimota School',
    region: 'Greater Accra',
    level: 'JHS 2',
    points: 2450,
    badges: 12,
    streak: 7,
    rank: 156,
    completedTopics: [],
    totalQuestionsAnswered: 234,
    accuracy: 78
  });

  // Leaderboard data
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

  // Load data on mount
  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    setLoading(true);
    await Promise.all([
      loadUserProgress(),
      loadLeaderboard()
    ]);
    setLoading(false);
  };

  const loadUserProgress = async () => {
    try {
      const result = await window.storage.get('user-progress');
      if (result) {
        const progress = JSON.parse(result.value);
        setUserData(prev => ({ ...prev, ...progress }));
      }
    } catch (error) {
      console.log('Starting fresh - no saved progress');
    }
  };

  const loadLeaderboard = async () => {
    try {
      const result = await window.storage.get('national-leaderboard', true);
      if (result) {
        setLeaderboard(JSON.parse(result.value));
      }
    } catch (error) {
      console.log('Using default leaderboard');
    }
  };

  const saveProgress = useCallback(async () => {
    try {
      await window.storage.set('user-progress', JSON.stringify({
        points: userData.points,
        badges: userData.badges,
        streak: userData.streak,
        completedTopics: userData.completedTopics,
        totalQuestionsAnswered: userData.totalQuestionsAnswered,
        accuracy: userData.accuracy
      }));
    } catch (error) {
      console.error('Failed to save progress');
    }
  }, [userData]);

  const updateLeaderboard = useCallback(async (newScore) => {
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
  }, [leaderboard, userData]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAnswerQuestion = useCallback((isCorrect, points) => {
    if (isCorrect) {
      const newPoints = userData.points + points;
      const newStreak = userData.streak + 1;
      const newTotal = userData.totalQuestionsAnswered + 1;
      
      setUserData(prev => ({
        ...prev,
        points: newPoints,
        streak: newStreak,
        totalQuestionsAnswered: newTotal,
        badges: newStreak % 10 === 0 ? prev.badges + 1 : prev.badges
      }));
      
      updateLeaderboard(newPoints);
      saveProgress();
      showNotification(`+${points} points! 🎉`, 'success');
    } else {
      setUserData(prev => ({ 
        ...prev, 
        streak: 0,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + 1
      }));
      saveProgress();
      showNotification('Keep trying! 💪', 'info');
    }
  }, [userData, updateLeaderboard, saveProgress]);

  // Filtered subjects based on search and filters
  const filteredSubjects = useMemo(() => {
    return Object.values(SUBJECTS).map(subject => ({
      ...subject,
      topics: subject.topics.filter(topic => {
        const matchesSearch = topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            subject.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = filterLevel === 'all' || topic.level === filterLevel;
        const matchesDifficulty = filterDifficulty === 'all' || topic.difficulty === filterDifficulty;
        return matchesSearch && matchesLevel && matchesDifficulty;
      })
    })).filter(subject => subject.topics.length > 0 || searchTerm === '');
  }, [searchTerm, filterLevel, filterDifficulty]);

  // ============================================
  // COMPONENTS
  // ============================================

  const Notification = () => {
    if (!notification) return null;
    
    const bgColor = notification.type === 'success' ? 'bg-green-500' : 
                    notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    
    return (
      <div className={`fixed top-20 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in`}>
        {notification.message}
      </div>
    );
  };

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            aria-label="Go to homepage"
          >
            <div className="text-3xl" role="img" aria-label="Ghana flag">🇬🇭</div>
            <div>
              <h1 className="text-xl font-bold">Ghana Learning Platform</h1>
              <p className="text-xs opacity-90 hidden sm:block">Building Tomorrow's Leaders</p>
            </div>
          </button>
          
          <div className="hidden md:flex gap-6">
            <NavButton icon={<Home size={20} />} label="Home" active={view === 'home'} onClick={() => setView('home')} />
            <NavButton icon={<BookOpen size={20} />} label="Subjects" active={view === 'subjects'} onClick={() => setView('subjects')} />
            <NavButton icon={<Trophy size={20} />} label="Leaderboard" active={view === 'leaderboard'} onClick={() => setView('leaderboard')} />
            <NavButton icon={<BarChart3 size={20} />} label="Progress" active={view === 'progress'} onClick={() => setView('progress')} />
          </div>

          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 pb-2" role="menu">
            <NavButton icon={<Home size={20} />} label="Home" active={view === 'home'} onClick={() => { setView('home'); setMenuOpen(false); }} />
            <NavButton icon={<BookOpen size={20} />} label="Subjects" active={view === 'subjects'} onClick={() => { setView('subjects'); setMenuOpen(false); }} />
            <NavButton icon={<Trophy size={20} />} label="Leaderboard" active={view === 'leaderboard'} onClick={() => { setView('leaderboard'); setMenuOpen(false); }} />
            <NavButton icon={<BarChart3 size={20} />} label="Progress" active={view === 'progress'} onClick={() => { setView('progress'); setMenuOpen(false); }} />
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
      role="menuitem"
      aria-current={active ? 'page' : undefined}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  const HomePage = () => (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-yellow-500 to-red-600 rounded-3xl p-8 md:p-12 text-white mb-8 shadow-2xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome back, {userData.name}! 🎓</h2>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Continue your learning journey and climb the national leaderboard!
          </p>
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={() => setView('subjects')}
              className="bg-white text-green-700 px-6 md:px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
            >
              Start Learning <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setView('leaderboard')}
              className="bg-white/20 backdrop-blur px-6 md:px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all flex items-center gap-2"
            >
              View Rankings <Trophy size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Star className="text-yellow-500" />} value={userData.points.toLocaleString()} label="Total Points" color="yellow" />
        <StatCard icon={<Zap className="text-orange-500" />} value={`${userData.streak} days`} label="Streak" color="orange" />
        <StatCard icon={<Award className="text-blue-500" />} value={userData.badges} label="Badges Earned" color="blue" />
        <StatCard icon={<TrendingUp className="text-green-500" />} value={`#${userData.rank}`} label="National Rank" color="green" />
      </div>

      {/* Activity Summary */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="text-green-600" />
            Your Progress
          </h3>
          <div className="space-y-4">
            <ProgressItem label="Questions Answered" value={userData.totalQuestionsAnswered} max={500} />
            <ProgressItem label="Accuracy Rate" value={userData.accuracy} max={100} suffix="%" />
            <ProgressItem label="Topics Completed" value={userData.completedTopics.length} max={30} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-500" />
            Daily Challenge
          </h3>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 mb-4">
            <div className="text-sm text-purple-700 font-semibold mb-1">TODAY'S CHALLENGE</div>
            <div className="text-lg font-bold text-purple-900 mb-2">Answer 10 questions in any subject</div>
            <div className="flex items-center gap-2 text-sm text-purple-700">
              <Clock size={16} />
              <span>Resets in 8 hours</span>
            </div>
          </div>
          <button 
            onClick={() => setView('subjects')}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Start Challenge
          </button>
        </div>
      </div>

      {/* National Impact */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
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
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Continue Learning</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(SUBJECTS).slice(0, 6).map(subject => (
            <button
              key={subject.id}
              onClick={() => {
                setSelectedSubject(subject);
                setView('subjects');
              }}
              className={`p-6 rounded-xl bg-gradient-to-br ${subject.color} text-white hover:scale-105 transition-transform shadow-lg`}
              aria-label={`Study ${subject.name}`}
            >
              <div className="text-4xl mb-2" role="img" aria-label={subject.name}>{subject.icon}</div>
              <div className="font-semibold text-lg">{subject.name}</div>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">All Subjects</h2>
        <p className="text-gray-600 text-lg">Aligned with Ghana Education Service Curriculum</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search-subjects" className="sr-only">Search subjects or topics</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="search-subjects"
                type="text"
                placeholder="Search subjects or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none bg-white cursor-pointer"
              aria-label="Filter by level"
            >
              <option value="all">All Levels</option>
              <option value="JHS1">JHS 1</option>
              <option value="JHS2">JHS 2</option>
              <option value="JHS3">JHS 3</option>
            </select>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none bg-white cursor-pointer"
              aria-label="Filter by difficulty"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      {filteredSubjects.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
          <Search className="mx-auto text-gray-300 mb-4" size={64} />
          <h3 className="text-2xl font-bold text-gray-400 mb-2">No subjects found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredSubjects.map(subject => (
            <SubjectCard key={subject.id} subject={subject} onClick={setSelectedSubject} />
          ))}
        </div>
      )}

      {/* Selected Subject Details */}
      {selectedSubject && (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl md:text-6xl" role="img" aria-label={selectedSubject.name}>{selectedSubject.icon}</div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">{selectedSubject.name}</h3>
              <p className="text-gray-600">Choose a topic to start learning</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {selectedSubject.topics.map(topic => (
              <TopicCard 
                key={topic.id} 
                topic={topic} 
                subject={selectedSubject} 
                onStart={setSelectedTopic}
                isCompleted={userData.completedTopics.includes(topic.id)}
              />
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
          onComplete={(topicId) => {
            setUserData(prev => ({
              ...prev,
              completedTopics: [...new Set([...prev.completedTopics, topicId])]
            }));
            saveProgress();
          }}
        />
      )}
    </div>
  );

  const LeaderboardView = () => (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">🏆 National Leaderboard</h2>
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
            } text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-transform`}
          >
            <div className="text-4xl mb-2">
              {idx === 0 ? <Crown className="inline" size={48} /> : 
               idx === 1 ? <Medal className="inline" size={48} /> : 
               <Award className="inline" size={48} />}
            </div>
            <div className="text-5xl mb-2" role="img" aria-label="Avatar">{student.avatar}</div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">{student.name}</h3>
            <p className="opacity-90 mb-1 text-sm md:text-base">{student.school}</p>
            <p className="text-xs md:text-sm opacity-80 mb-3">{student.region}</p>
            <div className="text-2xl md:text-3xl font-bold">{student.points.toLocaleString()} pts</div>
          </div>
        ))}
      </div>

      {/* Rest of Leaderboard */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 bg-green-600 text-white font-semibold flex items-center gap-4">
          <span className="w-16">Rank</span>
          <span className="flex-1">Student</span>
          <span className="w-32 text-right hidden md:block">Points</span>
        </div>
        {leaderboard.slice(3).map((student) => (
          <div 
            key={student.rank} 
            className="p-4 border-b hover:bg-gray-50 flex items-center gap-4 transition-colors"
          >
            <span className="w-16 font-bold text-gray-600 text-lg">#{student.rank}</span>
            <div className="flex-1">
              <div className="font-semibold">{student.name}</div>
              <div className="text-sm text-gray-600">{student.school} • {student.region}</div>
            </div>
            <span className="w-32 text-right font-bold text-green-600 hidden md:block">
              {student.points.toLocaleString()}
            </span>
            <span className="font-bold text-green-600 md:hidden text-sm">
              {student.points.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Your Rank */}
      <div className="mt-8 bg-gradient-to-r from-green-600 to-yellow-500 text-white rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm opacity-90">Your National Rank</div>
            <div className="text-3xl md:text-4xl font-bold">#{userData.rank}</div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90">Your Points</div>
            <div className="text-3xl md:text-4xl font-bold">{userData.points.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProgressView = () => (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Progress</h2>
        <p className="text-gray-600 text-lg">Track your learning journey</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-6">
          <Target size={32} className="mb-2" />
          <div className="text-3xl font-bold">{userData.totalQuestionsAnswered}</div>
          <div className="text-sm opacity-90">Questions Answered</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-2xl p-6">
          <Check size={32} className="mb-2" />
          <div className="text-3xl font-bold">{userData.accuracy}%</div>
          <div className="text-sm opacity-90">Accuracy Rate</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6">
          <BookMarked size={32} className="mb-2" />
          <div className="text-3xl font-bold">{userData.completedTopics.length}</div>
          <div className="text-sm opacity-90">Topics Completed</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-6">
          <Zap size={32} className="mb-2" />
          <div className="text-3xl font-bold">{userData.streak}</div>
          <div className="text-sm opacity-90">Day Streak</div>
        </div>
      </div>

      {/* Subject Progress */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Progress by Subject</h3>
        <div className="space-y-6">
          {Object.values(SUBJECTS).map(subject => {
            const completed = subject.topics.filter(t => 
              userData.completedTopics.includes(t.id)
            ).length;
            const total = subject.topics.length;
            const percentage = Math.round((completed / total) * 100);
            
            return (
              <div key={subject.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={subject.name}>{subject.icon}</span>
                    <span className="font-semibold">{subject.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{completed}/{total} topics</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${subject.color} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const LearningInterface = ({ topic, subject, onAnswer, onClose, onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [questionsCorrect, setQuestionsCorrect] = useState(0);

    const questions = QUESTION_BANK[topic.id] || QUESTION_BANK.m1;
    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;

    const handleAnswer = (index) => {
      if (showResult) return;
      
      setSelectedAnswer(index);
      setShowResult(true);
      const isCorrect = index === currentQuestion.correct;
      
      if (isCorrect) {
        setScore(prev => prev + 100);
        setQuestionsCorrect(prev => prev + 1);
        onAnswer(true, 100);
      } else {
        onAnswer(false, 0);
      }
    };

    const handleNext = () => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Completed all questions
        if (questionsCorrect / totalQuestions >= 0.7) {
          onComplete(topic.id);
          showNotification('Topic completed! 🎉', 'success');
        }
        onClose();
      }
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl">
          {/* Header */}
          <div className={`bg-gradient-to-r ${subject.color} text-white p-6 md:p-8 rounded-t-3xl`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{topic.name}</h3>
                <p className="opacity-90">{subject.name} • {topic.level}</p>
              </div>
              <button 
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
                aria-label="Close learning interface"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex gap-4 text-sm flex-wrap">
              <span className="bg-white/20 px-3 py-1 rounded-full">Score: {score}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full capitalize">{topic.difficulty}</span>
            </div>
          </div>

          {/* Question */}
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </div>
                <div className="flex gap-1">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentQuestionIndex ? 'bg-green-500' :
                        idx < currentQuestionIndex ? 'bg-green-300' :
                        'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold mb-6">{currentQuestion.question}</h4>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                      showResult
                        ? index === currentQuestion.correct
                          ? 'border-green-500 bg-green-50'
                          : index === selectedAnswer
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 opacity-50'
                        : 'border-gray-200 hover:border-green-500 hover:bg-green-50 active:scale-98'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            {showResult && (
              <div className={`p-6 rounded-xl mb-6 ${
                selectedAnswer === currentQuestion.correct 
                  ? 'bg-green-50 border-2 border-green-500' 
                  : 'bg-red-50 border-2 border-red-500'
              }`}>
                <div className="flex items-start gap-3 mb-3">
                  {selectedAnswer === currentQuestion.correct ? (
                    <>
                      <div className="text-3xl">✅</div>
                      <div>
                        <div className="font-bold text-green-700 text-xl">Excellent Work!</div>
                        <div className="text-green-600">+100 points</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-3xl">❌</div>
                      <div>
                        <div className="font-bold text-red-700 text-xl">Not quite right</div>
                        <div className="text-red-600">Keep learning!</div>
                      </div>
                    </>
                  )}
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-700 mb-1">Explanation:</div>
                  <p className="text-gray-700">{currentQuestion.explanation}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            {showResult && (
              <div className="flex gap-4">
                <button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  {currentQuestionIndex < totalQuestions - 1 ? (
                    <>Next Question <ArrowRight size={20} /></>
                  ) : (
                    <>Finish <Check size={20} /></>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Exit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Helper Components
  const StatCard = ({ icon, value, label, color }) => (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="text-2xl md:text-3xl font-bold">{value}</span>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );

  const ProgressItem = ({ label, value, max, suffix = '' }) => {
    const percentage = Math.min((value / max) * 100, 100);
    return (
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          <span className="text-sm text-gray-600">{value}{suffix} / {max}{suffix}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  const ImpactCard = ({ value, label, icon }) => (
    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-2" role="img" aria-label={label}>{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );

  const SubjectCard = ({ subject, onClick }) => (
    <button
      onClick={() => onClick(subject)}
      className={`p-6 rounded-2xl bg-gradient-to-br ${subject.color} text-white hover:scale-105 transition-transform shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50`}
      aria-label={`View ${subject.name} topics`}
    >
      <div className="text-4xl md:text-5xl mb-3" role="img" aria-label={subject.name}>{subject.icon}</div>
      <h3 className="text-xl md:text-2xl font-bold mb-2">{subject.name}</h3>
      <p className="text-sm opacity-90">{subject.topics.length} topics available</p>
      <div className="mt-4 flex justify-end">
        <ChevronRight size={24} />
      </div>
    </button>
  );

  const TopicCard = ({ topic, subject, onStart, isCompleted }) => (
    <button
      onClick={() => onStart(topic)}
      className={`p-4 border-2 rounded-xl hover:scale-102 transition-all text-left ${
        isCompleted 
          ? 'border-green-500 bg-green-50' 
          : 'border-gray-200 hover:border-green-500 hover:bg-green-50'
      }`}
      aria-label={`Start ${topic.name} lesson`}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2 flex-1">
          {isCompleted && <Check size={20} className="text-green-600 flex-shrink-0" />}
          <h4 className="font-semibold text-base md:text-lg">{topic.name}</h4>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2 ${
          topic.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
          topic.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {topic.difficulty}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>{topic.level}</span>
        <span>•</span>
        <span>{topic.questions} questions</span>
      </div>
    </button>
  );

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🇬🇭</div>
          <div className="text-2xl font-bold text-gray-700">Loading...</div>
        </div>
      </div>
    );
  }

  // Main Render
  return (
    <div className="min-h-screen bg-gray-50">
      <Notification />
      <NavBar />
      
      <main role="main">
        {view === 'home' && <HomePage />}
        {view === 'subjects' && <SubjectsView />}
        {view === 'leaderboard' && <LeaderboardView />}
        {view === 'progress' && <ProgressView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">🇬🇭 Ghana Learning Platform</p>
            <p className="text-sm">Building Tomorrow's Leaders • Aligned with GES Curriculum</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GhanaLearningPlatform;