export const SAMPLE_QUESTIONS = {
  // Mathematics
  m1: {
    question: "What is 25 × 4?",
    options: ["90", "100", "110", "120"],
    correct: 1,
    explanation: "25 × 4 = 100. Think of it as 25 × 2 = 50, then double it to get 100.",
    points: 100
  },
  m2: {
    question: "Solve for x: 2x + 5 = 13",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
    correct: 1,
    explanation: "Subtract 5 from both sides: 2x = 8. Divide by 2: x = 4.",
    points: 120
  },
  m3: {
    question: "What is the area of a rectangle with length 8cm and width 5cm?",
    options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
    correct: 2,
    explanation: "Area = length × width = 8 × 5 = 40 cm²",
    points: 100
  },

  // Science
  s1: {
    question: "What are the three states of matter?",
    options: ["Solid, Liquid, Gas", "Hot, Cold, Warm", "Big, Medium, Small", "Heavy, Light, Dense"],
    correct: 0,
    explanation: "Matter exists in three main states: Solid (fixed shape), Liquid (takes container shape), and Gas (fills space).",
    points: 80
  },
  s2: {
    question: "What is the process by which plants make their food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
    correct: 1,
    explanation: "Photosynthesis is the process where plants use sunlight, water, and CO₂ to make glucose and oxygen.",
    points: 100
  },

  // English
  e1: {
    question: "Which is the correct sentence?",
    options: ["He don't like rice", "He doesn't likes rice", "He doesn't like rice", "He not like rice"],
    correct: 2,
    explanation: "The correct form is 'He doesn't like rice' - using 'doesn't' (does not) with the base form of the verb.",
    points: 90
  },
  e2: {
    question: "What is the plural of 'child'?",
    options: ["Childs", "Children", "Childrens", "Childes"],
    correct: 1,
    explanation: "'Children' is the irregular plural form of 'child'.",
    points: 80
  },

  // Social Studies
  ss1: {
    question: "In what year did Ghana gain independence?",
    options: ["1955", "1957", "1960", "1963"],
    correct: 1,
    explanation: "Ghana gained independence on 6th March 1957, becoming the first sub-Saharan African country to do so.",
    points: 100
  },
  ss3: {
    question: "How many regions does Ghana have?",
    options: ["10", "14", "16", "18"],
    correct: 2,
    explanation: "Ghana has 16 regions as of 2019, increased from the original 10.",
    points: 80
  },

  // ICT
  i1: {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Computer Processing Utility"],
    correct: 0,
    explanation: "CPU stands for Central Processing Unit - the 'brain' of the computer.",
    points: 90
  },

  // French
  f1: {
    question: "How do you say 'Good morning' in French?",
    options: ["Bonsoir", "Bonjour", "Salut", "Au revoir"],
    correct: 1,
    explanation: "Bonjour means 'Good morning' or 'Good day' in French.",
    points: 80
  }
};

export default SAMPLE_QUESTIONS;