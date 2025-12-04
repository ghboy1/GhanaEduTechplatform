import React, { useState, useEffect } from 'react';
import { getSceneForVisual } from '../phaser-scenes';
import Phaser from 'phaser';

export default function LearningInterface({ topic, onClose }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const gameConfig = {
      type: Phaser.AUTO,
      parent: 'phaser-game',
      width: 800,
      height: 500,
      backgroundColor: '#0a1a2f',
      scene: getSceneForVisual(topic.visual || 'default')
    };
    const game = new Phaser.Game(gameConfig);

    return () => game.destroy(true);
  }, [topic]);

  // Mock quiz (replace with real data later)
  const questions = topic.questions || [
    {
      question: `What is the significance of ${topic.name}?`,
      options: ["Option A", "Correct Answer", "Option C", "Option D"],
      correct: 1,
      explanation: "This is the correct explanation with rich Ghanaian context."
    }
  ];

  const handleAnswer = (index) => {
    const correct = index === questions[0].correct;
    setShowResult(true);
    if (correct) setScore(prev => prev + 100);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-3xl max-w-6xl w-full max-h-screen overflow-y-auto">
        <div className="bg-gradient-to-r from-ghana-red via-ghana-gold to-ghana-green p-6 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">{topic.name}</h2>
            <button onClick={onClose} className="text-white hover:scale-125 transition">✕</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div>
            <div id="phaser-game" className="rounded-2xl overflow-hidden shadow-2xl border-8 border-ghana-gold"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Knowledge Challenge</h3>
            <div className="space-y-4">
              <p className="text-lg font-medium">{questions[0].question}</p>
              <div className="grid gap-3">
                {questions[0].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={showResult}
                    className={`p-4 rounded-xl font-semibold transition-all ${
                      showResult
                        ? i === questions[0].correct
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                        : 'bg-ghana-gold hover:bg-yellow-400 text-ghana-dark'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="mt-6 p-6 bg-green-50 rounded-2xl border-2 border-green-500">
                  <p className="text-2xl font-bold text-green-700">Correct! +100 points</p>
                  <p className="mt-3 text-gray-700">{questions[0].explanation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}