import React, { useState, useEffect } from 'react';
import { MapPin, Users, Award, Zap, Camera, QrCode, Recycle, TrendingUp, Globe, Trophy, Star, Calendar, Clock, Target } from 'lucide-react';

const BeachWarriorsMVP = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [userStats, setUserStats] = useState({
    cleanups: 12,
    wasteCollected: 45.6,
    co2Offset: 23.4,
    badges: 8,
    rank: 156
  });
  const [oceanHealth, setOceanHealth] = useState(72);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    {
      id: 1,
      title: "Bandra Beach Cleanup",
      date: "June 15, 2025",
      time: "6:00 AM",
      volunteers: 87,
      maxVolunteers: 100,
      distance: "2.3 km",
      organizer: "Mumbai Eco Warriors"
    },
    {
      id: 2,
      title: "Juhu Beach Conservation",
      date: "June 22, 2025",
      time: "7:00 AM",
      volunteers: 156,
      maxVolunteers: 200,
      distance: "5.1 km",
      organizer: "Clean Shores Initiative"
    }
  ];

  const achievements = [
    { icon: "🌊", title: "Wave Rider", desc: "First cleanup completed", unlocked: true },
    { icon: "🏆", title: "Eco Champion", desc: "10 cleanups completed", unlocked: true },
    { icon: "♻️", title: "Waste Warrior", desc: "50kg waste collected", unlocked: true },
    { icon: "🌟", title: "Impact Master", desc: "100kg CO₂ offset", unlocked: false },
    { icon: "👑", title: "Ocean Guardian", desc: "Lead 5 cleanups", unlocked: false },
    { icon: "🎯", title: "Consistency King", desc: "30-day streak", unlocked: false }
  ];

  const TabButton = ({ id, icon: Icon, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg transform scale-105'
          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const EventCard = ({ event }) => (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-gray-300">{event.organizer}</p>
        </div>
        <div className="text-right">
          <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
            {event.volunteers}/{event.maxVolunteers} joined
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-gray-300">
          <Calendar size={16} />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Clock size={16} />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <MapPin size={16} />
          <span>{event.distance}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Users size={16} />
          <span>{event.volunteers} volunteers</span>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-teal-600">
        Join Cleanup
      </button>
    </div>
  );

  const StatCard = ({ icon: Icon, label, value, unit, color }) => (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
      <div className="flex items-center justify-between mb-2">
        <Icon size={24} />
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <p className="text-sm opacity-90">{label}</p>
      <p className="text-xs opacity-75">{unit}</p>
    </div>
  );

  const AchievementBadge = ({ achievement }) => (
    <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 text-center transition-all duration-300 hover:bg-white/15 ${
      achievement.unlocked ? 'hover:scale-105' : 'opacity-50'
    }`}>
      <div className="text-4xl mb-2">{achievement.icon}</div>
      <h4 className="text-white font-semibold mb-1">{achievement.title}</h4>
      <p className="text-gray-300 text-sm">{achievement.desc}</p>
      {achievement.unlocked && (
        <div className="mt-2 bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
          Unlocked!
        </div>
      )}
    </div>
  );

  const OceanVisualization = () => (
    <div className="relative bg-gradient-to-b from-blue-400 to-blue-900 rounded-3xl p-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-8 w-4 h-4 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 left-12 w-6 h-6 bg-green-300 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ocean Health Meter</h3>
        <div className="relative w-48 h-48 mx-auto mb-4">
          <svg className="transform -rotate-90 w-48 h-48">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${oceanHealth * 5.5} 550`}
              className="transition-all duration-2000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold">{oceanHealth}%</div>
              <div className="text-sm opacity-75">Healthy</div>
            </div>
          </div>
        </div>
        <p className="text-sm opacity-90">Your cleanups have improved ocean health by 12%</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <Globe className="text-white" size={24} />
              </div>
              <h1 className="text-4xl font-bold">Eco Sync</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              AI-powered beach cleanup revolution. Transform environmental conservation into an interactive experience.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <TabButton
              id="discover"
              icon={MapPin}
              label="Discover Events"
              isActive={activeTab === 'discover'}
              onClick={setActiveTab}
            />
            <TabButton
              id="impact"
              icon={TrendingUp}
              label="My Impact"
              isActive={activeTab === 'impact'}
              onClick={setActiveTab}
            />
            <TabButton
              id="achievements"
              icon={Trophy}
              label="Achievements"
              isActive={activeTab === 'achievements'}
              onClick={setActiveTab}
            />
            <TabButton
              id="tools"
              icon={Zap}
              label="AI Tools"
              isActive={activeTab === 'tools'}
              onClick={setActiveTab}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'discover' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Discover Nearby Cleanups</h2>
              <p className="text-gray-300">Join the movement and make a real impact</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <QrCode className="text-blue-400" />
                <span>Quick Check-in System</span>
              </h3>
              <p className="text-gray-300 mb-4">Simply scan the QR code at the event to check in instantly!</p>
              <div className="bg-white p-4 rounded-xl w-32 h-32 mx-auto flex items-center justify-center">
                <div className="text-black text-xs text-center">QR Code<br/>Demo</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Your Environmental Impact</h2>
              <p className="text-gray-300">See how you're making a difference</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <StatCard
                icon={Recycle}
                label="Cleanups Joined"
                value={userStats.cleanups}
                unit="events"
                color="from-green-500 to-emerald-600"
              />
              <StatCard
                icon={Target}
                label="Waste Collected"
                value={userStats.wasteCollected}
                unit="kg"
                color="from-blue-500 to-cyan-600"
              />
              <StatCard
                icon={Globe}
                label="CO₂ Offset"
                value={userStats.co2Offset}
                unit="kg"
                color="from-purple-500 to-pink-600"
              />
              <StatCard
                icon={Trophy}
                label="Global Rank"
                value={`#${userStats.rank}`}
                unit="worldwide"
                color="from-orange-500 to-red-600"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <OceanVisualization />
              
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Carbon Offset Rewards</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-500/20 rounded-xl">
                    <span>Verified CO₂ Credits</span>
                    <span className="font-bold text-green-300">23.4 kg</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-500/20 rounded-xl">
                    <span>Potential Earnings</span>
                    <span className="font-bold text-blue-300">₹468</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Sell to Corporations
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Your Achievements</h2>
              <p className="text-gray-300">Unlock badges and climb the leaderboard</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <AchievementBadge key={index} achievement={achievement} />
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">Dynamic Avatar Evolution</h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center text-2xl mb-2">
                    🌊
                  </div>
                  <p className="text-sm">Beginner</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-3xl mb-2 transform scale-110 shadow-lg">
                    ♻️
                  </div>
                  <p className="text-sm font-semibold">Current Level</p>
                </div>
                <div className="text-center opacity-50">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl mb-2">
                    👑
                  </div>
                  <p className="text-sm">Master</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">AI-Powered Tools</h2>
              <p className="text-gray-300">Smart assistance for maximum impact</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Camera className="text-green-400" size={24} />
                  <h3 className="text-xl font-bold">AI Waste Segregation</h3>
                </div>
                <p className="text-gray-300 mb-4">Take a photo of waste and get instant sorting guidance</p>
                <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-green-300">📱 "Plastic bottle detected - Place in recycling bin"</p>
                  <p className="text-sm text-blue-300 mt-2">📱 "Organic waste - Compost appropriate"</p>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-semibold">
                  Try AI Scanner
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="text-purple-400" size={24} />
                  <h3 className="text-xl font-bold">AI Content Generator</h3>
                </div>
                <p className="text-gray-300 mb-4">Auto-generate social media posts and impact reports</p>
                <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-purple-300">🎯 "Just completed my 12th beach cleanup! Collected 45.6kg of waste and offset 23.4kg CO₂. Join me at the next Bandra Beach event! #BeachWarriors #CleanOceans"</p>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold">
                  Generate Post
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">Weekly Educational Seminars</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Marine Conservation Basics</h4>
                  <p className="text-sm text-gray-300">Learn about ocean ecosystems and conservation</p>
                  <div className="mt-3 text-xs text-orange-300">Next: June 10, 7:00 PM</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Sustainable Living Workshop</h4>
                  <p className="text-sm text-gray-300">Reduce your environmental footprint daily</p>
                  <div className="mt-3 text-xs text-orange-300">Next: June 12, 6:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${isAnimating ? 'animate-pulse' : ''}`}>
          <Zap className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default BeachWarriorsMVP;