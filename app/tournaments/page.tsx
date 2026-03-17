'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import BottomNavbar from '@/components/BottomNavbar';
import { User, Users, Calendar, Trophy, Zap, Target, Map } from 'lucide-react';

export default function Tournaments() {
  const [activeFilter, setActiveFilter] = useState('ONGOING');

  const tournaments = [
    {
      game: 'Free Fire',
      title: 'ELITE PRO LEAGUE',
      date: '20 MAR 2026',
      time: '6 PM',
      map: 'BERMUDA',
      mode: 'SQUAD',
      slots: '92/100',
      prize: '₹25,000',
      perKill: '₹10',
      entry: '₹100',
      status: 'ONGOING',
      color: 'blue'
    },
    {
      game: 'BGMI',
      title: 'BATTLEFIELD SCRIMS',
      date: '21 MAR 2026',
      time: '8:30 PM',
      map: 'ERANGEL',
      mode: 'SOLO',
      slots: '45/100',
      prize: '₹15,000',
      perKill: '₹5',
      entry: 'FREE',
      status: 'UPCOMING',
      color: 'emerald'
    },
    {
      game: 'COD MOBILE',
      title: 'WARZONE SERIES',
      date: '22 MAR 2026',
      time: '3 PM',
      map: 'ISOLATED',
      mode: 'DUO',
      slots: '24/50',
      prize: '₹10,000',
      entry: '₹50',
      status: 'UPCOMING',
      color: 'blue'
    },
    {
      game: 'VALORANT',
      title: 'RADIANITE CLASH',
      date: '25 MAR 2026',
      time: '9 PM',
      map: 'BIND',
      mode: 'SQUAD',
      slots: '12/16',
      prize: '₹50,000',
      entry: '₹500',
      status: 'UPCOMING',
      color: 'orange'
    },
    {
      game: 'Free Fire',
      title: 'WEEKEND WARRIORS',
      date: '15 MAR 2026',
      time: '10 AM',
      map: 'PURGATORY',
      mode: 'SQUAD',
      slots: '100/100',
      prize: '₹5,000',
      entry: 'FREE',
      status: 'PAST',
      color: 'blue'
    },
  ];

  const filteredTournaments = tournaments.filter(t => t.status === activeFilter);

  const filters = ['ONGOING', 'UPCOMING', 'PAST'];

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

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 bg-white/5 p-1 rounded-xl w-fit mx-auto border border-white/5">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg text-[10px] font-black italic tracking-widest uppercase transition-all duration-300 ${activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : 'text-zinc-500 hover:text-white hover:bg-white/5'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTournaments.length > 0 ? (
              filteredTournaments.map((t, i) => (
                <div key={i} className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 z-20 px-2 py-0.5 rounded text-[8px] font-black italic tracking-widest uppercase border ${t.status === 'ONGOING' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                      t.status === 'UPCOMING' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                        'bg-zinc-500/10 text-zinc-500 border-zinc-500/20'
                    }`}>
                    {t.status}
                  </div>

                  {/* Slanted Background Accent */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent skew-x-[-15deg] translate-x-32 group-hover:translate-x-12 transition-transform duration-700" />

                  <div className="relative z-10 p-5">
                    {/* Header: Game Tag */}
                    <div className="flex justify-between items-start mb-3 pr-12">
                      <span className="text-[9px] font-black text-blue-500 tracking-[0.2em] uppercase flex items-center gap-1.5 opacity-80">
                        <Target className="w-2.5 h-2.5" />
                        {t.game}
                      </span>
                    </div>

                    {/* Main Info */}
                    <div className="mb-7">
                      <h2 className="text-xl font-black italic tracking-tighter uppercase leading-tight mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                        {t.title}
                      </h2>

                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-2.5 h-2.5 text-blue-500/50" />
                        <span className="text-zinc-500 text-[8px] font-black tracking-[0.15em] uppercase whitespace-nowrap overflow-hidden text-ellipsis flex items-center">
                          {t.date} <span className="text-blue-500/50 mx-0.5">|</span> {t.time} <span className="text-blue-500/50 mx-0.5">•</span>
                          <span className="inline-flex items-center gap-1 mx-0.5">
                            <Map className="w-2 h-2 text-blue-500/50" />
                            {t.map}
                          </span>
                          <span className="text-blue-500/50 mx-0.5">•</span>
                          <span className="inline-flex items-center gap-1 ml-0.5">
                            {t.mode === 'SOLO' ? <User className="w-2 h-2 text-blue-500/50" /> : <Users className="w-2 h-2 text-blue-500/50" />}
                            {t.mode}
                          </span>
                        </span>
                      </div>

                      <div className={`grid ${t.perKill ? 'grid-cols-3' : 'grid-cols-2'} gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden`}>
                        <div className="bg-[#050505] p-3 text-center">
                          <span className="block text-[7px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1">
                            <Trophy className="w-2 h-2" />
                            WIN PRIZE
                          </span>
                          <span className={`${t.perKill ? 'text-sm' : 'text-lg'} font-black text-white italic transition-all`}>{t.prize}</span>
                        </div>

                        {t.perKill && (
                          <div className="bg-[#050505] p-3 text-center border-x border-white/5">
                            <span className="block text-[7px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1">
                              <Target className="w-2 h-2" />
                              ELIM
                            </span>
                            <span className="text-sm font-black text-blue-400 italic">
                              {t.perKill}
                            </span>
                          </div>
                        )}

                        <div className="bg-[#050505] p-3 text-center">
                          <span className="block text-[7px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1">
                            <Zap className="w-2 h-2" />
                            ENTRY
                          </span>
                          <span className={`${t.perKill ? 'text-sm' : 'text-lg'} font-black text-blue-500 italic transition-all`}>{t.entry}</span>
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
                        <button className={`flex-1 py-2 rounded-lg group/btn overflow-hidden relative active:scale-95 flex items-center justify-center gap-2 transition-all duration-300 ${t.status === 'PAST'
                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50'
                            : 'bg-blue-600 hover:bg-white hover:text-blue-600'
                          }`}>
                          <span className="relative z-10 text-[10px] font-black italic tracking-wider uppercase">
                            {t.status === 'PAST' ? 'Closed' : 'Join'}
                          </span>
                          {t.status !== 'PAST' && (
                            <div className="absolute top-0 -left-full w-full h-full bg-blue-400/20 group-hover/btn:left-0 transition-all duration-300 skew-x-[-15deg]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-zinc-500 font-black italic uppercase tracking-widest text-sm">No tournaments found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
