import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  BarChart3, 
  TrendingUp, 
  FileText,
  Download,
  Filter,
  Calendar,
  Users,
  Award,
  Target,
  CheckCircle,
  AlertCircle,
  Eye,
  Clock,
  Lightbulb,
  LineChart,
  PieChart,
  Activity
} from 'lucide-react';

const AssessmentsReportsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const assessmentTypes = [
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: 'Formative Assessments',
      description: 'Quick checks for understanding that help teachers adjust instruction in real-time.',
      features: ['Instant feedback', 'Progress tracking', 'Adaptive questions'],
      color: 'blue'
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Summative Assessments',
      description: 'Comprehensive evaluations that measure student learning at the end of units.',
      features: ['Standards-aligned', 'Detailed analytics', 'Benchmark tracking'],
      color: 'purple'
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Diagnostic Assessments',
      description: 'Identify learning gaps and strengths to personalize instruction effectively.',
      features: ['Skill mapping', 'Intervention planning', 'Learning paths'],
      color: 'green'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Performance Tasks',
      description: 'Real-world projects that demonstrate deep understanding and application.',
      features: ['Rubric-based scoring', 'Portfolio building', 'Skills assessment'],
      color: 'orange'
    }
  ];

  const reportTypes = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      name: 'Student Progress Report',
      description: 'Track individual student growth over time',
      metrics: ['Completion rate', 'Skill mastery', 'Time spent']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      name: 'Class Performance Report',
      description: 'Overview of entire class achievements',
      metrics: ['Average scores', 'Top performers', 'Areas for improvement']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      name: 'Growth Analytics',
      description: 'Measure learning gains and trends',
      metrics: ['Weekly progress', 'Monthly trends', 'Year-over-year comparison']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      name: 'Standards Mastery Report',
      description: 'Track mastery of learning standards',
      metrics: ['Standards covered', 'Mastery levels', 'Gaps identified']
    },
    {
      icon: <Activity className="w-8 h-8 text-pink-600" />,
      name: 'Engagement Report',
      description: 'Monitor student participation and activity',
      metrics: ['Login frequency', 'Activity completion', 'Time on task']
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
      name: 'Intervention Report',
      description: 'Identify students needing support',
      metrics: ['At-risk students', 'Intervention strategies', 'Response to intervention']
    }
  ];

  const features = [
    {
      title: 'Real-Time Analytics',
      description: 'Monitor student progress as it happens with live data updates and instant insights.',
      icon: <Activity className="w-12 h-12" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Custom Report Builder',
      description: 'Create tailored reports that focus on the metrics that matter most to you.',
      icon: <FileText className="w-12 h-12" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visual insights and charts.',
      icon: <PieChart className="w-12 h-12" />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Export & Share',
      description: 'Download reports in multiple formats and share with stakeholders easily.',
      icon: <Download className="w-12 h-12" />,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const sampleData = {
    students: [
      { name: 'Emma Johnson', score: 94, progress: 87, status: 'excellent' },
      { name: 'Michael Chen', score: 88, progress: 92, status: 'good' },
      { name: 'Sarah Williams', score: 76, progress: 68, status: 'average' },
      { name: 'David Brown', score: 65, progress: 55, status: 'needs-support' },
      { name: 'Lisa Garcia', score: 91, progress: 89, status: 'excellent' }
    ],
    classAverage: 83,
    completionRate: 78,
    improvement: 12
  };

  const getStatusColor = (status) => {
    const colors = {
      'excellent': 'bg-green-100 text-green-700 border-green-300',
      'good': 'bg-blue-100 text-blue-700 border-blue-300',
      'average': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'needs-support': 'bg-red-100 text-red-700 border-red-300'
    };
    return colors[status] || colors.average;
  };

  const getStatusLabel = (status) => {
    const labels = {
      'excellent': 'Excellent',
      'good': 'Good',
      'average': 'Average',
      'needs-support': 'Needs Support'
    };
    return labels[status] || 'Average';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <BarChart3 className="w-6 h-6" />
              <span className="font-semibold">Assessment & Reporting Suite</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Data-Driven Insights for<br />
              <span className="text-yellow-300">Better Learning Outcomes</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive assessment tools and powerful analytics that help educators make informed decisions and track student progress effectively.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
                <Eye className="w-5 h-5" />
                View Demo Dashboard
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Sample Reports
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Types */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Assessment Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multiple assessment types to evaluate student learning from every angle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {assessmentTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 transform hover:-translate-y-1"
            >
              <div className={`w-20 h-20 bg-gradient-to-br from-${type.color}-100 to-${type.color}-200 rounded-2xl flex items-center justify-center mb-6 text-${type.color}-600`}>
                {type.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {type.features.map((feature, fIdx) => (
                  <span
                    key={fIdx}
                    className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powerful Reporting Features
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Everything you need to understand and improve student performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Types Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Available Report Types
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access detailed reports tailored to different stakeholder needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTypes.map((report, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-indigo-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {report.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {report.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {report.description}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {report.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Dashboard */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sample Dashboard Preview
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how your data comes to life with our intuitive dashboard.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            {/* Dashboard Header */}
            <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Class 7A - Science</h3>
                <p className="text-gray-600">Current Term Performance Overview</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Date Range
                </button>
                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-600 font-semibold">Class Average</span>
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-700 mb-1">{sampleData.classAverage}%</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+5% from last month</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-600 font-semibold">Completion Rate</span>
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-purple-700 mb-1">{sampleData.completionRate}%</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+3% from last month</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-600 font-semibold">Improvement</span>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-700 mb-1">+{sampleData.improvement}%</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <Clock className="w-4 h-4" />
                  <span>Over last term</span>
                </div>
              </div>
            </div>

            {/* Student List */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Student Performance</h4>
              <div className="space-y-3">
                {sampleData.students.map((student, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{student.name}</div>
                        <div className="text-sm text-gray-600">
                          Score: {student.score}% • Progress: {student.progress}%
                        </div>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${getStatusColor(student.status)}`}>
                      {getStatusLabel(student.status)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Making Data-Driven Decisions Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Transform your assessment and reporting process with our comprehensive analytics platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Schedule a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsReportsPage;