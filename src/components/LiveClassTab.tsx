// src/components/LiveClassTab.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Video, Mic, MicOff, VideoOff, ScreenShare, Hand, Users, MessageSquare, 
  Settings, X, PlayCircle, PauseCircle, Timer, Trophy, Sparkles,
  ThumbsUp, ThumbsDown, AlertCircle, CheckCircle, Volume2, VolumeX
} from 'lucide-react';

export default function LiveClassTab() {
  const [isLive, setIsLive] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [raisedHands, setRaisedHands] = useState(3);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Live timer
  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  if (!isLive) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center text-white max-w-4xl px-12">
          <Video size={120} className="mx-auto mb-8 animate-pulse" />
          <h1 className="text-7xl font-black mb-6">Ready to Go Live?</h1>
          <p className="text-3xl mb-12 opacity-90">
            Start your interactive lesson with JHS 2A • 125 students waiting
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <Users size={48} className="mx-auto mb-4" />
              <div className="text-5xl font-black">125</div>
              <p className="text-xl opacity-90">Students Online</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <Trophy size={48} className="mx-auto mb-4" />
              <div className="text-5xl font-black">94%</div>
              <p className="text-xl opacity-90">Avg Attendance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <Sparkles size={48} className="mx-auto mb-4" />
              <div className="text-5xl font-black">4.8</div>
              <p className="text-xl opacity-90">Student Rating</p>
            </div>
          </div>

          <button
            onClick={() => setIsLive(true)}
            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-20 py-10 rounded-full text-4xl font-black hover:scale-110 transition-all shadow-2xl flex items-center gap-6 mx-auto"
          >
            <PlayCircle size={80} />
            START LIVE CLASS NOW
          </button>

          <p className="mt-12 text-xl opacity-70">
            Powered by ultra-low latency streaming • Works perfectly on MTN & Vodafone
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Control Bar */}
      <div className="bg-black/80 backdrop-blur-xl border-b border-gray-800 p-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            <span className="text-2xl font-bold">LIVE</span>
            <span className="text-xl opacity-80">•</span>
            <Timer size={28} />
            <span className="text-2xl font-mono font-bold">{formatTime(timeElapsed)}</span>
          </div>
          <div className="flex items-center gap-3 bg-red-600/20 px-6 py-3 rounded-full">
            <Users size={24} />
            <span className="font-bold">118 / 125</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all flex items-center gap-3">
            <MessageSquare size={20} />
            Chat ({raisedHands} hands raised)
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-full font-bold text-xl hover:scale-105 transition-all flex items-center gap-3">
            <X size={24} />
            End Class
          </button>
        </div>
      </div>

      {/* Main Classroom View */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-8">
        {/* Teacher Video - Large */}
        <div className="lg:col-span-3 relative">
          <div className="bg-gradient-to-br from-purple-800 to-blue-900 rounded-3xl aspect-video relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-8xl font-black">
                KA
              </div>
            </div>
            
            {/* Teacher Name & Status */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-4xl font-bold">Mr. Kwesi Amissah</h3>
              <p className="text-xl opacity-90">Teaching: Linear Equations</p>
            </div>

            {/* Live Indicators */}
            <div className="absolute top-6 left-6 flex gap-4">
              <span className="bg-red-600 px-6 py-3 rounded-full font-bold flex items-center gap-3 animate-pulse">
                LIVE
              </span>
              {screenSharing && (
                <span className="bg-green-600 px-6 py-3 rounded-full font-bold flex items-center gap-3">
                  <ScreenShare size={24} />
                  Screen Shared
                </span>
              )}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`p-6 rounded-full text-2xl font-bold transition-all ${micOn ? 'bg-white text-black' : 'bg-red-600 text-white'}`}
            >
              {micOn ? <Mic size={36} /> : <MicOff size={36} />}
            </button>
            <button
              onClick={() => setCamOn(!camOn)}
              className={`p-6 rounded-full text-2xl font-bold transition-all ${camOn ? 'bg-white text-black' : 'bg-red-600 text-white'}`}
            >
              {camOn ? <Video size={36} /> : <VideoOff size={36} />}
            </button>
            <button
              onClick={() => setScreenSharing(!screenSharing)}
              className={`p-6 rounded-full text-2xl font-bold transition-all ${screenSharing ? 'bg-green-600 text-white' : 'bg-white text-black'}`}
            >
              <ScreenShare size={36} />
            </button>
            <button className="p-6 bg-white text-black rounded-full text-2xl font-bold hover:scale-110 transition-all">
              <Hand size={36} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white w-10 h-10 rounded-full font-bold flex items-center justify-center">
                {raisedHands}
              </span>
            </button>
          </div>
        </div>

        {/* Student Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Users size={28} />
            Active Students
          </h3>
          <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
            {['Abena O.', 'Kwame M.', 'Akosua B.', 'Esi A.', 'Kofi D.', 'Maame E.'].map((name, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl p-4 text-center relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold mb-3">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="font-semibold">{name}</p>
                <div className="flex justify-center gap-2 mt-3">
                  <ThumbsUp size={20} className="text-green-500 cursor-pointer hover:scale-125 transition-all" />
                  <ThumbsDown size={20} className="text-red-500 cursor-pointer hover:scale-125 transition-all" />
                </div>
                {i < 3 && (
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-black w-8 h-8 rounded-full font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-center">
            <h4 className="text-2xl font-bold mb-6">Quick Tools</h4>
            <div className="space-y-4">
              <button className="w-full py-5 bg-white/20 backdrop-blur-lg rounded-2xl font-bold hover:bg-white/30 transition-all">
                Start Poll
              </button>
              <button className="w-full py-5 bg-white/20 backdrop-blur-lg rounded-2xl font-bold hover:bg-white/30 transition-all">
                Whiteboard
              </button>
              <button className="w-full py-5 bg-white/20 backdrop-blur-lg rounded-2xl font-bold hover:bg-white/30 transition-all">
                Breakout Rooms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}