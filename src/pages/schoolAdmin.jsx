import React, { useState, useEffect } from 'react';
import { School, Users, BookOpen, Calendar, ClipboardCheck, TrendingUp, Bell, Settings, LogOut, ChevronDown, Search, Plus, Edit, Trash2, Eye, Download, Upload, Filter, X } from 'lucide-react';

// Mock initial data
const mockSchools = [
  { id: 1, name: 'Ghana International School', location: 'Accra', students: 1250, teachers: 85, established: '1955' },
  { id: 2, name: 'Achimota School', location: 'Accra', students: 2100, teachers: 120, established: '1927' },
  { id: 3, name: 'Prempeh College', location: 'Kumasi', students: 3500, teachers: 180, established: '1949' }
];

const mockStudents = [
  { id: 1, name: 'Kwame Mensah', studentId: 'STU001', grade: 'JHS 2', school: 'Ghana International School', attendance: 95, performance: 88 },
  { id: 2, name: 'Ama Asante', studentId: 'STU002', grade: 'JHS 3', school: 'Ghana International School', attendance: 92, performance: 91 },
  { id: 3, name: 'Kofi Owusu', studentId: 'STU003', grade: 'JHS 1', school: 'Achimota School', attendance: 88, performance: 85 }
];

const mockTeachers = [
  { id: 1, name: 'Mr. Yaw Boateng', teacherId: 'TCH001', subject: 'Mathematics', school: 'Ghana International School', classes: 5, students: 180 },
  { id: 2, name: 'Mrs. Akosua Darko', teacherId: 'TCH002', subject: 'English', school: 'Ghana International School', classes: 4, students: 150 },
  { id: 3, name: 'Mr. Kwesi Appiah', teacherId: 'TCH003', subject: 'Science', school: 'Achimota School', classes: 6, students: 200 }
];

const mockClasses = [
  { id: 1, name: 'JHS 1A', grade: 'JHS 1', students: 35, teacher: 'Mr. Yaw Boateng', school: 'Ghana International School', subject: 'Mathematics' },
  { id: 2, name: 'JHS 2B', grade: 'JHS 2', students: 38, teacher: 'Mrs. Akosua Darko', school: 'Ghana International School', subject: 'English' },
  { id: 3, name: 'JHS 3C', grade: 'JHS 3', students: 32, teacher: 'Mr. Kwesi Appiah', school: 'Achimota School', subject: 'Science' }
];

function SchoolAdmin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [schools, setSchools] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editItem, setEditItem] = useState(null);

  // Load data on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Try to load from storage
      const schoolsData = await window.storage.get('sms-schools');
      const studentsData = await window.storage.get('sms-students');
      const teachersData = await window.storage.get('sms-teachers');
      const classesData = await window.storage.get('sms-classes');

      setSchools(schoolsData ? JSON.parse(schoolsData.value) : mockSchools);
      setStudents(studentsData ? JSON.parse(studentsData.value) : mockStudents);
      setTeachers(teachersData ? JSON.parse(teachersData.value) : mockTeachers);
      setClasses(classesData ? JSON.parse(classesData.value) : mockClasses);
    } catch (error) {
      // If no data exists, use mock data
      setSchools(mockSchools);
      setStudents(mockStudents);
      setTeachers(mockTeachers);
      setClasses(mockClasses);
    }
  };

  const saveData = async (type, data) => {
    try {
      await window.storage.set(`sms-${type}`, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Dashboard Statistics
  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const totalSchools = schools.length;
  const totalClasses = classes.length;
  const avgAttendance = students.length > 0 ? (students.reduce((acc, s) => acc + s.attendance, 0) / students.length).toFixed(1) : 0;
  const avgPerformance = students.length > 0 ? (students.reduce((acc, s) => acc + s.performance, 0) / students.length).toFixed(1) : 0;

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditItem(null);
  };

  const handleDelete = async (type, id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    let updatedData;
    switch(type) {
      case 'school':
        updatedData = schools.filter(s => s.id !== id);
        setSchools(updatedData);
        await saveData('schools', updatedData);
        break;
      case 'student':
        updatedData = students.filter(s => s.id !== id);
        setStudents(updatedData);
        await saveData('students', updatedData);
        break;
      case 'teacher':
        updatedData = teachers.filter(t => t.id !== id);
        setTeachers(updatedData);
        await saveData('teachers', updatedData);
        break;
      case 'class':
        updatedData = classes.filter(c => c.id !== id);
        setClasses(updatedData);
        await saveData('classes', updatedData);
        break;
    }
  };

  const handleSave = async (type, data) => {
    let updatedData;
    const newId = Date.now();

    switch(type) {
      case 'school':
        if (editItem) {
          updatedData = schools.map(s => s.id === editItem.id ? { ...data, id: editItem.id } : s);
        } else {
          updatedData = [...schools, { ...data, id: newId }];
        }
        setSchools(updatedData);
        await saveData('schools', updatedData);
        break;
      case 'student':
        if (editItem) {
          updatedData = students.map(s => s.id === editItem.id ? { ...data, id: editItem.id } : s);
        } else {
          updatedData = [...students, { ...data, id: newId }];
        }
        setStudents(updatedData);
        await saveData('students', updatedData);
        break;
      case 'teacher':
        if (editItem) {
          updatedData = teachers.map(t => t.id === editItem.id ? { ...data, id: editItem.id } : t);
        } else {
          updatedData = [...teachers, { ...data, id: newId }];
        }
        setTeachers(updatedData);
        await saveData('teachers', updatedData);
        break;
      case 'class':
        if (editItem) {
          updatedData = classes.map(c => c.id === editItem.id ? { ...data, id: editItem.id } : c);
        } else {
          updatedData = [...classes, { ...data, id: newId }];
        }
        setClasses(updatedData);
        await saveData('classes', updatedData);
        break;
    }
    closeModal();
  };

  // Filter data based on search and selected school
  const filterData = (data, schoolKey = 'school') => {
    return data.filter(item => {
      const matchesSearch = searchTerm === '' || 
        Object.values(item).some(val => 
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesSchool = selectedSchool === 'all' || item[schoolKey] === selectedSchool;
      return matchesSearch && matchesSchool;
    });
  };

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<School className="w-8 h-8" />} title="Total Schools" value={totalSchools} color="blue" />
        <StatCard icon={<Users className="w-8 h-8" />} title="Total Students" value={totalStudents} color="green" />
        <StatCard icon={<Users className="w-8 h-8" />} title="Total Teachers" value={totalTeachers} color="purple" />
        <StatCard icon={<BookOpen className="w-8 h-8" />} title="Total Classes" value={totalClasses} color="orange" />
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Average Attendance</h3>
            <ClipboardCheck className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-4xl font-black text-green-600">{avgAttendance}%</div>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-green-600 h-3 rounded-full transition-all" style={{ width: `${avgAttendance}%` }}></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Average Performance</h3>
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-4xl font-black text-blue-600">{avgPerformance}%</div>
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full transition-all" style={{ width: `${avgPerformance}%` }}></div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Schools Overview</h3>
        <div className="space-y-4">
          {schools.slice(0, 5).map(school => (
            <div key={school.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {school.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{school.name}</div>
                  <div className="text-sm text-gray-600">{school.location} • Est. {school.established}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Students: <span className="font-bold text-green-600">{school.students}</span></div>
                <div className="text-sm text-gray-600">Teachers: <span className="font-bold text-blue-600">{school.teachers}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SchoolsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Schools Management</h2>
        <button
          onClick={() => openModal('school')}
          className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-6 py-3 rounded-lg font-bold flex items-center space-x-2 hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          <span>Add School</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterData(schools, 'name').map(school => (
          <div key={school.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-6 text-white">
              <div className="text-3xl font-black mb-2">{school.name}</div>
              <div className="text-sm opacity-90">{school.location}</div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Students:</span>
                <span className="font-bold text-green-600">{school.students}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Teachers:</span>
                <span className="font-bold text-blue-600">{school.teachers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Established:</span>
                <span className="font-bold text-gray-800">{school.established}</span>
              </div>
              <div className="flex space-x-2 pt-4 border-t">
                <button onClick={() => openModal('school', school)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-1">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button onClick={() => handleDelete('school', school.id)} className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center space-x-1">
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const StudentsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Students Management</h2>
        <button
          onClick={() => openModal('student')}
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-bold flex items-center space-x-2 hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          <span>Add Student</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Student ID</th>
                <th className="px-6 py-4 text-left font-bold">Name</th>
                <th className="px-6 py-4 text-left font-bold">Grade</th>
                <th className="px-6 py-4 text-left font-bold">School</th>
                <th className="px-6 py-4 text-left font-bold">Attendance</th>
                <th className="px-6 py-4 text-left font-bold">Performance</th>
                <th className="px-6 py-4 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData(students).map((student, idx) => (
                <tr key={student.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-mono text-sm">{student.studentId}</td>
                  <td className="px-6 py-4 font-bold">{student.name}</td>
                  <td className="px-6 py-4">{student.grade}</td>
                  <td className="px-6 py-4 text-sm">{student.school}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${student.attendance >= 90 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {student.attendance}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${student.performance >= 85 ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                      {student.performance}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button onClick={() => openModal('student', student)} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete('student', student.id)} className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const TeachersView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Teachers Management</h2>
        <button
          onClick={() => openModal('teacher')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold flex items-center space-x-2 hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          <span>Add Teacher</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Teacher ID</th>
                <th className="px-6 py-4 text-left font-bold">Name</th>
                <th className="px-6 py-4 text-left font-bold">Subject</th>
                <th className="px-6 py-4 text-left font-bold">School</th>
                <th className="px-6 py-4 text-left font-bold">Classes</th>
                <th className="px-6 py-4 text-left font-bold">Students</th>
                <th className="px-6 py-4 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData(teachers).map((teacher, idx) => (
                <tr key={teacher.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-mono text-sm">{teacher.teacherId}</td>
                  <td className="px-6 py-4 font-bold">{teacher.name}</td>
                  <td className="px-6 py-4">{teacher.subject}</td>
                  <td className="px-6 py-4 text-sm">{teacher.school}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">{teacher.classes}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold">{teacher.students}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button onClick={() => openModal('teacher', teacher)} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete('teacher', teacher.id)} className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const ClassesView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Classes Management</h2>
        <button
          onClick={() => openModal('class')}
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-bold flex items-center space-x-2 hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          <span>Add Class</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterData(classes).map(cls => (
          <div key={cls.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
              <div className="text-2xl font-black mb-2">{cls.name}</div>
              <div className="text-sm opacity-90">{cls.grade}</div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subject:</span>
                <span className="font-bold">{cls.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Teacher:</span>
                <span className="font-bold text-purple-600">{cls.teacher}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Students:</span>
                <span className="font-bold text-green-600">{cls.students}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">School:</span>
                <span className="text-sm text-gray-800">{cls.school}</span>
              </div>
              <div className="flex space-x-2 pt-4 border-t">
                <button onClick={() => openModal('class', cls)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-1">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button onClick={() => handleDelete('class', cls.id)} className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center space-x-1">
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-5xl">🇬🇭</div>
              <div>
                <h1 className="text-3xl font-black">SchoolAdmin</h1>
                <p className="text-sm opacity-90">Ghana Mastery Quest 2028</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
              <Settings className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto">
            <TabButton icon={<TrendingUp />} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
            <TabButton icon={<School />} label="Schools" active={activeTab === 'schools'} onClick={() => setActiveTab('schools')} />
            <TabButton icon={<Users />} label="Students" active={activeTab === 'students'} onClick={() => setActiveTab('students')} />
            <TabButton icon={<Users />} label="Teachers" active={activeTab === 'teachers'} onClick={() => setActiveTab('teachers')} />
            <TabButton icon={<BookOpen />} label="Classes" active={activeTab === 'classes'} onClick={() => setActiveTab('classes')} />
          </div>
        </div>
      </div>

      {/* Filters */}
      {activeTab !== 'dashboard' && (
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-semibold"
            >
              <option value="all">All Schools</option>
              {schools.map(school => (
                <option key={school.id} value={school.name}>{school.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'schools' && <SchoolsView />}
        {activeTab === 'students' && <StudentsView />}
        {activeTab === 'teachers' && <TeachersView />}
        {activeTab === 'classes' && <ClassesView />}
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          type={modalType}
          item={editItem}
          schools={schools}
          teachers={teachers}
          onSave={handleSave}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

// Reusable Components
function StatCard({ icon, title, value, color }) {
  const colorClasses = {
    blue: 'from-blue-600 to-indigo-600',
    green: 'from-green-600 to-emerald-600',
    purple: 'from-purple-600 to-pink-600',
    orange: 'from-orange-600 to-red-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[color]} rounded-xl flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <div className="text-gray-600 text-sm font-semibold mb-1">{title}</div>
      <div className="text-4xl font-black text-gray-800">{value}</div>
    </div>
  );
}

function TabButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-4 font-bold transition border-b-4 ${
        active
          ? 'border-red-600 text-red-600 bg-red-50'
          : 'border-transparent text-gray-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function Modal({ type, item, schools, teachers, onSave, onClose }) {
  const [formData, setFormData] = useState(item || {});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(type, formData);
  };

  const renderForm = () => {
    switch(type) {
      case 'school':
        return (
          <>
            <input
              type="text"
              placeholder="School Name"
              value={formData.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={formData.location || ''}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="number"
              placeholder="Number of Students"
              value={formData.students || ''}
              onChange={(e) => handleChange('students', parseInt(e.target.value))}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="number"
              placeholder="Number of Teachers"
              value={formData.teachers || ''}
              onChange={(e) => handleChange('teachers', parseInt(e.target.value))}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Year Established"
              value={formData.established || ''}
              onChange={(e) => handleChange('established', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
          </>
        );
      
      case 'student':
        return (
          <>
            <input
              type="text"
              placeholder="Student Name"
              value={formData.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Student ID"
              value={formData.studentId || ''}
              onChange={(e) => handleChange('studentId', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <select
              value={formData.grade || ''}
              onChange={(e) => handleChange('grade', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Select Grade</option>
              <option value="JHS 1">JHS 1</option>
              <option value="JHS 2">JHS 2</option>
              <option value="JHS 3">JHS 3</option>
            </select>
            <select
              value={formData.school || ''}
              onChange={(e) => handleChange('school', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Select School</option>
              {schools.map(school => (
                <option key={school.id} value={school.name}>{school.name}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Attendance %"
              value={formData.attendance || ''}
              onChange={(e) => handleChange('attendance', parseInt(e.target.value))}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              min="0"
              max="100"
              required
            />
            <input
              type="number"
              placeholder="Performance %"
              value={formData.performance || ''}
              onChange={(e) => handleChange('performance', parseInt(e.target.value))}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              min="0"
              max="100"
              required
            />
          </>
        );
      
      case 'teacher':
        return (
          <>
            <input
              type="text"
              placeholder="Teacher Name"
              value={formData.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Teacher ID"
              value={formData.teacherId || ''}
              onChange={(e) => handleChange('teacherId', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject || ''}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <select
              value={formData.school || ''}
              onChange={(e) => handleChange('school', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Select School</option>
              {schools.map(school => (
                <option key={school.id} value={school.name}>{school.name}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Number of Classes"
              value={formData.classes || ''}
              onChange={(e) => handleChange('classes', parseInt(e.target.value))}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="number"
              placeholder="Number of Students"
              value={formData.students || ''}
              onChange={(e) => handleChange('students', parseInt(e.target.value))}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
          </>
        );
      
      case 'class':
        return (
          <>
            <input
              type="text"
              placeholder="Class Name (e.g., JHS 1A)"
              value={formData.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <select
              value={formData.grade || ''}
              onChange={(e) => handleChange('grade', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Select Grade</option>
              <option value="JHS 1">JHS 1</option>
              <option value="JHS 2">JHS 2</option>
              <option value="JHS 3">JHS 3</option>
            </select>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject || ''}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
            <select
              value={formData.school || ''}
              onChange={(e) => handleChange('school', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Select School</option>
              {schools.map(school => (
                <option key={school.id} value={school.name}>{school.name}</option>
              ))}
            </select>
            <select
              value={formData.teacher || ''}
              onChange={(e) => handleChange('teacher', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Select Teacher</option>
              {teachers.map(teacher => (
                <option key={teacher.id} value={teacher.name}>{teacher.name}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Number of Students"
              value={formData.students || ''}
              onChange={(e) => handleChange('students', parseInt(e.target.value))}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
          </>
        );
      
      default:
        return null;
    }
  };

  const getTitle = () => {
    const action = item ? 'Edit' : 'Add';
    const entity = type.charAt(0).toUpperCase() + type.slice(1);
    return `${action} ${entity}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black">{getTitle()}</h2>
            <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-lg transition">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {renderForm()}
          
          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
            >
              {item ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SchoolAdmin;