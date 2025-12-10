import React, { useState, useEffect, useRef } from 'react';
import { 
  Atom,
  Beaker,
  Zap,
  Microscope,
  Globe,
  Layers,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Eye,
  Hand,
  Sparkles,
  Rocket,
  Dna,
  Wind,
  Droplets,
  Sun,
  Moon,
  Mountain,
  Waves,
  TestTube
} from 'lucide-react';

const InteractiveSimulationsPage = () => {
  const [activeSimulation, setActiveSimulation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const canvasRef = useRef(null);

  // Simple 3D Atom Simulation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    let angle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 80;

      // Draw nucleus
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fillStyle = '#8B5CF6';
      ctx.fill();
      ctx.strokeStyle = '#6D28D9';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw orbits and electrons
      for (let i = 0; i < 3; i++) {
        const orbitRadius = radius + i * 30;
        
        // Orbit path
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, orbitRadius, orbitRadius * 0.3, i * Math.PI / 3, 0, Math.PI * 2);
        ctx.strokeStyle = '#E9D5FF';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Electron
        const electronAngle = angle + i * (Math.PI * 2 / 3);
        const electronX = centerX + Math.cos(electronAngle) * orbitRadius;
        const electronY = centerY + Math.sin(electronAngle) * orbitRadius * 0.3;
        
        ctx.beginPath();
        ctx.arc(electronX, electronY, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#60A5FA';
        ctx.fill();
        ctx.strokeStyle = '#3B82F6';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      angle += 0.02;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const categories = [
    { id: 'all', name: 'All Simulations', icon: <Layers className="w-5 h-5" /> },
    { id: 'physics', name: 'Physics', icon: <Atom className="w-5 h-5" /> },
    { id: 'chemistry', name: 'Chemistry', icon: <Beaker className="w-5 h-5" /> },
    { id: 'biology', name: 'Biology', icon: <Dna className="w-5 h-5" /> },
    { id: 'earth-science', name: 'Earth Science', icon: <Globe className="w-5 h-5" /> },
  ];

  const simulations = [
    {
      id: 1,
      title: 'Atomic Structure Explorer',
      category: 'physics',
      description: 'Explore the structure of atoms, electrons, protons, and neutrons in 3D.',
      icon: <Atom className="w-8 h-8" />,
      color: 'purple',
      difficulty: 'Beginner',
      duration: '15 min',
      interactions: ['Rotate', 'Zoom', 'Manipulate']
    },
    {
      id: 2,
      title: 'Chemical Reaction Lab',
      category: 'chemistry',
      description: 'Mix chemicals virtually and observe reactions in real-time.',
      icon: <TestTube className="w-8 h-8" />,
      color: 'blue',
      difficulty: 'Intermediate',
      duration: '20 min',
      interactions: ['Mix', 'Heat', 'Observe']
    },
    {
      id: 3,
      title: 'DNA Replication',
      category: 'biology',
      description: 'Watch DNA replicate and understand the process step by step.',
      icon: <Dna className="w-8 h-8" />,
      color: 'green',
      difficulty: 'Advanced',
      duration: '25 min',
      interactions: ['Play', 'Pause', 'Step-through']
    },
    {
      id: 4,
      title: 'Solar System Explorer',
      category: 'earth-science',
      description: 'Navigate through our solar system and learn about planets.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'orange',
      difficulty: 'Beginner',
      duration: '30 min',
      interactions: ['Navigate', 'Explore', 'Learn']
    },
    {
      id: 5,
      title: 'Wave Interference',
      category: 'physics',
      description: 'Visualize wave interference patterns and understand superposition.',
      icon: <Waves className="w-8 h-8" />,
      color: 'cyan',
      difficulty: 'Intermediate',
      duration: '18 min',
      interactions: ['Adjust', 'Measure', 'Analyze']
    },
    {
      id: 6,
      title: 'Water Cycle Simulation',
      category: 'earth-science',
      description: 'Experience the water cycle in an interactive 3D environment.',
      icon: <Droplets className="w-8 h-8" />,
      color: 'blue',
      difficulty: 'Beginner',
      duration: '12 min',
      interactions: ['Control', 'Observe', 'Track']
    },
    {
      id: 7,
      title: 'Cell Structure Tour',
      category: 'biology',
      description: 'Take a virtual tour inside a cell and explore organelles.',
      icon: <Microscope className="w-8 h-8" />,
      color: 'pink',
      difficulty: 'Beginner',
      duration: '15 min',
      interactions: ['Navigate', 'Zoom', 'Label']
    },
    {
      id: 8,
      title: 'Electric Circuit Builder',
      category: 'physics',
      description: 'Build and test electric circuits with various components.',
      icon: <Zap className="w-8 h-8" />,
      color: 'yellow',
      difficulty: 'Intermediate',
      duration: '22 min',
      interactions: ['Build', 'Test', 'Measure']
    },
    {
      id: 9,
      title: 'Photosynthesis Process',
      category: 'biology',
      description: 'Understand how plants convert sunlight into energy.',
      icon: <Sun className="w-8 h-8" />,
      color: 'green',
      difficulty: 'Intermediate',
      duration: '20 min',
      interactions: ['Control', 'Observe', 'Measure']
    }
  ];

  const features = [
    {
      icon: <Hand className="w-10 h-10" />,
      title: 'Hands-On Interaction',
      description: 'Manipulate 3D models with intuitive controls for a truly immersive learning experience.'
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: 'Real-Time Visualization',
      description: 'See complex processes unfold in real-time with stunning 3D graphics and animations.'
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Safe Experimentation',
      description: 'Conduct experiments without safety concerns or expensive equipment requirements.'
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'Multi-Level Learning',
      description: 'Simulations adapted for different grade levels and learning objectives.'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300', gradient: 'from-purple-500 to-purple-700' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300', gradient: 'from-blue-500 to-blue-700' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300', gradient: 'from-green-500 to-green-700' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-300', gradient: 'from-orange-500 to-orange-700' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-300', gradient: 'from-cyan-500 to-cyan-700' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-300', gradient: 'from-pink-500 to-pink-700' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-300', gradient: 'from-yellow-500 to-yellow-700' }
    };
    return colors[color] || colors.blue;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-700',
      'Intermediate': 'bg-yellow-100 text-yellow-700',
      'Advanced': 'bg-red-100 text-red-700'
    };
    return colors[difficulty] || colors['Beginner'];
  };

  const filteredSimulations = selectedCategory === 'all' 
    ? simulations 
    : simulations.filter(sim => sim.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)`,
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: Math.random() * 2 + 's'
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <Microscope className="w-6 h-6" />
                <span className="font-semibold">Interactive 3D Simulations</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Bring Science to Life with
                <span className="block text-yellow-300">Virtual Labs</span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Explore complex scientific concepts through immersive 3D simulations. Conduct experiments, manipulate variables, and observe results in a safe, virtual environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Launch Simulation
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Animated 3D Atom */}
            <div className="flex justify-center">
              <div className="relative">
                <canvas 
                  ref={canvasRef} 
                  width="300" 
                  height="300"
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border-2 border-white/20"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Live Simulation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Interactive Simulations?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform abstract concepts into tangible experiences that students can see, touch, and explore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 mx-auto text-purple-600">
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

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Simulations Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSimulations.map((simulation) => {
            const colorClasses = getColorClasses(simulation.color);
            return (
              <div
                key={simulation.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(simulation.icon, { className: 'w-24 h-24' })}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(simulation.difficulty)}`}>
                      {simulation.difficulty}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {simulation.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {simulation.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Layers className="w-4 h-4" />
                      <span>{simulation.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 mb-2">Interactions:</div>
                    <div className="flex flex-wrap gap-2">
                      {simulation.interactions.map((interaction, idx) => (
                        <span
                          key={idx}
                          className={`${colorClasses.bg} ${colorClasses.text} px-3 py-1 rounded-full text-xs font-medium`}
                        >
                          {interaction}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${colorClasses.gradient} text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
                    <Play className="w-5 h-5" />
                    Launch Simulation
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Simulations Available' },
              { number: '50K+', label: 'Students Engaged' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '12+', label: 'Subject Areas' }
            ].map((stat, idx) => (
              <div key={idx} className="transform hover:scale-110 transition-transform">
                <div className="text-5xl font-bold mb-2 text-yellow-300">{stat.number}</div>
                <div className="text-lg text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How Virtual Labs Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, intuitive, and designed for maximum learning impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              title: 'Select Simulation',
              description: 'Choose from our library of interactive 3D simulations aligned to your curriculum.',
              icon: <Layers className="w-8 h-8" />
            },
            {
              step: '2',
              title: 'Explore & Experiment',
              description: 'Manipulate variables, conduct experiments, and observe outcomes in real-time.',
              icon: <Hand className="w-8 h-8" />
            },
            {
              step: '3',
              title: 'Learn & Apply',
              description: 'Understand concepts deeply and apply knowledge to real-world scenarios.',
              icon: <Sparkles className="w-8 h-8" />
            }
          ].map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                <div className="text-purple-600 mb-4 mt-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Science Classroom?
          </h2>
          <p className="text-xl text-pink-100 mb-8 leading-relaxed">
            Give your students access to world-class virtual labs and interactive simulations today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Get Started Free
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSimulationsPage;