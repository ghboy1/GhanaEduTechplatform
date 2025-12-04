export const SUBJECTS = {
  mathematics: {
    id: 'math',
    name: 'Mathematics',
    icon: '🔢',
    color: 'from-blue-500 to-cyan-500',
    description: 'Numbers, algebra, geometry, and problem-solving',
    topics: [
      { 
        id: 'm1', 
        name: 'Numbers & Operations', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'Learn basic arithmetic, fractions, decimals and percentages'
      },
      { 
        id: 'm2', 
        name: 'Algebra & Equations', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Solve equations, work with variables and expressions'
      },
      { 
        id: 'm3', 
        name: 'Geometry & Measurement', 
        level: 'JHS1', 
        difficulty: 'medium',
        description: 'Angles, shapes, area, volume and perimeter'
      },
      { 
        id: 'm4', 
        name: 'Statistics & Probability', 
        level: 'JHS3', 
        difficulty: 'hard',
        description: 'Data analysis, graphs, mean, median, mode'
      },
      { 
        id: 'm5', 
        name: 'Fractions & Decimals', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'Master fractions, decimals and their operations'
      },
    ]
  },
  
  science: {
    id: 'sci',
    name: 'Integrated Science',
    icon: '🔬',
    color: 'from-green-500 to-emerald-500',
    description: 'Biology, chemistry, physics and earth science',
    topics: [
      { 
        id: 's1', 
        name: 'Matter & Materials', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'States of matter, properties, changes'
      },
      { 
        id: 's2', 
        name: 'Living Organisms', 
        level: 'JHS1', 
        difficulty: 'medium',
        description: 'Plants, animals, cells and life processes'
      },
      { 
        id: 's3', 
        name: 'Energy & Forces', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Motion, forces, energy types and conversions'
      },
      { 
        id: 's4', 
        name: 'Earth & Space', 
        level: 'JHS2', 
        difficulty: 'hard',
        description: 'Solar system, weather, rocks and minerals'
      },
      { 
        id: 's5', 
        name: 'Chemical Reactions', 
        level: 'JHS3', 
        difficulty: 'hard',
        description: 'Acids, bases, chemical equations'
      },
    ]
  },
  
  english: {
    id: 'eng',
    name: 'English Language',
    icon: '📚',
    color: 'from-purple-500 to-pink-500',
    description: 'Reading, writing, grammar and comprehension',
    topics: [
      { 
        id: 'e1', 
        name: 'Grammar & Punctuation', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'Parts of speech, sentence structure, punctuation rules'
      },
      { 
        id: 'e2', 
        name: 'Reading Comprehension', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Understanding texts, main ideas, inference'
      },
      { 
        id: 'e3', 
        name: 'Writing Skills', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Essays, letters, reports and creative writing'
      },
      { 
        id: 'e4', 
        name: 'Literature & Poetry', 
        level: 'JHS3', 
        difficulty: 'hard',
        description: 'African literature, poetry analysis, themes'
      },
      { 
        id: 'e5', 
        name: 'Oral Communication', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'Speaking, listening, presentations'
      },
    ]
  },
  
  social: {
    id: 'soc',
    name: 'Social Studies',
    icon: '🌍',
    color: 'from-yellow-500 to-orange-500',
    description: 'History, geography, government and culture',
    topics: [
      { 
        id: 'ss1', 
        name: 'Ghana History', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'Pre-colonial kingdoms, independence, modern Ghana'
      },
      { 
        id: 'ss2', 
        name: 'Government & Citizenship', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Democracy, rights, responsibilities, governance'
      },
      { 
        id: 'ss3', 
        name: 'Geography of Ghana', 
        level: 'JHS1', 
        difficulty: 'medium',
        description: 'Regions, resources, climate, population'
      },
      { 
        id: 'ss4', 
        name: 'Economics & Trade', 
        level: 'JHS3', 
        difficulty: 'hard',
        description: 'Money, banking, trade, economic systems'
      },
      { 
        id: 'ss5', 
        name: 'Culture & Heritage', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'Festivals, traditions, values, diversity'
      },
    ]
  },
  
  ict: {
    id: 'ict',
    name: 'ICT',
    icon: '💻',
    color: 'from-indigo-500 to-blue-500',
    description: 'Computer literacy and digital skills',
    topics: [
      { 
        id: 'i1', 
        name: 'Computer Basics', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'Hardware, software, operating systems'
      },
      { 
        id: 'i2', 
        name: 'Internet & Digital Citizenship', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Online safety, research, communication'
      },
      { 
        id: 'i3', 
        name: 'Programming Fundamentals', 
        level: 'JHS3', 
        difficulty: 'hard',
        description: 'Logic, algorithms, basic coding'
      },
      { 
        id: 'i4', 
        name: 'Spreadsheets & Data', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Excel, formulas, charts, data analysis'
      },
      { 
        id: 'i5', 
        name: 'Digital Content Creation', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Word processing, presentations, graphics'
      },
    ]
  },
  
  french: {
    id: 'fr',
    name: 'French',
    icon: '🇫🇷',
    color: 'from-red-500 to-rose-500',
    description: 'French language and culture',
    topics: [
      { 
        id: 'f1', 
        name: 'Basic Greetings & Introduction', 
        level: 'JHS1', 
        difficulty: 'easy',
        description: 'Bonjour, names, numbers, colors'
      },
      { 
        id: 'f2', 
        name: 'Grammar & Verbs', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Present tense, articles, pronouns'
      },
      { 
        id: 'f3', 
        name: 'Conversation Skills', 
        level: 'JHS2', 
        difficulty: 'medium',
        description: 'Ordering food, directions, shopping'
      },
      { 
        id: 'f4', 
        name: 'French Culture', 
        level: 'JHS3', 
        difficulty: 'hard',
        description: 'Francophone Africa, customs, traditions'
      },
      { 
        id: 'f5', 
        name: 'Reading & Writing', 
        level: 'JHS3', 
        difficulty: 'hard',
        description: 'Comprehension, essays, letters'
      },
    ]
  }
};

export default SUBJECTS;