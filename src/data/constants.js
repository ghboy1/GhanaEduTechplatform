export const APP_CONFIG = {
  name: 'Ghana Learning Platform',
  version: '1.0.0',
  apiUrl: import.meta.env.VITE_API_URL,
  storageKey: import.meta.env.VITE_STORAGE_KEY || 'ghana_edu_storage'
};

export const USER_TYPES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
  PARENT: 'parent',
  ADMIN: 'admin'
};

export const DIFFICULTY_LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
};

export const GRADE_LEVELS = {
  JHS1: 'JHS 1',
  JHS2: 'JHS 2',
  JHS3: 'JHS 3'
};

export const POINTS_CONFIG = {
  easy: 80,
  medium: 100,
  hard: 120,
  streak_bonus: 10,
  perfect_score: 50
};

export const LEVEL_THRESHOLDS = {
  novice: 0,
  explorer: 200,
  scholar: 500,
  master: 1000,
  legend: 2000
};

export const BADGES = [
  { id: 'first_quiz', name: 'First Quiz', description: 'Complete your first quiz', icon: '🎯' },
  { id: 'streak_3', name: 'Streak Master', description: '3-day learning streak', icon: '🔥' },
  { id: 'streak_7', name: 'Week Warrior', description: '7-day learning streak', icon: '⚡' },
  { id: 'points_500', name: 'Point Collector', description: 'Earn 500 points', icon: '💎' },
  { id: 'points_1000', name: 'Point Hoarder', description: 'Earn 1000 points', icon: '👑' },
  { id: 'subject_master', name: 'Subject Master', description: 'Complete all topics in a subject', icon: '🏆' },
  { id: 'perfect_score', name: 'Perfect Score', description: 'Get 100% on a quiz', icon: '⭐' },
  { id: 'early_bird', name: 'Early Bird', description: 'Study before 8 AM', icon: '🌅' },
  { id: 'night_owl', name: 'Night Owl', description: 'Study after 8 PM', icon: '🦉' },
  { id: 'helping_hand', name: 'Helping Hand', description: 'Help another student', icon: '🤝' }
];

export const GHANA_REGIONS = [
  'Greater Accra', 'Ashanti', 'Western', 'Central', 'Eastern', 
  'Volta', 'Northern', 'Upper East', 'Upper West', 'Bono',
  'Bono East', 'Ahafo', 'Oti', 'Savannah', 'North East', 'Western North'
];

export default {
  APP_CONFIG,
  USER_TYPES,
  DIFFICULTY_LEVELS,
  GRADE_LEVELS,
  POINTS_CONFIG,
  LEVEL_THRESHOLDS,
  BADGES,
  GHANA_REGIONS
};