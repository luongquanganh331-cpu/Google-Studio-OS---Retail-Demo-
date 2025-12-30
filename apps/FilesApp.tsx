
import React from 'react';
import { Folder, FileText, Image, Music, Video, Star, Clock, ChevronRight, Search, List, Grid } from 'lucide-react';

const FilesApp: React.FC = () => {
  const folders = [
    { name: 'Documents', items: '24', icon: <Folder className="text-blue-500" /> },
    { name: 'Images', items: '152', icon: <Image className="text-purple-500" /> },
    { name: 'System Core', items: '8', icon: <Folder className="text-slate-500" /> },
    { name: 'Work', items: '12', icon: <Folder className="text-emerald-500" /> },
    { name: 'Downloads', items: '42', icon: <Folder className="text-amber-500" /> },
  ];

  return (
    <div className="h-full flex bg-black text-white">
      <div className="w-64 border-r border-white/5 flex flex-col p-6 space-y-8">
         <nav className="space-y-1">
            <NavItem icon={<Star size={18} />} label="Starred" />
            <NavItem icon={<Clock size={18} />} label="Recent" active />
            <NavItem icon={<Folder size={18} />} label="My Files" />
         </nav>
         <div className="pt-8 space-y-4">
            <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] px-3">Storage</h4>
            <div className="px-3">
               <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-blue-500 w-[65%]"></div>
               </div>
               <p className="text-[10px] text-white/40">128 GB of 512 GB used</p>
            </div>
         </div>
      </div>

      <div className="flex-1 flex flex-col">
         <div className="h-16 border-b border-white/5 flex items-center px-10 justify-between">
            <div className="flex items-center gap-4 text-white/40 text-sm">
               <span>My Files</span> <ChevronRight size={14} /> <span className="text-white font-bold">Home</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="bg-white/5 h-10 px-4 rounded-xl flex items-center gap-3 w-64 border border-white/10">
                  <Search size={16} className="text-white/20" />
                  <input type="text" placeholder="Search files..." className="bg-transparent border-none outline-none text-xs w-full" />
               </div>
               <div className="flex gap-1">
                  <button className="p-2 text-white/20 hover:text-white transition-colors"><Grid size={18} /></button>
                  <button className="p-2 text-white font-bold"><List size={18} /></button>
               </div>
            </div>
         </div>

         <div className="flex-1 overflow-auto p-10 grid grid-cols-4 gap-6 content-start">
            {folders.map((f, i) => (
               <div key={i} className="group p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="mb-6">{React.cloneElement(f.icon as React.ReactElement, { size: 32 })}</div>
                  <h4 className="font-bold text-sm mb-1">{f.name}</h4>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{f.items} Items</p>
               </div>
            ))}
            <div className="p-6 bg-white/5 rounded-3xl border border-dashed border-white/10 hover:border-blue-500/50 transition-all flex flex-col items-center justify-center text-white/20">
               <div className="mb-4">+</div>
               <span className="text-[10px] font-bold uppercase">New Folder</span>
            </div>
         </div>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active?: boolean }> = ({ icon, label, active }) => (
   <button className={`flex items-center gap-4 px-4 py-3 rounded-2xl w-full text-sm font-bold transition-all ${active ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
      {icon} {label}
   </button>
);

export default FilesApp;
