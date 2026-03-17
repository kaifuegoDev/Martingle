import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';

export default function Leaderboard() {
  const leaders = [
    { rank: 1, name: 'StormWarrior', earnings: '₹2,45,000', avatar: 'SW' },
    { rank: 2, name: 'CyberKnight', earnings: '₹1,85,000', avatar: 'CK' },
    { rank: 3, name: 'PhantomX', earnings: '₹1,60,000', avatar: 'PX' },
    { rank: 4, name: 'NovaBlast', earnings: '₹95,000', avatar: 'NB' },
    { rank: 5, name: 'ShadowEdge', earnings: '₹72,000', avatar: 'SE' },
    { rank: 6, name: 'ZenithPro', earnings: '₹50,000', avatar: 'ZP' },
    { rank: 7, name: 'VortexMaster', earnings: '₹45,000', avatar: 'VM' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white pb-24 md:pb-0">
      <Navbar active="leaderboard" />
      <BottomNavbar active="leaderboard" />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <div className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-12 overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 skew-x-[-15deg] translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-4 text-white/20">SEASON 1</h2>
              <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-6 text-blue-500">COMING SOON</h3>
              <p className="text-zinc-500 font-bold text-sm uppercase tracking-wide">The arena is being prepared. Rankings will go live once the first professional season kicks off.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
