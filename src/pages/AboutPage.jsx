import React, { useState } from 'react';
import { 
  Heart,
  Target,
  Eye,
  Users,
  Globe,
  Award,
  Lightbulb,
  BookOpen,
  Rocket,
  Shield,
  Zap,
  TrendingUp,
  GraduationCap,
  School,
  Sparkles,
  CheckCircle,
  MapPin,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Clock,
  Building
} from 'lucide-react';

const AboutPage = () => {
  const [activeValue, setActiveValue] = useState(0);

  const missionVision = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Our Mission',
      description: 'To democratize quality education across Ghana by providing innovative, accessible, and engaging digital learning solutions that empower every student to reach their full potential.',
      color: 'blue',
      points: [
        'Make quality education accessible to all Ghanaian students',
        'Bridge the digital divide in education',
        'Support teachers with powerful tools and resources',
        'Create engaging learning experiences that inspire excellence'
      ]
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Our Vision',
      description: 'To be the leading educational technology platform in Africa, transforming how students learn and teachers teach, creating a generation of innovative thinkers and problem solvers.',
      color: 'purple',
      points: [
        'Lead digital transformation in African education',
        'Set new standards for educational excellence',
        'Foster innovation and critical thinking',
        'Build a connected learning community across Africa'
      ]
    }
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Innovation',
      description: 'We continuously innovate to create cutting-edge learning solutions that inspire and engage.',
      color: 'yellow'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Accessibility',
      description: 'We believe every student deserves access to quality education, regardless of their background.',
      color: 'green'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from content quality to user experience.',
      color: 'blue'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Impact',
      description: 'We measure our success by the positive impact we have on students and educators.',
      color: 'red'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and unwavering commitment to our community.',
      color: 'indigo'
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Growth',
      description: 'We foster continuous learning and growth for our users, team, and organization.',
      color: 'purple'
    }
  ];

  const story = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Founded with a vision to transform education in Ghana through technology.',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      year: '2020',
      title: 'First Schools',
      description: 'Launched in 15 pilot schools across Accra and Kumasi with 5,000 students.',
      icon: <School className="w-8 h-8" />
    },
    {
      year: '2021',
      title: 'Rapid Expansion',
      description: 'Expanded to 100+ schools nationwide, reaching 50,000+ students.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Won Best EdTech Platform award and achieved 150,000+ active users.',
      icon: <Award className="w-8 h-8" />
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Launched AI-powered personalized learning and interactive simulations.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Serving 250,000+ students across 500+ schools with 98% satisfaction rate.',
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  const team = [
    {
      name: 'Dr. Kwame Asante',
      role: 'Founder & CEO',
      image: '👨‍💼',
      bio: 'Former educator with 15+ years of experience. PhD in Educational Technology from University of Ghana.',
      location: 'Accra, Ghana',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'kwame@ghanalearning.com'
      }
    },
    {
      name: 'Ama Oforiwaa',
      role: 'Chief Technology Officer',
      image: '👩‍💻',
      bio: 'Tech innovator with expertise in AI and machine learning. Built scalable platforms serving millions.',
      location: 'Accra, Ghana',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ama@ghanalearning.com'
      }
    },
    {
      name: 'Kofi Mensah',
      role: 'Head of Product',
      image: '👨‍🎓',
      bio: 'Product strategist passionate about user experience. Former teacher turned product leader.',
      location: 'Kumasi, Ghana',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'kofi@ghanalearning.com'
      }
    },
    {
      name: 'Abena Boateng',
      role: 'Director of Education',
      image: '👩‍🏫',
      bio: 'Curriculum expert with deep understanding of Ghanaian education system. Master educator.',
      location: 'Cape Coast, Ghana',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'abena@ghanalearning.com'
      }
    }
  ];

  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      number: '250K+',
      label: 'Active Students',
      color: 'blue'
    },
    {
      icon: <School className="w-10 h-10" />,
      number: '500+',
      label: 'Partner Schools',
      color: 'purple'
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      number: '5,000+',
      label: 'Teachers',
      color: 'green'
    },
    {
      icon: <Globe className="w-10 h-10" />,
      number: '16',
      label: 'Regions',
      color: 'orange'
    }
  ];

  const impact = [
    {
      title: 'Educational Equity',
      description: 'Bringing quality education to underserved communities across Ghana',
      icon: <BookOpen className="w-8 h-8" />,
      stats: '85% of our schools are in rural or peri-urban areas'
    },
    {
      title: 'Teacher Empowerment',
      description: 'Providing teachers with tools and training to enhance their effectiveness',
      icon: <Users className="w-8 h-8" />,
      stats: '10,000+ hours of professional development delivered'
    },
    {
      title: 'Student Success',
      description: 'Measurable improvements in student outcomes and engagement',
      icon: <TrendingUp className="w-8 h-8" />,
      stats: '45% average improvement in student performance'
    },
    {
      title: 'Digital Literacy',
      description: 'Building essential 21st-century skills for the digital economy',
      icon: <Zap className="w-8 h-8" />,
      stats: '200,000+ students gaining digital skills'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-700' },
      green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-700' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-700' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', gradient: 'from-yellow-500 to-yellow-700' },
      red: { bg: 'bg-red-100', text: 'text-red-600', gradient: 'from-red-500 to-red-700' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', gradient: 'from-indigo-500 to-indigo-700' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Heart className="w-6 h-6" />
            <span className="font-semibold">About Ghana Learning Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Education
            <span className="block text-yellow-300">Across Ghana</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            We are on a mission to democratize quality education and empower every Ghanaian student to reach their full potential through innovative technology.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const colors = getColorClasses(stat.color);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 mx-auto ${colors.text}`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {missionVision.map((item, idx) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8"
              >
                <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 ${colors.text}`}>
                  {item.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-3">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-1`} />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const colors = getColorClasses(value.color);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4 ${colors.text}`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From a vision to transforming education across Ghana
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600"></div>

          <div className="space-y-12">
            {story.map((event, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-8 ${
                  idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all inline-block max-w-md">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {event.icon}
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Making a real difference in Ghana's education landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impact.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-purple-100 mb-3">{item.description}</p>
                    <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
                      <span className="font-bold text-yellow-300">{item.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate educators and technologists committed to transforming education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-32 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl border-4 border-white">
                    {member.image}
                  </div>
                </div>
              </div>
              <div className="pt-16 px-6 pb-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{member.bio}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{member.location}</span>
                </div>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-sky-100 hover:bg-sky-200 rounded-full flex items-center justify-center text-sky-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center text-purple-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're always looking for talented, passionate individuals who want to make a difference in education. Explore opportunities to join our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105">
              View Open Positions
            </button>
            <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-blue-600">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Visit Us</h3>
              <p className="text-gray-600 text-sm">123 Independence Avenue<br />Accra, Ghana</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 text-purple-600">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm">+233 30 123 4567<br />Mon-Fri, 8AM-6PM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 text-green-600">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm">info@ghanalearning.com<br />support@ghanalearning.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;