import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';

export default function Rewards() {
  const rewards = [
    { title: 'ELITE BATTLE PASS', cost: '2,500 PTS', type: 'EPIC ITEM', color: 'blue' },
    { title: '₹5,000 CASH CREDIT', cost: '10,000 PTS', type: 'CURRENCY', color: 'emerald' },
    { title: 'PRO TOURNAMENT PASS', cost: '1,200 PTS', type: 'ACCESS', color: 'purple' },
    { title: 'PREMIUM LOOT CRATE', cost: '500 PTS', type: 'MYSTERY', color: 'orange' },
  ];

  const getColor = (color: string) => {
    switch(color) {
      case 'blue': return 'from-blue-600/20';
      case 'emerald': return 'from-emerald-600/20';
      case 'purple': return 'from-purple-600/20';
      case 'orange': return 'from-orange-600/20';
      default: return 'from-blue-600/20';
    }
  };

  const getBorderColor = (color: string) => {
    switch(color) {
      case 'blue': return 'group-hover:border-blue-500/50';
      case 'emerald': return 'group-hover:border-emerald-500/50';
      case 'purple': return 'group-hover:border-purple-500/50';
      case 'orange': return 'group-hover:border-orange-500/50';
      default: return 'group-hover:border-blue-500/50';
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white pb-24 md:pb-0">
      <Navbar active="rewards" />
      <BottomNavbar active="rewards" />
      
      <main className="flex-1 py-6 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="border-l-2 border-blue-600 pl-4">
              <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter leading-none uppercase">THE VAULT</h1>
              <p className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mt-1">Exclusive Gamer Rewards</p>
            </div>
            <div className="relative bg-[#0a0a0a] border border-blue-600/30 px-8 py-4 rounded-xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-600/10 to-transparent skew-x-[-15deg] translate-x-20" />
              <div className="relative z-10">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] block mb-1">BALANCE</span>
                <span className="text-3xl font-black italic tracking-tighter">4,820 <span className="text-sm text-zinc-500">PTS</span></span>
              </div>
            </div>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {rewards.map((reward, i) => (
              <div key={i} className={`group relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden ${getBorderColor(reward.color)} transition-all duration-500 shadow-2xl`}>
                {/* Slanted Background Accent */}
                <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${getColor(reward.color)} to-transparent skew-x-[-15deg] translate-x-32 group-hover:translate-x-12 transition-transform duration-700`} />
                
                <div className="relative z-10 p-6">
                  <div className="flex justify-between items-start mb-8">
                    <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-white/20 transition-colors">
                       <svg className="h-6 w-6 text-white/40 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                       </svg>
                    </div>
                    <span className="text-[9px] font-black text-white/30 tracking-[0.2em] uppercase">{reward.type}</span>
                  </div>

                  <h3 className="text-xl font-black italic tracking-tighter uppercase leading-tight mb-8 group-hover:text-blue-400 transition-colors min-h-[48px]">
                    {reward.title}
                  </h3>
                  
                  <div className="flex flex-col gap-4 pt-6 border-t border-white/5">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">REDEMPTION COST</span>
                       <span className="text-sm font-black italic text-white underline decoration-blue-600 decoration-2 underline-offset-4">{reward.cost}</span>
                    </div>
                    <button className="w-full py-3 bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-lg group/btn overflow-hidden relative active:scale-95">
                      <span className="relative z-10 text-[10px] font-black italic tracking-wider uppercase">Claim Reward</span>
                      <div className="absolute top-0 -left-full w-full h-full bg-blue-400/20 group-hover/btn:left-0 transition-all duration-300 skew-x-[-15deg]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Earn More Section */}
          <div className="mt-16 relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-12 overflow-hidden text-center shadow-2xl">
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 skew-x-[-15deg] translate-x-1/2" />
             <div className="relative z-10">
               <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-4">NEED MORE AMMO?</h2>
               <p className="text-zinc-500 font-bold text-sm max-w-xl mx-auto mb-8 uppercase tracking-wide">Win Arena matches, complete daily bounties, and climb the Leaderboard to earn massive point rewards.</p>
               <button className="px-12 py-4 bg-white text-black text-xs font-black italic tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95">
                 Get Free Points
               </button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
