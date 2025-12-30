
import React from 'react';
import { ShoppingBag, Star, TrendingUp, Search, Download } from 'lucide-react';

const StoreApp: React.FC = () => {
  const apps = [
    { name: 'Flux Studio', cat: 'Creativity', color: 'bg-orange-500', rating: 4.8 },
    { name: 'Quantum Code', cat: 'Developer', color: 'bg-blue-600', rating: 4.9 },
    { name: 'Mindful AI', cat: 'Wellness', color: 'bg-green-500', rating: 4.7 },
    { name: 'Velocity Edit', cat: 'Video', color: 'bg-purple-600', rating: 4.6 },
    { name: 'Studio Finance', cat: 'Business', color: 'bg-emerald-500', rating: 4.9 },
    { name: 'Neuro Synth', cat: 'Music', color: 'bg-pink-600', rating: 4.5 },
  ];

  return (
    <div className="h-full bg-[#080808] flex flex-col text-white">
      <div className="p-12 pb-6 flex items-center justify-between">
         <h1 className="text-4xl font-bold tracking-tight">Studio Store</h1>
         <div className="flex items-center gap-4 bg-white/5 px-6 h-12 rounded-2xl border border-white/10 min-w-[300px]">
            <Search size={18} className="text-white/20" />
            <input type="text" placeholder="Search apps, games, AI models..." className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20" />
         </div>
      </div>

      <div className="flex-1 overflow-auto p-12 pt-0 space-y-12">
         <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
               <TrendingUp size={20} className="text-blue-400" /> Featured Highlights
            </h2>
            <div className="grid grid-cols-3 gap-6">
               <div className="col-span-2 h-64 rounded-[32px] bg-gradient-to-br from-indigo-600 to-blue-700 p-10 flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                     <ShoppingBag size={240} className="translate-x-12 -translate-y-12" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Build the Future with Gemini 3</h3>
                  <p className="text-white/60 text-lg mb-6">Developers, unlock unprecedented potential in your apps.</p>
                  <button className="bg-white text-blue-700 px-6 py-2.5 rounded-full font-bold text-sm w-fit hover:scale-105 transition-all">Get the SDK</button>
               </div>
               <div className="h-64 rounded-[32px] bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-3xl shadow-xl mb-6 flex items-center justify-center text-white"><Star size={32} /></div>
                  <h4 className="font-bold mb-1">Editors Choice</h4>
                  <p className="text-xs text-white/40">The best AI apps of 2024</p>
               </div>
            </div>
         </section>

         <section>
            <h2 className="text-xl font-bold mb-6">Trending Now</h2>
            <div className="grid grid-cols-2 gap-4">
               {apps.map((app, i) => (
                  <div key={i} className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors group">
                     <div className={`w-16 h-16 ${app.color} rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold`}>{app.name[0]}</div>
                     <div className="flex-1">
                        <h4 className="font-bold">{app.name}</h4>
                        <p className="text-xs text-white/40">{app.cat} • ★ {app.rating}</p>
                     </div>
                     <button className="p-3 bg-white/5 rounded-2xl text-white/60 group-hover:bg-blue-600 group-hover:text-white transition-all"><Download size={20} /></button>
                  </div>
               ))}
            </div>
         </section>
      </div>
    </div>
  );
};

export default StoreApp;
