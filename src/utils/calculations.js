import { LEVEL_THRESHOLDS, POINTS_CONFIG } from '../data/constants';

export const calculateLevel = (points) => {
  if (points < LEVEL_THRESHOLDS.explorer) return 'Novice';
  if (points < LEVEL_THRESHOLDS.scholar) return 'Explorer';
  if (points < LEVEL_THRESHOLDS.master) return 'Scholar';
  if (points < LEVEL_THRESHOLDS.legend) return 'Master';
  return 'Legend';
};

export const calculatePoints = (difficulty, isCorrect, streak = 0) => {
  if (!isCorrect) return 0;
  
  const basePoints = POINTS_CONFIG[difficulty] || POINTS_CONFIG.medium;
  const streakBonus = Math.min(streak * POINTS_CONFIG.streak_bonus, 100);
  
  return basePoints + streakBonus;
};

export const calculateProgress = (completed, total) => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

export const calculateRank = (userPoints, allUsers) => {
  const sorted = [...allUsers].sort((a, b) => b.points - a.points);
  return sorted.findIndex(u => u.points === userPoints) + 1;
};

export const getNextLevelPoints = (currentPoints) => {
  const levels = Object.values(LEVEL_THRESHOLDS).sort((a, b) => a - b);
  return levels.find(threshold => threshold > currentPoints) || levels[levels.length - 1];
};

export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins} min`;
};

export const getPerformanceCategory = (score) => {
  if (score >= 90) return { label: 'Excellent', color: 'green' };
  if (score >= 75) return { label: 'Good', color: 'blue' };
  if (score >= 60) return { label: 'Fair', color: 'yellow' };
  return { label: 'Needs Improvement', color: 'red' };
};

export default {
  calculateLevel,
  calculatePoints,
  calculateProgress,
  calculateRank,
  getNextLevelPoints,
  formatTime,
  getPerformanceCategory
};