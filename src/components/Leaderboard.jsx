import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const mockLeaderboard = [
  { rank: 1, name: "Abena Serwaa", points: 9850, badge: "Crown", school: "Wesley Girls" },
  { rank: 2, name: "Kwame Nkrumah Jr.", points: 9420, badge: "Trophy", school: "Prempeh College" },
  { rank: 3, name: "Ama Ghana", points: 8990, badge: "Medal", school: "Achimota School" },
  { rank: 4, name: "Kofi Asante", points: 8500, badge: "Star", school: "Opoku Ware" },
  { rank: 5, name: "Efua Sutherland", points: 8200, badge: "Star", school: "Accra Academy" },
];

export default function Leaderboard() {
  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-8 h-8 text-yellow-500" />;
    if (rank === 2) return <Trophy className="w-8 h-8 text-gray-400" />;
    if (rank === 3) return <Medal className="w-8 h-8 text-orange-600" />;
    return <span className="text-2xl font-bold text-gray-600">#{rank}</span>;
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-ghana-red via-ghana-gold to-ghana-green bg-clip-text text-transparent">
          National Leaderboard
        </h2>
        <p className="text-gray-600 mt-2">Top Ghana Mastery Scholars</p>
      </div>

      <div className="space-y-4">
        {mockLeaderboard.map((player) => (
          <div
            key={player.rank}
            className={`flex items-center gap-6 p-6 rounded-2xl transition-all ${
              player.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-green-50 border-2 border-ghana-gold' : 'bg-gray-50'
            } hover:shadow-xl`}
          >
            <div className="text-center w-20">
              {getRankIcon(player.rank)}
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">{player.name}</h3>
              <p className="text-sm text-gray-600">{player.school}</p>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-ghana-green">{player.points.toLocaleString()}</div>
              <div className="text-sm text-gray-600">points</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}