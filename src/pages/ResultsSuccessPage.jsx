import React, { useState } from 'react';
import { 
  TrendingUp,
  Award,
  Users,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Target,
  BarChart3,
  BookOpen,
  Sparkles,
  Trophy,
  LineChart,
  ThumbsUp,
  Heart,
  Zap,
  GraduationCap,
  School,
  MapPin
} from 'lucide-react';

const ResultsSuccessPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState('all');

  const keyMetrics = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      value: '45%',
      label: 'Average Score Improvement',
      description: 'Students show significant grade increases after using the platform',
      color: 'blue',
      change: '+12% from last year'
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: '250K+',
      label: 'Active Students',
      description: 'Students across Ghana engaged daily with our platform',
      color: 'purple',
      change: '+35K this quarter'
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: '92%',
      label: 'Student Satisfaction',
      description: 'Students report enjoying learning more with our platform',
      color: 'green',
      change: '+8% satisfaction increase'
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      value: '89%',
      label: 'Teacher Approval',
      description: 'Teachers recommend our platform to colleagues',
      color: 'orange',
      change: 'Consistent over 3 years'
    }
  ];

  const testimonials = [
    {
      name: 'Akosua Mensah',
      role: 'Science Teacher',
      school: 'Accra Senior High School',
      location: 'Accra, Ghana',
      image: '👩‍🏫',
      quote: 'This platform has completely transformed how I teach science. My students are more engaged than ever, and their test scores have improved by an average of 40%. The interactive simulations make complex concepts easy to understand.',
      rating: 5,
      metrics: { improvement: '40%', engagement: '95%', time: '6 months' }
    },
    {
      name: 'Kwame Osei',
      role: 'School Principal',
      school: 'Kumasi International School',
      location: 'Kumasi, Ghana',
      image: '👨‍💼',
      quote: 'Since implementing this learning platform, we have seen remarkable improvements across all grade levels. Teachers love the assessment tools, and students are excited to learn. It is the best investment we have made in educational technology.',
      rating: 5,
      metrics: { improvement: '38%', engagement: '90%', time: '1 year' }
    },
    {
      name: 'Abena Appiah',
      role: 'Mathematics Teacher',
      school: 'Takoradi Technical Institute',
      location: 'Takoradi, Ghana',
      image: '👩‍🎓',
      quote: 'The gamified learning approach has made mathematics fun for my students. They compete with each other to complete lessons and earn badges. I have never seen this level of enthusiasm for math before!',
      rating: 5,
      metrics: { improvement: '52%', engagement: '98%', time: '8 months' }
    },
    {
      name: 'Yaw Boateng',
      role: 'District Education Officer',
      school: 'Cape Coast Education District',
      location: 'Cape Coast, Ghana',
      image: '👨‍💻',
      quote: 'We rolled out this platform across 25 schools in our district. The results have been phenomenal. Student performance has improved significantly, and teacher satisfaction is at an all-time high. This is the future of education in Ghana.',
      rating: 5,
      metrics: { improvement: '43%', engagement: '88%', time: '18 months' }
    }
  ];

  const caseStudies = [
    {
      school: 'Wesley Grammar School',
      location: 'Accra',
      students: 1200,
      icon: <School className="w-8 h-8" />,
      challenge: 'Low science scores and student disengagement in STEM subjects',
      solution: 'Implemented full platform with interactive simulations and gamified assessments',
      results: [
        'Science scores increased by 47%',
        'Student engagement rose to 93%',
        'Teacher workload reduced by 30%',
        '95% of students now pursue STEM subjects'
      ],
      duration: '12 months',
      color: 'blue'
    },
    {
      school: 'Prempeh College',
      location: 'Kumasi',
      students: 2500,
      icon: <School className="w-8 h-8" />,
      challenge: 'Difficulty tracking individual student progress and providing interventions',
      solution: 'Deployed assessment suite with real-time analytics and personalized learning paths',
      results: [
        'Student achievement gap reduced by 35%',
        'Early intervention success rate: 88%',
        'Pass rates improved by 41%',
        'Teacher retention increased by 25%'
      ],
      duration: '18 months',
      color: 'purple'
    },
    {
      school: 'Achimota School',
      location: 'Accra',
      students: 1800,
      icon: <School className="w-8 h-8" />,
      challenge: 'Preparing students for competitive national examinations',
      solution: 'Intensive use of practice assessments and adaptive learning modules',
      results: [
        'WASSCE pass rate: 98% (up from 76%)',
        'Top 10% national ranking achieved',
        'University admission rate: 92%',
        'Student confidence increased by 65%'
      ],
      duration: '2 years',
      color: 'green'
    }
  ];

  const impactStats = [
    {
      category: 'Academic Performance',
      stats: [
        { label: 'Average grade improvement', value: '1.5 grades' },
        { label: 'Students meeting proficiency', value: '87%' },
        { label: 'Homework completion rate', value: '94%' },
        { label: 'Test anxiety reduction', value: '42%' }
      ]
    },
    {
      category: 'Student Engagement',
      stats: [
        { label: 'Daily active users', value: '156K' },
        { label: 'Average time spent learning', value: '45 min' },
        { label: 'Lessons completed weekly', value: '8.5' },
        { label: 'Student return rate', value: '91%' }
      ]
    },
    {
      category: 'Teacher Efficiency',
      stats: [
        { label: 'Grading time saved', value: '6 hrs/week' },
        { label: 'Lesson prep time reduced', value: '40%' },
        { label: 'Parent communication improved', value: '68%' },
        { label: 'Teacher satisfaction', value: '89%' }
      ]
    }
  ];

  const awards = [
    {
      title: 'Best EdTech Platform',
      organization: 'Ghana ICT Awards',
      year: '2024',
      icon: '🏆',
      description: 'Recognized for excellence in educational technology innovation'
    },
    {
      title: 'Innovation in Education',
      organization: 'African EdTech Summit',
      year: '2024',
      icon: '🎖️',
      description: 'Leading platform for digital transformation in African education'
    },
    {
      title: 'Best Learning Solution',
      organization: 'West Africa Education Forum',
      year: '2023',
      icon: '⭐',
      description: 'Outstanding contribution to improving learning outcomes'
    },
    {
      title: 'Teachers Choice Award',
      organization: 'Ghana Teachers Association',
      year: '2023',
      icon: '🌟',
      description: 'Most preferred digital learning platform by educators'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-700' },
      green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-700' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-700' }
    };
    return colors[color] || colors.blue;
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Trophy className="w-6 h-6" />
              <span className="font-semibold">Proven Results & Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Real Impact on
              <span className="block text-yellow-300">Student Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover how schools across Ghana are transforming education and achieving remarkable results with our platform.
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics.map((metric, idx) => {
            const colors = getColorClasses(metric.color);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 ${colors.text}`}>
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{metric.value}</div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">{metric.label}</h3>
                <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                <div className="flex items-center gap-1 text-sm text-green-600 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {metric.change}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Educators Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from teachers, principals, and administrators who are seeing real results.
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="absolute top-8 left-8 text-purple-200 opacity-50">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{testimonials[activeTestimonial].image}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-purple-600 font-semibold">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {testimonials[activeTestimonial].school}, {testimonials[activeTestimonial].location}
                </p>
              </div>
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[activeTestimonial].quote}"
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {testimonials[activeTestimonial].metrics.improvement}
                </div>
                <div className="text-sm text-gray-600">Score Improvement</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {testimonials[activeTestimonial].metrics.engagement}
                </div>
                <div className="text-sm text-gray-600">Engagement Rate</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600">
                  {testimonials[activeTestimonial].metrics.time}
                </div>
                <div className="text-sm text-gray-600">Time Period</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activeTestimonial
                        ? 'bg-purple-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Success Stories from Ghana Schools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real schools, real challenges, real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => {
              const colors = getColorClasses(study.color);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${colors.gradient} text-white p-6`}>
                    <div className="flex items-center gap-3 mb-3">
                      {study.icon}
                      <div>
                        <h3 className="text-xl font-bold">{study.school}</h3>
                        <p className="text-sm opacity-90">{study.location} • {study.students} students</p>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block text-sm font-semibold">
                      {study.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Measurable Impact Across All Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Data-driven results that demonstrate real educational transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impactStats.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-purple-200">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="text-2xl font-bold text-purple-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Honored to be recognized for our commitment to educational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                <div className="text-6xl mb-4">{award.icon}</div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-purple-200 font-semibold mb-2">{award.organization}</p>
                <p className="text-sm text-purple-100 mb-2">{award.year}</p>
                <p className="text-sm text-purple-200">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See Results Like These?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of schools across Ghana that are transforming education and achieving remarkable student outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Schedule Your Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSuccessPage;