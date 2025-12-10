import React, { useState, useEffect } from 'react';
import { 
  Users, BookOpen, TrendingUp, Award, Plus, Send, BarChart3, Calendar, Target,
  Brain, Zap, MessageSquare, Bell, Video, Sparkles, X, Menu, Home, Settings,
  Trophy, Clock, Download, Search, ChevronDown, CheckCircle, AlertCircle,
  UserCheck, FileText, LogOut, Sun, Moon, Filter, SortDesc
} from 'lucide-react';

// Sample data
const SAMPLE_STUDENTS = [
  { id: 1, name: 'Kwame Mensah', avatar: '👨', class: 'JHS 2A', score: 85, status: 'active', lastActive: '2 hours ago' },
  { id: 2, name: 'Ama Asante', avatar: '👩', class: 'JHS 2A', score: 92, status: 'active', lastActive: '1 hour ago' },
  { id: 3, name: 'Kofi Boateng', avatar: '👦', class: 'JHS 2B', score: 78, status: 'inactive', lastActive: '2 days ago' },
  { id: 4, name: 'Akosua Darko', avatar: '👧', class: 'JHS 2A', score: 88, status: 'active', lastActive: '30 mins ago' },
  { id: 5, name: 'Yaw Osei', avatar: '👨', class: 'JHS 2B', score: 95, status: 'active', lastActive: '1 hour ago' },
];

const SAMPLE_ASSIGNMENTS = [
  { id: 1, title: 'Algebra Chapter 5', subject: 'Mathematics', dueDate: '2025-12-10', submitted: 24, total: 30, status: 'active' },
  { id: 2, title: 'Essay Writing', subject: 'English', dueDate: '2025-12-12', submitted: 28, total: 30, status: 'active' },
  { id: 3, title: 'Chemical Reactions', subject: 'Science', dueDate: '2025-12-15', submitted: 15, total: 30, status: 'upcoming' },
  { id: 4, title: 'Ghana History Quiz', subject: 'Social Studies', dueDate: '2025-12-08', submitted: 30, total: 30, status: 'completed' },
];

const ANALYTICS_DATA = {
  weeklyProgress: [
    { day: 'Mon', students: 65, assignments: 45 },
    { day: 'Tue', students: 72, assignments: 52 },
    { day: 'Wed', students: 68, assignments: 48 },
    { day: 'Thu', students: 75, assignments: 58 },
    { day: 'Fri', students: 80, assignments: 65 },
  ],
  classPerformance: [
    { subject: 'Math', average: 78 },
    { subject: 'Science', average: 85 },
    { subject: 'English', average: 82 },
    { subject: 'Social', average: 76 },
  ]
};

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState(3);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'students', label: 'Students', icon: Users, badge: '45' },
    { id: 'assignments', label: 'Assignments', icon: BookOpen, badge: '8' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '12' },
    { id: 'liveclass', label: 'Live Class', icon: Video },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Overview Tab
  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-bold mb-2">Welcome back, Mr. Osei! 👋</h2>
            <p className="text-xl opacity-90">Here's what's happening in your classes today</p>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold backdrop-blur-sm transition-all">
            <Video className="inline mr-2" size={20} />
            Start Live Class
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          icon={<Users className="text-blue-600" size={32} />}
          value="45"
          label="Total Students"
          change="+5 this week"
          changeType="positive"
        />
        <StatCard
          icon={<BookOpen className="text-green-600" size={32} />}
          value="8"
          label="Active Assignments"
          change="2 due soon"
          changeType="warning"
        />
        <StatCard
          icon={<CheckCircle className="text-purple-600" size={32} />}
          value="92%"
          label="Avg. Completion"
          change="+3% from last week"
          changeType="positive"
        />
        <StatCard
          icon={<Trophy className="text-yellow-600" size={32} />}
          value="85%"
          label="Class Average"
          change="+2% improvement"
          changeType="positive"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Recent Activity</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[
              { action: 'Ama Asante submitted', item: 'Essay Writing', time: '5 mins ago', type: 'success' },
              { action: 'Kwame Mensah viewed', item: 'Algebra Chapter 5', time: '15 mins ago', type: 'info' },
              { action: '3 students completed', item: 'Ghana History Quiz', time: '1 hour ago', type: 'success' },
              { action: 'Kofi Boateng missed deadline', item: 'Chemical Reactions', time: '2 hours ago', type: 'warning' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-xl transition-all">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'success' ? 'bg-green-100' :
                  activity.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  {activity.type === 'success' ? <CheckCircle className="text-green-600" size={20} /> :
                   activity.type === 'warning' ? <AlertCircle className="text-yellow-600" size={20} /> :
                   <FileText className="text-blue-600" size={20} />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{activity.action}</p>
                  <p className="text-gray-600 text-sm">{activity.item}</p>
                  <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Upcoming Deadlines</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              + New Assignment
            </button>
          </div>
          <div className="space-y-4">
            {SAMPLE_ASSIGNMENTS.filter(a => a.status !== 'completed').map((assignment) => (
              <div key={assignment.id} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{assignment.title}</h4>
                  <span className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded-full">
                    {assignment.subject}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    <Clock className="inline mr-1" size={14} />
                    Due: {assignment.dueDate}
                  </span>
                  <span className="font-semibold text-blue-600">
                    {assignment.submitted}/{assignment.total} submitted
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Plus size={24} />, label: 'Create Assignment', color: 'blue' },
            { icon: <Video size={24} />, label: 'Start Live Class', color: 'red' },
            { icon: <Send size={24} />, label: 'Send Message', color: 'green' },
            { icon: <Download size={24} />, label: 'Download Reports', color: 'purple' },
          ].map((action, idx) => (
            <button
              key={idx}
              className={`p-6 rounded-xl border-2 border-gray-200 hover:border-${action.color}-500 hover:bg-${action.color}-50 transition-all group`}
            >
              <div className={`text-${action.color}-600 mb-3`}>
                {action.icon}
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Students Tab
  const StudentsTab = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Student Management</h2>
          <p className="text-gray-600 mt-1">Manage and monitor your students</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
          <Plus size={20} />
          Add Student
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <button className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
            <Filter size={20} />
            Filter
          </button>
          <button className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
            <SortDesc size={20} />
            Sort
          </button>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Student</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Class</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Avg. Score</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Last Active</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_STUDENTS.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                        {student.avatar}
                      </div>
                      <span className="font-semibold">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.class}</td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${
                      student.score >= 85 ? 'text-green-600' :
                      student.score >= 70 ? 'text-blue-600' : 'text-yellow-600'
                    }`}>
                      {student.score}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {student.status === 'active' ? '● Active' : '○ Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.lastActive}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      View Profile →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Assignments Tab
  const AssignmentsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Assignments</h2>
          <p className="text-gray-600 mt-1">Create and manage assignments</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
          <Plus size={20} />
          Create Assignment
        </button>
      </div>

      <div className="grid gap-6">
        {SAMPLE_ASSIGNMENTS.map((assignment) => (
          <div key={assignment.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{assignment.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    assignment.status === 'completed' ? 'bg-green-100 text-green-700' :
                    assignment.status === 'active' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {assignment.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600">{assignment.subject}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="text-gray-400" size={20} />
                <span className="text-sm text-gray-600">Due: {assignment.dueDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-gray-400" size={20} />
                <span className="text-sm text-gray-600">{assignment.total} students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm font-semibold text-green-600">
                  {assignment.submitted} submitted
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Submission Progress</span>
                <span className="font-semibold">{Math.round((assignment.submitted / assignment.total) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                  style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-all">
                View Submissions
              </button>
              <button className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Send Reminder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Analytics Tab
  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Analytics & Insights</h2>
        <p className="text-gray-600 mt-1">Track performance and engagement</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6">Weekly Activity</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {ANALYTICS_DATA.weeklyProgress.map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${(day.students / 80) * 100}%` }}
                ></div>
                <span className="text-sm font-semibold text-gray-600">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6">Subject Performance</h3>
          <div className="space-y-4">
            {ANALYTICS_DATA.classPerformance.map((subject, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{subject.subject}</span>
                  <span className="text-blue-600 font-bold">{subject.average}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                    style={{ width: `${subject.average}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ icon, value, label, change, changeType }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gray-50 rounded-xl">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-600 text-sm mb-2">{label}</div>
      <div className={`text-sm font-semibold flex items-center gap-1 ${
        changeType === 'positive' ? 'text-green-600' :
        changeType === 'warning' ? 'text-yellow-600' : 'text-gray-600'
      }`}>
        {changeType === 'positive' ? '↑' : changeType === 'warning' ? '⚠' : '→'} {change}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'} transition-colors`}>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <div>
              <h1 className="text-lg font-bold">Teacher Portal</h1>
              <p className="text-xs text-gray-500">Achimota School • JHS 2A</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 transition-transform z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </div>
              {tab.badge && (
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`pt-16 ${sidebarOpen ? 'lg:pl-64' : ''} transition-all`}>
        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'students' && <StudentsTab />}
          {activeTab === 'assignments' && <AssignmentsTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'schedule' && <OverviewTab />}
          {activeTab === 'messages' && <OverviewTab />}
          {activeTab === 'liveclass' && <OverviewTab />}
          {activeTab === 'settings' && <OverviewTab />}
        </div>
      </div>
    </div>
  );
}