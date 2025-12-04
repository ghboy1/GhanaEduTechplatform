// src/components/MessagesTab.tsx
'use client';

import React, { useState } from 'react';
import {
  Search,
  Send,
  Paperclip,
  Phone,
  Video,
  CheckCheck,
  Clock
} from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  avatar: string;
  message: string;
  time: string;
  status: 'sent' | 'delivered' | 'read';
  isTeacher?: boolean;
}

export default function MessagesTab() {
  const [selectedChat, setSelectedChat] = useState('parent');
  const [message, setMessage] = useState('');

  const chats = [
    { id: 'parent', name: 'Mrs. Adwoa Mensah', avatar: 'AM', lastMsg: 'Thank you for the update!', time: '2m ago', unread: 2 },
    { id: 'student', name: 'Abena Osei', avatar: 'AO', lastMsg: 'Sir, I finished the quiz', time: '10m ago', unread: 0 },
    { id: 'admin', name: 'School Admin', avatar: 'SA', lastMsg: 'Staff meeting tomorrow at 3pm', time: '1h ago', unread: 1 },
  ];

  const messages: Message[] = [
    { id: 1, sender: 'Mrs. Adwoa Mensah', avatar: 'AM', message: 'Good morning Sir! How did Kwame do on the math quiz?', time: '09:12', status: 'read' },
    { id: 2, sender: 'You', avatar: 'KA', message: 'Morning Madam! He scored 18/20. Excellent improvement!', time: '09:15', status: 'read', isTeacher: true },
    { id: 3, sender: 'Mrs. Adwoa Mensah', avatar: 'AM', message: 'Wow! Thank you so much for the extra help', time: '09:16', status: 'delivered' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
      {/* Chat List */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full pl-12 pr-6 py-4 bg-gray-50 dark:bg-gray-700 rounded-2xl focus:ring-4 focus:ring-purple-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Chats */}
        <div className="overflow-y-auto">
          {chats.map(chat => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-all ${
                selectedChat === chat.id
                  ? 'bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30'
                  : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {chat.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{chat.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate w-40">
                      {chat.lastMsg}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">{chat.time}</p>
                  {chat.unread > 0 && (
                    <span className="block mt-2 w-8 h-8 bg-red-500 text-white rounded-full text-sm font-bold flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              AM
            </div>
            <div>
              <h3 className="text-xl font-bold">Mrs. Adwoa Mensah</h3>
              <p className="text-sm text-green-600">Active now</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">
              <Phone size={24} />
            </button>
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">
              <Video size={24} />
            </button>
          </div>
        </div>

        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.isTeacher ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md ${msg.isTeacher ? 'order-2' : ''}`}>
                <div
                  className={`rounded-3xl px-6 py-4 ${
                    msg.isTeacher
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  <p>{msg.message}</p>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">{msg.time}</span>

                  {msg.isTeacher &&
                    (msg.status === 'read' ? (
                      <CheckCheck size={16} className="text-blue-500" />
                    ) : msg.status === 'delivered' ? (
                      <CheckCheck size={16} className="text-gray-400" />
                    ) : (
                      <Clock size={16} className="text-gray-400" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">
              <Paperclip size={24} />
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setMessage('')}
              placeholder="Type a message..."
              className="flex-1 px-6 py-4 bg-gray-50 dark:bg-gray-700 rounded-full focus:ring-4 focus:ring-purple-500 focus:outline-none"
            />

            <button className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:scale-110 transition-all">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
