import React, { useState, useEffect } from 'react';
import { User, TrendingUp, Book, Award, Calendar, MessageSquare, Bell, Download, Target, Clock, Star, CheckCircle, AlertCircle, Trophy, Zap, Heart } from 'lucide-react';

function ParentPortal() {
  const [selectedChild, setSelectedChild] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  
  // Sample data - in production, load from storage
  const [children, setChildren] = useState([
    {
      id: 1,
      name: 'Kwame Mensah',
      avatar: '👦',
      school: 'Achimota School',
      class: 'JHS 2A',
      level: 'JHS 2',
      points: 2450,
      badges: 12,
      streak: 7,
      rank: 156,
      weeklyProgress: 87,
      subjects: [
        { name: 'Mathematics', score: 85, progress: 78, timeSpent: '4.5 hrs', trending: 'up' },
        { name: 'Science', score: 92, progress: 85, timeSpent: '3.2 hrs', trending: 'up' },
        { name: 'English', score: 78, progress: 72, timeSpent: '2.8 hrs', trending: 'down' },
        { name: 'Social Studies', score: 88, progress: 80, timeSpent: '3.5 hrs', trending: 'up' },
      ],
      recentActivities: [
        { date: '2 hours ago', action: 'Completed assignment', subject: 'Mathematics', score: 95 },
        { date: '5 hours ago', action: 'Earned badge', subject: 'Streak Master', icon: '🏆' },
        { date: 'Yesterday', action: 'Watched lesson', subject: 'Science - States of Matter', duration: '15 min' },
        { date: '2 days ago', action: 'Took quiz', subject: 'English Grammar', score: 88 },
      ],
      upcomingAssignments: [
        { title: 'Algebra Chapter 5', subject: 'Mathematics', due: '2025-12-10', status: 'pending' },
        { title: 'Essay Writing', subject: 'English', due: '2025-12-12', status: 'in-progress' },
        { title: 'Chemical Reactions', subject: 'Science', due: '2025-12-15', status: 'not-started' },
      ],
      teacherComments: [
        { teacher: 'Mr. Osei (Math)', date: 'Nov 30', comment: 'Kwame shows excellent problem-solving skills. Keep up the great work!' },
        { teacher: 'Mrs. Asante (Science)', date: 'Nov 28', comment: 'Very engaged in class discussions. Could improve lab report writing.' },
      ]
    },
    {
      id: 2,
      name: 'Ama Mensah',
      avatar: '👧',
      school: 'Wesley Girls High',
      class: 'JHS 1B',
      level: 'JHS 1',
      points: 1850,
      badges: 8,
      streak: 12,
      rank: 289,
      weeklyProgress: 92,
      subjects: [
        { name: 'Mathematics', score: 88, progress: 82, timeSpent: '3.8 hrs', trending: 'up' },
        { name: 'Science', score: 95, progress: 90, timeSpent: '4.1 hrs', trending: 'up' },
        { name: 'English', score: 90, progress: 88, timeSpent: '3.5 hrs', trending: 'up' },
        { name: 'Social Studies', score: 85, progress: 78, timeSpent: '2.9 hrs', trending: 'stable' },
      ],
      recentActivities: [
        { date: '1 hour ago', action: 'Completed quiz', subject: 'Science', score: 100 },
        { date: '3 hours ago', action: 'Earned badge', subject: '12-Day Streak', icon: '🔥' },
      ],
      upcomingAssignments: [
        { title: 'Basic Math Operations', subject: 'Mathematics', due: '2025-12-08', status: 'completed' },
        { title: 'Reading Comprehension', subject: 'English', due: '2025-12-11', status: 'in-progress' },
      ],
      teacherComments: [
        { teacher: 'Mrs. Boateng (Math)', date: 'Dec 1', comment: 'Ama is a star student! Consistently excellent performance.' },
      ]
    }
  ]);

  useEffect(() => {
    if (children.length > 0 && !selectedChild) {
      setSelectedChild(children[0]);
    }
    loadNotifications();
  }, []);

  const loadNotifications = () => {
    setNotifications([
      { id: 1, type: 'achievement', message: 'Kwame earned a new badge: Streak Master!', time: '2 hours ago', read: false },
      { id: 2, type: 'alert', message: 'Ama has an assignment due tomorrow', time: '5 hours ago', read: false },
      { id: 3, type: 'info', message: 'Parent-Teacher meeting scheduled for Dec 15', time: '1 day ago', read: true },
      { id: 4, type: 'achievement', message: 'Kwame moved up 10 ranks on the leaderboard!', time: '2 days ago', read: true },
    ]);
  };

  const DashboardTab = () => {
    if (!selectedChild) return null;

    return (
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <StatCard 
            icon={<Trophy className="text-yellow-500" size={28} />}
            value={selectedChild.points}
            label="Total Points"
            sublabel={`#${selectedChild.rank} nationally`}
          />
          <StatCard 
            icon={<Zap className="text-orange-500" size={28} />}
            value={`${selectedChild.streak} days`}
            label="Learning Streak"
            sublabel="Keep it going!"
          />
          <StatCard 
            icon={<Award className="text-blue-500" size={28} />}
            value={selectedChild.badges}
            label="Badges Earned"
            sublabel="Great achievements"
          />
          <StatCard 
            icon={<TrendingUp className="text-green-500" size={28} />}
            value={`${selectedChild.weeklyProgress}%`}
            label="Weekly Progress"
            sublabel="+12% vs last week"
          />
        </div>

        {/* Weekly Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">This Week's Overview</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Clock className="text-blue-500 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-blue-600">14.3 hrs</div>
              <div className="text-sm text-gray-600">Time Spent Learning</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <CheckCircle className="text-green-500 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-green-600">12/15</div>
              <div className="text-sm text-gray-600">Lessons Completed</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <Target className="text-purple-500 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-purple-600">89%</div>
              <div className="text-sm text-gray-600">Average Quiz Score</div>
            </div>
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Subject Performance</h3>
          <div className="space-y-4">
            {selectedChild.subjects.map((subject, idx) => (
              <div key={idx} className="border-2 border-gray-100 rounded-xl p-4 hover:border-green-500 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">
                      {subject.name === 'Mathematics' ? '🔢' : 
                       subject.name === 'Science' ? '🔬' :
                       subject.name === 'English' ? '📚' : '🌍'}
                    </div>
                    <div>
                      <h4 className="font-semibold">{subject.name}</h4>
                      <p className="text-sm text-gray-600">Current Score: {subject.score}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {subject.trending === 'up' ? (
                      <TrendingUp className="text-green-500" size={20} />
                    ) : (
                      <AlertCircle className="text-orange-500" size={20} />
                    )}
                    <span className="text-sm text-gray-600">{subject.timeSpent}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      subject.progress >= 80 ? 'bg-gradient-to-r from-green-500 to-blue-500' :
                      subject.progress >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                      'bg-gradient-to-r from-red-500 to-pink-500'
                    }`}
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Progress: {subject.progress}%</span>
                  <span className={
                    subject.trending === 'up' ? 'text-green-600 font-semibold' :
                    subject.trending === 'down' ? 'text-red-600 font-semibold' :
                    'text-gray-600'
                  }>
                    {subject.trending === 'up' ? '↑ Improving' :
                     subject.trending === 'down' ? '↓ Needs attention' :
                     '→ Stable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-6 border-2 border-green-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="text-red-500" />
            Personalized Recommendations
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <AlertCircle className="text-yellow-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">English needs attention</h4>
                  <p className="text-sm text-gray-600 mb-2">Kwame's English score has dropped by 5% this week. Consider extra practice sessions.</p>
                  <button className="text-sm text-green-600 font-semibold hover:underline">
                    View recommended lessons →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Star className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Strong in Science!</h4>
                  <p className="text-sm text-gray-600 mb-2">Kwame excels in Science. Consider advanced topics to keep him challenged.</p>
                  <button className="text-sm text-green-600 font-semibold hover:underline">
                    Explore advanced content →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ActivityTab = () => {
    if (!selectedChild) return null;

    return (
      <div className="space-y-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {selectedChild.recentActivities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                  {activity.icon || '📘'}
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">{activity.action}</div>
                  <div className="text-sm text-gray-600">{activity.subject}</div>
                  {activity.score && (
                    <div className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Score: {activity.score}%
                    </div>
                  )}
                  {activity.duration && (
                    <div className="mt-2 inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {activity.duration}
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500">{activity.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Upcoming Assignments</h3>
          <div className="space-y-3">
            {selectedChild.upcomingAssignments.map((assignment, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-xl p-4 hover:border-green-500 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-lg">{assignment.title}</h4>
                    <p className="text-sm text-gray-600">{assignment.subject}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    assignment.status === 'completed' ? 'bg-green-100 text-green-700' :
                    assignment.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {assignment.status === 'completed' ? '✓ Completed' :
                     assignment.status === 'in-progress' ? '⏳ In Progress' :
                     '📝 Not Started'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  Due: {assignment.due}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CommunicationTab = () => {
    if (!selectedChild) return null;

    return (
      <div className="space-y-6">
        {/* Teacher Comments */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Teacher Feedback</h3>
          <div className="space-y-4">
            {selectedChild.teacherComments.map((comment, idx) => (
              <div key={idx} className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-green-700">{comment.teacher}</span>
                  <span className="text-sm text-gray-600">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Send Message */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Send Message to Teacher</h3>
          <div className="space-y-4">
            <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none">
              <option>Select Teacher</option>
              <option>Mr. Osei (Mathematics)</option>
              <option>Mrs. Asante (Science)</option>
              <option>Mr. Boateng (English)</option>
            </select>
            <textarea
              placeholder="Type your message here..."
              rows="4"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none resize-none"
            ></textarea>
            <button className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <MessageSquare size={20} />
              Send Message
            </button>
          </div>
        </div>

        {/* Parent-Teacher Meeting */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 border-2 border-blue-200">
          <h3 className="text-xl font-bold mb-4">📅 Schedule Parent-Teacher Meeting</h3>
          <p className="text-gray-700 mb-4">Book a one-on-one session with your child's teachers to discuss their progress.</p>
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
            Schedule Meeting
          </button>
        </div>
      </div>
    );
  };

  const ReportsTab = () => {
    if (!selectedChild) return null;

    return (
      <div className="space-y-6">
        {/* Download Reports */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Download Reports</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Weekly Progress Report', period: 'Nov 27 - Dec 3, 2025', format: 'PDF' },
              { title: 'Monthly Performance Summary', period: 'November 2025', format: 'PDF' },
              { title: 'Subject-wise Analysis', period: 'Term 1, 2025', format: 'Excel' },
              { title: 'Attendance Report', period: 'November 2025', format: 'PDF' },
            ].map((report, idx) => (
              <button key={idx} className="p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left">
                <div className="flex items-start gap-3">
                  <Download className="text-green-600 mt-1" size={24} />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{report.title}</h4>
                    <p className="text-sm text-gray-600">{report.period}</p>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 inline-block">{report.format}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Performance Trends</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Overall Progress (Last 3 Months)</h4>
              <div className="flex items-end gap-2 h-40">
                {[65, 72, 78, 82, 85, 87, 89, 87, 88, 91, 93, 92].map((value, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end">
                    <div 
                      className="w-full bg-gradient-to-t from-green-500 to-blue-500 rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${value}%` }}
                    ></div>
                    <span className="text-xs text-gray-600 mt-1">W{idx+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StatCard = ({ icon, value, label, sublabel }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <span className="text-3xl font-bold">{value}</span>
      </div>
      <div className="text-sm font-semibold text-gray-700">{label}</div>
      <div className="text-xs text-gray-500 mt-1">{sublabel}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">🇬🇭 Parent Portal</h1>
              <p className="text-white/90">Monitor your child's learning journey</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all">
                <Bell size={24} />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Child Selector */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-4 overflow-x-auto">
            {children.map(child => (
              <button
                key={child.id}
                onClick={() => setSelectedChild(child)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all whitespace-nowrap ${
                  selectedChild?.id === child.id
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-2xl">{child.avatar}</span>
                <div className="text-left">
                  <div className="font-semibold">{child.name}</div>
                  <div className="text-xs opacity-80">{child.school} • {child.class}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6 overflow-x-auto">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: <TrendingUp size={18} /> },
              { id: 'activity', label: 'Activity', icon: <Book size={18} /> },
              { id: 'communication', label: 'Communication', icon: <MessageSquare size={18} /> },
              { id: 'reports', label: 'Reports', icon: <Download size={18} /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600 font-semibold'
                    : 'border-transparent text-gray-600 hover:text-green-600'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <DashboardTab />}
        {activeTab === 'activity' && <ActivityTab />}
        {activeTab === 'communication' && <CommunicationTab />}
        {activeTab === 'reports' && <ReportsTab />}
      </div>
    </div>
  );
}

export default ParentPortal;