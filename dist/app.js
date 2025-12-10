// ============================================
// GHANA MASTERY QUEST - MAIN APPLICATION
// Game state management and core functionality
// ============================================

// ===== GAME STATE MANAGEMENT =====
let currentTopic = null;
let currentConcept = null;
let score = 0;
let streak = 0;
let maxStreak = 0;
let badges = [];
let completedConcepts = {};
let level = 'Novice';
let game = null;
let timerInterval = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  initializeGameState();
  initTopics();
  updateStats();
  checkDailyLogin();
  
  // Service Worker registration for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('', location.href), {type: 'classic'}).catch(() => {});
  }
});

// ===== GAME STATE INITIALIZATION =====
function initializeGameState() {
  // Note: Using in-memory storage as localStorage is not supported in Claude artifacts
  score = 0;
  streak = 0;
  maxStreak = 0;
  badges = [];
  completedConcepts = {};
}

// ===== LEVEL CALCULATION =====
function calculateLevel(points) {
  if (points < 200) return 'Novice';
  if (points < 500) return 'Explorer';
  if (points < 1000) return 'Scholar';
  if (points < 2000) return 'Master';
  return 'Legend';
}

// ===== BADGE SYSTEM =====
function awardBadge(achievement) {
  if (!badges.includes(achievement)) {
    badges.push(achievement);
    document.getElementById('badgeValue').textContent = badges.length;
    playSound('levelUpSound');
    showNotification(`🏆 Badge Earned: ${achievement}!`);
  }
}

// ===== AUDIO PLAYBACK =====
function playSound(soundId) {
  const sound = document.getElementById(soundId);
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {}); // Handle autoplay restrictions
  }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #0a0e1a;
    padding: 20px 30px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1.1rem;
    z-index: 10000;
    animation: slideIn 0.5s ease-out;
    box-shadow: 0 10px 30px rgba(255,215,0,0.4);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.5s ease-out';
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

// ===== TOPIC GRID INITIALIZATION =====
function initTopics() {
  const grid = document.getElementById('topicGrid');
  grid.innerHTML = '';
  
  Object.entries(TOPICS).forEach(([key, topic]) => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <span class="topic-icon">${topic.icon}</span>
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
      <span class="topic-count">${topic.concepts.length} Concepts</span>
    `;
    card.onclick = () => startTopic(key);
    grid.appendChild(card);
  });
}

// ===== START TOPIC =====
function startTopic(topicKey) {
  currentTopic = TOPICS[topicKey];
  document.getElementById('topicSelection').classList.add('hidden');
  document.getElementById('gameContainer').classList.remove('hidden');
  document.getElementById('gameTitle').textContent = currentTopic.title;
  document.getElementById('gameSubtitle').textContent = currentTopic.subtitle;
  initConceptList();
  updateProgress();
  updateStats();
}

// ===== SHOW TOPIC SELECTION =====
function showTopicSelection() {
  if (game) game.destroy(true);
  currentTopic = null;
  currentConcept = null;
  document.getElementById('gameContainer').classList.add('hidden');
  document.getElementById('topicSelection').classList.remove('hidden');
  document.getElementById('contentScreen').classList.add('hidden');
  document.getElementById('welcomeScreen').classList.remove('hidden');
}

// ===== CONCEPT LIST INITIALIZATION =====
function initConceptList() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  
  currentTopic.concepts.forEach(concept => {
    const item = document.createElement('div');
    item.className = 'concept-item';
    
    if (completedConcepts[currentTopic.title + '-' + concept.id]) {
      item.classList.add('completed');
    }
    
    item.innerHTML = `
      <div class="concept-header">
        <span class="concept-icon">${concept.icon}</span>
        <span class="concept-title">${concept.name}</span>
        <span class="difficulty-badge ${concept.difficulty}">${concept.difficulty}</span>
      </div>
      <p class="concept-desc">${concept.description.substring(0, 80)}...</p>
    `;
    
    item.onclick = () => loadConcept(concept);
    list.appendChild(item);
  });
}

// ===== FILTER CONCEPTS =====
function filterConcepts() {
  const search = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll('.concept-item');
  
  items.forEach(item => {
    const title = item.querySelector('.concept-title').textContent.toLowerCase();
    item.style.display = title.includes(search) ? 'block' : 'none';
  });
}

// ===== LOAD CONCEPT =====
function loadConcept(concept) {
  currentConcept = concept;
  document.getElementById('welcomeScreen').classList.add('hidden');
  document.getElementById('contentScreen').classList.remove('hidden');
  document.getElementById('topicIcon').textContent = concept.icon;
  document.getElementById('topicName').textContent = concept.name;
  document.getElementById('topicDescription').textContent = concept.description;
  
  // Launch Phaser scene
  if (game) game.destroy(true);
  
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    parent: 'phaser-game',
    backgroundColor: '#000000',
    scene: getSceneForVisual(concept.visual)
  };
  
  game = new Phaser.Game(config);
  
  // Setup quiz
  setupQuiz(concept.quiz);
  
  // Mark active
  document.querySelectorAll('.concept-item').forEach(item => item.classList.remove('active'));
  const activeItem = Array.from(document.querySelectorAll('.concept-item')).find(item =>
    item.querySelector('.concept-title').textContent === concept.name
  );
  if (activeItem) activeItem.classList.add('active');
}

// ===== SETUP QUIZ =====
function setupQuiz(quiz) {
  document.getElementById('quizQuestion').textContent = quiz.question;
  
  const optionsDiv = document.getElementById('quizOptions');
  optionsDiv.innerHTML = '';
  
  quiz.options.forEach((option, index) => {
    const btn = document.createElement('div');
    btn.className = 'quiz-option';
    btn.textContent = option;
    btn.onclick = () => handleAnswer(index, quiz.correctAnswer, quiz.explanation, quiz.points);
    optionsDiv.appendChild(btn);
  });
  
  document.getElementById('quizFeedback').classList.remove('show', 'correct', 'wrong');
  document.getElementById('nextBtn').classList.add('hidden');
  document.getElementById('retryBtn').classList.add('hidden');
  document.getElementById('voiceBtn').classList.remove('hidden');
  
  // Voice button
  document.getElementById('voiceBtn').onclick = () => handleVoiceAnswer(quiz);
  
  // Start timer
  startQuizTimer();
}

// ===== VOICE ANSWER HANDLING =====
function handleVoiceAnswer(quiz) {
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    
    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript.toLowerCase();
      const options = quiz.options.map(o => o.toLowerCase());
      const selected = options.findIndex(o => o.includes(spoken) || spoken.includes(o));
      
      if (selected !== -1) {
        handleAnswer(selected, quiz.correctAnswer, quiz.explanation, quiz.points);
      } else {
        showNotification('Answer not recognized. Please try again or select manually.');
      }
    };
    
    recognition.onerror = () => showNotification('Speech recognition error. Please try again.');
    recognition.start();
  } else {
    showNotification('Your browser does not support speech recognition.');
  }
}

// ===== QUIZ TIMER =====
function startQuizTimer() {
  let timeLeft = 30;
  const timerDisplay = document.createElement('div');
  timerDisplay.id = 'quizTimer';
  timerDisplay.style = 'text-align:center; font-size:1.2rem; color:var(--gold); margin-bottom:20px;';
  timerDisplay.textContent = `⏱️ Time left: ${timeLeft}s`;
  document.getElementById('quizQuestion').before(timerDisplay);
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏱️ Time left: ${timeLeft}s`;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleAnswer(-1, null, "Time's up! Study more and try again.", 0);
    }
  }, 1000);
}

// ===== HANDLE ANSWER =====
function handleAnswer(selected, correct, explanation, points) {
  clearInterval(timerInterval);
  document.getElementById('quizTimer')?.remove();
  
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((opt, idx) => {
    opt.classList.add('disabled');
    if (idx === correct) opt.classList.add('correct');
    if (idx === selected && selected !== correct) opt.classList.add('wrong');
  });
  
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.add('show');
  
  if (selected === correct) {
    feedback.classList.add('correct');
    feedback.innerHTML = '✅ Correct! <div class="explanation">' + explanation + '</div>';
    score += points;
    streak++;
    if (streak > maxStreak) maxStreak = streak;
    
    completedConcepts[currentTopic.title + '-' + currentConcept.id] = true;
    
    // Award badges
    if (streak >= 3) awardBadge('Streak Master');
    if (streak >= 5) awardBadge('Ultimate Streaker');
    if (score >= 500) awardBadge('Point Collector');
    if (score >= 1000) awardBadge('Point Hoarder');
    
    playSound('correctSound');
    document.getElementById('nextBtn').classList.remove('hidden');
    
    // Celebration particles in Phaser
    if (game && game.scene.scenes[0]) {
      const scene = game.scene.scenes[0];
      // Simple celebration effect
      for(let i=0; i<10; i++) {
        const x = Math.random() * 800;
        const y = Math.random() * 500;
        const star = scene.add.star(x, y, 5, 10, 20, 0xFFD700);
        scene.tweens.add({
          targets: star,
          alpha: 0,
          scale: 2,
          duration: 1000,
          onComplete: () => star.destroy()
        });
      }
    }
  } else {
    feedback.classList.add('wrong');
    feedback.innerHTML = '❌ Incorrect! <div class="explanation">' + explanation + '</div>';
    streak = 0;
    playSound('wrongSound');
    document.getElementById('retryBtn').classList.remove('hidden');
  }
  
  updateProgress();
  updateStats();
  initConceptList(); // Refresh list to show completed
  
  const newLevel = calculateLevel(score);
  if (newLevel !== level) {
    level = newLevel;
    playSound('levelUpSound');
    awardBadge(`${level} Level`);
    showNotification(`🎉 Level Up! You are now a ${level}!`);
  }
}

// ===== UPDATE PROGRESS =====
function updateProgress() {
  const total = currentTopic ? currentTopic.concepts.length : 0;
  const completed = Object.keys(completedConcepts).filter(key => 
    key.startsWith(currentTopic?.title || '')
  ).length;
  const percentage = total ? Math.round((completed / total) * 100) : 0;
  
  document.getElementById('progressPercentage').textContent = `${percentage}%`;
  document.getElementById('progressFill').style.width = `${percentage}%`;
  document.getElementById('progressText').textContent = `${completed}/${total}`;
  
  if (percentage === 100) awardBadge('Topic Master');
}

// ===== UPDATE STATS =====
function updateStats() {
  document.getElementById('scoreValue').textContent = score;
  document.getElementById('streakValue').textContent = streak;
  document.getElementById('levelValue').textContent = level;
  document.getElementById('badgeValue').textContent = badges.length;
}

// ===== DAILY LOGIN BONUS =====
function checkDailyLogin() {
  // Simplified for artifact environment
  const today = new Date().toDateString();
  // In a real app, this would check localStorage
  // For now, just show welcome
  console.log('Welcome to Ghana Mastery Quest!');
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
  // Next button
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) {
    nextBtn.onclick = () => {
      const nextConcept = currentTopic.concepts.find(c => 
        !completedConcepts[currentTopic.title + '-' + c.id]
      );
      
      if (nextConcept) {
        loadConcept(nextConcept);
      } else {
        showNotification('🎉 Topic Completed! Earned Badge: Topic Conqueror');
        awardBadge('Topic Conqueror');
        showTopicSelection();
      }
    };
  }
  
  // Retry button
  const retryBtn = document.getElementById('retryBtn');
  if (retryBtn) {
    retryBtn.onclick = () => loadConcept(currentConcept);
  }
});

// ===== CSS ANIMATIONS (INJECTED) =====
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);