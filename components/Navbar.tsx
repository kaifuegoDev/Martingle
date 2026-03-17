import React from 'react';

const Navbar = ({ active }: { active?: string }) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tournaments', href: '/tournaments' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Rewards', href: '/rewards' },
  ];

  return (
    <nav className="hidden md:block border-b border-white/5 bg-black/40 backdrop-blur-2xl sticky top-0 z-[100]">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <a href="/" className="text-2xl font-black tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            MARTINGLE
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-all hover:text-blue-400 hover:translate-y-[-1px] ${
                  active === link.name.toLowerCase() ? 'text-blue-400' : 'text-zinc-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4">
            Sign In
          </button>
          <button className="rounded-full bg-blue-600 px-6 py-2 text-sm font-bold text-white border border-blue-400/20 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95 cursor-pointer">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
