import React, { useState } from 'react';
import {
  User, Lock, Mail, School, Users, BookOpen, Eye, EyeOff,
  AlertCircle, ArrowLeft, LogIn, Shield
} from 'lucide-react';

/* --------------------------------------------------
   DEMO USERS – You can later replace with API calls
-------------------------------------------------- */
export const DEMO_USERS = {
  student: {
    email: 'student@nyansapo.edu',
    password: 'student123',
    name: 'Kwame Mensah',
    school: 'Achimota School',
    level: 'JHS 2'
  },

  teacher: {
    email: 'teacher@nyansapo.edu',
    password: 'teacher123',
    name: 'Mr. Osei',
    school: 'Achimota School',
    subjects: ['Mathematics', 'Science']
  },

  parent: {
    email: 'parent@nyansapo.edu',
    password: 'parent123',
    name: 'Mrs. Mensah',
    children: ['Kwame Mensah', 'Ama Mensah']
  },

  schoolAdmin: {
    email: 'admin@nyansapo.edu',
    password: 'admin123',
    name: 'Headmaster Kofi Asare',
    school: 'Achimota School',
    role: 'School Administrator',
    permissions: [
      "Manage Teachers",
      "Approve Grades",
      "Monitor Attendance",
      "Manage Parents",
      "Control School Settings"
    ]
  }
};


/* --------------------------------------------------
   CONFIG FOR EACH PORTAL TYPE
-------------------------------------------------- */
const PORTAL_CONFIG = {
  schoolAdmin: {
    title: 'School Admin Portal',
    icon: <Shield size={50} className="text-red-600" />,
    color: 'from-red-600 to-orange-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-500'
  },

  student: {
    title: 'Student Portal',
    icon: <BookOpen size={50} className="text-green-600" />,
    color: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500'
  },

  teacher: {
    title: 'Teacher Portal',
    icon: <School size={50} className="text-blue-600" />,
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500'
  },
  schoolAdmin: {
    title: 'School Admin Portal',
    icon: <Users size={48} className="text-red-600" />,
    color: 'from-red-500 to-orange-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-500'
  },

  parent: {
    title: 'Parent Portal',
    icon: <Users size={50} className="text-purple-600" />,
    color: 'from-purple-600 to-pink-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-500'
  }
};


/* --------------------------------------------------
   LOGIN FORM COMPONENT
-------------------------------------------------- */
export default function LoginForm({ userType, onLogin, onBack }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const config = PORTAL_CONFIG[userType];

  const handleSubmit = async () => {
    setError('');
    setLoading(true);

    await new Promise((r) => setTimeout(r, 600)); // Simulate API call

    const demoUser = DEMO_USERS[userType];

    if (formData.email === demoUser.email && formData.password === demoUser.password) {
      onLogin({
        ...demoUser,
        userType,
        loggedIn: true
      });
    } else {
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  const fillDemo = () => {
    const user = DEMO_USERS[userType];
    setFormData({ email: user.email, password: user.password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fadeIn">
        
        {/* Back */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-white/90 hover:text-white px-3 py-2"
        >
          <ArrowLeft size={20} /> Back
        </button>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className={`bg-gradient-to-r ${config.color} text-white p-8 text-center`}>
            <div className="flex justify-center mb-4 drop-shadow-lg">{config.icon}</div>
            <h2 className="text-3xl font-bold mb-1">{config.title}</h2>
            <p className="opacity-90 text-sm">Secure Login Access</p>
          </div>

          {/* Form */}
          <div className="p-8 space-y-6">
            
            {error && (
              <div className="bg-red-50 border border-red-500 text-red-700 rounded-xl p-4 flex gap-3">
                <AlertCircle size={20} />
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-white/90">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 text-white rounded-xl focus:outline-none focus:border-green-400 transition"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-white/90">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 text-white rounded-xl focus:outline-none focus:border-green-400 transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-500 to-green-700 py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn size={20} />
                  Sign In
                </>
              )}
            </button>

            {/* Demo Credentials */}
            <button
              onClick={fillDemo}
              className="w-full bg-white/10 border border-white/20 text-white py-3 rounded-xl hover:bg-white/20 transition"
            >
              Use Demo Credentials
            </button>

            {/* Display Credentials Box */}
            <div className={`${config.bgColor} border ${config.borderColor} rounded-xl p-4 text-center`}>
              <p className="text-xs font-semibold text-gray-600">Demo Account</p>
              <p className="text-xs font-mono text-gray-700">
                {DEMO_USERS[userType].email}<br />
                {DEMO_USERS[userType].password}
              </p>
            </div>

          </div>
        </div>

        <p className="text-center text-white/60 mt-6 text-sm">© 2025 Nyansapo Learning Platform</p>
      </div>
    </div>
  );
}
