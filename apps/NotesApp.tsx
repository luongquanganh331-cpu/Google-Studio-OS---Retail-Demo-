
import React, { useState } from 'react';
import { Plus, Trash2, Search, Tag, Clock } from 'lucide-react';

const NotesApp: React.FC = () => {
  const [activeNote, setActiveNote] = useState(0);
  const notes = [
    { title: 'Project Vision', body: 'The next generation of Studio OS will focus on neural handoffs...', time: '2:30 PM', tags: ['work', 'design'] },
    { title: 'Shopping List', body: '- High-speed cable\n- 4K Monitor\n- Desk chair...', time: '11:15 AM', tags: ['personal'] },
    { title: 'Meeting Notes', body: 'Sprint planning for the Gemini integration is scheduled for next week.', time: 'Yesterday', tags: ['team'] },
  ];

  return (
    <div className="h-full flex bg-[#050505] text-white">
      <div className="w-80 border-r border-white/5 flex flex-col">
         <div className="p-6 h-16 flex items-center justify-between border-b border-white/5">
            <h2 className="font-bold">Notebook</h2>
            <button className="p-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"><Plus size={18} /></button>
         </div>
         <div className="flex-1 overflow-auto">
            {notes.map((n, i) => (
               <div 
                 key={i} 
                 onClick={() => setActiveNote(i)}
                 className={`p-6 border-b border-white/5 cursor-pointer transition-all ${activeNote === i ? 'bg-white/5' : 'hover:bg-white/2'}`}
               >
                  <h4 className="font-bold text-sm mb-2">{n.title}</h4>
                  <p className="text-xs text-white/30 truncate mb-4">{n.body}</p>
                  <div className="flex justify-between items-center">
                     <div className="flex gap-2">
                        {n.tags.map(t => <span key={t} className="text-[8px] font-bold uppercase px-2 py-0.5 bg-indigo-600/20 text-indigo-400 rounded-full">{t}</span>)}
                     </div>
                     <span className="text-[9px] text-white/20 font-bold">{n.time}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>

      <div className="flex-1 flex flex-col p-12 overflow-auto">
         <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest">
               <Clock size={12} /> Last edited {notes[activeNote].time}
            </div>
            <div className="flex gap-2">
               <button className="p-2 text-white/40 hover:text-white transition-colors"><Tag size={18} /></button>
               <button className="p-2 text-white/40 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
            </div>
         </div>
         <h1 className="text-5xl font-bold mb-8 outline-none" contentEditable>{notes[activeNote].title}</h1>
         <div className="text-lg text-white/60 leading-relaxed outline-none whitespace-pre-wrap" contentEditable>
            {notes[activeNote].body}
         </div>
      </div>
    </div>
  );
};

export default NotesApp;
