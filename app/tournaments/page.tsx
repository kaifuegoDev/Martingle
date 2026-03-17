import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import { User, Users, Calendar, Trophy, Zap, Target } from 'lucide-react';

export default function Tournaments() {
  const tournaments = [
    { 
      game: 'Free Fire', 
      title: 'ELITE PRO LEAGUE', 
      mode: 'SQUAD', 
      slots: '92/100', 
      prize: '₹25,000', 
      entry: '₹100',
      schedule: '20 MAR 2026 • 06:00 PM',
      color: 'blue'
    },
    { 
      game: 'BGMI', 
      title: 'BATTLEFIELD SCRIMS', 
      mode: 'SOLO', 
      slots: '45/100', 
      prize: '₹15,000', 
      entry: 'FREE',
      schedule: '21 MAR 2026 • 08:30 PM',
      color: 'emerald'
    },
    { 
      game: 'COD MOBILE', 
      title: 'WARZONE SERIES', 
      mode: 'DUO', 
      slots: '24/50', 
      prize: '₹10,000', 
      entry: '₹50',
      schedule: '22 MAR 2026 • 03:00 PM',
      color: 'blue'
    },
    { 
      game: 'VALORANT', 
      title: 'RADIANITE CLASH', 
      mode: 'SQUAD', 
      slots: '12/16', 
      prize: '₹50,000', 
      entry: '₹500',
      schedule: '25 MAR 2026 • 09:00 PM',
      color: 'orange'
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white pb-24 md:pb-0 font-sans">
      <Navbar active="tournaments" />
      <BottomNavbar active="tournaments" />
      
      <main className="flex-1 py-6 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-12 border-l-2 border-blue-600 pl-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Trophy className="w-6 h-6 text-blue-500" />
                <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter leading-none uppercase">THE ARENA</h1>
              </div>
              <p className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase">Elite eSports Tournaments</p>
            </div>
            <Zap className="w-8 h-8 text-blue-600/20" />
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tournaments.map((t, i) => (
              <div key={i} className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
                {/* Slanted Background Accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent skew-x-[-15deg] translate-x-32 group-hover:translate-x-12 transition-transform duration-700" />
                
                <div className="relative z-10 p-5">
                  {/* Header: Game, Mode & Schedule */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-blue-500 tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
                        <Target className="w-3 h-3" />
                        {t.game}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {t.mode === 'SOLO' ? <User className="w-3 h-3 text-zinc-500" /> : <Users className="w-3 h-3 text-zinc-500" />}
                        <span className="text-zinc-500 text-[9px] font-black tracking-widest uppercase">{t.mode}</span>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-2 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                      <Calendar className="w-3 h-3 text-blue-500" />
                      <span className="block text-[9px] font-black text-white italic tracking-wider">{t.schedule}</span>
                    </div>
                  </div>

                  {/* Main Info */}
                  <div className="mb-6">
                    <h2 className="text-xl font-black italic tracking-tighter uppercase leading-tight mb-6 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                      {t.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
                      <div className="bg-[#050505] p-3">
                         <span className="block text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                           <Trophy className="w-2.5 h-2.5" />
                           Prize pool
                         </span>
                         <span className="text-lg font-black text-white italic">{t.prize}</span>
                      </div>
                      <div className="bg-[#050505] p-3">
                         <span className="block text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                           <Zap className="w-2.5 h-2.5" />
                           Entry Fee
                         </span>
                         <span className="text-lg font-black text-blue-500 italic">{t.entry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats & Button */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                    <div className="w-full">
                      <div className="flex justify-between items-end mb-2">
                         <div className="flex items-center gap-1.5">
                           <Users className="w-3.5 h-3.5 text-zinc-500" />
                           <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Slots</span>
                         </div>
                         <span className="text-xs font-black">{t.slots}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all duration-1000" 
                          style={{ width: `${(parseInt(t.slots.split('/')[0]) / parseInt(t.slots.split('/')[1])) * 100}%` }} 
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-lg active:scale-95 flex items-center justify-center gap-2">
                        <span className="text-[10px] font-black italic tracking-wider uppercase">Details</span>
                      </button>
                      <button className="flex-1 py-2 bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-lg group/btn overflow-hidden relative active:scale-95 flex items-center justify-center gap-2">
                        <span className="relative z-10 text-[10px] font-black italic tracking-wider uppercase">Join</span>
                        <div className="absolute top-0 -left-full w-full h-full bg-blue-400/20 group-hover/btn:left-0 transition-all duration-300 skew-x-[-15deg]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
